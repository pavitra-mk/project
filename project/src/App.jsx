import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    query: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "91XXXXXXXXXX"; // 👉 your WhatsApp number

    const message = `Hello, I have a query:
Name: ${form.name}
Email: ${form.email}
Mobile: ${form.mobile}
Query: ${form.query}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="page">
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          onChange={handleChange}
          required
        />

        <textarea
          name="query"
          placeholder="Your Query"
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send on WhatsApp</button>
      </form>
    </div>
  );
}

export default Contact;npm run dev