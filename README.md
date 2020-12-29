<code>&nbsp;</code><br /><br /><br /><br />

<p align="center">
  <img src="media/UoNLogo.png" />
</p>
<br />

<div align="center">
 <h1>COMP3033 Software Quality Assurance<br/>
     Workshop 03 Report
 </h1>

 <h2> Group F<br/></h2>

 <h4> Module convenor: Dr. Radu Muschevici<br/>
      Chosen Option: MariaDB Project, Flights<br/>
      Hosted domain: <a></a><br/>
      Due Date: 31 December 2020<br/>
      GitHub Repositories: https://github.com/Kellieys/sqa_cw3<br/>
</h4>

<br/>

| Name (OWA) | Student ID |
| :------- | ----: | 
| Lim Kelly | 20024694 |
| Lee Ze-Cong (efyzl1) | 20006942 |
| Yap Jun Kiat (hcyjy2) | 20093907 |
| Ling Kuok Ging (hfykl3) | 20035543 |
| Raveen A/L Pandian (kefey6rpp) | 18024425 |

</div>

<br/><br/>

---
<br/>

<div align="center">

 <h2> 1. Introduction</h2>

</div>
<br/>




<br/>

---

<div align="center">

 <h2> 2. Test Cases</h2>

</div>

### 2.1 Fullfillments of Quality Management Plan 

<div align="center">
 <h3> Implementation Checklist </h3>


 | Checkist | State |
 | :------- | ----: |
 | Has the software meet the requirements? | TBD |
 | Are test unit being used in the code ? | True |
 | Has the maintaining responsibilities delegate all the members ? | True |
 | Has mobile view been tested? | TBD |

</div>

 </br> 


### 2.2 Outcomes of Unit Testing 
#### 2.1.1 Functional and Structure (White Box)

<p> The unit testing concerns with the correctness of individual function and module. In this flight project the unit testing will focuses on three levels:</p>

#### Input functions:
* Origin
* Destination
* Airiline
* From
* To
* Month
* Day 

<h4> Test Case 1 </h4>
<p>* where x = all IATA code or airport names in database</p>

<div>

if (input = x) {
  dropdown = x;
} <br/>
else { dropdown = empty; }

</div>


<h4> Test Case 2 </h4>
<p>* where z = Click on input field</p>
<p>* where y = empty input</p>
<p>* where x = all IATA code or airport names in database</p>

<div>

if ( z = y ) {
  dropdown = x;
} <br/>
else { dropdown = not shown; }

</div>


<h4> Test Case 3 </h4>
<p>* where x = all IATA code or airline names in database</p>

<div>

if (input = x) {
  dropdown = x;
} <br/>
else { dropdown = empty; }

</div>


<h4> Test Case 4 </h4>
<p>* where z = Click on input field</p>
<p>* where y = empty input</p>
<p>* where x = all IATA code or airline names in database</p>

<div>

if ( z = y ) {
  dropdown = x;
} <br/>
else { dropdown = not shown; }

</div>
 <br/>

| ID | Test Item | Scenario | Input | Expected Output | Test Factor | Pass or Fail |
| :------- | ----: | ----: | ----: | ----: | ----: | ----: |
| 1 | Input Origin | Test Case 1 | Chicago O'Hare International Aiport,  ORD, C, c, Chi, chi | Chicago O'Hare International Aiport | Correctness | |
| 2 | Input Destination | Test Case 1 | Wendover Airport, Wen, W, w, we, E, en | Wendover Airport | Correctness | |
| 3 | Input Origin & Destination | Test Case 2 | OnClick | Show all dropdown | Correctness | |
| 4 | Input Airline | Test Case 3 | United Air Lines Inc. U, u, UA, ua  | United Air Lines Inc. | Correctness | |
| 5 | Input Airline | Test Case 4 | OnClick | Show all dropdown | Correctness | |


#### Output functions:
* Search Button
* Sorting Button
* Pie Chart and Bar Graph

<h4> Test Case 1 </h4>
<p>Inspect className="button-search" onClick={this.executeSearch} in FlightFilter.js</p>

