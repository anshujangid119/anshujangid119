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
        <u>PARENT’S FEEDBACK FORM</u>
      </h3>
      <br></br>
      </div>
      <form>
        <div class="form-group">
        <div>
            
            <div className="labelclass">
                <label>
                  <strong>Name: Mr. / Mrs</strong>
                </label>
              <input type="Name" id="pff_name" class="namecss" placeholder="" required="true"></input>
              </div>

            <br></br>
            <div>
            <div className="labelclass">
              <label>
                <strong>Ward Name: </strong>
              </label>
             
              <input type="Name" id="pff_ward_name" class="wardnamecss" placeholder="" required="true"></input>
            </div>
            </div>
            <br></br>
            <div>
            <div className="labelclass">
              <label>
                <strong>Relationship: </strong>
              </label>
             
              <input
                type="Name"
                id="pff_rel"
                class="relationclass"
                placeholder=""
                required="true"
              ></input>
              </div>
            </div>
            <br></br>
            <div>
            <div className="labelclass">
              <label for="phone">
                <strong>Occupation: </strong>
              </label>
              <input
                type="tel"
                id="pff_Occupation: "
                class="occupationclass"
                name="occupation: "
                placeholder=""
                required="true"
              ></input>

            </div>
            </div>
            <br></br>
            <div>
            <div className="labelclass">
              <label>
                <strong>Contact Details: </strong>
              </label>
              <input type="" id="pff_contact_details: " class="contactdetail" placeholder="" required="true"></input>
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
            <h4
              class="text-center">
              FEEDBACK ON ACADEMICS, CURRICULUM AND INSTITUTE POLICIES
            </h4>
            <br></br>
            <br></br>
            <div>
              <h5>
             1. Fair and transparent admission process 
	 	 	 	 	            
                </h5>
                
              <div>
                <fieldset id="pff_1" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="pff_1"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="pff_1"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="pff_1"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="pff_1"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="pff_1"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              2. Significant improvement in technical knowledge 
                </h5>
                
              <div>
                <fieldset id="efe_2" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="pff_2"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="pff_2"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="pff_2"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="pff_2"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="pff_2"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              3. Disciplined environment with proper supervision 	 	 	            
                </h5>
                
              <div>
                <fieldset id="pff_3" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="pff_3"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="pff_3"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="pff_3"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="pff_3"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="pff_3"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              4. Excellent teaching learning environment
                </h5>
                
              <div>
                <fieldset id="pff_4" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="pff_4"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="pff_4"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="pff_4"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="pff_4"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="pff_4"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              5. Positive behavioural and ethical change in ward’s personality 

                </h5>
                
              <div>
                <fieldset id="pff_5" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="pff_5"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="pff_5"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="pff_5"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="pff_5"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="pff_5"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              6. Easy access to institute information 
	 	 	 	 	             
                </h5>
                
              <div>
                <fieldset id="pff_6" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="pff"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="pff_6"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="pff_6"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="pff_6"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="pff_6"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              7. Progressive placement. 	 	 	 	           
                </h5>
                
              <div>
                <fieldset id="pff_7" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="pff_7"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="pff_7"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="pff_7"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="pff_7"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="pff_7"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              8. Timely receipt of progress of ward through Tutor 
 
                </h5>
                
              <div>
                <fieldset id="pff_8" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="pff_8"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="pff_8"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="pff_8"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="pff_8"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="pff_8"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              9. Periodic declaration of Internal examination results 	 	 	 	 	            
                </h5>
                
              <div>
                <fieldset id="pff_9" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="pff_9"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="pff_9"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="pff_9"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="pff_9"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="pff_9"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              10. Cooperative and qualified faculties and staff 
 	 	 	 	              
                </h5>
                
              <div>
                <fieldset id="pff_10" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="pff_10"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="pff_10"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="pff_10"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="pff_10"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="pff_10"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              11. Academic flexibility in Curriculum. 
                </h5>
                
              <div>
                <fieldset id="pff_11" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="pff_11"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="pff_11"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="pff_11"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="pff_11"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="pff_11"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              12. Curriculum fulfils the need of employability. 	 	 	 	 	           
                </h5>
                
              <div>
                <fieldset id="pff_12" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="pff_12"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="pff_12"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="pff_12"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="pff_12"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="pff_12"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              13. Institution provides opportunities for continuous development of students.	 	 	 	 	        
                </h5>
                
              <div>
                <fieldset id="pff_13" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="pff_13"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="pff_13"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="pff_13"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="pff_13"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="pff_13"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              14. Approachable management and administration	 	 	 	 	           
                </h5>
                
              <div>
                <fieldset id="pff_14" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="pff_14"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="pff_14"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="pff_14"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="pff_14"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="pff_14"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              15. Well-defined policies and procedures 	 	 	 	 	        
                </h5>
                
              <div>
                <fieldset id="pff_15" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="pff_15"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="pff_15"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="pff_15"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="pff_15"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="pff_15"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <h4
              class="text-center">
              FEEDBACK ON ACADEMICS, CURRICULUM AND INSTITUTE POLICIES
            </h4>
            <br></br>
            <div>
              <h5>
              16. Green and clean campus 
 
                </h5>
                
              <div>
                <fieldset id="pff_16" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="pff_16"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="pff_16"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="pff_16"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="pff_16"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="pff_16"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              17. Hygienic canteen and mess facilities	 	 	 	 	            
                </h5>
                
              <div>
                <fieldset id="pff_17" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="pff_17"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="pff_17"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="pff_17"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="pff_17"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="pff_17"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              18. Prompt healthcare facility 

 	 	 	 	              
                </h5>
                
              <div>
                <fieldset id="pff_18" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="pff_18"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="pff_18"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="pff_18"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="pff_18"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="pff_18"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              19. Well maintained hostel facilities. 
                </h5>
                
              <div>
                <fieldset id="pff_19" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="pff_19"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="pff_19"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="pff_19"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="pff_19"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="pff_19"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              20. College bus facilities available from entire city.  	 	 	 	 	           
                </h5>
                
              <div>
                <fieldset id="pff_20" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="pff_20"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="pff_20"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="pff_20"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="pff_20"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="pff_20"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              21. Prompt and transparent grievance redressal system. 
	 	 	 	 	        
                </h5>
                
              <div>
                <fieldset id="pff_21" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="pff_21"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="pff_21"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="pff_21"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="pff_21"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="pff_21"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              22. High speed Internet facilities 	 	 	 	 	           
                </h5>
                
              <div>
                <fieldset id="pff_22" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="pff_22"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="pff_22"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="pff_22"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="pff_22"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="pff_22"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>
            <div>
              <h5>
              23. Adequate Infrastructure facilities	 	 	        
                </h5>
                
              <div>
                <fieldset id="pff_23" class="abc" >
                <label>1</label>
                  <input type="radio" value="1" name="pff_23"></input>
                  <label>&nbsp;2</label>
                  <input type="radio" value="2" name="pff_23"></input>
                  <label>&nbsp;3 </label>
                  <input type="radio" value="3" name="pff_23"></input>
                  <label>&nbsp;4 </label>
                  <input type="radio" value="4" name="pff_23"></input>
                  <label>&nbsp;5 </label>
                  <input type="radio" value="5" name="pff_23"></input>
  
                </fieldset>
              </div>
            </div>
            <br></br>








            

            <div class="form-group">
              <label>
               <h5>24. Whether any modification is needed in the Vision, Mission, PEOs and PSOs statements? 
 
               </h5> </label>
              <textarea class="form-control" rows="3" id="pff24" maxlength="300"></textarea>
            </div>
            <br></br>
            <div class="form-group">
              <label>
               <h5>25. Whether curriculum promotes start up, entrepreneurship, and higher studies? 

               </h5> </label>
              <textarea class="form-control" rows="3" id="pff25" maxlength="300"></textarea>
            </div>
            <br></br><div class="form-group">
              <label>
               <h5>26. Do you feel any curriculum gap for achieving employability, entrepreneurship, and higher studies?  
               </h5> </label>
              <textarea class="form-control" rows="3" id="pff26" maxlength="300"></textarea>
            </div>
            <br></br><div class="form-group">
              <label>
               <h5>27. Any other suggestions?   
               </h5> </label>
              <textarea class="form-control" rows="3" id="pff27" maxlength="300"></textarea>
            </div>
          















            


























            
            


































            
            <div class="button-box">
            <button class="button trigger" onClick={submitHandler}>Submit!</button>
            </div>
           </div>
           </div>
      
              </form>
              
         </>
        );
    }