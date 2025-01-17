import bgHeader from "../Images/bg-header-desktop.png"

export default function Header() {
    return (
      <section id="hero">
        <div className="max-w-6xl text-center mx-auto mb-40 px-10 pt-16">
          <img src="/images/logo.svg" alt="Logo" className="mx-auto my-16" />
          <h3 className="text-center font-bold  text-4xl md:text-5xl mb-8">
            A history Of everything you copy
          </h3>

          <h4 className=" font-light mt-[30px] text-center max-w-3xl text-2xl mx-auto text-gray-400">
            Clipboard allows you to track and orgnaize everything you copy.
            Instantly acess your clipboard on all your Devices.
          </h4>

          <div className="flex flex-col justify-center mt-14 md:flex-row w-full space-y-6 md:space-x-6 md:space-y-0">
            <button className="bg-strongCyan rounded-full shadow-lg  text-white duration-200 hover:scale-105 p-4 px-8   ">
              Download for iOS{" "}
            </button>
            <button className="bg-blue-500 rounded-full shadow-lg p-4 px-8 text-white duration-200 hover:scale-105">
              Download for Mac{" "}
            </button>
          </div>

          {/* text */}
          <div className="mt-36">
            <h3 className="text-center font-bold  text-4xl md:text-5xl mb-8">
              A history Of everything you copy
            </h3>

            <h4 className=" font-light mt-[30px] text-center max-w-3xl text-2xl mx-auto text-gray-400">
              Clipboard allows you to track and orgnaize everything you copy.
              Instantly acess your clipboard on all your Devices.
            </h4>
          </div>
        </div>
      </section>
    );

    
}