import React, { useState, useRef } from "react";
import {
  HiEnvelope,
  HiPhone,
  HiMapPin,
  HiPaperAirplane,
} from "react-icons/hi2";
import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaDiscord,
} from "react-icons/fa6";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { motion } from "framer-motion";
import Modal from "./Modal";

const url = process.env.REACT_APP_FORM_URL;

const contactSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  message: Yup.string().required().label("Message"),
});

const initialValue = {
  name: "",
  email: "",
  message: "",
};

const contactInfo = [
  {
    icon: HiEnvelope,
    label: "Email",
    value: "wmaggickk@gmail.com",
    href: "mailto:wmaggickk@gmail.com",
  },
  {
    icon: HiPhone,
    label: "Phone",
    value: "+233 245 910 775",
    href: "tel:+233245910775",
  },
  {
    icon: HiMapPin,
    label: "Location",
    value: "Accra, Ghana",
    href: "https://www.google.com/maps/place/Accra,+Ghana",
  },
];

const socials = [
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/wilberforce-sedem-haibor-59210120b/",
    label: "LinkedIn",
  },
  {
    icon: FaGithub,
    href: "https://github.com/maggickkw",
    label: "GitHub",
  },
  {
    icon: FaWhatsapp,
    href: "https://api.whatsapp.com/send?phone=233245910775",
    label: "WhatsApp",
  },
  {
    icon: FaDiscord,
    href: "https://discordapp.com/channels/@me/wmaggickk/",
    label: "Discord",
  },
];

function Contact() {
  const FormikRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    FormikRef?.current?.resetForm();
  };

  const handleFormSubmit = async ({ name, email, message }) => {
    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append("Name", name);
      formData.append("Email", email);
      formData.append("Message", message);

      const response = await fetch(url, { method: "POST", body: formData });

      if (response.status === 200) {
        setShowModal(true);
      }
    } catch (error) {
      console.log("error from submit form", error);
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <section id="contact" name="contact" className="py-24 md:py-32 px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-widest">
              Let's Connect
            </span>
            <h2 className="section-title mt-3">
              Get In Touch
            </h2>
            <p className="section-subtitle max-w-md mx-auto mt-4">
              Have a project in mind? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
              {/* Info Cards */}
              <div className="glass p-5 space-y-3">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-base-800/30 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-base-800/50 flex items-center justify-center text-accent">
                      <info.icon className="text-lg" />
                    </div>
                    <div>
                      <p className="text-base-500 text-xs">{info.label}</p>
                      <p className="text-base-200 text-sm font-medium group-hover:text-accent transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Socials */}
              <div className="glass p-5">
                <h4 className="text-white font-display font-medium text-sm mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-2">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon"
                      title={social.label}
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <div className="glass p-6 md:p-8">
                <h4 className="text-lg font-display font-medium text-white mb-6">
                  Send a message
                </h4>
                <Formik
                  innerRef={FormikRef}
                  initialValues={initialValue}
                  validationSchema={contactSchema}
                  onSubmit={handleFormSubmit}
                >
                  {({
                    values: { name, email, message },
                    errors,
                    handleChange,
                    touched,
                    handleSubmit,
                  }) => (
                    <Form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input
                          className="input-field"
                          type="text"
                          name="name"
                          value={name}
                          onChange={handleChange("name")}
                          placeholder="Your name"
                        />
                        {errors.name && touched.name && (
                          <span className="text-xs text-red-400 pl-2 pt-1">
                            {errors.name}
                          </span>
                        )}
                      </div>

                      <div>
                        <input
                          className="input-field"
                          type="email"
                          name="email"
                          value={email}
                          onChange={handleChange("email")}
                          placeholder="Your email"
                        />
                        {errors.email && touched.email && (
                          <span className="text-xs text-red-400 pl-2 pt-1">
                            {errors.email}
                          </span>
                        )}
                      </div>

                      <div>
                        <textarea
                          className="input-field min-h-[120px] resize-none"
                          name="message"
                          value={message}
                          onChange={handleChange("message")}
                          placeholder="Your message..."
                        />
                        {errors.message && touched.message && (
                          <span className="text-xs text-red-400 pl-2 pt-1">
                            {errors.message}
                          </span>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-base-950 border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <HiPaperAirplane className="text-sm" />
                            Send Message
                          </>
                        )}
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {showModal && (
        <Modal
          name={FormikRef?.current?.values?.name}
          handleClose={handleClose}
        />
      )}
    </>
  );
}

export default Contact;
