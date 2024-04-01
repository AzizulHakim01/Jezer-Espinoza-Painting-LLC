"use client";

import { useState } from "react";
import { message } from "antd";

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        message.success("Email sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        message.error("Error sending email. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      message.error("Error sending email. Please try again later.");
    }
  };

  return (
    <div className="">
      <div className="flex justify-center items-center max-w-screen-2xl mx-auto h-full bg-white">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="grid lg:grid-cols-3 grid-cols-1 items-center">
            <div className="xl:w-full p-8 my-4 md:px-12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl col-span-2">
              <div className="flex">
                <h1 className="font-bold uppercase xl:text-5xl">
                  Send us a <br /> message
                </h1>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Your Full Name*"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number"
                  placeholder="Phone*"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email*"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="my-4">
                <textarea
                  placeholder="Message*"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  name="message"
                  value={formData.message}
                  onChange={handleChange} // Corrected onChange handler for textarea
                  required
                ></textarea>
              </div>
              <div className="my-2 w-1/2 lg:w-1/4">
                <button
                  type="submit"
                  className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                  onClick={handleSubmit}
                >
                  Send Message
                </button>
              </div>
            </div>
            <div className="w-screen shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
              <div className="flex flex-wrap px-3 pt-12 pb-12 md:pb-0 lg:pt-0">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                  <div className="flex items-start lg:flex-row flex-col">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow break-normal">
                      <p className="mb-2 font-bold dark:text-white">
                        Maritza Diaz
                      </p>
                      <p className="mb-2 font-semibold dark:text-white">
                        Project Manager
                      </p>
                      <p className="text-neutral-500  dark:text-neutral-200">
                        maritzad@jezerespinozapaintingllc.com
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        (201) 552-8943
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Container for demo purpose */}

          <div class="container my-24 mx-auto md:px-6">
            {/* Section: Design Block */}
            <section className="mb-32">
              <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="flex flex-wrap items-center">
                  <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                    <div className="h-[500px] w-full">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.5152785908895!2d-74.13912378828377!3d40.83860942973533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25792adc944ed%3A0xd5af48cad2cbf9cd!2sJEZER%20ESPINOZA%20LLC!5e0!3m2!1sen!2sbd!4v1711999457700!5m2!1sen!2sbd"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="xl:w-[1400px] xl:h-[500px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Section: Design Block */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
