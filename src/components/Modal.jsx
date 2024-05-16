import React from "react";
// import { PiSealCheckLight } from "react-icons/pi";
function Modal({ name, handleClose }) {
  return (
    <div className="fixed inset-0  bg-black bg-opacity-10  backdrop-blur-sm z-50 flex items-center">
      <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
        <div className="flex flex-col items-center">
          {/* <i class="bx bx-error text-3xl"></i> */}
          {/* <PiSealCheckLight className="text-black text-4xl" /> */}
          <p className="text-5xl">🫱🏼‍🫲🏽</p>
          <div className="mt-2 md:ml-6 text-center">
            <h3 className="font-bold py-2">Submited Succesfully</h3>
            <div>
              <p className="text-sm text-gray-700 mt-1 text-left">
                Dear <span className="font-bold">{name}</span>,
              </p>
              <p className="text-sm md:text-base text-gray-700  text-justify">
                Thank you for reaching Out. I'm excited to learn more about your
                project and how I can help. If you have any urgent questions,
                please don't hesitate to contact me directly via any of my
                socials.
              </p>
            </div>
          </div>
          <button
            className="block w-3/6 my-4 md:inline-block px-4 py-3 md:py-2 bg-black text-white rounded-lg font-semibold text-sm mt-4 md:order-1 hover:scale-105 transition duration-300"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
