import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 8000);
  };

  return (
    <div className="contact">
      {isSubmitted && (
        <div className="thank-you">
          <h2>Thank you for your message!</h2>
        </div>
      )}
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          required
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          required
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Message</label>
        <textarea
          type="text"
          required
          value={message}
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
