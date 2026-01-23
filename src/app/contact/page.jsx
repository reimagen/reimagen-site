'use client'

import { useEffect, useState } from "react";
import "@/styles/contactFlip.css";
import HeroIntro from '@/components/toolkit/HeroIntro';

const surferPoster = "/assets/surfer.jpeg";

export default function Contact() {
  const initialFormState = {
    firstName: "",
    lastName: "",
    company: "",
    linkedinUsername: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.firstName) errs.firstName = "First name is required";
    if (!formData.lastName) errs.lastName = "Last name is required";
    if (!formData.company) errs.company = "Company website is required";
    if (!formData.linkedinUsername || /\s/.test(formData.linkedinUsername))
      errs.linkedinUsername = "LinkedIn username is required and must not contain spaces";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      errs.email = "Please enter a valid email";
    if (!formData.message) errs.message = "Message is required";
    return errs;
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitError(null);

  const errs = validate();
  if (Object.keys(errs).length > 0) {
    setErrors(errs);
    return;
  }
  setErrors({});

  const fullLinkedInURL = `https://www.linkedin.com/in/${formData.linkedinUsername}`;

  const finalFormData = {
    ...formData,
    linkedinUsername: fullLinkedInURL,
  };

  setIsSubmitting(true);

  try {
    const response = await fetch("https://formsubmit.co/ajax/a55d92a2101a8fdbd5d5f34dd1afd616", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...finalFormData,
        _subject: "New inquiry from reimagen.ai",
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    await response.json();
    setSubmitted(true);
    setFormData(initialFormState);
    setErrors({});
  } catch (err) {
    console.error(err);
    setSubmitError("We hit a snag sending your message. Please try again in a bit or email whereisgu22@gmail.com directly.");
  } finally {
    setIsSubmitting(false);
  }
};

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmitError(null);
    setErrors({});
    setFormData(initialFormState);
  };

  const inputClasses =
    "w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder-gray-400 focus:border-brand-lavender focus:ring-0 transition";

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative pt-24 pb-6 overflow-hidden">
      <video
        src="/videos/cosmic-surfer-kling2.5.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster={surferPoster}
        className="fixed inset-0 w-full h-full object-cover brightness-80"
      />
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
      <div className="fixed bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-16 pb-8 space-y-8">
        <HeroIntro
          title="Contact Us"
          subhead="Not into DMs? Fill out the form below."
          titleClass="text-3xl font-bold"
          subheadClass="brand-section-kicker text-brand-lavender"
          wrapperClass="text-center space-y-2"
          titleAs="h2"
          subheadAs="p"
        />

        <div className={`contact-flip-container slide-in-left ${isMounted ? "is-visible" : ""}`}>
          <div className={`contact-flip-inner ${submitted ? "is-flipped" : ""}`}>
            <div className="contact-flip-face contact-flip-front brand-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block mb-1 text-sm uppercase tracking-[0.2em] text-brand-lavender pl-1">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                    {errors.firstName && (
                      <p className="text-xs text-brand-pink mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-1 text-sm uppercase tracking-[0.2em] text-brand-lavender pl-1">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                    {errors.lastName && (
                      <p className="text-xs text-brand-pink mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="brand-section-subhead text-brand-lavender pl-1">Company Website</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                  {errors.company && (
                    <p className="text-xs text-brand-pink mt-1">{errors.company}</p>
                  )}
                </div>

                <div>
                  <label className="brand-section-subhead text-brand-lavender pl-1">LinkedIn URL</label>
                  <div className="flex rounded-lg overflow-hidden border border-white/10 bg-slate-900/60 text-white">
                    <span className="flex items-center px-3 text-sm text-gray-300 bg-slate-900/80 border-r border-white/10">
                      https://www.linkedin.com/in/
                    </span>
                    <input
                      type="text"
                      name="linkedinUsername"
                      value={formData.linkedinUsername}
                      onChange={handleChange}
                      placeholder="your-username"
                      className="flex-1 bg-transparent px-3 py-2 focus:outline-none"
                    />
                  </div>
                  {errors.linkedinUsername && (
                    <p className="text-xs text-brand-pink mt-1">{errors.linkedinUsername}</p>
                  )}
                </div>

                <div>
                  <label className="brand-section-subhead text-brand-lavender pl-1">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                  {errors.email && (
                    <p className="text-xs text-brand-pink mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="brand-section-subhead text-brand-lavender pl-1">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClasses} min-h-[140px]`}
                  />
                  {errors.message && <p className="text-xs text-brand-pink mt-1">{errors.message}</p>}
                </div>

                {submitError && (
                  <p className="text-sm text-brand-pink">{submitError}</p>
                )}

                <button
                  type="submit"
                  className="brand-cta bg-brand-lavender hover:bg-brand-lavender-dark text-black transition-transform duration-200 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending…" : "Send"}
                </button>
              </form>
            </div>

            <div className="contact-flip-face contact-flip-back brand-card">
              <h2 className="text-2xl font-semibold">Thank you for reaching out!</h2>
              <p className="text-gray-300 max-w-md">
                We&apos;ll review your message and reach out as appropriate.
              </p>
              <button
                type="button"
                className="brand-cta bg-white/10 text-white border border-white/30 hover:bg-white/20 transition-transform duration-200 hover:scale-105"
                onClick={handleReset}
              >
                Send another message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
