import { useState, useRef, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
function SignUp() {
  const [form, setform] = useState({});
  //references
  const password = useRef();
  const passwordConfirm = useRef();
  const styleIcon = "text-4xl";

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    // Here, you can process the Google sign-in response, such as extracting the user's information
  }



  //sign up options
  const signupwith = [
    {
      icon: <BsFacebook className={styleIcon} />,
      action: () => console.log('Facebook sign-in not implemented'),
    },
    // {
    //   icon: <FcGoogle className={styleIcon} onClick={googleSignIn} />,
    //   action: googleSignIn,
    //   //action: () => console.log('Facebook sign-in not implemented'),

    // },
    {
      icon: <FaApple className={styleIcon} />,
      action: () => console.log('Apple sign-in not implemented'),
    },
  ];

  useEffect(() => {
    // loading Google authitification
    const script = document.createElement('script');
    script.src = "https://accounts.google.com/gsi/client";
    script.onload = () => {
      // Make sure the google object exists before initializing it
      window.google.accounts.id.initialize({
        client_id: '513328992042-a5ps92iu833a3b68pu6k4nq00ebruja7.apps.googleusercontent.com',
        callback: handleCallbackResponse
      });
    };
    document.body.appendChild(script);
  }, []);

  // Trigger Google Sign in
  const triggerGoogleSignIn = () => {
    window.google.accounts.id.prompt(); // Trigger login prompt when user clicks on icon
    console.log("Google icon Clicked");
  };



  const signup = async () => {};
  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-12">Sign Up</h1>
      <div className="md:w-[70%] min-w-fit max-w-[40em] text-[#292D32] ">
        <div className="grid grid-cols-2">
          <div className="grid mx-2 ">
            <label htmlFor="email" className="font-bold mb-1 ">
              First Name
            </label>
            <input
              name="first name"
              type="text"
              placeholder="john"
              className="border-[1px] border-gray-400 rounded-lg py-3 px-4"
            />
          </div>
          <div className="grid mx-2 ">
            <label htmlFor="email" className="font-bold mb-1 ">
              Last Name
            </label>
            <input
              name="first name"
              type="text"
              placeholder="doe"
              className="border-[1px] border-gray-400 rounded-lg py-3 px-4"
            />
          </div>
          <div className="grid mx-2 ">
            <label htmlFor="email" className="font-bold mb-1 ">
              Other Name
            </label>
            <input
              name="first name"
              type="text"
              placeholder="smith"
              className="border-[1px] border-gray-400 rounded-lg py-3 px-4"
            />
          </div>
          <div className="grid mx-2 ">
            <label htmlFor="email" className="font-bold mb-1 ">
              Email
            </label>
            <input
              name="first name"
              type="text"
              placeholder="john@email.com"
              className="border-[1px] border-gray-400 rounded-lg py-3 px-4"
            />
          </div>
          <div className="grid mt-4 relative mx-2">
            <label htmlFor="password" className="font-bold mb-1">
              Enter Password{" "}
            </label>
            <input
              ref={password}
              name="password"
              type="password"
              placeholder="**********"
              className="border-[1px] border-gray-400 rounded-lg py-3 px-4 "
            />
            <FaEye
              className="text-2xl absolute right-4 top-[55%] text-gray"
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
          <div className="grid mt-4 relative mx-2">
            <label htmlFor="password" className="font-bold mb-1">
              Confirm Password
            </label>
            <input
              ref={passwordConfirm}
              name="password"
              type="password"
              placeholder="**********"
              className="border-[1px] border-gray-400 rounded-lg py-3 px-4 "
            />
            <FaEye
              className="text-2xl absolute right-4 top-[55%] text-gray-400"
              onClick={(e) => {
                console.log(passwordConfirm.current.type);
                passwordConfirm.current.type == "text"
                  ? (passwordConfirm.current.type = "password")
                  : (passwordConfirm.current.type = "text");
                e.target.style.color == "black"
                  ? (e.target.style.color = "gray")
                  : (e.target.style.color = "black");
              }}
            />
          </div>
        </div>

        <div className="grid">
          
          <a href="/login" className="mt-2 font-bold underline">have an account, Sign In</a>
          <button
            type="submit"
            className="my-2 font-bold w-full py-4 bg-[#F15253] text-white rounded-xl hover:bg-white hover:text-brandRed border-2 border-brandRed"
          >
            Continue
          </button>
          <h3 className="uppercase font-bold text-center  text-[#818181] mt-2">
            Or register with
          </h3>

          <div className="flex justify-center mt-1">
            {signupwith.map(({ icon, link }) => {
              return (
                <a href={link} className="mx-2">
                  {icon}
                </a>
              );
            })}
            {/* {signupwith.map((item, index) => (
              <button key={index} className="mx-2" onClick={item.action}>
                {item.icon}
              </button>
            ))} */}
            <div onClick={triggerGoogleSignIn} style={{ cursor: 'pointer' }}>
              <FcGoogle size={40} /> {/* You can adjust size here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
