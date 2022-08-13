import "./FillComponent.css";
import { useState } from "react";

export default function FillComponent() {

    const [cvImg, setCvImg]= useState("https://media.istockphoto.com/vectors/male-profile-flat-blue-simple-icon-with-long-shadow-vector-id522855255?k=20&m=522855255&s=612x612&w=0&h=fLLvwEbgOmSzk1_jQ0MgDATEVcVOh_kqEe0rqi7aM5A=");
    const [cvName, setCvName] = useState("");
    const [cvEmail, setCvEmail] = useState("");
    const [cvPhoneNumber, setCvPhoneNumber] = useState("");
    const [cvWebsite, setCvWebsite] = useState("");
    const [cvLocation, setCvLocation] = useState("");
    const [cvProfessionalTitle, setCvProfessionalTitle] = useState("");
    const [cvAbout, setCvAbout] = useState("");
    const [cvSkills, setCvSkills] = useState("");
    const [cvExperience, setCvExperience] = useState("");
    const [cvRole, setCvRole] = useState("");
    const [cvCertificateName, setCvCertificateName] = useState("");
    const [cvCertificateDetails, setCvCertificateDetails] = useState("");
    const [cvCourse, setCvCourse] = useState("");
    const [cvCollege, setCvCollege] = useState("");



    function formSubmitted(e) {
        e.preventDefault();
        document.querySelector(".fill_section").style.display = "none";
        document.querySelector(".template_section").style.display = "block";
    }



    // Function for the image
    document.querySelector(".main_cv_section1_column1>img").src= cvImg;
    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                setCvImg(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0])
    } 


    //Function for the name 
    const cvNameChanged = (event) => {
        setCvName(event.target.value);
    }
    document.querySelector("#main_cv_section1_name").textContent= cvName;


    //Function for the email 
    const cvEmailChanged = (event) => {
        setCvEmail(event.target.value);
    }
    document.querySelector("#main_cv_section1_contact_details_email").textContent= cvEmail;


//Function for the phone number 
const cvPhoneNumberChanged = (event) => {
    setCvPhoneNumber(event.target.value);
}
    document.querySelector("#main_cv_section1_contact_details_phone").textContent= cvPhoneNumber;



//Function for the website
const cvWebsiteChanged = (event) => {
    setCvWebsite(event.target.value);
}
    document.querySelector("#main_cv_section1_contact_details_website").textContent= cvWebsite;


//Function for the location
const cvLocationChanged = (event) => {
    setCvLocation(event.target.value);
}
    document.querySelector("#main_cv_section1_contact_details_location").textContent= cvLocation;



//Function for the professional title
const cvProfessionalTitleChanged = (event) => {
    setCvProfessionalTitle(event.target.value);
}
    document.querySelector("#main_cv_section1_professionalTitle").textContent= cvProfessionalTitle;


//Function for the about
const cvAboutChanged = (event) => {
    setCvAbout(event.target.value);
}
    document.querySelector("#main_cv_section1_profile_description").textContent= cvAbout;


    //Function for the skills 
    const cvSkillsChanged = (event) => {
        setCvSkills(event.target.value);
    }
    document.querySelector("#main_cv_section1_skills_details").textContent= cvSkills;



//Function for the experience
const cvExperienceChanged = (event) => {
    setCvExperience(event.target.value);
}
    document.querySelector("#main_cv_section1_experience_role").textContent= cvExperience;


//Function for the role
const cvRoleChanged = (event) => {
    setCvRole(event.target.value);
}
    document.querySelector("#main_cv_section1_experience_details").textContent= cvRole;


//Function for the certificate name
const cvCertificateNameChanged = (event) => {
    setCvCertificateName(event.target.value);
}
    document.querySelector("#main_cv_section1_certificate_name").textContent= cvCertificateName;



//Function for the certificate details
const cvCertificateDetailsChanged = (event) => {
    setCvCertificateDetails(event.target.value);
}
    document.querySelector("#main_cv_section1_certificate_details").textContent= cvCertificateDetails;


//Function for the course
const cvCourseChanged = (event) => {
    setCvCourse(event.target.value);
}
    document.querySelector("#main_cv_section1_course").textContent= cvCourse;


