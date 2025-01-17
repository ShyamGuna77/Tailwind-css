import imgCom from "../Images/image-devices.png"
import google from "../Images/logo-google.png"
import hp from "../Images/logo-hp.png";
import ibm from "../Images/logo-ibm.png";
import microsoft from "../Images/logo-microsoft.png";
import vector from "../Images/logo-vector-graphics.png"


export default function Image() {
    return (
      <div className=" text-center mt-48 flex-col justify-center ">
        <p className="text-5xl text-center font-bold ">
          Access ClipBoard anywhere
        </p>
        <p className="text-slate-400 mt-8 text-center m-auto max-w-3xl text-xl">
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
        {/* image */}
        <div className="mt-48 flex justify-center">
          <img src={imgCom} alt="Image" />
        </div>
        <p className="text-5xl font-bold text-slate-500  ">
          Supercharge Your Workflow
        </p>
        <p className="mt-8 text-slate-400 font-bold text-xl ">
          We ve got the tools to boost your productivity.
        </p>

        <div className="mt-24 flex flex-col justify-evenly items-center gap-9 mb-48  md:flex-row">
          <img
            src={google}
            alt="google"
            className="max-w-[100%] h-auto object-contain"
          />
          <img
            src={hp}
            alt="hp"
            className="max-w-[100%] h-auto object-contain"
          />
          <img
            src={microsoft}
            alt="microsoft"
            className="max-w-[100%] h-auto object-contain"
          />
          <img
            src={ibm}
            alt="ibm"
            className="max-w-[100%] h-auto object-contain"
          />
          <img
            src={vector}
            alt="vector"
            className="max-w-[100%] h-auto object-contain"
          />
        </div>
      </div>
    );
}