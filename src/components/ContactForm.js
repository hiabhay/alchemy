import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import mailImg from "../assets/images/mailImg.png";
import arrowUp from "../assets/images/arrowUp.png";

const ContactForm = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  function submit(e) {
    const formElement = document.querySelector("form");
    e.preventDefault();
    setIsFlipped(!isFlipped);
    e.preventDefault();
    // console.log("Submitted");
    const formData = new FormData(formElement);
    fetch(
      "https://script.google.com/macros/s/AKfycbxhvRF7MxJWtExa5TRjNAvVsI8bF2Ui8wXS9ZBtQTuSDqHjmeu5Hcnw2fwYpQuu3rn5/exec",
      { method: "POST", body: formData }
    )
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          return res.json();
        } else {
          return res.text(); // If the response is not JSON, return as plain text
        }
      })
      .then((data) => {
        // if (typeof data === "object") {
        //   console.log(data);
        // } else {
        //   console.log("Response:", data); // Log plain text response
        // }
        // console.log("Submitted");
        formElement.reset();
        // console.log("Form reset successful");
      })
      .catch((error) => {
        console.log(error);
        // console.log("Error occurred while submitting the form");
      });
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="relative bg-white shadow-2xl shadow-indigo-300 w-[300px] h-[470px] text-black rounded-xl">
        <div className="absolute font-bold text-xl top-[7.5%] left-[5%]">
          Get in touch
        </div>

        {/* Name */}

        <form
          className="form relative top-[20%] left-[5%]"
          onSubmit={(e) => submit(e)}
        >
          <div class="relative group">
            <input
              type="text"
              id="Name"
              required
              class="w-[270px] pb-1 font-bold text-sm peer outline-none border-b-2 border-neutral-200"
              autoComplete="off"
              name="Name"
            ></input>
            <label
              for="Name"
              class="text-sm font-semibold text-neutral-400 transform transition-all absolute top-0 left-0 h-full flex items-center group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-4 peer-valid:-translate-y-4 group-focus-within:pl-0 peer-valid:pl-0 cursor-text"
            >
              Your Name<span className="font-bold text-indigo-600">*</span>
            </label>
          </div>

          {/* Email  */}

          <div class="relative group top-7">
            <input
              type="text"
              id="Email"
              required
              class="w-[270px] pb-1 font-bold text-sm peer outline-none border-b-2 border-neutral-200 text-indigo-600"
              autoComplete="off"
              name="Email"
            ></input>
            <label
              for="Email"
              class="text-sm font-semibold text-neutral-400 transform transition-all absolute top-0 left-0 h-full flex items-center group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-4 peer-valid:-translate-y-4 group-focus-within:pl-0 peer-valid:pl-0 cursor-text"
            >
              Email<span className="font-bold text-indigo-600">*</span>
            </label>
          </div>

          {/* Whatsapp */}

          <div class="relative group top-14">
            <input
              type="text"
              id="Whatsapp"
              required
              class="w-[270px] pb-1 font-bold text-sm peer outline-none border-b-2 border-neutral-200"
              autoComplete="off"
              name="Whatsapp"
            ></input>
            <label
              for="Whatsapp"
              class="text-sm font-semibold text-neutral-400 transform transition-all absolute top-0 left-0 h-full flex items-center group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-4 peer-valid:-translate-y-4 group-focus-within:pl-0 peer-valid:pl-0 cursor-text"
            >
              Whatsapp No.<span className="font-bold text-indigo-600">*</span>
            </label>
          </div>

          {/* Interest */}

          <div class="relative group top-28">
            <input
              type="text"
              id="Interest"
              class="w-[270px] pb-1 font-bold text-sm peer outline-none border-b-2 border-neutral-200"
              autoComplete="off"
              name="Interest"
            ></input>
            <label
              for="Interest"
              class="text-sm font-semibold text-neutral-400 transform transition-all absolute top-0 left-0 h-full flex items-center group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-4 peer-valid:-translate-y-4 group-focus-within:pl-0 peer-valid:pl-0 cursor-text"
            >
              Interested in...
            </label>
          </div>

          {/* Advice */}

          <div class="relative group top-40">
            <input
              type="text"
              id="Advice"
              class="w-[270px] pb-1 font-bold text-sm peer outline-none"
              autoComplete="off"
              name="Advice"
            ></input>
            <label
              for="Advice"
              class="text-sm text-neutral-400 transform transition-all absolute top-0 left-0 h-full flex items-center group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-4 peer-valid:-translate-y-4 group-focus-within:pl-0 peer-valid:pl-0 cursor-text"
            >
              Genuine advice, no spamming!
            </label>
          </div>

          <div className="absolute text-sm font-bold text-indigo-600 bottom-[-140%] left-[50%] z-0">
            SEND
          </div>

          <button
            type="submit"
            className="z-20 rounded-full absolute bottom-[-146%] left-[70%] w-[40px] h-[40px]"
          >
            {/* <div className="font-bold text-sm text-indigo-600">SEND</div> */}
          </button>
          <div className="absolute bottom-[-146%] left-[70%] w-[40px] h-[40px] rounded-full bg-indigo-600 z-0"></div>
          <img
            src={mailImg}
            className="absolute text-sm font-bold text-indigo-600 bottom-[-141%] left-[72.5%] z-10"
          ></img>
        </form>
      </div>

      {/* Backside */}

      <div className="relative bg-indigo-600 shadow-2xl w-[300px] h-[450px] text-white rounded-2xl">
        <div className="absolute top-[16%] left-[6%] text-white">
          <div className="text-6xl font-semibold">Thank</div>
          <div className="text-6xl font-semibold">You!</div>
        </div>
        <div className="absolute h-[0.2px] bg-black w-[300px] top-[50%]"></div>
        <div className="absolute w-1/2 left-[6%] top-[55%] font-semibold">
          We'll be in touch shortly
        </div>

        <div className="absolute text-xs font-semibold underline bottom-[7%] left-[28%]">
          SEND ANOTHER ENQUIRY
        </div>

        <button
          onClick={() => setIsFlipped(false)}
          className="absolute top-[87%] left-[80%] bg-white w-[38px] h-[38px] rounded-full"
        >
          <img src={arrowUp} className="w-4 h-auto ml-[9px]"></img>
        </button>
      </div>
    </ReactCardFlip>
  );
};

export default ContactForm;
