import React from "react";
import logo from "../../images/pic2.jpg";
import "./Grievance_form.css";
export default function EmployeeForm() {
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
        <u>ONLINE GRIEVANCE FORM - EMPLOYEE										
										
                                        </u>
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
                  <strong>Name of the Employee:	</strong>
                </label>
              <input type="Name" id="gef_name" class="gef_namecss" placeholder="" required="true"></input>
              </div>
              <br></br>
              <div className="labelclass">
              <label>
                  <strong>Employee ID:	</strong>
                </label>
            
                <input
                  type="Name"
                  id="gef_emp_id"
                  class="gef_empcss"
                  required="true"
                ></input>
              </div>
              <br></br>
              </div>
              <div className="labelclass">
              <label>
                <strong>Department:	</strong>
              </label>
              <select class="gef_deptcss" id="gef_dept" required="true">
                <option selected>Select Department</option>
                <option value="CS">Department of Computer Engineering</option>
                <option value="EC">Department of Electronics & Communication Engineering</option>
                <option value="CIVIL">Department of Civil Engineering</option>
                <option value="EE">Department of Electrical Engineering</option>
                <option value="IT">Department of Information Technology</option>
                <option value="ME"> Department of Mechanical Engineering</option>
                <option value="first_year">Department of I-Year</option>
                <option value="Office_of_Registrar">Office of Registrar</option>
                <option value="Office_of_Proctor">Office of Proctor</option>
                <option value="Office_of_Director">Office of Director</option>
                <option value="Examination_Cell">Examination Cell</option>
                <option value="Hostel">Hostel</option>
                <option value="TPO">Training and Placement Office</option>
                <option value="Transport">Transport</option>
                <option value="OTHERS">OTHERS</option>
              </select>
            
           
            </div>
            <br></br>
            <div className="labelclass">
              <label>
                <strong>Department:	</strong>
              </label>
              <select class="gef_deptcss" id="gef_dept" required="true">
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
              <label>
                <strong>Designation:</strong>
              </label>
              <select class="gef_designationcss" id="gef_designation" required="true">
                <option selected>Select Designation:</option>
                <option value="Professor">Professor</option>
                <option value="Associate_Professor">Associate Professor</option>
                <option value="Assistant_Professor">Assistant Professor</option>
                <option value="Technical_Officer">Technical Officer</option>
                <option value="Technical_Assistant">Technical Assistant</option>
                <option value="Office_Executive">Office Executive</option>
                <option value="Registrar"> Registrar</option>
                <option value="Proctor">Proctor</option>
                <option value="Deputy_Registrar">Deputy Registrar</option>
                <option value="Assistant_Registrar">Assistant Registrar</option>
                <option value="Network_Administrator">Network Administrator</option>
                <option value="Vice_Principal">Vice-Principal</option>
                <option value="Dean">Dean</option>
                <option value="Warden">Warden</option>
                <option value="Gym_Instructor">Gym-Instructor</option>
                <option value="Security_Guard">Security Guard</option>
                <option value="Attendent ">Attendent </option>
                <option value="Chief_Librarian">Chief-Librarian</option>
                <option value="Librarian">Librarian</option>
                <option value="Sweeper">Sweeper</option>
                <option value="Gardener">Gardener</option>
                <option value="Electrician ">Electrician</option>
                <option value="Plumber">Plumber</option>
                <option value="Estate_Officer">Estate Officer</option>
                <option value="PS_to_Director">PS to Director</option>
                <option value="Driver">Driver</option>
                <option value="Others">Others</option>
              </select>
            
            <br></br>
            </div>
            </div>
            <br></br>
            <div>
            <div className="labelclass">
              <label>
                <strong>Email-Id (Poornima):</strong>
              </label>
             
              <input type="Name" id="gef_email" class="gef_emailcss" placeholder="" required="true"></input>
            </div>
            </div>
            <br></br>
            <div>
            <div className="labelclass">
              <label>
                <strong>Mobile No.:	</strong>
              </label>
             
              <input
                type="Name"
                id="gef_mob"
                class="gef_mobcss"
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
              <select class="gef_typecss" id="gef_type" required="true">
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
      
              </form>
              
         </>
        );
    }