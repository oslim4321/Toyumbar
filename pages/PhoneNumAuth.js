import React, { useState, useEffect } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "../lib/firebase";

const PhoneAuth = () => {
  const [otp, setOtp] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [error, setError] = useState("");
  const [appVerifier, setAppVerifier] = useState(null);
  const [user, setuser] = useState(false);

  useEffect(() => {
    // Initialize the RecaptchaVerifier on component mount
    const verifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
      },
      auth
    );
    setAppVerifier(verifier);
  }, []);

  const handleSendOTP = async () => {
    try {
      // Step 1: Verify reCAPTCHA token
      const response = await appVerifier.verify();

      // Step 2: Send SMS verification code to phone number
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier
      );

      // Step 3: Store verification ID and show OTP input
      setVerificationId(confirmationResult.verificationId);
      setShowOTP(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      await signInWithCredential(auth, credential);
      setError("");
      setPhoneNumber("");
      // setShowOTP(false);
      setOtp("");
      alert("Account created successfully!");
      setuser(true);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <section>
      <div id="recaptcha-container"></div>

      <div className="max-w-7xl mx-auto">
        <div id="recaptcha-container-inner">
          {user ? (
            <div>login succesgul</div>
          ) : showOTP ? (
            <div>
              <h1>Enter your OTP</h1>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="border"
              />
              <button className="border p-3" onClick={handleVerifyOTP}>
                Verify OTP
              </button>
            </div>
          ) : (
            <div>
              <h1>Enter your phone number to create an account</h1>
              <PhoneInput
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={setPhoneNumber}
                country={"in"}
              />
              {error && <p>{error}</p>}
              <button className="border p-3" onClick={handleSendOTP}>
                Send OTP
              </button>
              <div id="recaptcha-container"></div>
            </div>
          )}
          {}
        </div>
      </div>
    </section>
  );
};

export default PhoneAuth;
