import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    emailjs
      .sendForm(
        "service_kasfv8s",      // service id
        "template_gkstcm9",     // template id
        form.current,
        "6QW8HJBWPCEehzDhz"       // ppublic key
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-black rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Contactez-nous</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="reply_to"
          placeholder="Votre email"
          required
          className="w-full border p-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Votre message"
          required
          rows="5"
          className="w-full border p-2 rounded"
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Envoi en cours..." : "Envoyer"}
        </button>
        {success && (
          <p className="text-green-600 mt-2">Message envoyé avec succès !</p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;