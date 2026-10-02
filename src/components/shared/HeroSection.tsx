import container from "../../assets/Container.png"
const HeroSection = () => {
    return (
        <section className="w-full bg-white py-20 lg:py-32 overflow-hidden" >

            <div className="container mx-auto px-4 md:px-8 max-w-7xl">

                <div className="flex lg:flex-row items-center justify-between gap-12 lg:gap-8">

                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left">



                        <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
                            Build Your Ideal <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">
                                Development Stack
                            </span>
                        </h1>

                        <p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed">
                            Explore frontend, backend, database, and tooling options, compare
                            them side by side, and put together the stack that fits your next project.
                        </p>


                        <div className="flex flex-wrap items-center gap-4">


                            <button className="px-6 py-3 rounded-lg text-white font-medium text-sm bg-gradient-to-r from-orange-500 to-pink-500 transition-transform hover:scale-105 shadow-md hover:shadow-lg">
                                Explore Technologies
                            </button>

                            <button className="px-6 py-3 rounded-lg text-gray-700 font-medium text-sm border border-gray-200 bg-white hover:bg-gray-50 transition-colors shadow-sm">
                                Learn More
                            </button>



                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
                        <a href="#">
                            <img
                                src={container}
                                alt="Container"
                                className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-2xl 
                                    hover:scale-105 transition-transform duration-500"
                            />
                        </a>
                    </div>

                </div>
            </div>
        </section>

    )
}
export default HeroSection




