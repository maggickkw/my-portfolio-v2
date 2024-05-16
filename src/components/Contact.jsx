import React, { useState, useRef } from "react";
import { BiLogoGmail } from "react-icons/bi";
import {
  BsLinkedin,
  BsDashLg,
  BsDiscord,
  BsGithub,
  BsHourglassTop,
  BsTwitter,
} from "react-icons/bs";
import { GiSmartphone } from "react-icons/gi";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
// import axios from "axios";
import * as Yup from "yup";
import { Formik, Form } from "formik";
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

function Contact() {
  const className = `text-xl  md:text-2xl text-black  dark:text-white`;
  const classNameSocial = `text-2xl md:text-4xl text-white  hover:scale-125 duration-300  dark:text-black`;

  const FormikRef = useRef(null);
  const [isLoadding, setisLoadding] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    FormikRef?.current?.resetForm();
  };

  const handleFormSubmit = async ({ name, email, message }) => {
    try {
      setisLoadding(true);

      const formData = new FormData();
      formData.append("Name", name);
      formData.append("Email", email);
      formData.append("Message", message);


      const response =await fetch(url,{method:'POST',body:formData});

      if (response.status === 200) {
        setShowModal(true);
      }
    } catch (error) {
      console.log("error from submit form", error);
    } finally {
      setisLoadding(false);
    }
  };



  return (
    <>
      <section
        id="contact"
        name="contact"
        className="max-w-5xl mx-auto p-4 pb-6"
      >
        <div className="">
          <div className="text-center my-4 font-Poppins">
            <div className="text-gray-400 text-base flex items-center justify-center dark:text-gray-300">
              <BsDashLg className="text-gray-400 text-2xl dark:text-gray-300" />{" "}
              Am available for work
            </div>
            <h3 className="page-title">Contact Me</h3>
          </div>
          <div className="w-full mb-14">
            <h5 className="text-center text-gray-500  font-Poppins dark:text-gray-300">
              Submit the form below or reachout through my social's
            </h5>
            <Formik
              innerRef={FormikRef}
              initialValues={initialValue}
              validationSchema={contactSchema}
              // onSubmit={Submit}
              onSubmit={handleFormSubmit}
            >
              {({
                values: { name, email, message },
                errors,
                handleChange,
                touched,
                handleSubmit,
                handleBlur,
              }) => {
                return (
                  <Form
                    className="my-2 max-w-[500px] mx-auto flex flex-col"
                    onSubmit={handleSubmit}
                  >
                    <input
                      className="block flex-1 border border-1 rounded-lg border-black dark:border-gray-300 bg-transparent py-1 pl-3 text-gray-900 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6 md:text-xl  focus:outline-none  w-full mt-4  font-Poppins dark:placeholder:text-gray-300 dark:text-gray-200"
                      type="text"
                      name="name"
                      value={name}
                      onBlur={handleBlur}
                      onChange={handleChange("name")}
                      placeholder="Your Name"
                    />
                    {errors.name && touched.name && (
                      <span className="text-xs text-gray-400 pl-2 pt-1 dark:text-gray-500">
                        *{errors.name}
                      </span>
                    )}
                    <input
                      className="block flex-1 border border-1 rounded-lg border-black dark:border-gray-300 bg-transparent py-1 pl-3 text-gray-900 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6 md:text-xl  focus:outline-none w-full mt-4 font-Poppins dark:placeholder:text-gray-300 dark:text-gray-200"
                      type="email"
                      name="email"
                      value={email}
                      onBlur={handleBlur}
                      onChange={handleChange("email")}
                      placeholder="Your Email"
                    />
                    {errors.email && touched.email && (
                      <span className="text-xs text-gray-400 pl-2 pt-1 dark:text-gray-500">
                        *{errors.email}
                      </span>
                    )}
                    <textarea
                      className="block flex-1 border border-1 rounded-lg border-black dark:border-gray-300 bg-transparent py-1 pl-3 text-gray-900 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6 md:text-xl  focus:outline-none w-full mt-4 font-Poppins dark:placeholder:text-gray-300 dark:text-gray-200"
                      name="message"
                      value={message}
                      onBlur={handleBlur}
                      onChange={handleChange("message")}
                      placeholder="Message Here..."
                    ></textarea>
                    {errors.message && touched.message && (
                      <span className="text-xs text-gray-400 pl-2 pt-1 dark:text-gray-500">
                        *{errors.message}
                      </span>
                    )}

                    <button
                      className="w-[145px]  sm:w-[150px] mt-4 text-sm sm:text-base md:text-xl lg:text-xl md:w-[200px] justify-self-end self-end border border-1 border-black px-1 md:px-3 py-1 md:py-2 rounded-lg dark:text-white dark:border-gray-300 hover:bg-black hover:text-white dark:hover:bg-gray-300 dark:hover:text-black font-Poppins transition duration-300 delay-100 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                      type="submit"
                      disabled={isLoadding}
                    >
                      {isLoadding ? (
                        <span className="flex items-center justify-center gap-x-1">
                          Submitting <BsHourglassTop className="animate-spin" />
                        </span>
                      ) : (
                        "Lets Colaborate"
                      )}
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
          <div className="grid  md:grid-cols-2 font-Poppins mt-6">
            <div className="text-base xs:text-base md:text-xl lg:text-xl p-3 border border-black  dark:border-gray-200 rounded-t-lg md:rounded-l-lg md:rounded-tr-none  dark:text-white">
              <div className=" flex  items-center gap-2 my-3">
                <BiLogoGmail className={className} />
                <p>tdammy92@gmail.com</p>
              </div>
              <div className="flex  items-center gap-2 my-3">
                <GiSmartphone className={className} />
                <p>+2348065253164</p>
              </div>
              <div className="flex  items-center gap-2 my-3">
                <IoLocationSharp className={className} />
                <p>Lagos, Nigeria</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 md:gap-2 justify-center justify-items-center items-center bg-black p-3 rounded-b-lg md:rounded-r-lg md:rounded-bl-none dark:bg-white">
              <a
                href="https://tdammy.com.ng/www.linkedin.com/in/taiwo-damilola-56061a91"
                target="__blank"
              >
                <BsLinkedin className={classNameSocial} />
              </a>
              <a href="https://github.com/tdammy92" target="__blank">
                <BsGithub className={classNameSocial} />
              </a>
              <a href="https://twitter.com/tdamilola" target="__blank">
                <BsTwitter className={classNameSocial} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=2347057216653"
                target="__blank"
              >
                <IoLogoWhatsapp className={classNameSocial} />
              </a>
              <a href="https://t.me/oluwadamilola19" target="__blank">
                <FaTelegram className={classNameSocial} />
              </a>
              <a
                href="https://discordapp.com/channels/@me/tdammy92/"
                target="__blank"
              >
                <BsDiscord className={classNameSocial} />
              </a>
            </div>
          </div>
        </div>
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
