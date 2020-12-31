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
      Hosted domain: <a> http://192.46.229.254:3000/</a><br/>
      Presentation Link:<a></a><br/>
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

## 1 Introduction

In this report, the test cases will be executed to examine whether the software has meets it requirements. The strategies used for testing is a bottom-to-top technique which test from unit, following with integration and fianlly, testing the whole syetem. The section below record the test result as well as document the bug and problem encounter thorughout the project.


---

## 2.1 Unit Testing
### 2.1.1 Functional and Structure (White Box)

#### Input functions;

<br/>
Test Case 1:
<p>Input Origin</p>
if (handleOriginChange) {<br/>
console.log("this.state.selectedOriginOption)}<br/>
<img src="media/handleorigin.png"></br>

<br/>
Test Case 2:
<p>Input Destination</p>
if (handleDestinationChange) {<br/>
console.log("this.state.selectedDestinationOption)}<br/>
<img src="media/handledestination.png"></br>

<br/>
Test Case 3:
<p> Input Airline</p>
if (handleAirlineChange) {<br/>
console.log("this.state.selectedAirlineOption)}<br/>
<img src="media/handleairline.png"></br>

<br/>
Test Case 4:
<p>Input From</p>
if (handleYearFromChange) {<br/>
console.log("this.state.selectedYearFromOption)}<br/>
<img src="media/handlefrom.png"></br>

<br/>
Test Case 5:
<p>Input To</p>
if (handleYearToChange) {<br/>
console.log("this.state.selectedYearToOption)}<br/>
<img src="media/handleto.png"></br>

<br/>
Test Case 6:
<p>Input Month</p>
if (handleMonthChange) {<br/>
console.log("this.state.selectedMonthOption)}<br/>
<img src="media/handlemonth.png"></br>

<br/>
Test Case 7:
<p>Input Day</p>
if (handleDayChange) {<br/>
console.log("this.state.selectedDayOption)}<br/>
<img src="media/handleday.png"></br>


| ID | Test Item | Scenario | Input | Expected Output | Test Factor | Pass or Fail |
| :------- | ----: | ----: | ----: | ----: | ----: | ----: |
| 1 | Input Origin | Test Case 1 | onClick | Console log "state" of current user's input | Correctness | Pass |
| 2 | Input Destination | Test Case 2 | onClick | Console log "state" of current user's input | Correctness |Pass |
| 3 | Input Airline | Test Case 3 | OnClick |Console log "state" of current user's input | Correctness | Pass |
| 4 | Input From | Test Case 4 |onClick |Console log "state" of current user's input | Correctness | Pass |
| 5 | Input To | Test Case 5 | OnClick | Console log "state" of current user's input | Correctness | Pass |
| 6 | Input Month | Test Case 6 | OnClick | Console log "state" of current user's input | Correctness | Pass |
| 7 | Input Day | Test Case 7 | OnClick | Console log "state" of current user's input| Correctness | Pass |

</br>
<h3>Results of test cases:</h3>
Test case 1:</br>
<img src="media/resulthandleorigin.png"></br>
</br>Test case 2:
<img src="media/resulthandledestination.png"></br>
</br>Test case 3:
<img src="media/resulthandleairline.png"></br>
</br>Test case 4:
<img src="media/resulthandlefrom.png"></br>
</br>Test case 5:
<img src="media/resulthandleto.png"></br>
</br>Test case 6:
<img src="media/resulthandlemonth.png"></br>
</br>Test case 7:
<img src="media/resulthandleday.png"></br>

<br/>

#### Output functions;

<br/>
Test Case 1:
<p> Search Button</p>
Using JEST testing library<br/>
<img src="media/testbuttona.png"></br>
<img src="media/testbuttonb.png"></br>

<br/>
Test Case 2:
<p>Output table</p>
Console the data that will be reflect in the data<br/>
<img src="media/testtable.png"></br>

<br/>
Test Case 3:
<p> Render and data of Pie Chart and Bar Chart </p>
Added testVisibility state and called in PieChart and BarChart components to test.<br/>
<p>Added state</P>
<img src="media/testcharta.png"></br>
<p>Console in PieChart Component</P>
<img src="media/testchartb.png"></br>
<p>Console in Bar Chart Component</P>
<img src="media/testchartc.png"></br>


| ID | Test Item | Scenario | Input | Expected Outcome | Test Factor | Pass or Fail |
| :------- | ----: | ----: | ----: | ----: | ----: | ----: |
| 1 | Search Button | Test Case 1 | Run npm test | Jest testing library Pass | Correctness | Pass  |
| 2 | Output table | Test Case 2 | N/A | Console log "Data in table"  | Correctness | Pass |
| 3 | Render of Pie Chart and Bar Chart | Test Case 3 | N/A | Console log "Chart is showing" | Correctness | Pass  |
| 4 | Data of Pie Chart and Bar Chart | Test Case 3 | N/A | Console log "Chart is showing" | Correctness | Pass |

</br>
<h3>Results of test cases:</h3>
Test case 1:</br>
Result of JEST
<img src="media/resultbuttona.png"></br>
Snapshot generated by JEST
<img src="media/resultbuttonb.png"></br>
</br>Test case 2:
<img src="media/resulttable.png"></br>
</br>Test case 3 and 4:
<img src="media/resultchart.png"></br>

</br>
<h3>Conclusion of unit testing:</h3>
All of the test case in unit testing had passed the test case individually which means that in the integration testing, where each unit merge together, there should be no issue with the invidually components. If there are problem found in integration testing, it will most likelty be the issue of merging the individual component.

---

## 2.2 Integration Testing 
### 2.2.1 Size & Entity (White Box)

<br/>
Test Case 1:
<p>Launch website</p>
if (connection successful) {<br/>
console.log("Get all airlines",body) }<br/>
<img src="media/getairlines.png"></br>

<br/>
Test Case 2:
<p>Launch website</p>
if (connection successful) {<br/>
console.log("Get all airports",body) }<br/>
<img src="media/getairports.png"></br>

<br/>
Test case 3:
<p>Input search query and click on search button</p>
if (connection successful) {<br/>
console.log("Search button clicked",body) }<br/>
<img src="media/searchbutton.png"></br>


<br/>
Test Case 4:
<p>After clicking on the search button</p>
if (connection successful) {<br/>
console.log("Get flights stats", body) }<br/>
<img src="media/getflightstats.png"></br>

<br/>
Test Case 5:
<p>After clicking on the search button</p>
if (connection successful) {<br/>
console.log("Get airline delays", body) }<br/>
<img src="media/getairlinedelays.png"></br>

<br/>
Test Case 6:
<p>After clicking on the search button</p>
if (connection successful) {<br/>
console.log("Get airline delays", body) }<br/>
<img src="media/getdelaycomparison.png"></br>


| ID | Test Items | Secnario | Input | Expexted Outcome | Test Factor | Pass or Fail
| :------- | ----: | ----: | ----: | ----: | ----: | ----: |
| 1 | Check the connection with database(Airports' data) | Test Case 1 | http://172.104.176.214:3000/ | Console log "Get all airports" and all airports | Correctness | Pass |
| 2 | Check the connection with database(Airlines' data) | Test Case 2 | http://172.104.176.214:3000/ | Console log "Get all airlines" and all airlines | Correctness|Pass |
| 3 | Obtain user inputs | Test Case 3 | onClick | Console log "Search button clicked" and all user inputs| Correctness|Pass |
| 4 | Get Flights' stats | Test Case 4 | onClick | Console log "Get flights stats" and all related flights' stats| Correctness|Pass |
| 5 | Get airline delays | Test Case 5 | onClick | Console log "Get airline delays" and all related airline delays | Correctness|Pass |
| 6 | Get delays comparison | Test Case 6 | onClick | Console log "Get delays comparison" and all related delays comparison | Correctness|Pass |

</br>
<h3>Results of test cases:</h3>
Test case 1:</br>
<img src="media/resultgetairports.png"></br>
</br>Test case 2:
<img src="media/resultgetairlines.png"></br>
</br>Test case 3:
<img src="media/resultsearchbutton.png"></br>
</br>Test case 4:
<img src="media/resultgetflightstats.png"></br>
</br>Test case 5:
<img src="media/resultgetairlinedelays.png"></br>
</br>Test case 6:
<img src="media/resultgetdelaycomparison.png"></br>

</br>
<h3>Conclusion of integration testing:</h3>
The outputs of the console log matched with the expected output, therefore all of the test cases regarding the integration testing have passed the test. Regarding bugs discovered, there were no bugs discovered during this integration testing as none of the test cases failed.

</br>

---

## 2.3 GUI Testing (Black box)
### 2.3.1 Mobile Compatibility Testing
</br>
<h4> Test Case 1 </h4>
<p> Background design should align with data input section. </p>
</br>

<h4> Test case 2 </h4>
<p> Width of table should align with the user input section. </p>
</br>

<h4> Test case 3 </h4>
<p> Graph of delay type and time should be shown clearly.  </p>
</br>

| ID | Test Item | Scenarios | Input | Expected Output | Test Factor | Pass or Fail|
| :------- | ----: | ----: | ----: | ----: | ----: | ----: |
| 1 | Background design should align with data input section | Test Case 1 | N/A | Background design is fixed and smaller than data input section. | Correctness | Fail | 
| 2 | Width of table should align with the user input section. | Test Case 2 | N/A | Width of table is following the background design and not align with data input section. | Correctness | Fail | 
| 3 | Graph of delay type and time should be shown clearly. | Test Case 3 | N/A | Showing the graph of delay type or delay time in mobile vertical mode, both graph is overlaying. When using flight project in mobile horizontal mode, the graph is showing fine but are not fitting in the designed box. | Usability | Fail | 

</br>
<h3>Result of Test Case</h3>

<h4>Test Case 1</h4>


<h5>Initial Software (Before)</h5>
<img src="media/gui1.jpg">
<p>Img 2.3.1.1 UI looks messy and not align.</p>
</br>


<h5>Improved software (After)</h5>
<img src= "media/M1.png">
<p>Img 2.3.1.2 EVerything is well organised and aligned.</p>
<h4>Test Case 2</h4>


<h5>Initial Software (Before)</h5>
<img src="media/gui2.jpg">
<p>Img 2.3.1.3 User input section doesn't fit background.</p>
</br>


<h5>Improved software (After)</h5>
<img src="media/M2.png" >
<p>Img 2.3.1.4 User input section is fit to the background.</p>
</br>

<h4>Test Case 3</h4>


<h5>Initial Software (Before)</h5>
<img src="media/gui2.jpg">
<p>Img 2.3.1.5 Data chart is not align with background.</p>
</br>

</br>
<h5>Improved software (After)</h5>
<img src="media/M3.png" >
<p>Img 2.3.1.6 Data chart is shown clearly.</p>

</br>
<h4>Conclusion</h4>
<p>All of the test case failed the test. Based on that we can tell that this software is not well designed for mobile devices. No bugs were found during the testing process. </p>

</br>

### 2.3.2 User Experience Testing
</br>
<h4> Test Case 1 </h4>
<p> Input any character in the input field </p>
</br>

<h4> Test case 2 </h4>
<p> Click the submit button on the input section without all required input filled </p>
</br>

<h4> Test case 3 </h4>
<p> After all required input have been selected, press on the search button and inspect the time required for data to be reflected  </p>
</br>

<h4> Test case 4 </h4>
<p> After all required input have been selected, press on the search button and inspect if there's any visual hint of feedback such as a loading spinner. </p>
</br>

| ID | Test Item | Scenarios | Input | Expected Output | Test Factor | True or False |
| :------- | ----: | ----: | ----: | ----: | ----: | ----: |
| 1 | Error handling on each input field | Test case 1 | alphabets(a-z), numbers(1-9), symbols (i.e. !, @, #, etc.)| Error messages specifying on whichever input should be shown if the respective field contains invalid input | Correctness, Usability | Pass |
| 2 | Error handling on required input fields on click search  | Test case 2 | On Click | An error message should be presented to the user if any required field has not been filled | Correctness, Usability | Fail |  
| 3 | Time required for analytic data to be reflected | Test case 3 | On Click | The expected time for analytic data such as the tables and charts should be less than 20 seconds or less | Correctness, Reliability | Pass | 
| 4 | Visual feedback during the request and fetching of data | Test case 4 | On Click | A loading animation should be presented on the screen as a visual representation of the process of data fetching | Usability | Fail |
</br> 

<h3>Result of Test Case</h3>
</br>

<h4>Test Case 1</h4>

<p>No option message will pop out if user input invalid input as image shown.</p>
<img src="media/UX6.png">
<p>Img 2.3.2.1 No option message </p>
</br>

<h4>Test Case 2</h4>
<h5>Initial Software (Before)</h5>
<img src="media/UX3.png">
<p>Img 2.3.2.2 Nothing happen when user click search without filling all field.</p>
</br>
<h5>Improved Software (After)
<img src="media/UX2.png">
<p>Img 2.3.2.3 Error message pop out to inform user to fill the field.</p>
</br>

<h4>Test Case 3</h4>
<p>The data was able to show in 20 seconds or lesser. Time taken for Flight project to load the data is based on the database size. If there are too many data, it will takes longer time to load the data.</p>

<h4>Test Case 4</h4>
<h5>Initial Software (Before)</h5>
<img src="media/UX4.png">
<p>Img 2.3.2.4 No loading animation.</p>
</br>
<h5>Improved Software (After)</h5>
<img src="media/UX5.png">
<p>Img 2.3.2.5 Diamond shaped loading animation.</p>
</br>

<p></p>

</br>
<h4>Conclusion</h4>
<p>Two out of four test cases pass the test, 2 of them were failed. Test cases are all pass after improvements were made in this software.</p>

### 2.3.3 Interface Features Testing (GUI) 
</br>
<h5> Test Case 1 </h5>
<p> View Search button alignment with different screen sizes. </p>
</br>

<h5> Test case 2 </h5>
<p> Click arrow button to sort the table based on the title. </p>
</br>

<h5> Test case 3 </h5>
<p> Text and images resize accordingly when user resize browser. </p>
</br>

<h5> Test case 4 </h5>
<p> Select same origin and destination. </p>
</br>
 
<h5> Test case 5 </h5>
<p> Hover on Pie or bar chart to view the data in a small box.  </p>
</br>

| ID | Test Item | Scenarios | Input | Expected Output | Test Factor | Pass or Fail |
| :------- | ----: | ----: | ----: | ----: | ----: | ----: |
| 1 | Search button alignment on screen resizing | Test case 1 | N/A | On resize, the search button aligns accordingly | Correctness | Fail |
| 2 | Click arrow button to sort | Test case 2 | On Click | The data of flights on table, appear in that particular sorting order | Correctness | Pass |  
| 3 | Text and image size with various  window sizes | Test case 3 | N/A | On changing screen size, text and images changes size accordingly | Correctness | Fail | 
| 4 | Select same destination as origin | Test case 4 | On Click | Error message should pop-up | Correctness | Fail |
| 5 | Hover mouse over pie chart | Test case 5 | N/A | On hovering mouse, the data should display accordingly| Correctness | Pass | 
</br>

<h3>Result of Test Case</h3>
</br>

<h4>Test Case 1</h4>

<h5>Initial Software (Before)</h5>
<img src="media/UI5.png">
<p>Img 2.3.3.1 Search button is not align.</p>
</br>

<h5>Improved software (After)</h5>
<img src="media/UI6.png">
<p>Img 2.3.3.2 Search button is align accordingly.</p>
<h4>Test Case 2</h4>

<h5>Before Sorting</h5>
<img src="media/UI3.png">
<p>Img 2.3.3.3 Unsorted data.</p>
</br>

<h5>After Sorting</h5>
<img src="media/UI4.png">
<p>Img 2.3.3.4 Sorted data.</p>
</br>
<h4>Test Case 3</h4>

<h5>Initial Software (Before)</h5>
<img src="media/UI7.png">
<p>Img 2.3.3.5 Image and text size not changing.</p>
</br>

<h5>Improved software (After)</h5>
<img src="media/UI8.png">
<p>Img 2.3.3.6 Image and text size changed accordingly.</p>
<h4>Test Case 4</h4>

<p>When 2 same destination and origin were choose, no data will be shown. </p>
<img src="media/UI1.png">
<p>Img 2.3.3.7 No data is showing</p>
</br>

<h4>Test Case 5</h4>

<p>When mouse is hover over pie chart, chart details will be shown.</p>
<img src="media/UI2.png">
<p>Img 2.3.3.8 Details shown.</p>
</br>

### 2.3.4 Bug found 
</br>
<p>If the user click the search button without inputing the required field eg: origin,destination and time, error message will pop out. It clearly shows that the website is not doing error handling.</p>
<img src="media/BUG1.jpeg">
<p>Img 2.3.4.1 Error message </p>

<h4>Conclusion</h4>
<p>2 out of 5 test case pass the testing and 3 of it failed for the GUI testing part. Regarding the bugs test, there is a bug that we found which mentioned above. </p>