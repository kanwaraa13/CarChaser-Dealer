import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [postalcode, setPostalCode] = useState('');
    const [city, setCity] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [lastemailError, setLastEmailError] = useState('');
    const [lastphonenumberError, setPhoneNumberError] = useState('');
    const [lastpostalcodeError, setPostalCodeError] = useState('');
    const [cityError, setCityError] = useState('');
   
    const handleSignUp = (event) => {
        event.preventDefault();
        if (firstName.trim() === '') {
            setFirstNameError('First name cannot be empty');
        } else {
            setFirstNameError('');
        }

        if (lastName.trim() === '') {
            setLastNameError('Last name cannot be empty');
        } else {
            setLastNameError('');
        }

        if (email.trim() === '') {
            setLastEmailError('Email cannot be empty');
        }else {
            setLastEmailError('');
        }

        if (phonenumber.trim() === '') {
            setPhoneNumberError('Phone Number cannot be empty');
        } else {
            setPhoneNumberError('');
        }

      

        if (city.trim() === '') {
            setCityError('City cannot be empty');
        } else {
            setCityError('');
        }

        if (firstName.trim() !== '' && lastName.trim() !== '' && email.trim() !== '' && phonenumber.trim() !== '' && city.trim() !== '') {
            // Navigate to the desired page
            navigate('/sellerin');
        }
    };
     
    return (
        <section className="seller-section">
            <div className="container">
                <div className="header-logo">
                    <a href="/">
                        <img src="images/logo.png" alt="logo" />
                    </a>
                </div>
                <div className="seller-heading py-3">
                    <h3 className="main-heading text-center">Dealer Sign Up</h3>
                </div>
                <form onSubmit={handleSignUp}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="First name*"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                             {firstNameError && <div className="text-danger">{firstNameError}</div>}
                        </div>
                        <div className="form-group col-md-6">
                            <input type="text" 
                             className="form-control"
                             placeholder="Last name*" 
                             value={lastName}
                             onChange={(e) => setLastName(e.target.value)}
                            />
                             {lastNameError && <div className="text-danger">{lastNameError}</div>}
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="email" 
                        className="form-control"
                        id="inputEmail4"
                        placeholder="Email*" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                         {lastemailError && <div className="text-danger">{lastemailError}</div>}
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">    
                            <input type="text" class="form-control" id="inputcompanyname" placeholder="Dealership Name*"/>
                        </div>
                        <div class="form-group col-md-6">    
                            <input type="text" class="form-control" id="inputcompanyname" placeholder="Dealership ID*"/>
                        </div>
                   </div>
                    <div className="form-group">
                        <input type="text" 
                        className="form-control" 
                        id="inputCity"
                         placeholder="City, Province/State, Country*"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        />
                         {cityError && <div className="text-danger">{cityError}</div>}
                    </div>
                    <div className="form-group">
                        <input type="number" 
                        className="form-control"
                         id="inputphone" 
                         placeholder="Phone number*"
                         value={phonenumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        {lastphonenumberError && <div className="text-danger">{lastphonenumberError}</div>}
                    </div>
                    <p>Car-Chaser Technology needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our Privacy Policy.</p>
                    <button type="submit" className="btn btn-primary w-100 py-3">Sign Up</button>
                    <div className="bottom-link pt-4 text-center">
                        <p>Already have an account? <a href="seller-signin.html" className="w-100 py-3">Sign In</a></p>
                    </div>
                </form>
            </div>
        </section>
    );
};