<h4> Test Case 2 </h4>
<p>Inspect SortingState component in AirlinesFlightsInfo.js</p>

<h4> Test Case 3 </h4>
<p>Inspect BarChart and PieChart component in AirlineFlightsInfo.js</p>
</br>

| ID | Test Item | Scenario | Expected Outcome | Test Factor | Pass or Fail |
| :------- | ----: | ----: | ----: | ----: | ----: | 
| 1 | Search Button's Triggers | Test Case 1 | executeSearch() function is called | Correctness |  |
| 2 | Sorting Button Clickable | Test Case 2 | sortingSaate component is called | Correctness |  |
| 3 | Visibility of Pie Chart and Bar Chart | Test Case 3 | PieChart and BarChart components  | Correctness |  |
| 4 | Data of Pie Chart and Bar Chart | Test Case 3 | PieChart and BarChart components | Correctness |  |

---

### 3.2 Integration Testing 
#### 3.2.1 Size & Entity (White Box)
<p>In this section is to inspect the API level and database level. Such as the connection and communication of API retrieing  the correct data from database according to the input </p>

<h4> Test Case 1 </h4>
<p>Launch website and establish connection to MariaDB</p>

<h4> Test Case 2 </h4>
<p>Click on "Origin" dropdown menu</p>

<h4> Test Case 3 </h4>
<p>Click on "Destination" dropdown menu</p>

<h4> Test Case 4 </h4>
<p>Click on "Airline" dropdown menu</p>

<h4> Test Case 5 </h4>
<p>Input related data and click on search button</p>
</br>

| ID | Test Item | Secnario | Input | Expected Outcome | Test Factor | Pass or Fail
| :------- | ----: | ----: | ----: | ----: | ----: | ----: |
| 1 | Check the connection with database | Test Case 1 | http://172.104.176.214:3000/ | Connection is established successfully | Correctness |  |
| 2 | Get Airports data | Test Case 2 | onClick | Display all airports on screen | Correctness|
| 3 | Get Airports data | Test Case 3 | onClick | Display all airports on screen | Correctness|
| 4 | Get Airlines data | Test Case 4 | onClick | Display all airlines on screen | Correctness|
| 5 | Obtain data from user inputs | Test Case 5 | onClick | Display flight's data, graphs and charts related to the user inputs | Correctness|


<br/>

### 3.3 System Testing (Black Box)

<p> This section will use black box testing to test the system as a whole. The test is is design according to the functional and non-functional requirements that are listed in the appendix section. </p>


<h4> Mobile Compatibility Testing </h4>
<h4> Test Case 1 </h4>
<p> Launch the website on a mobile device and check if the layout of the UI is out of bounds of the mobile device's screen size </p>

<h4> Test Case 2 </h4>
<p> Launch the website on a mobile device and press on the search button after all required input have been selected. The illustration and legends of the graph of delay type and time should be shown clearly. </p>

<h4> Test Case 3 </h4>
<p> Launch the website on a mobile device and press on the search button after all required input have been selected. The illustration and legends of the graph should be interactable to show the detailed numeric figures </p>

</br>

| ID | Test Item | Scenario | Input | Expected Output | Test Factor | Pass or Fail|
| :------- | ----: | ----: | ----: | ----: | ----: | ----: |
| 1 | Layout of the webpage should be within the size of the mobile device's screen | Test Case 1 | On View | Webpage layout including the data input section, title of the page, the search button and the table should be within the size of the mobile device screen | Correctness |  | 
| 2 | Graph of delay type and time should be shown clearly. | Test Case 2 | On View | The graph of delay type or delay time either in vertical or horizontal screen orientation should be shown clearly without any overlap or overflow | Usability |  | 
| 3 | Interactability of graphs and charts | Test Case 3 | On Press | Exact numeric figures should be shown when pressed on a specific quadrant/bar | Usability |  | 

---


####  User Experience Testing (UX) 
<h4> Test Case 1 </h4>
<p> Input any character in the input field </p>

<h4> Test case 2 </h4>
<p> Click the submit button on the input section without all required input filled </p>

<h4> Test case 3 </h4>
<p> After all required input have been selected, press on the search button and inspect the time required for data to be reflected </p>

