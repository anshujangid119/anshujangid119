import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginReg from "./components/Pages/auth/LoginReg";
import ResetPassword from "./components/Pages/auth/ResetPassword";
import SendPasswordResetEmail from "./components/Pages/auth/SendPasswordResetEmail";
import Contact from "./components/Pages/Contact";
import Dashboard from "./components/Pages/Dashboard";
import Home from "./components/Pages/Home";
import Otp from "./components/Pages/Otp";
import Layout from "./components/Pages/Layout";
import Demo from "./components/form/Demo";
import CourseEF from "./components/form/CourseEF";
import Alumni from "./components/form/Alumni";
import ExitFS from "./components/form/ExitFS";
import ParentFF from "./components/form/ParentFF";
import EndFF from "./components/form/EndFF";
import EmployerFF from "./components/form/EmployerFF";
import FacultyFF from "./components/form/FacultyFF";
import EmployeeForm from "./components/Grievance_form/EmployeeForm";
import ParentForm from "./components/Grievance_form/ParentForm";
import StudentForm from "./components/Grievance_form/StudentForm";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<LoginReg />} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="reset" element={<ResetPassword />} />
            <Route path='/otp' element={<Otp />} />
            <Route path='/Demo' element={<Demo />} />
            <Route path='/Alumni'element={<Alumni />} />
            <Route path='/CourseEF'element={<CourseEF />} />
            <Route path='/ExitFS'element={<ExitFS />} />
            <Route path='/ParentFF'element={<ParentFF/>} />
            <Route path='/EndFF'element={<EndFF/>} />
            <Route path='/EmployerFF'element={<EmployerFF /> } />
            <Route path='/FacultyFF'element={<FacultyFF />} />
            <Route path='/ParentForm'element={<ParentForm />} /> 
            <Route path='/EmployeeForm'element={<EmployeeForm />} />
            <Route path='/StudentForm'element={<StudentForm />} />
            
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;