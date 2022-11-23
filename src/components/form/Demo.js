import React from "react";
import logo from "../../images/pic2.jpg";
import "./Demo.css";
export default function Demo() {
  return (
    <>
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
      <form>
        <div class="form-group">
          <div>
            <h2 class="text-center">Part 1:PERSONAL INFORMATION </h2>
            <div>
              <br></br>
              <div className="department">
                <label>
                  <strong>Enter Your Name:</strong>
                </label>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;
                <input type="Name" id="name" class="" placeholder=""></input>
              </div>
              <br></br>
              <div>
                <label>
                  <strong>Registration No.</strong>
                </label>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <input
                  type="Name"
                  id="regristration_no"
                  class=""
                  placeholder="Ex-PCE19IT021"
                ></input>
              </div>
              <br></br>
              <label>
                <strong>Department.</strong>
              </label>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&emsp;&emsp;
              <select style={{ width: "190px" }}>
                <option selected>DEPARTMENT</option>
                <option value="CS">COMPUTER SCIENCE</option>
                <option value="IT">INFORMATION TECHNOLOGY</option>
                <option value="ME">MECHANICAL</option>
                <option value="CIVIL">CIVIL</option>
                <option value="EE">ELECTRICAL</option>
                <option value="EC"> ELECTRONICS AND COMMUNICATION</option>
              </select>
            </div>
            <br></br>
            <div>
              <label>
                <strong>Year of Graduation.</strong>
              </label>
              &emsp;&emsp;&emsp;&emsp;&emsp;&ensp;
              <input type="Name" id="yog" class="" placeholder=""></input>
            </div>
            <br></br>
            <div>
              <label>
                <strong>Current Adress.</strong>
              </label>
              &emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&ensp;&ensp;&ensp;&ensp;
              <input
                type="Name"
                id="current_adress"
                class=""
                placeholder=""
              ></input>
            </div>
            <br></br>
            <div>
              <label for="phone">
                <strong>Mobile No.</strong>
              </label>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Without country code"
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                required
              ></input>
              <small>Format : 895546****</small>
            </div>
            <br></br>
            <div>
              <label>
                <strong>Email.</strong>
              </label>
              &emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&ensp;&ensp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <input type="" id="email" class="" placeholder=""></input>
            </div>
            <br></br>
            <div>
              <label>
                <strong>PG Degree Details.</strong>
              </label>
              &ensp;&ensp;&ensp;&ensp;&emsp;&emsp;&emsp;&emsp;
              <input type="" id="pgd" class="" placeholder=""></input>
            </div>
            <br></br>
            <div>
              <label>
                <strong>Current Position.</strong>
              </label>
              &ensp;&ensp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;
              <input type="" id="cp" class="" placeholder=""></input>
            </div>
            <br></br>
            <div>
              <label>
                <strong>Company Name.</strong>
              </label>
              &ensp;&ensp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;
              <input type="" id="cn" class="" placeholder=""></input>
            </div>
            <br></br>
            <h4 class="text-center">
              Please indicate your degree of agreement against each statement by
              checking against one of the five columns: Strongly Agree (5),
              Agree (4), Neutral (3), Disagree (2) or Strongly Disagree (1).
            </h4>
            <br></br>
            <h2 class="text-center">Part 2:FEEDBACK AND SUGGESSTION </h2>

            <h4
              class="text-center"
              FEEBACK
              ON
              ACCOMPLISHMENT
              OF
              PROGRAM
              EDUCATIONAL
              OBJECTIVES
            ></h4>
            <div>
              <h5>
                PEO 2.1: Graduates will have good fundamental &
                multidisciplinary knowledge with an ability to analyze, design,
                innovate and handle the realistic problems.
              </h5>
              <div>
                <fieldset id="g1" class="abc">
                  <input type="radio" value="1" name="g1"></input>
                  <input type="radio" value="2" name="g1"></input>
                  <input type="radio" value="3" name="g1"></input>
                  <input type="radio" value="4" name="g1"></input>
                  <input type="radio" value="5" name="g1"></input>
  
                </fieldset>
              </div>
              <div>
                <fieldset id="g2" class="abc">
                  <label>1 </label>
                  <input type="radio" value="1" name="g2"></input>
                  <label>2 </label>
                  <input type="radio" value="2" name="g2"></input>
                  <input type="radio" value="3" name="g2"></input>
                  <input type="radio" value="4" name="g2"></input>
                  <input type="radio" value="5" name="g2"></input>
  
                </fieldset>
                </div>
              
              <br></br>

            
              <h5>
                PEO 2.3: Graduates will have a strong foundation in academics,
                leadership qualities and lifelong learning for a prosperous
                professional career.{" "}
              </h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h4 class="text-center">
                FEEBACK ON ACCOMPLISHMENT OF PROGRAM OUTCOMES AND PROGRAM
                SPECIFIC OUTCOMES
              </h4>
              <h5>PEO 2.4: I am able to communicate effectively.</h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>
                PEO 2.5: I am able to function effectively as an individual and
                as a member / leader in-diverse teams..
              </h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>
                PEO 2.6: I am able to commit to professional and ethical
                responsibilities.
              </h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>
                PEO 2.7: I can apply knowledge of mathematics, science and
                engineering to solve complex engineering problems..
              </h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>
                PEO 2.8: I can apply knowledge to resolve the social, health,
                safety and cultural issues in your organization
              </h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>
                PEO 2.9: I am able to identify, formulate and solve
                scientific/engineering problems.
              </h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>
                PEO 2.10: I am able to conduct investigations and provide valid
                solutions.
              </h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>
                PEO 2.11: I am able to apply knowledge of engineering and
                management principles to manage the project as a leader or a
                team member.
              </h5>

              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>
                PEO 2.12: I can design/develop solutions meeting industrial
                requirements.
              </h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>
                PEO 2.13: I am aware about social and environmental impacts of
                engineering solutions.
              </h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>
                PEO 2.14: I can use modern engineering equipment, software,
                tools and technologies to solve complex engineering issues.{" "}
              </h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>
                PEO 2.15:I am aware about the need for life-long learning to
                stay relevant in the profession.
              </h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>
                PEO 2.16: I am able to design, analyze and innovate solutions to
                technical issues in thermal, production and design engineering.
              </h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>
                PEO 2.17: I am able to exhibit the knowledge and skills in the
                field of mechanical & allied engineering concepts.
              </h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>
                PEO 2.18: I am able to apply the knowledge of skills in HVAC&R
                and automobile engineering
              </h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h4 class="text-center">
                FEEDBACK ON ACADEMICS, CURRICULUM AND PLACEMENTS
              </h4>
              <h5>PEO 2.19: Teaching learning environment.</h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>
                PEO 2.20: Supportive mentorship and counselling through tutors.
              </h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>PEO 2.21: Curriculum enrichment. </h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>
                PEO 2.22: The curriculum fulfils the need of employability.
              </h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>PEO 2.23: Enriched academic and library resources.</h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>PEO 2.24:Qualified faculty members as per norms.</h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>
                PEO 2.25: Sufficient add-on courses for enhancing employability.{" "}
              </h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>PEO 2.26: Progressive placements.</h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>
                PEO 2.27: Strong Training and Placement Cell for enhancing
                employability.
              </h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h4
                class="text-center"
                FEEDBACK
                ON
                CAMPUS
                AMBIENCE
                AND
                FACILITIES
              ></h4>
              <h5>PEO 2.28: Green and clean campus. </h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>PEO 2.29: Hygienic canteen and mess facilities. </h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>PEO 2.30: Adequate sports and cultural facilities. </h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>PEO 2.31: Curriculum enrichment. </h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>
                PEO 2.32: College bus facilities available from entire city.{" "}
              </h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>
                PEO 2.33: Prompt and transparent grievance redressal system.{" "}
              </h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>PEO 2.34: High speed internet facilities.</h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>PEO 2.35:Proximal location of ATM facilities. </h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>PEO 2.36: Well maintained hostel facilities. </h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>PEO 2.37: Adequate infrastructure facilities. </h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
              <h5>PEO 2.38: Strong Alumni Association </h5>
              <div class="container">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>

              <br></br>
            </div>
            <div class="form-group">
              <label for="comment">
                <strong>
                  PEO 2.39: Specify the Skills which will be in demand in the
                  future that should be included in the functional preparation
                  of fresh graduates:(s)
                </strong>
              </label>
              <textarea class="form-control" rows="3" id="2.39"></textarea>
            </div>
            <br></br>
            <div class="form-group">
              <label for="comment">
                <strong>
                  PEO 2.40: Specify the details of additional skills a graduate
                  should acquire for employability:
                </strong>
              </label>
              <textarea class="form-control" rows="3" id="2.40"></textarea>
            </div>
            <br></br>
            <div class="form-group">
              <label for="comment">
                <strong>
                  PEO 2.41: List a few courses that you wish to include in the
                  B. Tech. (Mechanical Engineering) program which could be
                  important for enhancing employability of the student:{" "}
                </strong>
              </label>
              <textarea class="form-control" rows="3" id="2.41"></textarea>
            </div>
            <br></br>
            <h5>
              PEO 2.42: Suggestions for any change in Vision and Mission of the
              Institute:
            </h5>
            <input
              class="form-control"
              type="text"
              placeholder="2.42"
              readonly
            ></input>
            <h5>
              PEO 2.43: Suggestions for any change in Vision and Mission of the
              Department:
            </h5>
            <input
              class="form-control"
              type="text"
              placeholder="2.43"
              readonly
            ></input>
            <h5>
              PEO 2.44:Suggestions for any change in PEOs of the department as
              mentioned above:{" "}
            </h5>
            <input
              class="form-control"
              type="text"
              placeholder="2.44"
              readonly
            ></input>
            <h5>
              PEO 2.45: Suggestions for any change in PSOs as mentioned above:{" "}
            </h5>
            <input
              class="form-control"
              type="text"
              placeholder="2.45"
              readonly
            ></input>
            <h5>PEO 2.46: . </h5>
            <input
              class="form-control"
              type="text"
              placeholder="2.46"
              readonly
            ></input>
            <div class="form-group">
              <label for="comment">Any other suggestion(s)</label>
              <textarea class="form-control" rows="3" id="comment"></textarea>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
