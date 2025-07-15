import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("your_service_id", "your_template_id", form.current, "your_user_id")
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong.");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900 text-center">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
