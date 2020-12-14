<code>&nbsp;</code><br /><br /><br /><br />

<p align="center">
  <img src="UoNLogo.png" />
</p>
<br />

<div align="center">
 <h1>COMP3033 Software Quality Assurance<br/>
     Workshop 03 Report
 </h1>

 <h2> Group F<br/></h2>

 <h4> Module convenor: Dr. Radu Muschevici<br/>
      Chosen Option: MariaDB Project, Flights<br/>
      Hosted domain: <a>http://172.104.176.214:3000/</a><br/>
      Due Date: 12 November 2020<br/>
      Word count: 2909 (Excluding titles)<br/>
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

 <h2> 1. Software Quality Factors and Metrics</h2>

</div>
<br/>


  
<h3> SOFTWARE QUALITY FACTORS </h3>

### McCall's Factor Model
The McCall factor model provides a practical, up-to-date method for classifying software requirements. This model classifies all software requirements into 11 software quality factors. The 11 factors are grouped into three categories – product operation, product revision, and product transition factors.

* ****Product operation factors****: Correctness,Reliability, Efficiency, Integrity, Usability.
* ****Product revision factors****: Maintainability, Flexibility, Testability.
* ****Product transition factors****: Portability, Reusability, Interoperability.

Following are the assessments provided for each quality factor for our project:

### ****1. Correctness****
****Correctness of Data****

Following requirements deal with the correctness of the Flights web application:
* Verify that the application write to the database properly.
* Verify that the application record from the database correctly.
* Verify that the text fields are correctly storing information.
* Verify that the transient data is retained.
* Verify that the requirements for timing out of session are met.

****Correctness of Presentation****
* Check for properly displayed field data.
* Verify that the URL show you are in secure page
* Verify that the interfaces meet current GUI standards
* Check if the page layouts and format based on requirements (e.g., visual highlighting, etc.)

****Correctness of Navigation****
* Verify that the user can correctly navigate to the links.

****Correctness of Functionality****
* Verify error handling.
* Verify internal searches.
* Verify calculations.


#### Reliability
Following requirements deal with the Reliability of the Flights web application:
* Check the failure rate of the application.
* Check the likelihood of defects in the application.

#### Efficiency
Efficiency of the web application can be identified by covering the following aspects:
* User's requirements satisfied by the application.
* The software specifications are achieved by the application.
* How much effort is put in the development of the application.

Another way to calculate efficiency of the application is by using the following formulae:
* Efficiency = (Total number of defects found in unit+integration+system) / (Total number of defects found in unit+integration+system+User acceptance testing)
* Efficiency = (No. of defects Resolved / Total No. of Defects Submitted)* 100

#### Integrity
Integrity of the web application can be achieved by ensuring the following practices:
* Using a coding standard
* Functional and non-functional testing to verify the application's performance.
* Analyzing code to ensure it is effective and free of errors.
* Following code review
* Refactoring legacy code

#### Usability
Following requirements deal with the Usability of the Flights web application:
* Check for the usage of the system to help the user in their flight search.
* Verify if the menus, commands, and screens clear to a typical user.
* Verify if the user procedures simple, logical, and clear to the typical user.
* Verify if the results generated by the application search in order, consistent, and clear.

#### Maintainability
Following requirements deal with the Maintainability of the Flights web application:
* Check the kind of tools that will be available for servicing the system.
* Verify the usage of the tools.

#### Flexibility
Flexibility of the application can be attained by assessing the following metrics:
* Construction time
* Modification time
* Latency
* Dimensionality
* Size
* Cyclomatic Complexity

#### Testability
Testability of the web application can be attained by following:
* Adding explicit unit tests
* Utilizing tools that measure test coverage
* Code reviews
* Use of consistent code style

#### Portability
Following requirements deal with the Portability of the Flights web application: 
* Verifying if the application satisfies the portability requirements.
* Determining the look and feel of the application in the various browser types.
* Reporting the defects to the development teams so that they can be associated and defects can be fixed.

