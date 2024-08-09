import "./Contact.css";
import mailIcon from "../../assets/mail_icon.svg";
import callIcon from "../../assets/call_icon.svg";
import LoctionIcon from "../../assets/location_icon.svg";
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef(null);
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setMsg("Message sent successfully");
          setTimeout(() => {
            setMsg("");
          }, 5000);
          form.reset();
        } else {
          throw new Error("Failed to send message");
        }
      })
      .catch((error) => {
        console.error("Error!", error.message);
        setMsg("Failed to send message. Please try again later.");
      });
  };

  return (
    <div className="contact" id="contact">
      <div className="contact_title">
        <h1>Get in touch.</h1>
      </div>
      <div className="contact_section">
        <div className="contact_left contact_details_left">
          <h1>Contact Me</h1>
          <div className="contact_details">
            <div className="contact_detail">
              <img src={mailIcon} alt="" />
              <p>akhilprakashmanissery@gmail.com</p>
            </div>
            <div className="contact_detail">
              <img src={callIcon} alt="" />
              <p>+91 7012896687</p>
            </div>
            <div className="contact_detail">
              <img src={LoctionIcon} alt="" />
              <p>Bangalore, Karnataka, India</p>
            </div>
            <div className="social_icons">
              <a
                href="https://www.linkedin.com/in/akhil-k-p-6476a322b/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin" />
              </a>
              <a href="https://github.com/Akhilpraka5h" target="_blank">
                <i className="fa-brands fa-github" />
              </a>
              <a href="https://wa.me/+917012896687" target="_blank">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="mailto:akhilprakashmanissery@gmail.com" target="_blank">
                <i className="fa-brands fa-google" />
              </a>
            </div>
          </div>
        </div>
        <div className="contact_right">
          <form
            onSubmit={handleSubmit}
            ref={formRef}
            className="contact_right_form"
          >
            <input
              type="text"
              name="name"
              id=""
              placeholder="Enter Your Name"
              required
            />

            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter Your Email"
              required
            />

            <textarea
              name="message"
              id=""
              rows="10"
              placeholder="Enter your message"
              required
            ></textarea>
            <span id="msg">{msg}</span>
            <button type="submit" className="contact_submit">
              Submit
            </button>
          </form>
          <div className="Mob_social_icons">
            <div className="social_icons_mob_view">
              <a
                href="https://www.linkedin.com/in/akhil-k-p-6476a322b/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin" />
              </a>
              <a href="https://github.com/Akhilpraka5h" target="_blank">
                <i className="fa-brands fa-github" />
              </a>
              <a href="https://wa.me/+917012896687">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="mailto:akhilprakashmanissery@gmail.com">
                <i className="fa-brands fa-google" target="_blank" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
