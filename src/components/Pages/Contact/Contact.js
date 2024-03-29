import React, { useState } from "react";
import { validateEmail } from "../../../utils/helpers";
import "./Contact.css";

function Contact() {
  return (
    <section className="page">
      <h1 className="title">Contact</h1>
      <br></br>
      <div className="contactFirst">
        <h2>Send me an email:</h2>{" "}
        <a href="mailto:izzcreativa@gmail.com" target="_blank">
          izzcreativa@gmail.com
        </a>
      </div>
      <br></br>
      <div className="contact">
        <h2>Send me a message on LinkedIn:</h2>{" "}
        <a
          href="https://www.linkedin.com/in/izzy-ramirez/"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
      <br></br>
      <div className="contactLast">
        <h2>Check out my GitHub:</h2>{" "}
        <a href="https://github.com/izztnkr" target="_blank">
          izztnkr on GitHub
        </a>
      </div>
    </section>
  );
}
// function Contact() {
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [errorMessage, setErrorMessage] = useState("");
//   const { name, email, message } = formState;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!errorMessage) {
//       setFormState({ [e.target.name]: e.target.value });
//       console.log("Form", formState);
//     }
//   };

//   const handleChange = (e) => {
//     if (e.target.name === "email") {
//       const isValid = validateEmail(e.target.value);
//       if (!isValid) {
//         setErrorMessage("Your email is invalid.");
//       } else {
//         setErrorMessage("");
//       }
//     } else {
//       if (!e.target.value.length) {
//         setErrorMessage(`${e.target.name} is required.`);
//       } else {
//         setErrorMessage("");
//       }
//     }
//   };

//   return (
//     <section className="title">
//       <br></br>
//       <br></br>
//       <h1 data-testid="h1tag">Contact me</h1>
//       <br></br>
//       <br></br>
//       <form id="contact-form" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             name="name"
//             defaultValue={name}
//             onBlur={handleChange}
//           />
//         </div>
//         <br></br>
//         <div>
//           <label htmlFor="email">Email address:</label>
//           <input
//             type="email"
//             name="email"
//             defaultValue={email}
//             onBlur={handleChange}
//           />
//         </div>
//         <br></br>
//         <div>
//           <label htmlFor="message">Message:</label>
//           <textarea
//             name="message"
//             rows="5"
//             defaultValue={message}
//             onBlur={handleChange}
//           />
//         </div>
//         <br></br>
//         {errorMessage && (
//           <div>
//             <p className="error-text">{errorMessage}</p>
//           </div>
//         )}
//         <div className="subbutton">
//           <button data-testid="button" type="submit" className="subbutton">
//             Submit
//           </button>
//         </div>
//         <br></br>
//         <br></br>
//         <br></br>
//       </form>
//     </section>
//   );
// }
export default Contact;
