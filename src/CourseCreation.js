import $ from 'jquery';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
function CourseCreation(){
    const [className, setClassName] = useState("");
    const [classCode, setClassCode] = useState(""); // class code will need to be divided into prefix and code/number 
    const [classNumber, setClassNumber] = useState("");

    const navigate = useNavigate();

    const handleSubmit = () => {
        create(className, classCode, classNumber);
        navigate('/subscribe');
    }

    return (
        <div>
            <h1>
                Create a Class
            </h1> 
            <form>
                <label>Course Name:</label>
                <input type="text" id="className" onChange={(e) => setClassName(e.target.value)}required maxLength="60"/> <br/><br/>

                <label>Course Code:</label>
                <input type="text" id="classCode" onChange={(e) => setClassCode(e.target.value)}required /> <br/><br/>

                <label>Class Number: </label>
                <input type="text" id="classNumber" onChange={(e) => setClassNumber(e.target.value)}  required maxLength="5" /> <br/><br/>
            </form>
            <button onClick={() => handleSubmit()}> Submit </button>

        </div>
    )
}

function create(className, classCode, classNumber) {
    $.ajax({
        url: 'http://localhost/classask/src/php/courseCreation.php',
        type: 'POST',
        data: {className: className, classCode: classCode, classNumber: classNumber},
        success: function (data) {
            console.log(data);
            alert("Successfully created course!");
        },
        error: function () {
            alert("error");
        }
    });
}


export default CourseCreation;

// export
// import in index
// replace tag inside root.render