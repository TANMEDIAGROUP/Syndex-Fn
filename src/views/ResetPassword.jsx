import stars from '../stories/assets/stars.svg'
import { FaEye } from "react-icons/fa";
import { useRef } from 'react';

function ResetPassword(){
    const password = useRef();
    const confirmPassword = useRef();

    return(
        <div className='grid m-4 justify-center mt-24'>
            <div className="sm:w-[60vh] md:w-[80vh] my-6 md:px-8">
                <div className="m-2">
                    <img className="m-auto" src={stars} alt="lock-image"></img>
                </div>
                <div className="m-2 flex font-bold text-[#F15253] text-xl justify-center">
                    <h1>Reset Password</h1>
                </div>
                <div className="text-center">
                    <h1>Here's a tip: Use a combination of Numbers, Uppercase, Lowercase and Special characters
                    </h1>
                </div>
            </div>
            <div className="mb-4 md:px-8 ipad:px-16 lg:px-10 asus:px-24 surface-pro:px-36">
                <div className="grid mt-4 relative">
                    <label htmlFor="password" className="font-bold mb-1">
                        New Password{" "}
                    </label>
                    <input
                        ref={password}
                        name="password"
                        type="password"
                        placeholder="**********"
                        className="border-[1px] border-gray-400 rounded-lg py-3 px-4 "
                    />
                    <FaEye
                        className="text-2xl absolute right-4 top-[55%] text-gray-400"
                        onClick={(e) => {
                        e.target.style.color == "black"
                            ? (e.target.style.color = "gray")
                            : (e.target.style.color = "black");
                        password.current.type == "password"
                            ? (password.current.type = "text")
                            : (password.current.type = "password");
                        }}
                    />
                </div>
                <div className="grid mt-4 relative">
                    <label htmlFor="password" className="font-bold mb-1">
                        Confirm Password{" "}
                    </label>
                    <input
                        ref={confirmPassword}
                        name="password"
                        type="password"
                        placeholder="**********"
                        className="border-[1px] border-gray-400 rounded-lg py-3 px-4 "
                    />
                    <FaEye
                        className="text-2xl absolute right-4 top-[55%] text-gray-400"
                        onClick={(e) => {
                        e.target.style.color == "black"
                            ? (e.target.style.color = "gray")
                            : (e.target.style.color = "black");
                        confirmPassword.current.type == "password"
                            ? (confirmPassword.current.type = "text")
                            : (confirmPassword.current.type = "password");
                        }}
                    />
                </div>

            </div>

            <div className="flex w-full justify-center md:px-8 ipad:px-16 lg:px-10 asus:px-24 surface-pro:px-36">
            <a className="w-full" href="/">
                <button
                        type="continue"
                        className="mt-6 font-bold w-full py-4 bg-[#F15253] text-white rounded-xl hover:bg-white hover:text-brandRed border-2 border-brandRed"
                        >
                        Save Password
                </button>
            </a>
            </div>
            <div className="text-[#F15253] underline text-center pt-4 pb-8">
                <a href="/">Return to login</a>
            </div>
            {/*
            
            */}
        </div>
    );

}
export default ResetPassword;