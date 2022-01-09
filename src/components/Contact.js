import { useState } from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_ic0tbwu";
const TEMPLATE_ID = "template_3nhdwzb";
const USER_ID = "user_MAEq0hApI1HbgioDYEoUt";

const Contact = () => {
  const [user_name, setName] = useState("");
  const [user_email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        setIsSubmitted(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();

    // setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 8000);
  };

  return (
    <>
      {isSubmitted && (
        <div className="thank-you">
          <h2>Thank you for your message!</h2>
        </div>
      )}
      <div className="contact">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            required
            name="from_name"
            value={user_name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            required
            name="from_email"
            value={user_email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Message</label>
          <textarea
            type="text"
            required
            name="message"
            value={message}
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button>Send Message</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
