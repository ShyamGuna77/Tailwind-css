

const Cards = () => {
    return (
        <div className="mt-16 container max-w-6xl px-6">
            <div>
                <div className="flex flex-col justify-between md:flex-row">
                    <p className="font-mono uppercase font-light text-3xl">Our creations</p>
                    <button className="border border-black px-8 py-2 text-black bg-white hover:bg-black hover:text-white">SEE ALL</button>
                </div>
            </div>
            <div className="grid gap-6 md:grid-cols-4 mt-8">
                <div className="group item">
                    <img src="images/desktop/image-deep-earth.jpg" alt="" className="hidden w-full duration-200 md:block group-hover:scale-110" />
                    <img src="images/mobile/image-deep-earth.jpg" alt="" className="w-full md:hidden" />
                    <div className="item-gradient"></div>
                    <h5>Deep Earth</h5>
                </div>
                <div className="group item">
                    <img src="images/desktop/image-night-arcade.jpg" alt="" className="hidden w-full duration-200 md:block group-hover:scale-110" />
                    <img src="images/mobile/image-night-arcade.jpg" alt="" className="w-full md:hidden" />
                    <div className="item-gradient"></div>
                    <h5>Night Arcade</h5>
                </div>
                <div className="group item">
                    <img src="images/desktop/image-soccer-team.jpg" alt="" className="hidden w-full duration-200 md:block group-hover:scale-110" />
                    <img src="images/mobile/image-soccer-team.jpg" alt="" className="w-full md:hidden" />
                    <div className="item-gradient"></div>
                    <h5>Soccer Team VR</h5>
                </div>
                <div className="group item">
                    <img src="images/desktop/image-grid.jpg" alt="" className="hidden w-full duration-200 md:block group-hover:scale-110" />
                    <img src="images/mobile/image-grid.jpg" alt="" className="w-full md:hidden" />
                    <div className="item-gradient"></div>
                    <h5>The Grid</h5>
                </div>
                <div className="group item">
                    <img src="images/desktop/image-from-above.jpg" alt="" className="hidden w-full duration-200 md:block group-hover:scale-110" />
                    <img src="images/mobile/image-from-above.jpg" alt="" className="w-full md:hidden" />
                    <div className="item-gradient"></div>
                    <h5>From Up Above VR</h5>
                </div>
                <div className="group item">
                    <img src="images/desktop/image-pocket-borealis.jpg" alt="" className="hidden w-full duration-200 md:block group-hover:scale-110" />
                    <img src="images/mobile/image-pocket-borealis.jpg" alt="" className="w-full md:hidden" />
                    <div className="item-gradient"></div>
                    <h5>Pocket Borealis</h5>
                </div>
                <div className="group item">
                    <img src="images/desktop/image-curiosity.jpg" alt="" className="hidden w-full duration-200 md:block group-hover:scale-110" />
                    <img src="images/mobile/image-curiosity.jpg" alt="" className="w-full md:hidden" />
                    <div className="item-gradient"></div>
                    <h5>The Curiosity</h5>
                </div>
                <div className="group item">
                    <img src="images/desktop/image-fisheye.jpg" alt="" className="hidden w-full duration-200 md:block group-hover:scale-110" />
                    <img src="images/mobile/image-fisheye.jpg" alt="" className="w-full md:hidden" />
                    <div className="item-gradient"></div>
                    <h5>Make it Fisheye</h5>
                </div>
            </div>
        </div>
    );
};

export default Cards