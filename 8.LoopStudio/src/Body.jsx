

const Body = () => {
return (
    <div className="mt-32 mb-8">
        <div id="mt-32">
            <div className="relative flex flex-col md:flex-row container mt-8 mx-auto my-8 max-w-6xl">
                <img src="../public/images/mobile/image-interactive.jpg" alt="Interactive" className="w-full md:w-auto" />
                <div className="md:absolute text-2xl bg-white md:right-0 md:py-8 md:pl-20 p-6 md:p-0 top-48 md:w-1/2">
                    <h6 className="mt-4 text-center text-gray-900 uppercase md:text-5xl md:mt-0">The Leader in Interactive Game</h6>
                    <p className="mt-4 md:mt-8 text-center md:text-left text-gray-400 text-sm">
                        Founded in 2011, Loopstudios has been producing world-class
                        virtual reality projects for some of the best companies around the
                        globe. Our award-winning creations have transformed businesses
                        through digital experiences that bind to their brand.
                    </p>
                </div>
            </div>
        </div>
    </div>
);
}

export default Body