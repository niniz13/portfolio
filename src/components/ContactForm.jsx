import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Box, Typography } from "@mui/material";

const ContactForm = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
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
    <Box>
      <form style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}
        ref={form}
        onSubmit={sendEmail}>
        <input
          style={{
            backgroundColor: '#F3F3F3',
            padding: '10px 20px',
            border: 'solid 1px #B4B4B4',
            borderRadius: '10px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            fontWeight: '800',
            letterSpacing: '-5%',
          }}
          type="text"
          name="name"
          placeholder="Votre nom"
          required
        />
        <input
          style={{
            backgroundColor: '#F3F3F3',
            padding: '10px 20px',
            border: 'solid 1px #B4B4B4',
            borderRadius: '10px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            fontWeight: '800',
            letterSpacing: '-5%',
          }}
          type="email"
          name="reply_to"
          placeholder="Votre email"
          required
        />
        <textarea
          style={{
            backgroundColor: '#F3F3F3',
            padding: '10px 20px',
            border: 'solid 1px #B4B4B4',
            borderRadius: '10px',
            resize: 'none',
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            fontWeight: '800',
            letterSpacing: '-5%',
          }}
          name="message"
          placeholder="Votre message"
          required
          rows="5"
        ></textarea>
        <button
          style={{
            cursor: 'pointer',
            backgroundColor: '#3A3A3A',
            color: '#FFF',
            padding: '10px 20px',
            borderRadius: '10px',
            resize: 'none',
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            fontWeight: '800',
            letterSpacing: '-5%',
          }}
          type="submit"
          disabled={loading}
        >
          {loading ? "Envoi en cours..." : "Envoyer"}
        </button>
        {success && (
          <Typography>Message envoyé avec succès !</Typography>
        )}
      </form>
    </Box>
  );
}

export default ContactForm;