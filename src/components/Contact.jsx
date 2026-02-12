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

  return (
    <>
      <section id="contact" name="contact" className="py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <h2 className="flex items-center gap-2 font-display font-semibold text-2xl md:text-[28px] text-base-200 whitespace-nowrap">
              <span className="font-mono font-normal text-accent text-lg md:text-xl">
                03.
              </span>
              Get In Touch
            </h2>
            <div className="h-px bg-base-800 flex-1 max-w-[300px]" />
          </div>

          <p className="text-base-400 leading-relaxed max-w-lg mb-12">
            I'm currently open to new opportunities. Whether you have a project
            in mind or just want to say hello, I'd love to hear from you.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-1">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-900/60 transition-colors group"
                  >
                    <info.icon className="text-lg text-accent shrink-0" />
                    <div>
                      <p className="text-xs text-base-500 font-mono">
                        {info.label}
                      </p>
                      <p className="text-sm text-base-300 group-hover:text-accent transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              <div>
                <p className="text-xs font-mono text-base-500 mb-3 px-3">
                  Find me online
                </p>
                <div className="flex gap-1 px-1">
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
            </div>
            <div className="lg:col-span-3">
              <div className="border border-base-800/50 rounded-lg p-6 md:p-8">
                <h4 className="text-base-200 font-display font-medium text-lg mb-6">
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
                          <span className="text-xs text-red-400/80 pl-1 pt-1 font-mono">
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
                          <span className="text-xs text-red-400/80 pl-1 pt-1 font-mono">
                            {errors.email}
                          </span>
                        )}
                      </div>

                      <div>
                        <textarea
                          className="input-field min-h-[130px] resize-none"
                          name="message"
                          value={message}
                          onChange={handleChange("message")}
                          placeholder="Your message..."
                        />
                        {errors.message && touched.message && (
                          <span className="text-xs text-red-400/80 pl-1 pt-1 font-mono">
                            {errors.message}
                          </span>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                            <span className="font-mono text-xs">
                              Sending...
                            </span>
                          </>
                        ) : (
                          <>
                            <HiPaperAirplane className="text-sm" />
                            <span className="font-mono text-xs">
                              Send Message
                            </span>
                          </>
                        )}
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
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
