import React from "react";
import logo from "../../images/pic2.jpg";
import "./Grievance_form.css";
export default function ParentForm() {
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
      Promoted by Shanti Education Society, Affiliated to Rajasthan Technical University & Approved by AICTE										
			</h3>							
										
      <br></br>
            <br></br>	
										
										
										
										

      
      <h3 class="text-center">
        <u>ONLINE GRIEVANCE FORM - STUDENT </u>
      </h3>
      <br></br>
      </div>
      <form>
        <div class="form-group">
          <div>
            <br></br>
            <br></br>
            
            <div className="labelclass">
                <label>
                  <strong>Name of the Student:		</strong>
                </label>
              <input type="Name" id="gsf_name_student" class="gsf_studentnamecss" placeholder="" required="true"></input>
              </div>
              <br></br>
              <div className="labelclass">
              <label>
                  <strong>Regristration No.:	</strong>
                </label>
            
                <input
                  type="Name"
                  id="gsf_stu_reg"
                  class="gsf_stu_regcss"
                  required="true"
                ></input>
              </div>
            <br></br>
            <div className="labelclass">
              <label>
                <strong>Department:	</strong>
              </label>
              <select class="gsf_deptcss" id="gsf_dept" required="true">
                <option selected>Select Department</option>
                <option value="CS">Department of Computer Engineering</option>
                <option value="EC">Department of Electronics & Communication Engineering</option>
                <option value="CIVIL">Department of Civil Engineering</option>
                <option value="EE">Department of Electrical Engineering</option>
                <option value="IT">Department of Information Technology</option>
                <option value="ME"> Department of Mechanical Engineering</option>
                <option value="first_year">Department of I-Year</option>
              </select>
            
           
            </div>
            <br></br>
            <div>
            <div className="labelclass">
              <label >
                <strong>Programme:</strong>
              </label>
              <select class="gsf_programmecss" id="gsf_programme" required="true">
                <option selected>Select Type of Programme:</option>
                <option value="CS">B.Tech. (Computer Engineering)</option>
                <option value="AI">B.Tech. (Computer Science and Engineering (Artificial Intelligence))</option>
                <option value="AI_DS">B.Tech. (Artificial Intelligence (AI) and Data Science)</option>
                <option value="CYBER_SECURITY">B.Tech. (Computer Science and Engineering (Cyber Security))</option>
                <option value="EC">B.Tech. (Electronics & Communication Engineering)</option>
                <option value="CIVIL">B.Tech. (Civil Engineering)</option>
                <option value="EE">B.Tech. (Electrical Engineering)</option>
                <option value="IT">B.Tech. (Information Technology)</option>
                <option value="ME"> B.Tech. (Mechanical Engineering)</option>
              </select>
            
          
            </div>
            </div>
            <br></br>
            <div>
            <div className="labelclass">
              <label >
                <strong>Semester:	</strong>
              </label>
              <select class="gsf_semcss" id="gsf_sem" required="true">
                <option selected>Select Semester:	</option>
                <option value="1">I</option>
                <option value="2">II</option>
                <option value="3">III</option>
                <option value="4">IV</option>
                <option value="5">V</option>
                <option value="6">VI</option>
                <option value="7">VII</option>
                <option value="8">VIII</option>
              </select>
            
          
            </div>
            </div>
            <br></br>
            <div>
            <div className="labelclass">
              <label>
                <strong>Email-ID (Poornima):	</strong>
              </label>
             
              <input
                type="Name"
                id="gsf_email"
                class="gsf_emailcss"
                placeholder=""
                required="true"
              ></input>
              </div>
            </div>
            <br></br>
            <div>
            <div className="labelclass">
              <label>
                <strong>Mobile No.:		</strong>
              </label>
             
              <input
                type="Name"
                id="gsf_mob"
                class="gsf_mobcss"
                placeholder=""
                required="true"
              ></input>
              </div>
              </div>
              <br></br>

            <div>
            <div className="labelclass">
              <label >
                <strong>Type of Grievance:</strong>
              </label>
              <select class="gsf_typecss" id="gsf_type" required="true">
                <option selected>Select Type of Grievance</option>
                <option value="Teaching_Learning">Teaching-Learning</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="Behavioural">Behavioural</option>
                <option value="Appraisal">Appraisal</option>
                <option value="Administartive">Administartive</option>
                <option value="Roles_and_Responsibilities">Roles and Responsibilities</option>
                <option value="Others">Others</option>
              </select>
            
          
            </div>
            <br></br>
            



            <div class="form-group">
              <label>
               <h6>Description about Grievance:	 
               </h6> </label>
              <textarea class="form-control" rows="2" id="efs_des" maxlength="300"></textarea>
            </div>
            <div class="mb-3">
  <label for="formFileMultiple" class="form-label">ATTACH FILES</label>
  <input class="form-control" type="file" id="formFileMultiple" multiple></input>
</div>

      
            </div>
            <br></br>

         






































            
            


































            
            <div class="button-box">
            <button class="button trigger" onClick={submitHandler}>Submit!</button>
            </div>
            </div>
            </div>
      
              </form>
              
         </>
        );
    }