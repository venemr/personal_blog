---
path: "/blog/a-beginners-guide-to-build-a-full-stack-web-app"
date: "2020-11-08"
title: "A Beginner's Guide to Build a Full Stack Web App" 
author: "Mengru Fu"
updated_on: "2020-11-12"
featuredImage: "/your_name.jpg"
tags: "Web Development"
---

In this blog, I would like to talk about how to build a full stack web application to generate dynamic data reports at the front-end HTML page by querying the MySQL database from the back-end Flask server as a beginner. 

### Set up Flask Server
Flask is a lightweight python-based web application framework, and it is super straight forward to get it installed on your local machine by running the following command: 

``` 
$ pip install flask
```
<br>

### Structure of a Basic Flask Web App
<p>The folder structure of a basic flask web application will look like the following: </p>
<img src="/folder_structure.jpg" alt="folder structure img">

* #### app.py
<p>The app.py file is the routing file where all pages of the web application will be directed from here. </p>
<br>

* #### service folder
<p>The service folder contains schema.sql and sql_client.py file and is mainly used to provide the database service, by constructing the database schemas and generating data tables.</p>
<br>

* #### static folder
<p>The static folder contains all the static files, and it can have any number of subfolders, such as scripts, styles, images and etc.</p>
<br>

* #### templates folder
<p>The templates folder contains all the HTML files.</p>

Within app.py, you can make Flask return an HTML template or a JSON object, and you'll need to import SqlClient class to enable the database querying. 

```python 
from flask import Flask, jsonify, render_template, request, json
from service.db.sql_client import SqlClient
application = Flask(__name__)

@app.route('/')
def hello_word():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
```
<br>

To run the web application on your localhost, you can run the following command, and then open the url in the browser to test your web app:   
```
$ python app.py
```
<br>

### Connect to MySQL using Docker 
MySQL is an open source relational database management system (RDBMS). Instead of directly downloading and installing MySQL server on your local machine, you can simplify the process by pulling the docker image of MySQL and start the MySQL instance using docker.  

```
$ docker pull mysql
$ docker run --name <container-name> -e MYSQL_ROOT_PASSWORD=<my-secret-pw> -d mysql
```
<br>
With the docker running, in order to start a bash shell in a docker container, execute the "docker exec" command with the "-it" option and specify the container ID as well as the path to the bash shell. 

```
# find the docker container id 
$ docker ps 

# enter the mysql docker container
$ docker exec -it <container-id> /bin/bash
``` 
<br>
When executing the command above, you will have an interactive bash termincal where you can execute all the commands you want. From here you can enter the MySql instance in which you can run sql query commands directly: 

```
$ mysql -uroot -p<my-secret-pw>
```
<br>
Within MySQL instance, you may also want to change the user privileges to ensure a full access to MySQL database tables: 

```
mysql> GRANT ALL ON *.* TO 'root'@'%';
mysql> FLUSH PRIVILEGES;
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER;
mysql> ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
mysql> FLUSH PRIVILEGES;
mysql> EXIT;
```
<br>

### Create a SqlClient class Using Python

After ensuring a direct access to MySQL database, the next step is to use a python package called "pymysql" to query the MySQL database by running python script.

A simplified version of SqlClient python class can be defined as follows: 

```python
import pymysql 

class SqlClient: 

    def __init__(self):
        self.db = pymysql.connect(host="127.0.0.1", port=3306, user="root", password="<your-secret-pw>")
        self.cursor = db.cursor()

    def fetch_data_with_command(self, command):
        self.cursor.execute(command)
        return self.cursor.fetchall()

```
<br>

#:confetti_ball:#:confetti_ball:#:confetti_ball: <b>Now we have everything set up! Here shows the demo of how the dynamic report UI looks like!</b> #:clap:#:clap:#:clap:
<br>

![store report gif](/store_report.gif)

As many of you might know, jQuery is a JavaScript library, which allows you to select DOM elements using the CSS selectors syntax. To me, jQuery works as a bridge that connects the two sides and plays its role as a middleman who actively communicates between the front end and the back end service.

Although jQuery has became much less popular in recent years, it is still playing a big part in the JavaScript ecosystem and has been used by a lot of people, and I personally found it is very user friendly and super simple to pick up, especially if you are new to web development and are looking for a quick way to learn and build an interactive web application. I learned jQuery from the ground up in a week and was amazed by how powerful the jQuery functions are, and I managed to build my first (super naive) full-stack web application by reading the API documentation. 

In the following part, I would like to talk through some handy use cases with the implementation details to generate dynamic reports.    

### Use Case 1: Populate a Bootstrap Table by Querying MySQL Database

