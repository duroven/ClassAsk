import $ from 'jquery';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
function Register(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        register(email, password);
        navigate('/');
    }

    return (
        <div>
            <h1>
                Create a ClassAsk Account
            </h1> 
            <form>
                <label>First Name:</label>
                <input type="text" id="fname" required /> <br/><br/>

                <label>Last Name:</label>
                <input type="text" id="lname" required /> <br/><br/>
        
                <label>CSUF Email:</label>
                <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} required/> <br/><br/>

                <label>Set Password:</label>
                <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}  required minLength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"/> <br/>
                <p>  (Password should have at least 1 digit, 1 lowercase letter, 1 uppercase letter, and have a minumum of 8 characters) </p>

                <button type="submit" onClick={() => handleSubmit()}> Submit </button>
            </form>
        </div>
    )
}
function register(email, password) {
    $.ajax({
        url: 'http://localhost/classask/src/php/register.php',
        type: 'GET',
        data: {email: email, password: password},
        success: function (data) {
            console.log(data);
        },
        error: function () {
            alert("error");
        }
    });
}

export default Register;

// export
// import in index
// replace tag inside root.render