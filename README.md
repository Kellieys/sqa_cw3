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


## 2.2 Integration Testing 

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

## GUI Testing
</br>
<h3>Mobile Compatibility Testing</h3>
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
| 1 | Background design should align with data input section | Test Case 1 | On View | Background design is fixed and smaller than data input section (1). | Correctness | Pass | 
| 2 | Width of table should align with the user input section. | Test Case 2 | On View | Width of table is following the background design and not align with data input section. | Correctness | Pass | 
| 3 | Graph of delay type and time should be shown clearly. | Test Case 3 | On View | Showing the graph of delay type or delay time in mobile vertical mode, both graph is overlaying. When using flight project in mobile horizontal mode, the graph is showing fine but are not fitting in the designed box.(2) | Usability | Pass | 

</br>
<h3>Result of Test Case</h3>

<h4>Test Case 1</h4>

</br>
<h5>Before</h5>
<img src="media/gui1.jpg">
</br>

</br>
<h5>After</h5>
<img src= >

<h4>Test Case 2</h4>

</br>
<h5>Before</h5>
<img src="media/gui2.jpg">
</br>

</br>
<h5>After</h5>
<img src= >

<h4>Test Case 3</h4>

</br>
<h5>Before</h5>
<img src="media/gui2.jpg">
</br>

</br>
<h5>After</h5>
<img src= >

</br>
<h4>Conclusion</h4>
<p>The output of the testing was not same as expected output, hence, changes were made on this project. After the changes were made, the project has pass the test and there aren't any bugs were found in this project. </p>

</br>
<h3>User Experience Testing</h3>
<h4> Test Case 1 </h4>
<p> Flight project is a single page webpage, not multiple page webpage. </p>
</br>

<h4> Test case 2 </h4>
<p> Network Connection is required to use the webpage. </p>
</br>

<h4> Test case 3 </h4>
<p> Data will be dalay or rong if network connection is unstable or poor.  </p>
</br>

<h4> Test case 4 </h4>
<p> Database need to be connected to show data. </p>
</br>

| ID | Test Item | Scenarios | Input | Expected Output | Test Factor | True or False |
| :------- | ----: | ----: | ----: | ----: | ----: | ----: |
| 1 | Flight project is a single page webpage, not multiple page webpage. | Test case 1 | On View | User doesn't required few webpage to run Flight Project. | Portability | True |
| 2 | Network Connection is required to use the webpage. | Test case 2 | On View | When there's no Internet connection, Flight Project can't be run. | Integrity | True |  
| 3 | Data will be dalay or wrong if network connection is unstable or poor. | Test case 3 | On View | When network is poor, the delay chart will show the wrong data with the airline. | Reliability | True | 
| 4 | Database need to be connected for Flight project to show the data | Test case 4 | On View | When database is not connected, Flight project will unable to show any data when user choose the dropdown section. | Maintainability | True |
</br> 

<h3>Result of Test Case</h3>

<h4>Test Case 1</h4>
</br>
<p>After testing, we found out that the project only has one page, even when we press search, it still remain on the initial page and show the result on the initial page.</p>

<h4>Test Case 2</h4>
</br>
<p>The testing was pass for this test case that it required Internet connection to run this project. When we disconnect the Internet connection, we are unable to connect to the project. </p>
<img src="media/UX.png">
</br>

<h4>Test Case 3</h4>
</br>
<p>After testing, we found out that when the connection is bad, if we change the data too fast, the data will delay and couldn't catch up with the input that we insert.</p>

<h4>Test Case 4</h4>
</br>
<p>During the testing section, we found out that the dropdown section is blank if we didn't connect to the database.</p>

</br>
<h4>Conclusion</h4>
<p>The testing was meet our expected output. Hence, all the testing were pass. Regarding bugs testing, there aren't any bugs were found in this project. </p>

<h4> Interface Featurea Testing (GUI) </h4>
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
| 1 | Search button alignment on screen resizing | Test case 1 | On View | On resize, the search button aligns accordingly | Correctness | Pass |
| 2 | Click arrow button to sort | Test case 2 | On Click | The data of flights on table, appear in that particular sorting order | Correctness | Pass |  
| 3 | Text and image size with various  window sizes | Test case 3 | On View | On changing screen size, text and images changes size accordingly | Correctness | Pass | 
| 4 | Select same destination as origin | Test case 4 | On Click | Error message should pop-up | Correctness | Pass |
| 5 | Hover mouse over pie chart | Test case 5 | On View | On hovering mouse, the data should display accordingly| Correctness | Pass | 
</br>

<h3>Result of Test Case</h3>

<h4>Test Case 1</h4>
</br>
<h5>Before</h5>
<img src="media/UI5.png">
</br>

<h5>After</h5>
<img src="">

<h4>Test Case 2</h4>
</br>
<h5>Before Sorting</h5>
<img src="media/UI3.png">
</br>

<h5>After Sorting</h5>
<img src="media/UI4.png">
</br>

<h4>Test Case 3</h4>
</br>
<h5>Before</h5>
<img src="media/UI1.png">
</br>

<h5>After</h5>
<img src="">

<h4>Test Case 4</h4>
</br>
<p>When 2 same destination and origin were choose, no data will be shown. </p>
<img src="media/UI1.png">
</br>

<h4>Test Case 5</h4>
</br>
<p>When mouse is hover over pie chart, chart details will be shown.</p>
<img src="media/UI2.png">
</br>

</br>
<h4>Conclusion</h4>
<p>The testing results meet the expected output, hence, all the test cases are pass. Regarding bug test, no bugs we found during the testing process. </p>