* <h4>report.js</h4> 

In JavaScript, you can use bootstrapTable() method to populate a table with <b>columns</b> specified, by querying data through an <b>url</b> to get the JSON object from the backend Flask server. The bootstrapTable() method is powerful because it allows many customizeable table options, which can be found in this [Bootstrap API Doc](https://bootstrap-table-docs3.wenzhixin.net.cn/documentation/).

```javascript
$("#report1-table1").bootstrapTable({
    url: '/api/Report1-Table1',
    pagination: true,
    pageList: [10, 25, 50, 100],
    pageSize: 10,
    pageNumber: 1,
    search: true,
    columns: [{
        field: 'ManufacturerName',
        title: 'Manufacturer Name'
    }, {
        field: 'ProductCount',
        title: 'Product Count'
    }, {
        field: 'AvgRetailPrice',
        title: 'Avg Retail Price'
    }, {
        field: 'MinRetailPrice',
        title: 'Min Retail Price'
    }, {
        field: 'MaxRetailPrice',
        title: 'Max Retail Price'
    }]
});
```
<br>

* <h4>app.py</h4> 
<p>In app.py, it demonstrates how to query data from MySQL database using python scripts, and how to return a JSON object storing the data and to make it available for the Bootstrap table above.</p>

```python 
@app.route('/api/Report1-Table1', methods=['GET', 'POST'])
def get_report1_table1():
    # GET request
    if request.method == 'GET':
        result_sql = sql_client.fetch_data_with_command("SELECT m.manufacturer_name AS ManufacturerName,  count(p.PID) AS ProductCount,  round(avg(p.retail_price),2) AS AvgRetailPrice,  min(p.retail_price) AS MinRetailPrice, max(p.retail_price) AS MaxRetailPrice FROM cs6400.Manufacturer m  INNER JOIN cs6400.Product p  ON m.manufacturer_name = p.manufacturer_name GROUP BY m.manufacturer_name ORDER BY avg(p.retail_price) DESC LIMIT 100;")
        result_to_dic = [dict([("ManufacturerName", ManufacturerName), ("ProductCount", ProductCount), ("AvgRetailPrice", AvgRetailPrice), ("MinRetailPrice", MinRetailPrice), ("MaxRetailPrice", MaxRetailPrice)]) for ManufacturerName, ProductCount, AvgRetailPrice, MinRetailPrice, MaxRetailPrice in result_sql]
        return jsonify(result_to_dic)
    # POST request
    if request.method == 'POST':
        print(request.get_json()) # parse as JSON
        return 'Successs', 200
```
<br>

* <h4>report.html</h4> 
<p>Noted that since the columns have been specified in the jQuery, you will only need to specify the table id in the HTML table element.</p>

```html
<table id='report1-table1'><table>
```
<br>

### Use Case 2: Create a Custom Select Box using Data from Backend

In Use Case 2, the goal is to create a select box by presenting all the existing manufacturers from the database in the dropdown menu selections. 

* <h4>app.py</h4> 
<p>In the Flask server, query the database and generate a full unique list of manufacturers' names and return as a JSON object to make it available for jQuery to get the information: </p>

```Python
@app.route('/api/Report1-ManufacturerList', methods=['GET', 'POST'])
def get_report1_manufacturerlist():
    # GET request
    if request.method == 'GET':
        result_sql = sql_client.fetch_data_with_command("SELECT DISTINCT manufacturer_name FROM cs6400.Manufacturer;")
        result_to_dic = [dict([("manufacturer_name", manufacturer_name)]) for manufacturer_name in result_sql]
        return jsonify(result_to_dic)
    # POST request
    if request.method == 'POST':
        print(request.get_json()) # parse as JSON
        return 'Successs', 200
```
<br>

* <h4>report.js</h4>
<p>In JavaScript, use getJSON function with a for loop (each function) to generate each selection option by transforming the JSON object from the backend server: </p>

```javascript
createManufacturerList('Manufacturer');

function createManufacturerList(id) {
    var manufacturer_list = '';
    $.getJSON("/api/Report1-ManufacturerList", function(data) {
        manufacturer_list += '<option value="">Select '+ id + '</option>';
        $.each(data, function(key, val) {
            manufacturer_list += '<option value="' + key + '">' + val.manufacturer_name + '</option>';
        });
        $('#report1-manufacturerlist').html(manufacturer_list); 
    });
}
```
<br>

* <h4>report.html</h4> 
<p>In HTML page, make sure the element id matches the naming in the getJSON function above: </p> 

```html
<select id='report1-manufacturerlist'>
    <option value="">Select Manufacturer</option>
</select>
```
<br>

### Use Case 3: Generate a Filtered Bootstrap Table Based on User Selection

In Use Case 3, the goal is to generate a filtered report which only returns the result for a specific manufacturer based on the user selection, and the process will involve 5 steps: 
1. Get the user selected manufacturer name from the HTML page based on a user click; 
2. Send the user selected manufacturer name to the backend; 
3. Run a custom query in database to return the filtered output and store the result in JSON object; 
4. Send back the JSON object from backend to frontend; 
5. Present the JSON object in a Bootstrap Table

Initially I had no clue of how to handle this situation because it sounds very complicated, until I found the magic function AJAX and it completely blows my mind. #:bowtie: 

* <h4>report.js</h4>
<p>In JavaScript, use "on change" function to capture the selected manufacturer name and return it as a dictionary; then use AJAX function to post the JSON string object to the backend -- if succeeded, return the JSON object from the backend to the frontend, and present the returned object in a Bootstrap table. </p>
<p>It is worth mentioning to use "load" method to ensure that the Bootstrap table is reloaded each time with a new user selection, and the old rows from the previous Bootstrap table will be removed.</p>

```javascript
//hide table 2, view detail button, table 3 by default
$('#report1-table2').hide();
$('#report1-viewdetail').hide();
$('#report1-table3').hide();

$("#report1-manufacturerlist").change(function(){
    var selected_manufacturer = $(this).children("option:selected").text(); 
        
    selectedManufacturerData = {"selected_manufacturer": selected_manufacturer};

    //show table2 result
    function renderReport1Table2(){
        $.ajax({
            url: "/api/Report1-Table2",  
            type: "POST", 
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(selectedManufacturerData),
            dataType: 'json',
            success: function(result){
                if (result.length == 0){
                    $('#report1-table2').hide();
                    $('#report1-viewdetail').hide();
                    $('#report1-table3').hide();
                }else{
                    $('#report1-table2').show();
                    $('#report1-table2').bootstrapTable('load', result);
                    $('#report1-viewdetail').show();
                    $('#report1-table3').hide();
                }
                    
            }, 
            error: function(){
                alert("ajax post failed");
            }
        });
    }
    renderReport1Table2();
});
```
<br>

* <h4>app.py</h4>
<p>In the Flask server, parse in the selectedManufacturer as a parameter when executing the SQL query, and the returned JSON object will be sent back to the front end via AJAX in this case.</p>

```python 
@app.route('/api/Report1-Table2', methods=['GET', 'POST'])
def get_report1_table2(): 
    if request.method == 'POST':
        selectedManufacturer = request.get_json()['selected_manufacturer']
        result_sql = sql_client.fetch_data_with_command(("SELECT m.manufacturer_name AS ManufacturerName, m.max_discount AS MaxDiscount FROM cs6400.Manufacturer m WHERE m.manufacturer_name = '%s'")%(selectedManufacturer))
        result_to_dic = [dict([("ManufacturerName", ManufacturerName), ('MaxDiscount', MaxDiscount)]) for ManufacturerName, MaxDiscount in result_sql]
        return jsonify(result_to_dic)
```
<br>

* <h4>report.html</h4>
   <p>To implement the "load" method in Bootstrap Table, we need to ensure that only the data by itself is parsed in the bootstrapTable() function, without column names specified. Therefore, we have to make a corresponding change of the table element in HTML as following. </p>

   The column names will be specified in table header elements in HTML (instead of in bootstrapTable() in Use Case 1) and we have to add the data-toggle option in the table element to make it working based on [Usage API doc](https://bootstrap-table.com/docs/getting-started/usage/).

   <p>Since the column names are specified in HTML, by default an empty table with column names specified will be shown upon the page is rendered. As a workaround, we can use .hide() function in JavaScript to hide the empty columns when the HTML page is rendered for the first time (Stated in the first code block in report.js), and make the table show again by using .show() when an non-empty JSON object is returned. </p>

```html
<table id='report1-table2' data-toggle="table">
    <thead>
        <tr>
          <th data-field='ManufacturerName'>Manufacturer Name</th>
          <th data-field='MaxDiscount'>Max Discount</th>
        </tr>
    </thead>
</table>
```
<br>

### Recap 
I personally found it's very interesting experience to build a full stack web application from scratch, and I enjoy the process of exploring new tools and languages. I believe in learning-by-doing, but admittedly, I did spend a lot of time googling things out and trying to understand every single pieces to make things working, which is why I wanted to write this blog post to compile what I've learned during the process and to present some common use cases that a new web developer might encounter but have no clue of how to tackle them in the first place. #:beers:
<br>
<br>
<br>