#### Reusability
The system needs to meet the following criteria to assess the Reusability of the application:
* Modularity
* Environment independence
* Code complexity
* Self descriptiveness
* Module complexity
* Reliability
* Error tolerance

#### Interoperability
Interoperability of the web application can be achieved by assessing the following requirements:
* Checking connectivity between devices
* Checking for functionality on different browsers
* If the results are not positive, then use monitor tools to detect source of error

## Metrics
### Halstead Metrics
Halstead metrics was introduced and developed by Maurice Halstead in 1977. It is one of the oldest measures of program complexity and often used to measure the maintenance metric. Halstead's metrics interprets a software's source code as a sequence of tokens and it classifies each of them to be an operator or operand. 

Where operator could be the storage class specifiers (i.e. static, auto, etc.), type qualifiers (i.e. const), reserved words from programming languages (i.e. break, default, public, etc.), or simply mathematical and logical operators(i.e. +, -, &&, etc.) . On the other hand, operands could be the identifiers (i.e. variable names), type specifiers (i.e. Boolean, integer, etc.) or a constant number of character. 

The token is counted as: 

- $n_1$ - number of unique operators
- $n_2$ - number of unique operands
- $N_1$ - total number of operators
- $N_2$ - total number of operands

Following are Halstead metrics that are derived from these quantities with brief description and fixed formulas: 

**Program Length ($N$)**

The program length measures the sum of the total number of operators and operands.

${\displaystyle N=N_{1}+N_{2}\,}$

**Vocabulary Size ($n$)**

The vocabulary size measures the sum of the total number of unique operators and operands. 

${\displaystyle \eta =\eta _{1}+\eta _{2}\,}$

**Program Volume ($V$)**

The program volume measures the size of the implementation of an algorithm. It focuses more on the number of operations performed and operands handled in the algorithm, making it less sensitive to code layout. 

${\displaystyle V=N\times \log _{2}\eta }$

**Difficulty Level ($D$)**

The difficulty level measures the error proneness of the program. It is proportional to the number of unique operators and also between total number of operands and the number of unique operands. 

${\displaystyle D={\eta *{1} \over 2}\times {N*{2} \over \eta _{2}}}$

**Program Level ($L$)**

The program level measures the opposite or inverse of error proneness. 

$L = {1 \over D}$

**Effort to implement ($E$)**
The 'effort to implement' metric measures the effort required to understand the program. It is proportional to the volume($V$) and difficulty level($D$) of the program. 

$E = {V \times D}$

**Time to implement ($T$)**

The 'time to implement' metric measures the approximate of time to implemented the program. It is proportional to effort ($E$).

${\displaystyle T={E \over 18}}seconds $

**Number of delivered bugs ($B$)**

The 'number of delivered bugs' metric measures approximate number of errors in implementation and the overall complexity of the software. 

${\displaystyle B={E^{2 \over 3} \over 3000}}$ OR ${\displaystyle B={V \over 3000}}$
</br>
### Plato

Plato is a software complexity analysis tool specifically for JavaScript projects. It generates a report based on the complexity data from a library called escomplex. Behind this library, it calculates both Halstead's metrics and McCabe's Cyclomatic complexity. However, it is important to interpret the report produced by these tools in a mindful manner. It helps to identify certain areas of code that contains unknown bugs or inefficiencies and helps to visualise the complexity distributed across on each function or the whole project.

The following are metrics produced by plato on the client application. 

**Maintainability Score**

The maintainability score considers the Halstead volume, cyclomatic complexity, and the line count for each source file.

![maintainability](media/maintainability.png)

**Lines of Code**

The lines of code graph helps identify large files, which are typically indicative of code that should be broken down or simplified.

![LOC](media/LOC.png)

Total Lines of Code for Client = 762

Total Lines of Code for API = 288

Adding both LOC from Client and API = 1050 lines of code

**Estimated Error Count**

This number is calculated using the Halstead-delivered bug score.

![errorCount](media/ErrorsInImplementation.png)

