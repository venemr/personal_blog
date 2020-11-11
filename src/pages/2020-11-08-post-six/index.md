---
path: "/blog/a-beginners-guide-to-build-a-full-stack-web-app"
date: "2020-11-08"
title: "A Beginner's Guide to Build a Full Stack Web App" 
author: "Mengru Fu"
updated_on: "2020-11-11"
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

* #### service folder
<p>The service folder contains schema.sql and sql_client.py file and is mainly used to provide the database service, by constructing the database schemas and generating data tables.</p>

* #### static folder
<p>The static folder contains all the static files, and it can have any number of subfolders, such as javascripts file, styles, images and etc.</p>

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
    sql_client.init_database()
    app.run(debug=True)
```
<br>

### Connect to MySQL using Docker 
MySQL is an open source relational database management system (RDBMS). Instead of directly downloading MySQL server, we pull the docker image of MySQL and start MySQL instance using docker.  

```
$ docker pull mysql
$ docker run --name <container-name> -e MYSQL_ROOT_PASSWORD=<my-secret-pw> -d mysql
```

You can enter the mysql docker container by running the following command: 

```
# find the docker container id 
$ docker ps 

# enter the mysql docker container
$ docker exec -it <container-id> /bin/bash
``` 

Within the docker container, enter MySql instance in which you can run sql queries directly: 

```
$ mysql -uroot -p<my-secret-pw>
```

Within MySQL instance, you may also want to change the user privileges to ensure a full access to MySQL database: 

```
mysql> GRANT ALL ON *.* TO 'root'@'%';
mysql> FLUSH PRIVILEGES;
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER;
mysql> ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
mysql> FLUSH PRIVILEGES;
mysql> exit;
```
<br>

### Create a SqlClient class Using Python

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

As many of you might know, jQuery is a JavaScript library, which allows you to select DOM elements using the CSS selectors syntax. To me, jQuery works as a bridge that connects the two sides between the front end and the back end. 

Although jQuery has became much less popular in recent years, I still want to talk about it since I found it is very user friendly and super simple to pick up, especially if you are new to web developement and is looking for a quick way to learn and build an interactive web application. I learned jQuery from the ground up in a week and was amazed by how powerful the jQuery functions are, and I managed to build my first (super naive) full-stack web application by reading the API documentation. 

In the following part, I would like to talk through some of the use cases with implementation details to generate dynamic reports using jQuery.     

### Use Case 1: Populate a Bootstrap Table by Query MySQL Database

* <h4>report.js</h4> 

In Javascript, generate a bootstrap table by querying data from the JSON object in the backend Flask server, with specification of url and columns as core properties, in addition to more customizeable table options to be found in this [Bootstrap API Doc](https://bootstrap-table-docs3.wenzhixin.net.cn/documentation/).

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

* <h4>report.html</h4> 
<p>Noted that since the columns have been specified in the jQuery, you will only need to specify the table id in the HTML table element.</p>

```html
<table id='report1-table1'><table>
```
<br>

### Use Case 2: Create a Custom Select Box using Data from Backend

In Use Case 2, my goal is to create a select box by populating all the manufacturers' names in the dropdown menu selections. 

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
<p>In Javascript, use getJSON function with a for loop (each function) to generate each selection option by transforming the JSON object from the backend server: </p>

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

In Use Case 3, the goal is to generate a filtered report which only returns the result for a specific manufacturer based on the user selection, and the process will involve 4 steps: 
1. Get the user selected manufacturer name from the HTML page; 
2. Send the user selected manufacturer name to the backend; 
3. Run custom query in database to return the desired output in JSON object; 
4. Send back the JSON object from backend to frontend 

Initially I had no clue of how to handle this situation, until I found the magic function AJAX and it completely blows my mind. #:bowtie: 

* <h4>report.js</h4>
<p>In Javascript, use "on change" function to capture the selected manufacturer name and return it as a dictionary; then use AJAX function to post the JSON string object to the backend -- if succeeded, return the JSON object from the backend to the frontend, and present the returned object in a bootstrap table. </p>
<p>It is worth mentioning we use "load" method to ensure that the bootstrap table is reloaded each time with a new selection, and the old rows from the previous bootstrap table result will be removed.</p>

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
<p>In the Flask server, we parse in the selectedManufacturer as a parameter when executing the SQL query, and the returned JSON object will be sent back to the front-end service via AJAX in this case.</p>

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
<p>To implement the "load" method in Bootstrap Table, we need to ensure that only the data by itself is parsed in the BootstrapTable function, without column names specified. Therefore, we have to make a corresponding change of the table element in HTML as following. </p>
<p>The column names are specified in table header elements and we have to add the data-toggle option in the table element to make it working based on [Usage API doc](https://bootstrap-table.com/docs/getting-started/usage/). </p>
<p>Since the column names are specified in HTML, by default an empty table with column names specified will be shown upon the page is rendered. As a workaround, we can use .hide() function in JavaScript to hide the empty columns when the HTML page is rendered for the first time.</p>

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
<br>
<br>