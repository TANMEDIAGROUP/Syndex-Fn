import { useState, useEffect, useRef } from "react"
import key from '../stories/assets/key.svg'


function Verify({duration}){
    const [time, setTime] = useState(duration);

    useEffect(() => {
        setTimeout(()=>{
            setTime(time-1000);
        },1000);
    },[time]);
    
    const num1 = useRef(Math.floor(Math.random() * 10));
    const num2 = useRef(Math.floor(Math.random() * 10));
    const num3 = useRef(Math.floor(Math.random() * 10));
    const num4 = useRef(Math.floor(Math.random() * 10));


    const formatTime = (milliseconds) => {
        let seconds = parseInt(Math.floor(milliseconds/1000));
        let minutes = parseInt(Math.floor(seconds/60));
        let formatSeconds = parseInt(seconds%60);
        let minuteCount = parseInt(minutes%60);
        let secondCount = formatSeconds < 10 ? `0${formatSeconds}`:formatSeconds;

        return `${minuteCount}:${secondCount}`;
    };
    useEffect(()=>{
        if(time <= 0){
            window.location.reload();
        }
    }, [time]);

    return(
        <div className='grid m-4 justify-center mt-24'>
            <div className="w-full my-6 p-2">
                <div className="m-2">
                    <img className="m-auto" src={key} alt="lock-image"></img>
                </div>
                <div className="m-2 flex font-bold text-[#F15253] text-xl justify-center">
                    <h1>Verification Code</h1>
                </div>
                <div className="text-center">
                    <h1>please provide the verification code that was sent to your email
                    </h1>
                </div>
            </div>
            <div className="mb-8 flex gap-4 text-center" id="pin">
                <div className="w-1/4 l-1/4 px-2 py-4 border rounded-md border-brandRed font-bold"> {num1.current}</div>
                <div className="w-1/4 l-1/4 px-2 py-4 border rounded-md border-brandRed font-bold"> {num2.current}</div>
                <div className="w-1/4 l-1/4 px-2 py-4 border rounded-md border-brandRed font-bold"> {num3.current}</div>
                <div className="w-1/4 l-1/4 px-2 py-4 border rounded-md border-brandRed font-bold"> {num4.current}</div>
            </div>
            <div className="flex w-full justify-center">
            <a className="w-full" href="/reset/reset-password">
                <button
                        type="continue"
                        className="mt-6 font-bold w-full py-4 bg-[#F15253] text-white rounded-xl hover:bg-white hover:text-brandRed border-2 border-brandRed"
                        >
                        Verify OTP
                </button>
            </a>
            </div>
            <div className="m-4 text-center">
                {formatTime(time)}
            </div>
            <div className=" text-center pt-4 pb-8">
                Didn't get code, <a href="/reset/verify" className="text-[#F15253] font-bold">Resend</a>
            </div>
        </div>
  
    );
}
export default Verify;