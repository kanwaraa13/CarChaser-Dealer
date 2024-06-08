import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import axios from "axios";
export const DealerIn = () => {
  const navigate = useNavigate();
  const [phonenumber, setPhoneNumber] = useState("");
  const [lastphonenumberError, setPhoneNumberError] = useState("");
  const [errors, setErrors] = useState({});
  const handlePhoneNumberChange = async (event) => {
    const phoneNumberValue = event.target.value;
    setPhoneNumber(phoneNumberValue);
  };
  const handleSignIn = async (event) => {
    event.preventDefault();
    if (phonenumber.trim() === "") {
      setPhoneNumberError("Phone Number cannot be empty");
    } else {
      setPhoneNumberError("");
      sessionStorage.setItem("phoneNumber", phonenumber);
    }
    if (phonenumber.trim() !== "") {
      try {
        const response = await api.post("/auth/dealer/login", {
          phone: phonenumber,
        });
        if (response.data.status == true) {
          navigate("/verification");
        } else {
          const otpmessage = "Otp Not Sent please try again later";
          setErrors({ message: otpmessage });
        }
      } catch (error) {
        console.error("Error occurred during registration:", error);
        console.error("Response from server:", error.response); // Log the error response
        if (error.response && error.response.status === 500) {
          // Internal server error
          const errorMessage = "Wrong Credentials";
          setErrors({ message: errorMessage });
        } else {
          // Other errors
          setErrors(error.response?.data?.errors || {});
        }
      }
    }
  };
  return (
    <section class="seller-section seller-signin">
      <div class="container">
        <div class="header-logo">
          <a href="/">
            <img src="images/logo.png" alt="logo" />
          </a>
        </div>
        <div class="seller-heading text-center py-4">
          <h3 class="main-heading">Dealer Sign-In </h3>
          <p>Welcome to Car Chaser</p>
        </div>
        <form onSubmit={handleSignIn}>
          <div class="form-group">
            <input
              type="number"
              class="form-control py-3"
              id="inputphone"
              placeholder="Phone number"
              value={phonenumber}
              onChange={handlePhoneNumberChange}
            />
            {lastphonenumberError && (
              <div className="text-danger">{lastphonenumberError}</div>
            )}
          </div>
          {errors && errors.message && (
            <div className="error-message">
              <p class="text-danger">{errors.message}</p>
            </div>
          )}
          <button type="submit" className="btn btn-primary w-100 py-3">
            Sign In
          </button>
          <div class="bottom-link pt-4 text-center">
            <p>
              {" "}
              Don't have an account?{" "}
              <a href="/" class="w-100 py-3">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
