import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pfpn1tz",
        "template_rbrffa3",
        form.current,
        "HSCrLCF2WZPefau1D"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div className="contact-container">
      <h1 className="flex justify-center items-center text-5xl font-bold p-10">Contact me</h1>
        <form className="text-center" ref={form} onSubmit={sendEmail}>
            <div className="m-5">

          <label>Name</label>
          <input type="text" name="user_name" />
            </div>

            <div className="m-5">

          <label>Email</label>
          <input type="email" name="user_email" />
            </div>

            <div className="m-5">

          <label>Message</label>
          <textarea name="message" />
            </div>

            <div className="m-5">
            <button className="btn btn-accent">

          <input type="submit" value="Send" />
            </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
