import "./CvComponent.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import MainCvComponent from "./MainCvComponent.jsx";

export default function CvComponent() {

let input;

    const exportPDF = () => {

      if(document.querySelector(".main_cv_section1").style.display ==="flex"){
       input= document.querySelector(".main_cv_section1");
      } else if(document.querySelector(".main_cv_section2").style.display ==="block"){
        input= document.querySelector(".main_cv_section2");
       }

        html2canvas(input, {logging: true, letterRendering: 1, useCORS: true}).then(canvas => {
          const imgWidth= 208;
          const imgHeight= canvas.height * imgWidth / canvas.width;
          const imgData= canvas.toDataURL('img/png');
          const pdf= new jsPDF('p', 'mm', "a4");
          pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
          pdf.save("cv.pdf");
        })
      }

    return (

        <div className="cv_section">

            <h1>Download your CV</h1>

            <MainCvComponent />

            <button id="download_cv" onClick={() => exportPDF()} >DOWNLOAD</button>

        </div>

    )
}