import React from "react";
import logo from "../../images/pic2.jpg";
import "./Demo.css";
export default function CourseEF() {
  const submitHandler=(e)=>{
  
  }
    return (
        <>
       <div>
        <br></br>
        <br></br>
        <img
          src={logo}
          class="mx-auto d-block"
          alt="Chania"
          width="600"
          height="150"
        />
        <br></br>
      <h3 class="text-center">
        ISI-6, RIICO Institutional Area, Sitapura, Jaipur-302022, Rajasthan
      </h3>
      <h3 class="text-center">Phone/Fax: 9928555222 </h3>
      <h3 class="text-center">
        <a href="https://www.poornima.org/">www.poornima.org</a>
      </h3>
      <h3 class="text-center">Email: info@poornima.org </h3>
      <br></br>
      <br></br>
      <h3 class="text-center">
        <u>COURSE FEEDBACK FORM</u>
      </h3>
      <br></br>
      </div>
      <form>
        <div class="form-group">
          <div>
            <h2 class="text-center"><u>Part 1:PERSONAL INFORMATION</u> </h2>
            <br></br>
            <br></br>
            
            <div className="labelclass">
                <label>
                  <strong>Semester</strong>
                </label>
              <input type="Name" id="cef_sem" class="semcss" placeholder="" required="true"></input>
              </div>
              <br></br>
              <div className="labelclass">
              <label>
                  <strong>Year</strong>
                </label>
            
                <input
                  type="Name"
                  id="cef_year"
                  class="cef_yearcss"
                  required="true"
                ></input>
              </div>
              <br></br>
              </div>
              <div className="labelclass">
              <label>
                <strong>Branch</strong>
              </label>
              <select class="cef_branchcss" id="cef_branch" required="true">
                <option selected>Select Department</option>
                <option value="CS">Department of Computer Engineering</option>
                <option value="EC">Department of Electronics & Communication Engineering</option>
                <option value="CIVIL">Department of Civil Engineering</option>
                <option value="EE">Department of Electrical Engineering</option>
                <option value="IT">Department of Information Technology</option>
                <option value="ME"> Department of Mechanical Engineering</option>
              </select>
            
            <br></br>
            </div>
            <br></br>
            <div>
            <div className="labelclass">
              <label>
                <strong>Section</strong>
              </label>
             
              <input type="Name" id="cef_sec" class="cef_seccss" placeholder="" required="true"></input>
            </div>
            </div>
            <br></br>
            <div>
            <div className="labelclass">
              <label>
                <strong>Subject Name</strong>
              </label>
             
              <input
                type="Name"
                id="cef_sub"
                class="cef_subcss"
                placeholder=""
                required="true"
              ></input>
              </div>
            </div>
            <br></br>
            <div>
            <div className="labelclass">
              <label for="phone">
                <strong>Subject code</strong>
              </label>
              <input
                type="tel"
                id="cef_subcode"
                class="cef_subcodecss"
                name="phone"
                placeholder=""
                required="true"
              ></input>

            </div>
            </div>
            <br></br>
            <div>
            <div className="labelclass">
              <label>
                <strong>Faculty Name</strong>
              </label>
              <input type="" id="cef_fac_name" class="cef_Facultynamecss" placeholder="" required="true"></input>
            </div>
            </div>
            <br></br>
            <div>
            <div className="labelclass">
              <label>
                <strong>Sesssion</strong>
              </label>
              <input type="" id="cef_session" class="cef_sessioncss" placeholder="" required="true"></input>
            </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <h4 class="text-center">
              Please indicate your degree of agreement against each statement by
              checking against one of the five columns: Strongly Agree (5),
              Agree (4), Neutral (3), Disagree (2) or Strongly Disagree (1).
            </h4>
            <br></br>
            <h4
              class="text-center">
              FEEDBACK ON TEACHING APPROACHES
            </h4>
            <br></br>
            <br></br>
            <div>
              <h5>
                1.  The faculty stimulated my interest in the subject              
                </h5>
                
              <div>
                <fieldset id="cef_1" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_1"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_1"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_1"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_1"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_1"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              2.	The faculty managed classroom time and pace well.          
                </h5>
                
              <div>
                <fieldset id="cef_2" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_2"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_2"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_2"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_2"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_2"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              3.	The faculty was organized and prepared for every class              
                </h5>
                
              <div>
                <fieldset id="cef_3" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_3"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_3"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_3"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_3"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_3"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              4.	The faculty encouraged discussions and responded to questions           
                </h5>
                
              <div>
                <fieldset id="cef_4" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_4"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_4"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_4"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_4"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_4"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              5.	The faculty demonstrated in-depth knowledge of the subject          
                </h5>
                
              <div>
                <fieldset id="cef_5" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_5"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_5"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_5"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_5"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_5"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              6.	The faculty appeared enthusiastic and interested in the class              
                </h5>
                
              <div>
                <fieldset id="cef_6" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_6"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_6"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_6"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_6"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_6"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              7.	The faculty used a variety of instructional
               methods to reach the course outcome
                (e.g. group discussions, student presentations, etc.)            
                </h5>
                
              <div>
                <fieldset id="cef_7" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_7"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_7"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_7"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_7"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_7"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              8.	The faculty motivated students to do their best work           
                </h5>
                
              <div>
                <fieldset id="cef_8" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_8"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_8"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_8"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_8"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_8"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              9.	The faculty actively attempt to prevent cheating in this course           
                </h5>
                
              <div>
                <fieldset id="cef_9" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_9"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_9"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_9"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_9"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_9"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              10.	The faculty was accessible outside of class             
                </h5>
                
              <div>
                <fieldset id="cef_10" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_10"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_10"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_10"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_10"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_10"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div class="form-group">
              <label>
               <h5>Comments:
               </h5> </label>
              <textarea class="form-control" rows="3" id="cefc1" maxlength="300"></textarea>
            </div>
            <br></br>
            <br></br>
            <h4
              class="text-center">
              FEEDBACK ON FEEDBACK AND ASSESSMENT
            </h4>
            <br></br>
            <br></br>
            <div>
              <h5>
              11.	Information about the assessment was clearly communicated           
                </h5>
                
              <div>
                <fieldset id="cef_11" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_11"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_11"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_11"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_11"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_11"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              12.	Feedback was provided within the stated time frame          
                </h5>
                
              <div>
                <fieldset id="cef_12" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_12"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_12"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_12"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_12"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_12"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              13.	Feedback showed how to improve my work (e .g. corrections including comments)        
                </h5>
                
              <div>
                <fieldset id="cef_13" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_13"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_13"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_13"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_13"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_13"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div class="form-group">
              <label>
               <h5>Comments:
               </h5> </label>
              <textarea class="form-control" rows="3" id="cefc2" maxlength="300"></textarea>
            </div>
            <br></br>
            <br></br>
            <h4
              class="text-center">
              FEEDBACK ON RESOURCE AND ADMINISTRATION
            </h4>
            <br></br>
            <br></br>
            <div>
              <h5>
              14.	The course was supported by adequate library resources          
                </h5>
                
              <div>
                <fieldset id="cef_14" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_14"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_14"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_14"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_14"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_14"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              15.	Black-board resources for the course were useful         
                </h5>
                
              <div>
                <fieldset id="cef_15" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_15"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_15"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_15"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_15"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_15"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              16.	The faculty gave guidance on where to find  resources       
                </h5>
                
              <div>
                <fieldset id="cef_16" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_16"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_16"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_16"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_16"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_16"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div class="form-group">
              <label>
               <h5>Comments:
               </h5> </label>
              <textarea class="form-control" rows="3" id="cefc3" maxlength="300"></textarea>
            </div>
            <br></br>
            <br></br>
            <h4
              class="text-center">
             FEEDBACK ON COURSE                                                                             
            </h4>
            <br></br>
            <br></br>
            <div>
              <h5>
              17.	The syllabus was explained at the beginning of the course         
                </h5>
                
              <div>
                <fieldset id="cef_17" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_17"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_17"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_17"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_17"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_17"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              18.	The course was delivered as outlined in the syllabus         
                </h5>
                
              <div>
                <fieldset id="cef_18" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_18"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_18"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_18"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_18"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_18"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              19. Faculty explained the grading criteria of the course       
                </h5>
                
              <div>
                <fieldset id="cef_19" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_19"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_19"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_19"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_19"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_19"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              20.	Exams related to the course learning outcomes      
                </h5>
                
              <div>
                <fieldset id="cef_20" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_20"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_20"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_20"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_20"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_20"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              21.	Projects/ assignments related to the course learning outcomes      
                </h5>
                
              <div>
                <fieldset id="cef_21" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_21"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_21"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_21"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_21"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_21"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              22.	Overall, how do you rate your experience in this course       
                </h5>
                
              <div>
                <fieldset id="cef_22" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_22"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_22"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_22"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_22"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_22"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              23.	How many hours did you spend per week on preparation / homework for this course?     
                </h5>
                
              <div>
                <fieldset id="cef_23" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_23"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_23"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_23"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_23"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_23"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
    
    
            <br></br>
            <div class="form-group">
              <label>
               <h5>Comments:
               </h5> </label>
              <textarea class="form-control" rows="3" id="cefc4" maxlength="300"></textarea>
            </div>
            <br></br>
            <br></br>
            <h4
              class="text-center">
             FEEDBACK ON STUDENT SELF EVALUATION
            </h4>
            <br></br>
            <br></br>
            <div>
              <h5>
              24.	I contributed constructively during in-class activities.          
                </h5>
                
              <div>
                <fieldset id="cef_24" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_24"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_24"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_24"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_24"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_24"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              25.	I feel I am achieving the learning outcomes.                       
                </h5>
                
              <div>
                <fieldset id="cef_25" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_25"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_25"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_25"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_25"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_25"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div class="form-group">
              <label>
               <h5>Comments:
               </h5> </label>
              <textarea class="form-control" rows="3" id="cefc5" maxlength="300"></textarea>
            </div>
            <br></br>
            <br></br>
            <h4
              class="text-center">
             FEEDBACK ON TEACHING APPROACHES                                                                                      
            </h4>
            <br></br>
            <br></br>
            <div>
              <h5>
              26.	Faculty has made you understand all COs               
                </h5>
                
              <div>
                <fieldset id="cef_26" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_26"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_26"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_26"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_26"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_26"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              27.	Faculty has delivered and fulfilled requirement  of CO 1 and feel that you have attained requirement of CO1        
                </h5>
                
              <div>
                <fieldset id="cef_27" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_27"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_27"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_27"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_27"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_27"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              28.	Faculty has delivered and fulfilled requirement  of CO 2 and feel that you have attained requirement of CO2      
                </h5>
                
              <div>
                <fieldset id="cef_28" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_28"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_28"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_28"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_28"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_28"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              29.	Faculty has delivered and fulfilled requirement  of CO 3 and feel that you have attained requirement of CO3      
                </h5>
                
              <div>
                <fieldset id="cef_29" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_29"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_29"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_29"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_29"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_29"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              30.	Faculty has delivered and fulfilled requirement  of CO 4 and feel that you have attained requirement of CO4    
                </h5>
                
              <div>
                <fieldset id="cef_30" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_30"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_30"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_30"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_30"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_30"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              31.	Faculty has delivered and fulfilled requirement  of CO 5 and feel that you have attained requirement of CO5      
                </h5>
                
              <div>
                <fieldset id="cef_31" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_31"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_31"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_31"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_31"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_31"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              33.	Faculty has explained CO-PO mapping of your  course       
                </h5>
                
              <div>
                <fieldset id="cef_32" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_33"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_33"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_33"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_33"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_33"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              34.	Faculty/HoD  has explained mapping of PO, PSO, PEO, Mission & Vision     
                </h5>
                
              <div>
                <fieldset id="cef_34" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="cef_34"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="cef_34"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="cef_34"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="cef_34"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="cef_34"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <br></br>
            <div class="form-group">
              <label>
               <h5>Comments:
               </h5> </label>
              <textarea class="form-control" rows="3" id="cefc5" maxlength="300"></textarea>
            </div>
            <br></br>
            <br></br>

            <div class="form-group">
              <label>
               <h5>35. What additional activities / training have been provided by faculty to fulfill requirements of CO, PO, PSO, PEO, Vision, and Mission?
               </h5> </label>
              <textarea class="form-control" rows="3" id="cfe35" maxlength="300"></textarea>
            </div>
            <br></br>
            <div class="form-group">
              <label>
               <h5>36. What additional activities / training you have done on your own to fulfill requirements of CO, PO, PSO, PEO, Vision, and Mission?
               </h5> </label>
              <textarea class="form-control" rows="3" id="cfe36" maxlength="300"></textarea>
            </div>
            <br></br>
            <div class="form-group">
              <label>
               <h5>37. What changes would you recommend to improve this course?
               </h5> </label>
              <textarea class="form-control" rows="3" id="cfe37" maxlength="300"></textarea>
            </div>
            <br></br>
            <div class="form-group">
              <label>
               <h5>38. What did you like best about your faculty teaching?
               </h5> </label>
              <textarea class="form-control" rows="3" id="cfe38" maxlength="300"></textarea>
            </div>
            <br></br>
            <div class="form-group">
              <label>
               <h5>39. What did you like least about your faculty’s teaching?
               </h5> </label>
              <textarea class="form-control" rows="3" id="cfe39" maxlength="300"></textarea>
            </div>
            <br></br>
            <div class="form-group">
              <label>
               <h5>40. What do you recommend for improving CO attainment?
               </h5> </label>
              <textarea class="form-control" rows="3" id="cfe40" maxlength="300"></textarea>
            </div>
            <br></br>
         
         
         






































            
            


































            
            <div class="button-box">
            <button class="button trigger" onClick={submitHandler}>Submit!</button>
            </div>
            </div>
      
              </form>
              
         </>
        );
    }