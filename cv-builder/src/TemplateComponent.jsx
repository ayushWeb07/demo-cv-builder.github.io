import "./TemplateComponent.css";
import template1 from "./assets/template1.png";

export default function TemplateComponent() {

    const showTemplate1= () => {
        document.querySelector(".template_section").style.display ="none";
        document.querySelector(".cv_section").style.display ="block";
        document.querySelector(".main_cv_section1").style.display ="flex";
    }


    return (

        <div className="template_section">

            <h1>Choose a template-</h1>
            <div className="templates">
                <img src={template1} onClick={showTemplate1} />
            </div>

        </div>

    )
}