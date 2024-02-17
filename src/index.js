import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

var Login = (()=>{
    const [email,setEmail]=useState('');
    const [passW,setPassW]=useState('');
    const [newPass,setNewPass]=useState('');
    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');
    const [sameError, setsameError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Validate email format
        if (!email.includes('@')) {
          setEmailError('Email must contain "@" symbol.');
          return;
        }
        else if(passW.length<8 && passW.length!=0)
        {
            setPassError('Password needs to be 8 ');
            return;
        }
        else if(passW.length==0)
        {
            setPassError('Password section needs to be filled ');
            return;
        }
        else if(passW.length!=0 && newPass.length==0)
        {
            setsameError('Password needs to be re-entered');
        }
        else if(passW!=newPass)
        {
            setsameError('Passwords not matching');
            return;
        }
        else
        {
            alert("Form Submitted");
            setEmailError('');
            setPassError('');
            setsameError('');
            setEmail('');
            setPassW('');
            setNewPass('');
        }

        Display(email, passW, newPass);

    // You can add additional logic or API calls here

    console.log('Form submitted with email:', email, 'and password:', passW);
  };

  const Display = (email, password, confirmPassword) => {
    // Add logic for the Display function
    console.log('Display function called with email:', email, 'and password:', password);
    // You can update the UI, make API calls, etc.
  };
    
    return(
        <div className='formpage'>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input 
                type='email' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                /><br/>
                {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                <label>Password:</label>
                <input 
                type='password' 
                value={passW} 
                onChange={(e) => setPassW(e.target.value)}
                /><br/>
                {passError && <p style={{ color: 'red' }}>{passError}</p>}
                <label>Confirm Password:</label>
                <input 
                type='password' 
                value={newPass} 
                onChange={(e) => setNewPass(e.target.value)}
                /><br/>
                {sameError && <p style={{ color: 'red' }}>{sameError}</p>}
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
});

ReactDOM.render(<Login/>,document.getElementById('appl'));