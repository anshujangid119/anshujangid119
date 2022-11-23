import React from "react";
import logo from "../../images/pic2.jpg";
import "./Demo.css";
export default function Alumni() {
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
        <u>ALUMNI FEEDBACK FORM</u>
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
                  <strong>Enter Your Name:</strong>
                </label>
              <input type="Name" id="Al_name" class="namecss" placeholder="" required="true"></input>
              </div>
              <br></br>
              <div className="labelclass">
              <label>
                  <strong>Registration No.</strong>
                </label>
            
                <input
                  type="Name"
                  id="Al_regristration_no"
                  class="regcss"
                  placeholder="Ex-PCE19IT021"
                  required="true"
                ></input>
              </div>
              <br></br>
              </div>
              <div className="labelclass">
              <label>
                <strong>Department.</strong>
              </label>
              <select class="deptclass" id="Al_dept" required="true">
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
                <strong>Year of Graduation.</strong>
              </label>
             
              <input type="Name" id="Al_yog" class="yogclass" placeholder="" required="true"></input>
            </div>
            </div>
            <br></br>
            <div>
            <div className="labelclass">
              <label>
                <strong>Current Adress.</strong>
              </label>
             
              <input
                type="Name"
                id="Al_current_adress"
                class="caclass"
                placeholder=""
                required="true"
              ></input>
              </div>
            </div>
            <br></br>
            <div>
            <div className="labelclass">
              <label for="phone">
                <strong>Mobile No.</strong>
              </label>
              <input
                type="tel"
                id="Al_phone"
                class="phoneclass"
                name="phone"
                placeholder="Without country code"
                required="true"
              ></input>

            </div>
            </div>
            <br></br>
            <div>
            <div className="labelclass">
              <label>
                <strong>Email ID</strong>
              </label>
              <input type="" id="Al_email" class="emailclass" placeholder="" required="true"></input>
            </div>
            </div>
            <br></br>
            <div>
            <div className="labelclass">
              <label>
                <strong>PG Degree Details.</strong>
              </label>
              <input type="" id="Al_pgd" class="pgdclass" placeholder="" required="true"></input>
            </div>
            </div>
            <br></br>
            <div>
            <div className="labelclass">
              <label>
                <strong>Current Position.</strong>
              </label>
              
              <input type="" id="Al_cp" class="cpclass" placeholder="" required="true"></input>
            </div>
            </div>
            <br></br>
            <div>
            <div className="labelclass">
              <label>
                <strong>Company Name.</strong>
              </label>
              <input type="" id="Al_cn" class="cpname" placeholder="" required="true"></input>
            </div>
            </div>
            <br></br>
            <br></br>
            <h4 class="text-center">
              Please indicate your degree of agreement against each statement by
              checking against one of the five columns: Strongly Agree (5),
              Agree (4), Neutral (3), Disagree (2) or Strongly Disagree (1).
            </h4>
            <br></br>
            <h2 class="text-center"><u>Part 2:FEEDBACK AND SUGGESTION  </u></h2>
            <br></br>
            <h4
              class="text-center">
              FEEBACK
              ON
              ACCOMPLISHMENT
              OF
              PROGRAM
              EDUCATIONAL
              OBJECTIVES
            </h4>
            <br></br>
            <div>
              <h5>
                PEO 2.1: Graduates will have good fundamental &
                multidisciplinary knowledge with an ability to analyze, design,
                innovate and handle the realistic problems.
              </h5>
              <div>
                <fieldset id="Al_PEO2.1" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.1"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.1"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.1"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.1"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.1"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2.2: Graduates will possess ethical conduct, sense of responsibility to 
              serve society and protect the environment.
              </h5>
              <div>
                <fieldset id="Al_PEO2.2" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.2"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.2"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.2"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.2"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.2"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2.3: Graduates will have a strong foundation in academics,
                leadership qualities and lifelong learning for a prosperous
                professional career.
              </h5>
              <div>
                <fieldset id="Al_PEO2.3" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.3"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.3"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.3"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.3"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.3"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <br></br>
              <h4 class="text-center">
                FEEBACK ON ACCOMPLISHMENT OF PROGRAM OUTCOMES AND PROGRAM
                SPECIFIC OUTCOMES
              </h4>
            <br></br>
            <br></br>
            <div>
              <h5>
              PEO 2.4: I am able to communicate effectively.
              </h5>
              <div>
                <fieldset id="Al_PEO2.4" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.4"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.4"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.4"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.4"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.4"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2.5: I am able to function effectively as an individual and as a member / leader in-diverse teams.
              </h5>
              <div>
                <fieldset id="Al_PEO2.5" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.5"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.5"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.5"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.5"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.5"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2.6: I am able to commit to professional and ethical responsibilities.
              </h5>
              <div>
                <fieldset id="Al_PEO2.6" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.6"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.6"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.6"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.6"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.6"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2.7: I can apply knowledge of mathematics, science and engineering to solve complex engineering problems.
              </h5>
              <div>
                <fieldset id="Al_PEO2.7" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.7"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.7"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.7"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.7"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.7"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2.8: I can apply knowledge to resolve the social, health, safety and cultural issues in your organization
              </h5>
              <div>
                <fieldset id="Al_PEO2.8" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.8"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.8"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.8"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.8"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.8"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2.9: I am able to identify, formulate and solve scientific/engineering problems.
              </h5>
              <div>
                <fieldset id="Al_PEO2.9" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.9"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.9"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.9"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.9"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.9"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2.10: I am able to conduct investigations and provide valid solutions.
              </h5>
              <div>
                <fieldset id="Al_PEO2.10" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.10"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.10"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.10"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.10"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.10"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2.11: I am able to apply knowledge of engineering and management principles to manage the project as a leader or a team member.
              </h5>
              <div>
                <fieldset id="Al_PEO2.11" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.11"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.11"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.11"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.11"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.11"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2.12: I can design/develop solutions meeting industrial requirements.
              </h5>
              <div>
                <fieldset id="Al_PEO2.12" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.12"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.12"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.12"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.12"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.12"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2.13: I am aware about social and environmental impacts of engineering solutions.
              </h5>
              <div>
                <fieldset id="Al_PEO2.13" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.13"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.13"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.13"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.13"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.13"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br> <div>
              <h5>
              PEO 2.14: I can use modern engineering equipment, software, tools and technologies to solve complex engineering issues. 
              </h5>
              <div>
                <fieldset id="Al_PEO2.14" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.14"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.14"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.14"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.14"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.14"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br> <div>
              <h5>
              PEO 2.15: I am aware about the need for life-long learning to stay relevant in the profession.
              </h5>
              <div>
                <fieldset id="Al_PEO2.15" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.15"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.15"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.15"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.15"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.15"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br> <div>
              <h5>
              PEO 2.16: I am able to design, analyze and innovate solutions to technical issues in thermal, production and design engineering.
              </h5>
              <div>
                <fieldset id="Al_PEO2.16" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.16"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.16"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.16"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.16"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.16"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br> <div>
              <h5>
              PEO 2.17: I am able to exhibit the knowledge and skills in the field of mechanical & allied engineering concepts.
              </h5>
              <div>
                <fieldset id="Al_PEO2.17" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.17"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.17"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.17"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.17"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.17"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br> <div>
              <h5>
              PEO 2.18: I am able to apply the knowledge of skills in HVAC&R and automobile engineering.
              </h5>
              <div>
                <fieldset id="Al_PEO2.18" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.18"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.18"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.18"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.18"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.18"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <br></br>
              <h4 class="text-center">
              FEEDBACK ON ACADEMICS, CURRICULUM AND PLACEMENTS
              </h4>
            <br></br>
            <br></br>
            <div>
              <h5>
              PEO 2.19: Teaching learning environment.
              </h5>
              <div>
                <fieldset id="Al_PEO2.19" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.19"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.19"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.19"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.19"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.19"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2.20: Supportive mentorship and counselling through tutors.
              </h5>
              <div>
                <fieldset id="Al_PEO2.20" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.20"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.20"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.20"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.20"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.20"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2.21: Curriculum enrichment. 
              </h5>
              <div>
                <fieldset id="Al_PEO2.21" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.21"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.21"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.21"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.21"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.21"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2.22: The curriculum fulfils the need of employability.
              </h5>
              <div>
                <fieldset id="Al_PEO2.22" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.22"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.22"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.22"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.22"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.22"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2.23: Enriched academic and library resources.
              </h5>
              <div>
                <fieldset id="Al_PEO2.23" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.23"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.23"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.23"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.23"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.23"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2.24: Qualified faculty members as per norms.
              </h5>
              <div>
                <fieldset id="Al_PEO2.24" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.24"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.24"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.24"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.24"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.24"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2.25: Sufficient add-on courses for enhancing employability. 
              </h5>
              <div>
                <fieldset id="Al_PEO2.25" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.25"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.25"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.25"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.25"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.25"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2.26: Progressive placements.
              </h5>
              <div>
                <fieldset id="Al_PEO2.26" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.26"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.26"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.26"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.26"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.26"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2.27: Strong Training and Placement Cell for enhancing employability. 
              </h5>
              <div>
                <fieldset id="Al_PEO2.27" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.27"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.27"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.27"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.27"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.27"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>



            <br></br>
              <h4 class="text-center">
              FEEDBACK ON CAMPUS AMBIENCE AND FACILITIES
              </h4>
            <br></br>



            
            <br></br>
            <div>
              <h5>
              PEO 2.28: Green and clean campus.
              </h5>
              <div>
                <fieldset id="Al_PEO2.28" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.28"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.28"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.28"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.28"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.28"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2.29: Hygienic canteen and mess facilities.
              </h5>
              <div>
                <fieldset id="Al_PEO2.29" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.29"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.29"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.29"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.29"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.29"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2.30: Adequate sports and cultural facilities.
              </h5>
              <div>
                <fieldset id="Al_PEO2.30" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.30"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.30"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.30"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.30"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.30"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2.31: Prompt healthcare facility.
              </h5>
              <div>
                <fieldset id="Al_PEO2.31" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.31"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.31"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.31"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.31"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.31"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2.32: College bus facilities available from entire city.
              </h5>
              <div>
                <fieldset id="Al_PEO2.32" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.32"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.32"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.32"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.32"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.32"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2.33: Prompt and transparent grievance redressal system.
              </h5>
              <div>
                <fieldset id="Al_PEO2.33" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.33"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.33"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.33"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.33"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.33"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2.34: High speed internet facilities.
              </h5>
              <div>
                <fieldset id="Al_PEO2.34" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.34"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.34"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.34"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.34"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.34"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2.35: Proximal location of ATM facilities. 
              </h5>
              <div>
                <fieldset id="Al_PEO2.35" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.35"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.35"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.35"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.35"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.35"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2.36: Well maintained hostel facilities. 
              </h5>
              <div>
                <fieldset id="Al_PEO2.36" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.36"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.36"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.36"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.36"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.36"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2.37: Adequate infrastructure facilities.
              </h5>
              <div>
                <fieldset id="Al_PEO2.37" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.37"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.37"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.37"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.37"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.37"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2.38: Strong Alumni Association
              </h5>
              <div>
                <fieldset id="Al_PEO2.38" class="abc">
                <label>1</label>
                  <input type="radio" value="1" name="Al_PEO2.38"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="Al_PEO2.38"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="Al_PEO2.38"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="Al_PEO2.38"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="Al_PEO2.38"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <br></br>
            <br></br>






            <div class="form-group">
              <label>
               <h5> PEO 2.39 Specify the Skills  which  will  be  in  demand  in  the  future  that  should  be  included  in  the functional preparation of fresh graduates:
               </h5> </label>
              <textarea class="form-control" rows="3" id="Al_PEO2.39" maxlength="300"></textarea>
            </div>
            <br></br>
            <div class="form-group">
              <label>
               <h5>PEO 2.40 Specify the details of additional skills a graduate should acquire for employability:
               </h5> </label>
              <textarea class="form-control" rows="3" id="Al_PEO2.40" maxlength="300"></textarea>
            </div>
            <br></br>
            <div class="form-group">
              <label>
               <h5> PEO 2.41 List a few courses that you wish to include in the B. Tech program which could be important for enhancing employability of the student:
               </h5> </label>
              <textarea class="form-control" rows="3" id="Al_PEO2.41" maxlength="300"></textarea>
            </div>
            <br></br>

            <div class="form-group">
              <label>
               <h5> PEO 2.42 Suggestions for any change in Vision and Mission of the Institute:
               </h5> </label>
              <textarea class="form-control" rows="3" id="Al_PEO2.42" maxlength="300"></textarea>
            </div>
            <br></br>

            <div class="form-group">
              <label>
               <h5>PEO 2.43 Suggestions for any change in Vision and Mission of the Department:
               </h5> </label>
              <textarea class="form-control" rows="3" id="Al_PEO2.43" maxlength="300"></textarea>
            </div>
            <br></br>

            <div class="form-group">
              <label>
               <h5> PEO 2.44 Suggestions for any change in PEOs of the department as mentioned above:
               </h5> </label>
              <textarea class="form-control" rows="3" id="Al_PEO2.44" maxlength="300"></textarea>
            </div>
            <br></br>

            <div class="form-group">
              <label>
               <h5> PEO 2.45 Suggestions for any change in PSOs as mentioned above: 
               </h5> </label>
              <textarea class="form-control" rows="3" id="Al_PEO2.45" maxlength="300"></textarea>
            </div>
            <br></br>

            <div class="form-group">
              <label>
               <h5> PEO 2.46 Any other suggestion(s).
               </h5> </label>
              <textarea class="form-control" rows="3" id="Al_PEO2.46" maxlength="300"></textarea>
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