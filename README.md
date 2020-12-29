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