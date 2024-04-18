import lock from '../stories/assets/lock.svg';

function Reset() {
    return (
        <div className='flex justify-center mt-10 sm:mt-24'>
            <div className='m-4 flex flex-col'>
                <div className="sm:w-[60vh] md:w-[80vh] my-6">
                    <div className="m-2">
                        <img className="m-auto" src={lock} alt="lock-image" />
                    </div>
                    <div className="m-2 flex font-bold text-[#F15253] text-xl justify-center">
                        <h1>Forgot Password?</h1>
                    </div>
                    <div className="text-center">
                        <h1>Please provide your email address so that we can send you a link to reset your password</h1>
                    </div>
                </div>
                <div className="mb-8 flex flex-col">
                    <label className="font-bold">Email</label>
                    <input type="text" placeholder="johndoe123@gmail.com" className="border-[1px] border-gray-400 rounded-lg py-3 px-4 w-full my-2" />
                </div>
                <div className="flex w-full justify-center">
                    <a className="w-full" href="/reset/verify">
                        <button type="continue" className="mt-6 font-bold w-full py-4 bg-[#F15253] text-white rounded-xl hover:bg-white hover:text-brandRed border-2 border-brandRed">
                            Reset Password
                        </button>
                    </a>
                </div>
                <div className="text-[#F15253] hover:text-[#f4b5b5] underline text-center pt-4 pb-8">
                    <a href="/">Return to login</a>
                </div>
            </div>
        </div>
    );
}

export default Reset;