**Summary**
|Files|Complexity|Lines Of Code|Est. Errors|
|:---:|:---:|:---:|:---:|
|index.js|1|12|0.05|
|App.js|1|17|0.03|
|Dashboard.js|4|60|0.32|
|AirlineFlightsInfo.js|18|249|1.85|
|AirlinesFlightsInfo.js|12|136|1.11|
|FlightPlanHeader.js|3|29|0.14|
|FlightsFilter.js|8|259|2.80|


<!-- ### Direct Metrics
Direct metric is a metric that does not rely upon the measure of any other attribute. It is a functional that have only one variable.

We can apply Direct Metric on our Flights application by calculating it's size in terms of LOC (Lines of Code), and the programming time in terms of person-months.

****Size = 1163 LOC****

****Programming Time = 2 person-months****

### Derived Metrics
Derived Metrics are measured using more than one attributes. It combines a number of measures through a formula. 

We are going to apply Derived Metric on our Flights application by calculating Programmer Productivity.

$Programmer\hspace{0.1cm}Productivity = \frac{LinesOfCode}{ProgrammingTime}$

$Programmer\hspace{0.1cm}Productivity = \frac{1163}{2} = 582 \hspace{0.1cm}LOC/person\hspace{0.1cm}per\hspace{0.1cm}month$

$Module\hspace{0.1cm}Defect\hspace{0.1cm}Density = \frac{NumberOfDefects}{Module Size}$

$Defect\hspace{0.1cm}Detection\hspace{0.1cm}Efficiency=\frac{NumberOfDefectsDetected}{TotalNumberOfDefects}$ -->

<!-- ### Internal Metrics
****Size of Flights Application****

| Total No. of Lines | LOC | No. of Classes|
| :----: | :---: | :---: |
| 1,326 | 1,163 | 16 | -->


### External Metrics
****HTTP Requests of Flights Application****

| MIME Type | Requests |
| :---: | :---: |
| js | 41 |
| html | 23 |
| image | 10 |
| other | 10 |
| font | 4 |
| css | 2 |


<br/>

---

<div align="center">

 <h2> 2. Software Quality Activities</h2>

</div>

<h3> Quality Management Plan </h3>

 | Name | Role | Key Responsibility |
 | :------- | ----: | ----: |
 | Kelly Lim | Group Leader | Quality mentoring and Coaching |
 | Ling Kuok Ging | Team Menber | Testing for UI and UX |
 | Lee Ze-Cong| Team Member | Backend testing | 
 | Raveen | Team Member | Backend testing |
 | Yap Jun Kiat | Team Member | Testing for UI and UX |

 <h4> Implementation checklist </h4>

 | Has the software meet our requirement? | True |
 | Are test unit being used in the code ? | True |
 | Has the maintaining jobs being divided to all the members ? | True |
 | Has mobile been tested | True |


 </br> 

 <h4>Project Quality Measurement</h4>

 | Key Measurement | Description |
 | :------- | ----: |
 | Product Issues | Database has too many data and slow down searching efficiency. |
 | Performance | Flight project should show details data when user input data and search. |

 </br>
 <h3> Conducting formal and informal review and inspection </h3>
 <h4> Formal Review </h4>
 <p>The main purpose of formal review is to gain consensus and detect possible defects in Flight Project. Flights project should meet the functional and non-functional requirement which is display analytics which is based on users’ input of flight origin, destination, airline, date, and time. Also, Flight project also shall display error messages if the required fields are empty. Based on our previous testing, there is no error in current state. </p>

 </br>
 <h4> Inspection </h4>
 <p> There is a possible defect may be found in Flight Project which is database can’t connect to Flight Project. </p>
 </br>

 <h3> Enforcing progress adherence </h3>
 <p>•	Product Evaluation
    - Flight project allows user to choose the departure airport, destination airport, departure time and date.
    - Flight project allows user to search the airport by its short-form name and art of the name. E.g. user can search Phoenix Sky Harbor International Airport by searching Phoenix. 
    - There is a table to show flight details and users can sort the table by Airline name.
    - There is a delay chart for user to know the delay time and delay type.

 •	Process Monitoring 
    Testing techniques such as black box and white box testing are taking part in this session to make sure the correct steps are being implemented and the code is running in the way how it should be. 

 </p>
 </br>

 <h3> Controlling changes</h3>

 <p>During development and maintenance phases, by applying changes to Flight project, we are changing the code but controlling the change effect, to ensure Flight project maintain its quality. 

 </p>
 </br>

 <h3> Measuring impact of change </h3>

 <p>When a bug or defect is detected in the Flight project, change is required to perform the fix. The impact of change is measured to determine how significant was the change and how it affected the project. It is also required to check if the Flight project is compatabile with the new change after fixing the defects.

