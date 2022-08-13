import "./MainCvComponent.css";
import { useState } from "react";


export default function MainCvComponent() {

    return (
        <>

            {/* 1st design template :- */}
            <div className="main_cv_section1">

                <div className="main_cv_section1_column1">

                    <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" />

                    <h1 id="main_cv_section1_contact_title">CONTACT</h1>
                    <ul id="main_cv_section1_contact_details">
                        <li><b>Phone-</b> <span id="main_cv_section1_contact_details_phone"></span></li>
                        <li><b>Website-</b> <span id="main_cv_section1_contact_details_website"></span></li>
                        <li><b>Mail-</b> <span id="main_cv_section1_contact_details_email"></span></li>
                        <li><b>Location-</b> <span id="main_cv_section1_contact_details_location"></span></li>
                    </ul>

                    <h1 id="main_cv_section1_education_title">EDUCATION</h1>
                    <h2 id="main_cv_section1_course">Bachelor of Arts</h2>
                    <p id="main_cv_section1_college">University of Borcelle<br />2008 - 2012 | GPA: 3.8</p>

                    <h1 id="main_cv_section1_skills_title">SKILL</h1>
                    <p id="main_cv_section1_skills_details">Web Development</p>

                    <h1 id="main_cv_section1_certificate_title">CERTIFICATE</h1>
                    <h2 id="main_cv_section1_certificate_name">Certificate of Completion</h2>
                    <p id="main_cv_section1_certificate_details">Certificate of Completion from Scrimba. Inc for the completion of the React JS Course - 2019</p>

                </div>


                <div className="main_cv_section1_column2">

                    <div className="main_cv_section1_column2_topBox">
                        <h1 id="main_cv_section1_name">Pedro Fernandes</h1>
                        <h2 id="main_cv_section1_professionalTitle">Social Media Manager</h2>
                    </div>

                    <div className="main_cv_section1_column2_bottomBox">
                        <h1 id="main_cv_section1_profile_title">PROFILE</h1>
                        <p id="main_cv_section1_profile_description">I am an experienced social media manager seeking a full-time position in the field of social media and marketing communications, where I can apply my knowledge and skills for continuous improvement.</p>

                        <h1 id="main_cv_section1_experience_title">EXPERIENCE</h1>
                        <h2 id="main_cv_section1_experience_role">Social Media Producer | Fauget | Jan 2015 - Present</h2>
                        <p id="main_cv_section1_experience_details">Managed social media accounts and created social media for daily postings | Increased social media following and clicks by 200%</p>
                    </div>

                </div>


            </div>


            {/* 2nd design template :- */}
            {/* <div className="main_cv_section2">
                <h2 id="cv_section2_name">Name here</h2>
                <h3 id="cv_section2_email">Email here</h3>
                <p id="cv_section2_skills">Skills here</p>
            </div> */}
        </>
    )
}
