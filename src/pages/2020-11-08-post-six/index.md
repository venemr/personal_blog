---
path: "/blog/beginners-guide-to-build-a-full-stack-web-app"
date: "2020-11-08"
title: "Beginner's Guide to Build a Full Stack Web App" 
author: "Mengru Fu"
updated_on: "2020-11-10"
featuredImage: "/your_name.jpg"
tags: "Web Development"
---

In this blog, I would like to talk about how to build a full stack web application to generate dynamic data reports at the front-end HTML page by querying the MySQL database from the back-end Flask server as a beginner. 

As many of you might have known, jQuery is a JavaScript library, which allows you to select DOM elements using the CSS selectors syntax. jQuery used to own a dominant position in web development around 2000s but is getting less popular and gradually replaced by ReactJs, AngularJs and VueJs in recent years. 

But I still want to talk about jQuery since I found it is very user friendly and super simple to pick up, especially if you are new to web developement and is looking for a quick way to learn and build an interactive web application. I learned jQuery from the ground up in a week and was amazed by the powerful functions in jQuery, and I managed to build my first (super naive) full-stack web application by reading the API documentation.  

![store report gif](/store_report.gif)

In the following part, I would like to talk through some of the use cases to generate dynamic reports based on user selections.    

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

* <h4>report.html</h4> 
<p>In HTML page, make sure the element id matches the naming in the getJSON function above: </p> 

```html
<select id='report1-manufacturerlist'>
    <option value="">Select Manufacturer</option>
</select>
```
<br>

### Use Case 3: Generate a Bootstrap Table Based on User Selected Manufacturer

In Use Case 3, the process will involve 4 steps: 
1. Get the user selected manufacturer name from the HTML page; 
2. Send the user selected manufacturer name to the backend; 
3. Run custom query in database to return the desired output in JSON object; 
4. Send back the JSON object from backend to frontend 

Initially I had no clue of how to handle this situation, until I found the magic function AJAX and it blows my mind. #:bowtie: 

* <h4>report.js</h4>
<p>In Javascript, use "on change" function to capture the selected manufacturer name and return it as a dictionary; then use AJAX function to post the JSON string object to the backend -- if succeeded, return the JSON object from the backend to the frontend, and present in a bootstrap table. It is worth mentioning we use "load" method to ensure that the bootstrap table is reloaded each time with a new selection, and the old rows will be removed.</p>

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

* <h4>report.html</h4>

To implement the "load" method in Bootstrap Table, we have to change the table element in HTML as follows. Noted that the column names are specified and we have added the data-toggle in the table element based on [Usage API doc](https://bootstrap-table.com/docs/getting-started/usage/). Since the columns are specified in HTML, we have to use .hide() function in JavaScript to hide the empty columns by default. 

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