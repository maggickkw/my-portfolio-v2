import React from "react";

function Footer() {
  return (
    <footer className="max-h-[50px] py-10">
      <p className="text-center font-Poppins text-l md:text-xl  dark:text-white">
        &copy;{new Date().getFullYear()} Taiwo Damilola{" "}
      </p>
    </footer>
  );
}

export default Footer;
