import "./Header.css";
import fill_icon from "./assets/typing.png";
import choose_icon from "./assets/choice.png";
import file_icon from "./assets/file.png";

export default function Header() {
    return (

        <header>

            <div className="header_col1">
                <img src={fill_icon} />
                <h1>Fill in your Details</h1>
                <p>In the first step, you need to fill in your details that will be shown in your CV</p>
            </div>


            <div className="header_col2">
                <img src={choose_icon} />
                <h1>Choose a Template</h1>
                <p>Then, you need to choose a template which will be basically the design of your CV</p>
            </div>


            <div className="header_col3">
                <img src={file_icon} />
                <h1>Download your CV</h1>
                <p>Finally, download your CV for free!</p>
            </div>

        </header>

    )
}