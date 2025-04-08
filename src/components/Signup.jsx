import { useState } from "react";

const Signup = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup forms
  // 'loginStage' manages the three-step login process: 'primary' for credentials, 'otp' for entering the OTP, and 'verified' for final login.
  const [loginStage, setLoginStage] = useState("primary");
  const [loginCredentials, setLoginCredentials] = useState({
    identifier: "",
    password: "",
    otp: "",
  });

  const handleSignupClick = () => {
    setIsLogin(false); // Switch to signup form
  };

  const handleLoginClick = () => {
    setIsLogin(true); // Switch to login form
    // Reset login stage when switching back to login
    setLoginStage("primary");
  };

  const handleLoginChange = (e) => {
    setLoginCredentials({ ...loginCredentials, [e.target.name]: e.target.value });
  };

  // Handler for primary login submission.
  const handlePrimarySubmit = (e) => {
    e.preventDefault();
    // Verify primary credentials and send OTP to the user's mobile here.
    console.log("Primary credentials submitted:", loginCredentials);
    // Simulate sending OTP by moving to the OTP stage.
    setLoginStage("otp");
  };

  // Handler for OTP submission.
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Verify the OTP here.
    console.log("OTP submitted:", loginCredentials.otp);
    // Simulate successful OTP verification by moving to the verified stage.
    setLoginStage("verified");
  };

  // Handler for final login submission.
  const handleFinalLogin = (e) => {
    e.preventDefault();
    // Final login action after OTP verification.
    console.log("Final login action with credentials:", loginCredentials);
    alert("Authenticated! Welcome to your account.");
  };

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className={`title login ${isLogin ? "" : "hidden"}`}>Login Form</div>
        <div className={`title signup ${isLogin ? "hidden" : ""}`}>Signup Form</div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input
            type="radio"
            name="slide"
            id="login"
            checked={isLogin}
            onChange={handleLoginClick}
          />
          <input
            type="radio"
            name="slide"
            id="signup"
            checked={!isLogin}
            onChange={handleSignupClick}
          />
          <label htmlFor="login" className="slide login">
            Login
          </label>
          <label htmlFor="signup" className="slide signup">
            Signup
          </label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          {isLogin ? (
            loginStage === "primary" ? (
              <form action="#" className="login" onSubmit={handlePrimarySubmit}>
                <div className="field">
                  <input
                    type="text"
                    name="identifier"
                    placeholder="Email or Mobile"
                    required
                    value={loginCredentials.identifier}
                    onChange={handleLoginChange}
                  />
                </div>
                <div className="field">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={loginCredentials.password}
                    onChange={handleLoginChange}
                  />
                </div>
                <div className="pass-link">
                  <a href="#">Forgot password?</a>
                </div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Continue" />
                </div>
                <div className="signup-link">
                  Create an account{" "}
                  <a href="#" onClick={handleSignupClick}>
                    Signup now
                  </a>
                </div>
              </form>
            ) : loginStage === "otp" ? (
              <form action="#" className="login" onSubmit={handleOtpSubmit}>
                <div className="field">
                  <input
                    type="text"
                    name="otp"
                    placeholder="Enter OTP"
                    required
                    value={loginCredentials.otp}
                    onChange={handleLoginChange}
                  />
                </div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Verify OTP" />
                </div>
              </form>
            ) : (
              // loginStage is "verified"
              <form action="#" className="login" onSubmit={handleFinalLogin}>
                <p style={{ textAlign: "center", marginBottom: "20px" }}>
                  OTP verified successfully!
                </p>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Login" />
                </div>
              </form>
            )
          ) : (
            <form action="#" className="signup">
              <div className="field">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="field">
                <input type="text" placeholder="Email Address" required />
              </div>
              <div className="field">
                <input type="number" placeholder="DOB" required />
              </div>
              <div className="field">
                <input type="password" placeholder="Password" required />
              </div>
              <div className="field">
                <input type="password" placeholder="Confirm password" required />
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Signup" />
              </div>
              <div className="signup-link">
                Already have an account?{" "}
                <a href="#" onClick={handleLoginClick}>
                  Login
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;



// import { useState } from "react";

// const Signup = () => {
//   const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

//   const handleSignupClick = () => {
//     setIsLogin(false); // Switch to signup form
//   };

//   const handleLoginClick = () => {
//     setIsLogin(true); // Switch to login form
//   };

//   return (
//     <div className="wrapper">
//       <div className="title-text">
//         <div className={`title login ${isLogin ? "" : "hidden"}`}>Login Form</div>
//         <div className={`title signup ${isLogin ? "hidden" : ""}`}>Signup Form</div>
//       </div>
//       <div className="form-container">
//         <div className="slide-controls">
//           <input
//             type="radio"
//             name="slide"
//             id="login"
//             checked={isLogin}
//             onChange={handleLoginClick}
//           />
//           <input
//             type="radio"
//             name="slide"
//             id="signup"
//             checked={!isLogin}
//             onChange={handleSignupClick}
//           />
//           <label htmlFor="login" className="slide login">
//             Login
//           </label>
//           <label htmlFor="signup" className="slide signup">
//             Signup
//           </label>
//           <div className="slider-tab"></div>
//         </div>
//         <div className="form-inner">
//           {isLogin ? (
//             <form action="#" className="login">
//               <div className="field">
//                 <input type="text" placeholder="Email or Mobile" required />
//               </div>
//               <div className="field">
//                 <input type="password" placeholder="Password" required />
//               </div>
//               <div className="pass-link">
//                 <a href="#">Forgot password?</a>
//               </div>
//               <div className="field btn">
//                 <div className="btn-layer"></div>
//                 <input type="submit" value="Login" />
//               </div>
//               <div className="signup-link">
//                 Create an account <a href="#" onClick={handleSignupClick}>Signup now</a>
//               </div>
//             </form>
//           ) : (
//             <form action="#" className="signup">
//               <div className="field">
//                 <input type="text" placeholder="Full Name" required />
//               </div>
//               <div className="field">
//                 <input type="text" placeholder="Email Address" required />
//               </div>
//               <div className="field">
//                 <input type="number" placeholder="DOB" required />
//               </div>
//               <div className="field">
//                 <input type="password" placeholder="Password" required />
//               </div>
//               <div className="field">
//                 <input type="password" placeholder="Confirm password" required />
//               </div>
//               <div className="field btn">
//                 <div className="btn-layer"></div>
//                 <input type="submit" value="Signup" />
//               </div>
//               <div className="signup-link">
//                 Already have an account? <a href="#" onClick={handleLoginClick}>Login</a>
//               </div>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
 


// import { useState} from 'react';

// const Signup = () => {
//    const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     mobile: "",
//     dob: "",
//     password: "",
//   });
//   const [message, setMessage] = useState("");
//   const [isSignup, setIsSignup] = useState(true); // To toggle between Sign Up and Login

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const url = isSignup ? "/api/auth/signup" : "/api/auth/login"; // Toggle URL based on mode
//       const response = await axios.post(url, formData);
//       setMessage(response.data);
//     } catch (error) {
//       setMessage("Error during " + (isSignup ? "signup" : "login") + ".");
//     }
//   };

//   const toggleButton = () => {
//     setIsSignup(!isSignup); // Toggle between signup and login
//   };
  
//   return (
//     <div className="flex justify-center">
//       <div className="container-auto rounded-md w-96 border border-slate-200 shadow-lg flex justify-center">
//         <div className="w-full p-4">
//           <form onSubmit={handleSubmit}>
//             <h1 className="p-2 text-black text-center text-xl font-bold">Signup</h1>
//             <div className="mb-4">
//              <input
//           name="fullName"
//           placeholder="Full Name"
//           onChange={handleChange}
//           className="w-full p-2 border border-gray-300 rounded"
//           required
//         />
//             </div>
//             <div className="mb-4">
//                <input
//           name="email"
//           type="email"
//           placeholder="Email"
//           onChange={handleChange}
//           className="w-full p-2 border border-gray-300 rounded"
//           required
//         />
//             </div>
// <div className="mb-4">
//   <input
//           name="mobile"
//           placeholder="Mobile"
//           onChange={handleChange}
//           className="w-full p-2 border border-gray-300 rounded"
//           required
//         />
//   </div>
//   <div className="mb-4">
//     <input
//           name="dob"
//           placeholder="MM-DD-YYYY"
//           onChange={handleChange}
//           className="w-full p-2 border border-gray-300 rounded"
//           required
//         />
//   </div>
//   <div className="mb-4">
//     <input
//           name="password"
//           type="password"
//           placeholder="Password"
//           onChange={handleChange}
//           className="w-full p-2 border border-gray-300 rounded"
//           required
//         />
//   </div>


//          <button
//         type="button"
//         onClick={toggleButton}
//         className={`py-2 px-4 rounded ${
//           isSignup ? "bg-blue-500 text-white" : "bg-green-500 text-white"
//         }`}
//       >
//         {isSignup ? "Sign Up" : "Login"}
//       </button>
//           </form>
//            {message && <p className="mt-4">{message}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };


////////////////////////////////////
// const LoginSignup = () => {
//   const [showOTP, setShowOTP] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [otp, setOtp] = useState('');

//   const handleGetOtp = (e) => {
//     e.preventDefault();
//     // Here, you would typically trigger an API call to send an OTP to the user's mobile.
//     // For now, we'll simply show the OTP field.
//     setShowOTP(true);
//     console.log('OTP sent to mobile!');
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Validate the OTP along with username and password.
//     // You can perform an API call to verify all credentials here.
//     console.log('Login attempted with:', { username, password, otp });
//   };

//   return (
//     <div className="flex justify-center">
//       <div className="container-auto rounded-md w-96 border border-slate-200 shadow-lg flex justify-center">
//         <div className="w-full p-4">
//           <form onSubmit={showOTP ? handleSubmit : handleGetOtp}>
//             <h1 className="p-2 text-black text-center text-xl font-bold">Login</h1>
//             <div className="mb-4">
//               <input
//                 type="text"
//                 placeholder="Username"
//                 required
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded"
//               />
//             </div>
//             {showOTP && (
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   placeholder="Enter OTP"
//                   required
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//             )}
//             <div className="flex justify-center">
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
//               >
//                 {showOTP ? 'Login' : 'Get OTP'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };


//////////////////////////////////


// import React, { useState } from 'react';
// import './LoginSignup.css';

// const LoginSignup = () => {
//     return (
//         <div className="flex justify-center">
//         <div class="container-auto rounded-md w-96 border border-slate-200 shadow-lg flex justify-center ">
//             <div className="w-72  h-40">
//                 <form action="">
//                     <h1 class="p-2 text-black">Login</h1>
//                     <div className="w-full ">
//                         <input type="text" placeholder='Username' required />
//                         </div>
//                 </form>
//                 </div>
//                 </div>
//                 </div>
//     );
// };

// const LoginSignup = () => {
//     const [isLogin, setIsLogin] = useState(true);
//     const [email, setEmail] = useState('');
//     const [mobile, setMobile] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [dob, setDob] = useState('');
//     const [otp, setOtp] = useState('');
//     const [otpSent, setOtpSent] = useState(false);
//     const [otpVerified, setOtpVerified] = useState(false);

//     const handleSignup = () => {
//         // Handle signup logic here
//     };

//     const handleLogin = () => {
//         // Handle login logic here
//     };

//     const handleSendOtp = (type) => {
//         // Handle sending OTP logic here
//         setOtpSent(true);
//     };

//     const handleVerifyOtp = () => {
//         // Handle OTP verification logic here
//         setOtpVerified(true);
//     };

//     const handleResetPassword = () => {
//         // Handle reset password logic here
//     };

//     return (
//         <div>
//             {isLogin ? (
//                 <div>
//                     <h2>Login</h2>
//                     <input
//                         type="text"
//                         placeholder="Email or Mobile Number"
//                         value={email || mobile}
//                         onChange={(e) => {
//                             const value = e.target.value;
//                             if (value.includes('@')) {
//                                 setEmail(value);
//                                 setMobile('');
//                             } else {
//                                 setMobile(value);
//                                 setEmail('');
//                             }
//                         }}
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <button onClick={handleLogin}>Login</button>
//                     <button onClick={() => setIsLogin(false)}>Create Account</button>
//                     <button onClick={handleResetPassword}>Reset Password</button>
//                 </div>
//             ) : (
//                 <div>
//                     <h2>Signup</h2>
//                     <input
//                         type="email"
//                         placeholder="Email ID"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <button onClick={() => handleSendOtp('email')}>Get OTP</button>
//                     {otpSent && (
//                         <div>
//                             <input
//                                 type="text"
//                                 placeholder="Enter OTP"
//                                 value={otp}
//                                 onChange={(e) => setOtp(e.target.value)}
//                             />
//                             <button onClick={handleVerifyOtp}>Verify OTP</button>
//                         </div>
//                     )}
//                     <input
//                         type="text"
//                         placeholder="Mobile Number"
//                         value={mobile}
//                         onChange={(e) => setMobile(e.target.value)}
//                     />
//                     <button onClick={() => handleSendOtp('mobile')}>Get OTP</button>
//                     {otpSent && (
//                         <div>
//                             <input
//                                 type="text"
//                                 placeholder="Enter OTP"
//                                 value={otp}
//                                 onChange={(e) => setOtp(e.target.value)}
//                             />
//                             <button onClick={handleVerifyOtp}>Verify OTP</button>
//                         </div>
//                     )}
//                     <input
//                         type="password"
//                         placeholder="Create Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <input
//                         type="password"
//                         placeholder="Confirm Password"
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                     />
//                     <input
//                         type="date"
//                         placeholder="Date of Birth"
//                         value={dob}
//                         onChange={(e) => setDob(e.target.value)}
//                     />
//                     <button onClick={handleSignup}>Create Account</button>
//                     <button onClick={() => setIsLogin(true)}>Already have an account? Login</button>
//                 </div>
//             )}
//         </div>
//     );
// };

//export default Signup;