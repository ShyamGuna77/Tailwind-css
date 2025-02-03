const Navbar = () => {
  return (
    <>
      <section id="hero">
        <div className="container max-w-6xl mx-auto py-12 px-6 ">
          <nav className="flex justify-between text-white items-center ">
            <img src="../public/images/logo.svg" alt="Logo" />
            <div className="hidden h-10 font-sans md:flex md:space-x-8">
              <div className="group">
                <a href="#">About</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-900"></div>
              </div>
              <div className="group">
                <a href="#">Careers</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-900"></div>
              </div>
              <div className="group">
                <a href="#">Support</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-900"></div>
              </div>
              <div className="group">
                <a href="#">Contact</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-900"></div>
              </div>
            </div>
          </nav>
          <div className="max-w-lg text-white border-2 mt-32 font-sans mb-32 p-4 text-3xl uppercase font-light
          md:mx-0 md:text-6xl md:p-10
          ">
            Impressive Experiences That Deliver
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