<h4> Test case 4 </h4>
<p> After all required input have been selected, press on the search button and inspect if there's any visual hint of feedback such as a loading spinner</p>

</br>

| ID | Test Item | Scenario | Input | Expected Output | Test Factor | True or False |
| :------- | ----: | ----: | ----: | ----: | ----: | ----: |
| 1 | Error handling on each input field | Test case 1 | alphabets(a-z), numbers(1-9), symbols (i.e. !, @, #, etc.)| Error messages specifying on whichever input should be shown if the respective field contains invalid input | Correctness, Usability |  |
| 2 | Error handling on required input fields on click search  | Test case 2 | On Click | An error message should be presented to the user if any required field has not been filled | Correctness, Usability |  |  
| 3 | Time required for analytic data to be reflected | Test case 3 | On Click | The expected time for analytic data such as the tables and charts should be less than 20 seconds or less | Correctness, Reliability |  | 
| 4 | Visual feedback during the request and fetching of data | Test case 4 | On Click | A loading animation should be presented on the screen as a visual representation of the process of data fetching | Usability |  |
</br>

<h4> Flight Web Interface Testing (GUI) </h4>

<h4> Test Case 1 </h4>
<p> View Search button alignment with different screen sizes. </p>

<h4> Test Case 2 </h4>
<p> Click arrow button to sort the table based on the title. </p>

<h4> Test Case 3 </h4>
<p> Text and images resize accordingly when user resize browser. </p>

<h4> Test Case 4 </h4>
<p> Select same origin and destination. </p>
 
<h4> Test Case 5 </h4>
<p> Hover on Pie or bar chart to view the data in a small box.  </p>

<h4> Test case 6 </h4>
<p> Search button is pressed </p>
</br>

| ID | Test Item | Scenario | Input | Expected Output | Test Factor | Pass or Fail |
| :------- | ----: | ----: | ----: | ----: | ----: | ----: |
| 1 | Search button alignment on screen resizing | Test case 1 | On View | On resize, the search button aligns accordingly | Correctness |  |
| 2 | Click arrow button to sort | Test case 2 | On Click | The data of flights on table, appear in that particular sorting order | Correctness |  |  
| 3 | Text and image size with various  window sizes | Test case 3 | On View | On changing screen size, text and images changes size accordingly | Correctness |  | 
| 4 | Select same destination as origin | Test case 4 | On Click | Error message should pop-up | Correctness |  |
| 5 | Hover mouse over pie chart | Test case 5 | On View | On hovering mouse, the data should display accordingly| Correctness |  | 
| 6 | A table should be generated for flight details when search button is pressed | Test case 6 | On Click | Data will show accurately if data is available and destination is different from origin. | Usability |  |

---

## Appendix

### 1. Software Requirements
#### Functional Requirements
**FR1** The system shall display analytics that is customized based on the user's input of flight origin, flight destination, airline of the flight, and date of flight.

**FR2** The system shall support inputs that must perform the following searches in each input field: 
- Finding the exact match of the phrase
- Finding the abbreviation of the phrase on input that support it

**FR3** The system shall display "No options" on each input field if the input is not valid

**FR4** The system shall display error messages if the required input fields are empty

**FR5** The system shall perform and display the analytics on the following comparisons:

- Airlines statistics such as total flights, market share, airline delays and more on the same flight route
- Each type of reasoning of flight delay on the selected airline from the airline input field
- Each type of reasoning of flight delay between the selected airline and the average of all airlines

**FR6** User shall be able to sort the comparison table either in an alphabetical order or in a numerical order

#### Non-Functional Requirements
**NFR1** The web application must be accessible in a single window on a computer or mobile device. 

**NFR2** The web application shall only be functional with an internet connection.

**NFR3** The web application shall be run on a relatively new web browser: Chrome 63 or higher, Edge 15 or higher, Firefox 57 or higher, Safari 11 or higher, Mobile Chrome 63 or higher, Mobile Safari 11 or higher

**NFR4** Analytics data shall reflect on the user interface with an average response time that is less than 8 seconds. The maximum response time should not be greater than 20 seconds.

---
</br>