</p>
</br>

 <h3> Performing QA audits </h3>

 <p>Performing SQA audits ensures that the Flight project adheres to the defined standards and procedures. It also makes sure that the requirements of the Flight project are met. If the quality standards or the requirements are not met, it will be reflected to the development team to make changes accordingly.

</p>
</br>

 <h3> Keeping records and reporting </h3>

 <p>Keeping records and reporting ensures that the Flight project has all the necessary documents for future reference, and the documents recorded are also shared with the stakeholders. The documents are also extremely useful in case something went wrong in the Flight project, the development team can look at the documentation and figure out what is the problem. 

 </p>
 </br>

---

<br/>

<div align="center">

 <h2> 3. Software Testing Strategies</h2>

</div>
<br/>

<h3> 3.1 Testing objectives </h3>

<p> 
Testing is an impotant quality control activity. this is to detect and fix defects. The main objectives are to identify and reveal errors or defects and ensure its correctness, completeness of the software and conforming to the requirements.  
</P>

<br />

<h3> 3.1 Overview of Process</h3>

<div align="center">
 <br />
  <img src="overviewprocess.png" />
    <h4>Figure 3.1 Flow diagram for process overview </h4>

</div>

 <br />

<h3>3.2 Software Testing Strategies and Planning</h3>

<h4> 3.2.1 For Entity and Size </h4>
<h4> 3.2.1.1 Unit Testing </h4>

#### The unit testing concerns with the correctness of individual function and module. In this flight project the unit testing will focuses on three levels:

<br />

#### Input functions:
* Origin
* Destination
* Airiline
* From
* To
* Month
* Day 

<br />

<h4> 3.2.1.2 Testing Design </h4>
<br />

Test Case 1: <br />
<p>* where x = all IATA code or airport names in database</p>

<div>

if (input = x) {
  dropdown = x;
} <br/>
else { dropdown = empty; }

</div>

<br />

Test Case 2: <br />
<p>* where z = Click on input field</p>
<p>* where y = empty input</p>
<p>* where x = all IATA code or airport names in database</p>

<div>

if ( z = y ) {
  dropdown = x;
} <br/>
else { dropdown = not shown; }

</div>

<br />

Test Case 3: <br />
<p>* where x = all IATA code or airline names in database</p>

<div>

if (input = x) {
  dropdown = x;
} <br/>
else { dropdown = empty; }

</div>

<br />

Test Case 4: <br />
<p>* where z = Click on input field</p>
<p>* where y = empty input</p>
<p>* where x = all IATA code or airline names in database</p>

<div>

if ( z = y ) {
  dropdown = x;
} <br/>
else { dropdown = not shown; }

</div>


<br />

| ID | Test Items | Secnario | Input | Expexted Output | Test Factor | 
| :------- | ----: | ----: | ----: | ----: | ----: | ----: |
| 1 | Input Origin | Test Case 1 | Chicago O'Hare International Aiport, <br /> ORD, C, c, Chi, chi | Chicago O'Hare International Aiport | Correctness |
| 2 | Input Destination | Test Case 1 | Wendover Airport <br /> Wen, W, w, we, E, en | Wendover Airport | Correctness |
| 3 | Input Origin & Destination | Test Case 2 | OnClick | Show all dropdown | ? |
| 4 | Input Airline | Test Case 3 | United Air Lines Inc. <br /> U, u, UA, ua  | United Air Lines Inc. | Correctness |
| 5 | Input Airline | Test Case 4 | OnClick <br /> | Show all dropdown | ? |

