

function SelfReg(){
    return (
        <div>
            <div className="sm:w-[80vh] m-auto md:w-[100vh] text-center px-8 shadow-[0_0_20px_#c6c6c6cc] py-[3em] rounded-lg hover:shadow-2xl my-4 relative">
              <h1 className="mt-36 mb-10 text-2xl text-center ">Content Creator Onboarding Form</h1>
              <div className="my-6 text-lg">
                  <h1>
                      Welcome to <span className="text-brandRed">SYNDEX!</span> Please fill out the following form to get started with us. Your information will help
                      us tailor our services to your needs and ensure a fruitful collaboration.
                  </h1>
              </div>
              <div className='mt-6 mb-8'>
                <h1 className="text-lg my-4 font-bold text-brandRed">Signup</h1>
              </div>
              <div className="grid mx-4">
                  <div className="grid grid-cols-1 gap-4">
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
                      <div>
                        <a className="w-full" href="/settings">
                            <button
                            type="continue"
                            className="mt-8 font-bold w-full py-4 bg-[#F15253] text-white rounded-xl hover:bg-white hover:text-brandRed border-2 border-brandRed"
                            >
                            Continue
                            </button>
                        </a>
                      </div>
                  </div>
              </div>
              <div className="m-10">
                  <fieldset className=" p-4">
                      <input type="checkbox" className="mr-2 border-brandRed border"/>
                      <label>
                      By checking this box, I acknowledge that I have read and agree to the <span className="text-brandRed">SYNDEX</span> Terms of Service and Privacy Policy
                      </label>
                  </fieldset>
              </div>
          </div>
        </div>
    );
};
export default SelfReg;