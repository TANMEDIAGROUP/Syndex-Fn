import { useState, useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Navbar from "../components/Navbar";
function SelfReg() {
  const [form, setform] = useState({});
  //references
  const password = useRef();
  const passwordConfirm = useRef();
  const styleIcon = "text-4xl";
  //sign up options
  const signupwith = [
    {
      icon: <BsFacebook className={styleIcon} />,
      link: "https://safety.google/authentication/",
    },
    {
      icon: <FcGoogle className={styleIcon} />,
      link: "https://safety.google/authentication/",
    },
    ,
    {
      icon: <FaApple className={styleIcon} />,
      link: "https://safety.google/authentication/",
    },
  ];

  return (
        <div>
        <h1 className="mt-36 mb-10 text-2xl text-center ">Content Creator Onboarding Form</h1>
        <div className="my-6 text-lg">
            <h1 className="mx-4">
                <span className="font-bold">Welcome to SYNDEX!</span> Please fill out the following form with Publisher Info:
            </h1>
        </div>
        <div className='mt-6 mb-8'>
            <h1 className="mx-4">Select the Option that best describes you:</h1>
            <fieldset className="grid grid-cols-2 bg-gray-400 justify-center">
                <label className='mx-4'>
                    <input type="radio" className='m-2' name="user-type"/>
                    Publisher
                </label>
                <label>
                    <input type="radio" className='m-2' name="user-type"/>
                    Contributor
                </label>
            </fieldset>
        </div>
        <div className="grid mx-4">
            <h1 className="text-lg my-4 font-bold">Simple Signup</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label htmlFor="firstName" className="font-bold mb-1 mt-4 block">
                        First Name/Company Name
                    </label>
                    <input
                        id="firstName"
                        name="First/Company Name"
                        type="text"
                        placeholder="Company"
                        className="border-[1px] border-gray-400 rounded-lg py-3 px-4 w-full"
                    />
                </div>
                <div>
                    <label htmlFor="website" className="font-bold mb-1 mt-4 block">
                        Website
                    </label>
                    <input
                        id="website"
                        name="Website"
                        type="text"
                        placeholder="Website"
                        className="border-[1px] border-gray-400 rounded-lg py-3 px-4 w-full"
                    />
                </div>
                <div>
                    <label htmlFor="rssFeed" className="font-bold mb-1 mt-4 block">
                        RSS Feed
                    </label>
                    <input
                        id="rssFeed"
                        name="RSS Feed"
                        type="text"
                        placeholder="RSS Feed"
                        className="border-[1px] border-gray-400 rounded-lg py-3 px-4 w-full"
                    />
                </div>
            </div>
        </div>
        <div className="m-10">
            <fieldset className="bg-gray-300 p-4">
                <input type="checkbox" className="mr-2"/>
                <label>
                By checking this box, I acknowledge that I have read and agree to the SYNDEX Terms of Service and Privacy Policy
                </label>
            </fieldset>
        </div>
        <button
            type="submit"
            className="my-2 font-bold w-full py-4 bg-[#F15253] text-white rounded-xl hover:bg-white hover:text-brandRed border-2 border-brandRed"
          >
            Submit
        </button>
        <h3 className="uppercase font-bold text-center  text-[#818181] mt-2">
          Or signup with
        </h3>
        <div className="flex justify-center mt-1 mb-4">
          {signupwith.map(({ icon, link }) => {
            return (
              <a key={icon} href={link} className="mx-2">
                {icon}
              </a>
            );
          })}
        </div>
    </div>
  );
}

export default SelfReg;