<br />

#### Output functions:
* Search Button
* Sorting Button
* Output Pie Chart and Bar Graph


<h4> 3.2.1.2 Testing Design </h4>

<br />

| ID | Test Items | Secnario | Expexted Outcome | Test Factor | Pass or Fail
| :------- | ----: | ----: | ----: | ----: | ----: | ----: |
| 1 | a | a | a | a | ? |


<br />



#### API functions:
* Caluclations
* Retrieving from Database

<br />





<br />

<h4> 3.1.2 Integration Testing</h4>

<br/>
Test Case 1:
<p>Launch website and establish connection to MariaDB</p>


<br/>
Test Case 2:
<p>Click on "Origin" dropdown menu</p>

<br/>
Test case 3:
<p>Click on "Destination" dropdown menu</p>

<br/>
Test Case 4:
<p>Click on "Airline" dropdown menu</p>

<br/>
Test Case 5:
<p>Input related data and click on search button</p>

<br/>
Test Case 6

| ID | Test Items | Secnario | Input | Expected Outcome | Test Factor | Pass or Fail
| :------- | ----: | ----: | ----: | ----: | ----: | ----: |
| 1 | Check the connection with database | Test Case 1 | http://172.104.176.214:3000/ | Connection is established successfully | Correctness | ? |
| 2 | Get Airports data | Test Case 2 | onClick | Display all airports on screen | Correctness|
| 3 | Get Airports data | Test Case 3 | onClick | Display all airports on screen | Correctness|
| 4 | Get Airlines data | Test Case 4 | onClick | Display all airlines on screen | Correctness|
| 5 | Obtain data from user inputs | Test Case 5 | onClick | Display flight's data, graphs and charts related to the user inputs | Correctness|


<br/>

<h4> 3.1.3 System Testing</h4>
<p>testplan</p>


<br />

| ID | Test Items | Secnario | Expexted Outcome | Test Factor | Pass or Fail
| :------- | ----: | ----: | ----: | ----: | ----: | ----: |
|a | a| a|a |a | ? |


<h3> 3.2 For structure & function </h3>

<h4> 3.2.1 Black Box </h4>
<p>• Equivalent Class Partitioning.
• Boundary Values Analysis.</P>


<h4> 3.2.2 White Box </h4>
<p>Testing coverage (line, path…)</p>


<br/>

<h3> 3.3 GUI Testing</h3>

<br/>

| ID | Mobile compatibility testing | User Experience (UX) Testing | Interface Features (UI) Testing |
| :------- | ----: | ----: | ----: |
| 1. | Background design and title is not synchronizing with Flight project data input section when using Flight project on mobile phone. (1) | Flight project is accessible in a single window not multiple window. | When user inputs all the details for the flight such as origin, destination, airlines, dates and press search button, flight data will be shown in a table form. If there is no data for current flight, it will show ‘ No Data’ in flight data section. | 
| 2. | Width of table that shows flight details is not following the user input field. | Based on user experience, Internet connection is required for user to connect to the database and get the data from database. | In the view of flight data, there is a sorting arrow besides the title of each section on the table when we move our cursor to the title. When the arrow is pressed, it will sort the table based on the current title that we pressed. |
| 3.| When showing the graph of delay type or delay time in mobile vertical mode, both graph is overlaying. When using flight project in mobile horizontal mode, the graph is showing fine but are not fitting in the designed box. (2) | User may experience delay or wrong data if the network is unstable or network is slow. | User can select the flight from the table and a pie chart and bar chart will show for the user. Pie chart is showing the delay type where the bar chart is showing. |

---
<br/>
<p align="center">
  <img src="Pic 1.jpg" />
</p>
</br>
<p> Diagram 1: Data input section is not align with the background. </p>

</br>
<p align="center">
  <img src="Pic 2.jpg" />
</p>
</br>
<p> Diagram 2: Flight Project when using mobile in horizontal mode. </p>

</br>

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