import Comp from "../Images/image-computer.png";

export default function Info() {
  return (
    <div className="mt-8 flex flex-col md:flex-row text-center">
      <img className="m-8" src={Comp} alt="Computer" />
      <div className="m-8 md:text-start text-xl">
        <h3 className="text-center font-bold  text-3xl md:text-5xl mb-8">
          Quick Search{" "}
        </h3>
        <h4 className="mb-8 font-light mt-[30px] text-center max-w-3xl text-2xl mx-auto text-gray-400">
          Easily Search your Snippets By Content category,web
          adress,applicatuons,and more
        </h4>

        <h3 className="text-center font-bold  text-3xl md:text-5xl mb-8">
          Quick Search{" "}
        </h3>
        <h4 className="mb-8 font-light mt-[30px] text-center max-w-3xl text-2xl mx-auto text-gray-400">
          Easily Search your Snippets By Content category,web
          adress,applicatuons,and more
        </h4>

        <h3 className="text-center font-bold  text-3xl md:text-5xl mb-8">
          Quick Search{" "}
        </h3>
        <h4 className="mb-8 font-light mt-[30px] text-center max-w-3xl text-2xl mx-auto text-gray-400">
          Easily Search your Snippets By Content category,web
          adress,applicatuons,and more
        </h4>
      </div>
    </div>
  );
}
