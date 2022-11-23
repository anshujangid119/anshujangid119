import React from "react";
import logo from "../../images/pic2.jpg";
import "./Demo.css";
export default function FacultyFF() {
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
        <u>EMPLOYER FEEDBACK FORM</u>
      </h3>
      <br></br>
      </div>
      <form>
        <div class="form-group">

        <h3 class="text-center">
        COMPANY PROFILE
      </h3>
      <br></br>
        <div class="form-group">
              <label>
               <h5>Name of Company:
               </h5> </label>
              <textarea class="form-control" rows="2" id="employerff_0.1" maxlength="300"></textarea>
            </div>
            <br></br><div class="form-group">
              <label>
               <h5>Type of Company: 
               </h5> </label>
              <textarea class="form-control" rows="2" id="employerff_0.2" maxlength="300"></textarea>
            </div>
            <br></br><div class="form-group">
              <label>
               <h5>Nature of Company:   
               </h5> </label>
              <textarea class="form-control" rows="2" id="employerff_0.3" maxlength="300"></textarea>
            </div>
        
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
             FEEBACK ON ACCOMPLISHMENT OF PROGRAM EDUCATIONAL OBJECTIVES
            </h4>
            <br></br>
            <br></br>
            <div>
              <h5>
              PEO 1: Graduates will have good fundamental & multidisciplinary knowledge with an ability to analyze, design, innovate and handle the realistic problems.	 	 	 	 	 	 	 	            
                </h5>
                
              <div>
                <fieldset id="employerff_1" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="employerff_1"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="employerff_1"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="employerff_1"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="employerff_1"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="employerff_1"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              PEO 2: Graduates will possess ethical conduct, sense of responsibility to serve society and protect the environment.	 
                </h5>
                
              <div>
                <fieldset id="efe_2" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="employerff_2"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="employerff_2"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="employerff_2"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="employerff_2"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="employerff_2"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
            PEO 3: Graduates will have a strong foundation in academics, leadership qualities and lifelong learning for a prosperous professional career. 	 	 	 	 	 	 	 	 	            
                </h5>
                
              <div>
                <fieldset id="employerff_3" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="employerff_3"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="employerff_3"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="employerff_3"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="employerff_3"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="employerff_3"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            
            <h4
              class="text-center">
            FEEBACK ON ACCOMPLISHMENT OF PROGRAM OUTCOMES AND PROGRAM SPECIFIC OUTCOMES
            </h4>
            <br></br>
            <div>
              <h5>
              4.	I am able to communicate effectively.	 	 	 	          
                </h5>
                
              <div>
                <fieldset id="employerff_4" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="employerff_4"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="employerff_4"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="employerff_4"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="employerff_4"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="employerff_4"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              5. I am able to function effectively as an individual and as a member / leader in-diverse teams. 	 	 	 	 	 	 	 	 	           
                </h5>
                
              <div>
                <fieldset id="employerff_5" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="employerff_5"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="employerff_5"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="employerff_5"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="employerff_5"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="employerff_5"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
             	6.	I am able to commit to professional and ethical responsibilities. 	 	 	 	 	 	 	             

                </h5>
                
              <div>
                <fieldset id="employerff_6" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="employerff_6"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="employerff_6"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="employerff_6"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="employerff_6"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="employerff_6"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              7.	I can apply knowledge of mathematics, science and engineering to solve complex engineering problems.	 	 	 	 	 	 	 	 	 	           
                </h5>
                
              <div>
                <fieldset id="employerff_7" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="employerff_7"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="employerff_7"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="employerff_7"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="employerff_7"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="employerff_7"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              8. I am able to apply knowledge of engineering and management principles to manage the project as a leader or a team member.	 	 	 	 	 	 	 	 	 	        
                </h5>
                
              <div>
                <fieldset id="employerff_8" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="employerff_8"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="employerff_8"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="employerff_8"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="employerff_8"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="employerff_8"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              9.	I am able to identify, formulate and solve scientific/engineering problems.  	 	 	 	  	 	 	 	            
                </h5>
                
              <div>
                <fieldset id="employerff_9" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="employerff_9"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="employerff_9"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="employerff_9"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="employerff_9"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="employerff_9"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              10.	I am able to conduct investigations and provide valid solutions. 	 	 	 	 	 	 	 	 	              
                </h5>
                
              <div>
                <fieldset id="employerff_10" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="employerff_10"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="employerff_10"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="employerff_10"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="employerff_10"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="employerff_10"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              11.	I am able to apply knowledge of engineering and management principles to manage the project as a leader or a team member.	 	 	 	  	 	 	 	 	       
                </h5>
                
              <div>
                <fieldset id="employerff_11" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="employerff_11"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="employerff_11"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="employerff_11"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="employerff_11"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="employerff_11"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              12.	I can design/develop solutions meeting industrial requirements. 	 	 	 	  	 	 	 	           
                </h5>
                
              <div>
                <fieldset id="employerff_12" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="employerff_12"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="employerff_12"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="employerff_12"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="employerff_12"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="employerff_12"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              13.	I am aware about social and environmental impacts of engineering solutions.        
                </h5>
                
              <div>
                <fieldset id="employerff_13" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="employerff_13"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="employerff_13"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="employerff_13"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="employerff_13"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="employerff_13"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              14.	I can use modern engineering equipment, software, tools and technologies to solve complex engineering issues. 	 	           
                </h5>
                
              <div>
                <fieldset id="employerff_14" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="employerff_14"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="employerff_14"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="employerff_14"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="employerff_14"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="employerff_14"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              15.	I am aware about the need for life-long learning to stay relevant in the profession.	 	 	 	 	 	 	 	 	 	        
                </h5>
                
              <div>
                <fieldset id="employerff_15" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="employerff_15"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="employerff_15"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="employerff_15"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="employerff_15"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="employerff_15"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              16.	I am able to design, analyze and innovate solutions to technical issues in thermal, production and design engineering.	 	 	 	 	 	 	 	 	 	            
                </h5>
                
              <div>
                <fieldset id="employerff_16" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="employerff_16"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="employerff_16"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="employerff_16"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="employerff_16"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="employerff_16"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              17.	I am able to exhibit the knowledge and skills in the field of mechanical & allied engineering concepts. 	 
                </h5>
                
              <div>
                <fieldset id="efe_17" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="employerff_17"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="employerff_17"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="employerff_17"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="employerff_17"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="employerff_17"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              18.	I am able to apply the knowledge of skills in HVAC&R and automobile engineering. 	 	 	 	 	 	 	 	 	 	            
                </h5>
                
              <div>
                <fieldset id="employerff_18" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="employerff_18"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="employerff_18"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="employerff_18"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="employerff_18"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="employerff_18"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <h4
              class="text-center">
            FEEDBACK ON ACADEMICS, CURRICULUM AND PLACEMENTS
            </h4>
            <br></br>
            <div>
              <h5>
              19.	Teaching learning environment.	 	 	 	  	 	 	 	          
                </h5>
                
              <div>
                <fieldset id="employerff_19" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="employerff_19"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="employerff_19"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="employerff_19"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="employerff_19"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="employerff_19"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              20.	Sufficient add-on courses for enhancing employability. 	 	 	 	 	 	 	 	 	 	           
                </h5>
                
              <div>
                <fieldset id="employerff_20" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="employerff_20"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="employerff_20"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="employerff_20"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="employerff_20"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="employerff_20"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              21.	Progressive placements. 	 	 	 	 	 	 	 	             
                </h5>
                
              <div>
                <fieldset id="employerff_21" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="employerff_21"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="employerff_21"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="employerff_21"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="employerff_21"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="employerff_21"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              22.	The curriculum fulfils the need of employability.	 	 	 	 	 	           
                </h5>
                
              <div>
                <fieldset id="employerff_22" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="employerff_22"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="employerff_22"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="employerff_22"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="employerff_22"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="employerff_22"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              23.	Enriched academic and library resources. 	 	 	 	 	 	 	 	 	        
                </h5>
                
              <div>
                <fieldset id="employerff_23" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="employerff_23"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="employerff_23"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="employerff_23"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="employerff_23"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="employerff_23"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              24.	Well-framed Mission and Vision of the Department 	  	 	 	 	            
                </h5>
                
              <div>
                <fieldset id="employerff_24" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="employerff_24"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="employerff_24"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="employerff_24"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="employerff_24"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="employerff_24"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              25.	Excellent Overall ambiance of the institute 	 	 	 	 	 	 	 	 	              
                </h5>
                
              <div>
                <fieldset id="employerff_25" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="employerff_25"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="employerff_25"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="employerff_25"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="employerff_25"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="employerff_25"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              26.	Sufficient use of Modern Tool in the department for enhancing employability. 	 	 	 	  	 	 	 	 	       
                </h5>
                
              <div>
                <fieldset id="employerff_26" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="employerff_26"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="employerff_26"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="employerff_26"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="employerff_26"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="employerff_26"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <br></br>

            <div class="form-group">
              <label>
               <h5>27. Specify the Skills  which  will  be  in  demand  in  the  future  that  should  be  included  in  the functional preparation of fresh graduates.
               </h5> </label>
              <textarea class="form-control" rows="3" id="employerff_27" maxlength="300"></textarea>
            </div>
            <br></br>
            <div class="form-group">
              <label>
               <h5>28. Specify the details of additional skills a graduate should acquire before joining your organization.
               </h5> </label>
              <textarea class="form-control" rows="3" id="employerff_28" maxlength="300"></textarea>
            </div>
            <br></br><div class="form-group">
              <label>
               <h5>29. Specify  the  contribution  of  graduates  from  this  department  in  achieving  your  organizational objectives.
               </h5> </label>
              <textarea class="form-control" rows="3" id="employerff_29" maxlength="300"></textarea>
            </div>
            <br></br><div class="form-group">
              <label>
               <h5>30 List a few courses that you wish to include in the B. Tech. (Mechanical Engineering) program which could be important for enhancing employability of the student. 
               </h5> </label>
              <textarea class="form-control" rows="3" id="employerff_30" maxlength="300"></textarea>
            </div>
            <br></br><div class="form-group">
              <label>
               <h5>31. Suggestions for any change in Vision and Mission of the Institute:  
               </h5> </label>
              <textarea class="form-control" rows="3" id="employerff_31" maxlength="300"></textarea>
            </div>
            <br></br><div class="form-group">
              <label>
               <h5>32. Suggestions for any change in Vision and Mission of the Department:   
               </h5> </label>
              <textarea class="form-control" rows="3" id="employerff_32" maxlength="300"></textarea>
            </div>
            <br></br><div class="form-group">
              <label>
               <h5>33. Suggestions for any change in PEOs as mentioned above:  
               </h5> </label>
              <textarea class="form-control" rows="3" id="employerff_33" maxlength="300"></textarea>
            </div>
            <br></br><div class="form-group">
              <label>
               <h5>34. Suggestions for any change in formulation of PSOs as mentioned above: 
               </h5> </label>
              <textarea class="form-control" rows="3" id="employerff_34" maxlength="300"></textarea>
            </div>
            <br></br><div class="form-group">
              <label>
               <h5>35.  Any other suggestion.  
               </h5> </label>
              <textarea class="form-control" rows="3" id="employerff_35" maxlength="300"></textarea>
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