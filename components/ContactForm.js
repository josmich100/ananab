import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation
  const [errors, setErrors] = useState({});

  //   Setting button text
  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   const [form, setForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      name,
      email,
      subject,
      message,
    };

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        // Reset form fields
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
    console.log(name, email, subject, message);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="rounded-lg shadow-xl flex flex-col px-8 py-8"
      >
        <h5 className="text-3xl text-center font-bold">Contact Form</h5>

        <label htmlFor="name" className="text-gray-500 mt-8">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          name="name"
          className="py-2 pl-4 rounded-xl border my-2"
        />
        {errors?.name && <p className="text-red-500">Name cannot be empty.</p>}

        <label htmlFor="email" className="text-gray-500 mt-4">
          E-mail <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="py-2 pl-4 rounded-xl border my-2"
        />
        {errors?.email && (
          <p className="text-red-500">Email cannot be empty.</p>
        )}

        <label htmlFor="subject" className="text-gray-500 mt-4">
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="subject"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          className="py-2 pl-4 rounded-xl border my-2"
        />
        {errors?.subject && (
          <p className="text-red-500">Subject cannot be empty.</p>
        )}

        <label htmlFor="message" className="text-gray-500 mt-4">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="py-2 pl-4 rounded-xl border my-2"
          rows={5}
        ></textarea>
        {errors?.message && (
          <p className="text-red-500">Message body cannot be empty.</p>
        )}

        <div className="flex flex-row items-center justify-start">
          <button
            type="submit"
            className="px-10 mt-8 py-2 bg-gray-700 hover:bg-gray-800 text-white font-bold rounded-md text-lg flex flex-row items-center"
          >
            {buttonText}
          </button>
        </div>
        <div className="text-left">
          {showSuccessMessage && (
            <p className="text-green-500 font-semibold text-sm my-2">
              Thank you! Your message has been delivered.
            </p>
          )}
          {showFailureMessage && (
            <p className="text-red-500">
              Oops! Something went wrong, please try again.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
