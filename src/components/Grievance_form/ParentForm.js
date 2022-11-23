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
        <u>ONLINE GRIEVANCE FORM - PARENT </u>
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
                  <strong>Name of the Parent:		</strong>
                </label>
              <input type="Name" id="gpf_name_parent" class="gpf_parentnamecss" placeholder="" required="true"></input>
              </div>
              <br></br>
              <div className="labelclass">
              <label>
                  <strong>Name of the Student:	</strong>
                </label>
            
                <input
                  type="Name"
                  id="gpf_emp_id"
                  class="gpf_studentnamecss"
                  required="true"
                ></input>
              </div>
              <br></br>
            <div>
            <div className="labelclass">
              <label>
                <strong>Registartion No. (Student):	</strong>
              </label>
             
              <input type="Name" id="gpf_reg" class="gpf_regcss" placeholder="" required="true"></input>
            </div>
            </div>
            <br></br>
            <div>
            <div className="labelclass">
              <label>
                <strong>Email-ID (Self):	</strong>
              </label>
             
              <input
                type="Name"
                id="gpf_emailself"
                class="gpf_emailselfcss"
                placeholder=""
                required="true"
              ></input>
              </div>
            </div>
            <br></br>
            <div>
            <div className="labelclass">
              <label>
                <strong>Email-Id (Student)(Poornima):</strong>
              </label>
             
              <input
                type="Name"
                id="gpf_emailstudent"
                class="gpf_emailstudentcss"
                placeholder=""
                required="true"
              ></input>
              </div>
            </div>
            <br></br>
            <div>
            <div className="labelclass">
              <label>
                <strong>Mobile No. (Self):		</strong>
              </label>
             
              <input
                type="Name"
                id="gpf_mobself"
                class="gpf_mobselfcss"
                placeholder=""
                required="true"
              ></input>
              </div>
              <br></br>
              <div>
            <div className="labelclass">
              <label>
                <strong>Mobile No.(Student):	</strong>
              </label>
             
              <input
                type="Name"
                id="gpf_mobstudent"
                class="gpf_mobstudentcss"
                placeholder=""
                required="true"
              ></input>
              </div>
            </div>
            <br></br>
            </div>

            <div>
            <div className="labelclass">
              <label >
                <strong>Type of Grievance:</strong>
              </label>
              <select class="gpf_typecss" id="gpf_type" required="true">
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