//Function for the college
const cvCollegeChanged = (event) => {
    setCvCollege(event.target.value);
}
    document.querySelector("#main_cv_section1_college").textContent= cvCollege;


    return (
        <div className="fill_section">

            <h1>Fill in your details-</h1>
            <form id="form" onSubmit={formSubmitted} >

                <label htmlFor="img">Select Image:</label>
                <input type="file" id="img" accept="image/*" onChange={imageHandler}  required /><br /><br />


                <label htmlFor="name">Name:</label><br />
                <input type="text" id="name" placeholder="e.g. Bommana Ayush" value={cvName} onChange={cvNameChanged} required /><br /><br />


                <label htmlFor="email">Email:</label><br />
                <input type="email" id="email" placeholder="e.g. bommanaayush@gmail.com" value={cvEmail} onChange={cvEmailChanged} required /><br /><br />


                <label htmlFor="phone">Phone Number:</label><br />
                <input type="text" id="phone" placeholder="e.g. 73916 39516" pattern="[0-9]{5} [0-9]{5}" value={cvPhoneNumber} onChange={cvPhoneNumberChanged} required /><br /><br />


                <label htmlFor="website">Website:</label><br />
                <input type="url" id="website" placeholder="https://greatsite.com" pattern="https?://.+" value={cvWebsite} onChange={cvWebsiteChanged} required /><br /><br />


                <label htmlFor="location">Location:</label><br />
                <input type="text" id="location" placeholder="e.g. 60/1, Ghola Road, Belghoria, Kolkata, West Bengal" value={cvLocation} onChange={cvLocationChanged} required /><br /><br />



                <label htmlFor="professionalTitle">Professional Title:</label><br />
                <input type="text" id="professionalTitle" placeholder="e.g. Professional Website Developer" value={cvProfessionalTitle} onChange={cvProfessionalTitleChanged} required /><br /><br />


                <label htmlFor="about">About You:</label><br />
                <input type="text" id="about" placeholder="e.g. I am a profesional web developer building sites on HTML, CSS & JS for over 10 years. I also know React JS, Angular, and many more. I am currently looking for ..." value={cvAbout} onChange={cvAboutChanged} required /><br /><br />


                <label htmlFor="skills">Skills:</label><br />
                <input type="text" id="skills" placeholder="e.g. Web Development" value={cvSkills} onChange={cvSkillsChanged} required /><br /><br />



                <label htmlFor="experienceTitle">Add your Experience:</label><br />
                <input type="text" id="experienceTitle" placeholder="e.g. Front-End Developer | Cred. Inc | 2018 - 2020" value={cvExperience} onChange={cvExperienceChanged} required /><br /><br />



                <label htmlFor="experienceRole">Your role during that Experience:</label><br />
                <input type="text" id="experienceRole" placeholder="e.g. My role in Cred. Inc was to improve their application's UI and UX" value={cvRole} onChange={cvRoleChanged} required /><br /><br />


                <label htmlFor="certificateName">Add a Certificate:</label><br />
                <input type="text" id="certificateName" placeholder="e.g. Certificate of Completion" value={cvCertificateName} onChange={cvCertificateNameChanged} required /><br /><br />

                <label htmlFor="certificateDetails">Details of the Certificate:</label><br />
                <input type="text" id="certificateDetails" placeholder="e.g. Certificate of Completion from Scrimba. Inc for the completion of the React JS Course - 2019" value={cvCertificateDetails} onChange={cvCertificateDetailsChanged} required /><br /><br />


                <label htmlFor="courseName">Add a Course (Education) that You've Pursued:</label><br />
                <input type="text" id="courseName" placeholder="e.g. Master of Technology" value={cvCourse} onChange={cvCourseChanged} required /><br /><br />

                <label htmlFor="collegeName">Add your College Name:</label><br />
                <input type="text" id="collegeName" placeholder="e.g. UEM | 2015 - 2018" value={cvCollege} onChange={cvCollegeChanged} required /><br /><br />


                <input type="submit" value="PROCEED" id="submit" />

            </form>
        </div>
    )



}