import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import videoclip from "../../components/contacts/video/bg-videoclip-2.mp4";
// motion
import { motion } from "framer-motion";
//variant for motion
import { fadeIn } from "../variants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { faFirstAid } from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleFocus = (event) => {
    event.target.placeholder = "";
  };

  const handleBlur = (event) => {
    event.target.placeholder =
      event.target.name === "from_name"
        ? "Enter your Name"
        : event.target.name === "from_email"
        ? "Enter your Email"
        : "Enter a message";
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gv6m59c", "template_gpqfpej", form.current, {
        publicKey:
          "-h1fd7jAybOB9v8Is" /** https://dashboard.emailjs.com/admin/account **/,
      })
      .then(
        () => {
          // alert("Successfully Send!");
          toast.success("Successfully Send!");

          // Clear the input values after successful submission
          setFormData({
            from_name: "",
            from_email: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="Contact-container" className="forallBG">
      <div className="wrap">
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="Contact-holder">
          <div className="contact-img-holder col-2">
            <video
              src={videoclip}
              autoPlay
              loop
              muted
              width="100%"
              height="100%"
            />
          </div>
          <div className="contact-form-holder col-2">
            <form ref={form} onSubmit={sendEmail}>
              <h5> CONTACT FORM</h5>
              <p>send message now</p>
              <label>Name</label>
              <input
                type="text"
                name="from_name"
                placeholder="Enter your Name"
                required
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={formData.from_name}
                onChange={handleInputChange}
              />
              <label>Email</label>
              <input
                type="email"
                name="from_email"
                placeholder="Enter your Email"
                required
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={formData.from_email}
                onChange={handleInputChange}
              />
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Enter a message"
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={formData.message}
                onChange={handleInputChange}
              />
              <input type="submit" value="Send" />
            </form>
            <ToastContainer />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
