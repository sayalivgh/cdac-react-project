import './Login.css';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import loginImg from '../../images/login.svg';
import { useState } from 'react';
import { regexPatterns } from '../../utilities/constants'
const Login = () => {
    const initialInputs = {
        email: '',
        password: ''
    }
    const [userInputs, setUserinputs] = useState(initialInputs)
    const [isEmailInValid, setIsEmailInValid] = useState(null)
    const [isPasswordInValid, setIsPasswordInValid] = useState(null)
    const handleSubmit = (event) => {
        const { email, password } = userInputs;
        event.preventDefault();
        event.stopPropagation();
        const isEmailValid = regexPatterns.emailRegex.test(email);
        const isPasswordValid = password.length;
        setIsEmailInValid(!isEmailValid);
        setIsPasswordInValid(!isPasswordValid); 

        if (isEmailValid && isPasswordValid) {
            //TODO: call login api
            window.alert('Successful login')
        }
      };

      const handleInputChange = (event, inputType) => {
        if (inputType === 'email' && isEmailInValid && regexPatterns.emailRegex.test(event.target.value)) {
            setIsEmailInValid(false);
        }
        if (inputType === 'password' && isPasswordInValid && event.target.value.length){
            setIsPasswordInValid(false);
        }
        setUserinputs({
            ...userInputs,
            [inputType]: event.target.value
        });
      }
     
    return (
        <div className='login-form-parent'>
            <div className='login-image-container'>
                <img src={loginImg} alt="login-image"/>               
            </div>
            <div className='login-form'>
                    <h2 className='mb-3'>Welcome to App</h2>
                    <Form noValidate onSubmit={handleSubmit}>
                    <FloatingLabel
                        controlId="emailInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control 
                            isInvalid={isEmailInValid ?? false} 
                            value={userInputs.email}  
                            type="email" 
                            placeholder="Email address"
                            onChange={(event) => handleInputChange(event, 'email')}
                            required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide valid email address.
                        </Form.Control.Feedback>
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="passwordInput"
                        label="Password"
                        className="mb-3"
                    >
                        <Form.Control 
                            isInvalid={isPasswordInValid ?? false} 
                            value={userInputs.password} 
                            type="password" 
                            placeholder="Password"
                            onChange={(event) => handleInputChange(event, 'password')}
                            required />
                        <Form.Control.Feedback type="invalid">
                            Please provide valid Password.
                        </Form.Control.Feedback>
                    </FloatingLabel>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>    
                    </Form>            
            </div>
        </div>
        );
}

export default Login