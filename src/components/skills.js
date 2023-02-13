import '../index.css'

function SkillsGrid() {
    return (

        <div>
            <div className=" SkillsGrid justify-center mx-auto">
                <div className="grid justify-center grid-cols-3 sm:grid-cols-2 md:grid-cols-3 ">
                    <div
                        className="card m-2 cursor-pointer  hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
                        <div className="m-3">
                            <h2 className="text-lg skills-title mb-2">system administration
                                <span
                                    className="text-sm text-teal-600 font-mono inline px-2 align-top float-right animate-pulse">2023</span>
                            </h2>
                            <p className="font-light font-mono text-sm text-gray-700 hover:text-teal-200 transition-all duration-200">managing
                                and maintaining computer systems to ensure their efficient operation, ensuring the
                                availability of hardware, software, and network resources for users.</p>
                        </div>
                    </div>
                    <div
                        className="card m-2 cursor-pointer  hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
                        <div className="m-3">
                            <h2 className="text-lg skills-title mb-2">system design and analysis
                                <span
                                    className="text-sm text-teal-600 font-mono inline px-2 align-top float-right animate-pulse">2023</span>
                            </h2>
                            <p className="font-light font-mono text-sm text-gray-700 hover:text-teal-200 transition-all duration-200">using
                                analysis and design techniques to solve business problems using information
                                technology</p>
                        </div>
                    </div>
                    <div
                        className="card m-2 cursor-pointer  hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
                        <div className="m-3">
                            <h2 className="text-lg skills-title mb-2">web hosting
                                <span
                                    className="text-sm text-teal-600 font-mono inline px-2 align-top float-right animate-pulse">2023</span>
                            </h2>
                            <p className="font-light font-mono text-sm text-gray-700 hover:text-teal-200 transition-all duration-200">managing
                                and maintaining servers that host websites, ensuring their 24/7 accessibility and data
                                security, configuring and managing domain names,
                                email accounts, and databases, and provide technical support to clients.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" SkillsGrid justify-center mx-auto">
                <div className="grid justify-center grid-cols-3 sm:grid-cols-2 md:grid-cols-3 ">
                    <div
                        className="card m-2 cursor-pointer  hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
                        <div className="m-3">
                            <h2 className="text-lg skills-title mb-2">system administration
                                <span
                                    className="text-sm text-teal-600 font-mono inline px-2 align-top float-right animate-pulse">2023</span>
                            </h2>
                            <p className="font-light font-mono text-sm text-gray-700 hover:text-teal-200 transition-all duration-200">managing
                                and maintaining computer systems to ensure their efficient operation, ensuring the
                                availability of hardware, software, and network resources for users.</p>
                        </div>
                    </div>
                    <div
                        className="card m-2 cursor-pointer  hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
                        <div className="m-3">
                            <h2 className="text-lg skills-title mb-2">system design and analysis
                                <span
                                    className="text-sm text-teal-600 font-mono inline px-2 align-top float-right animate-pulse">2023</span>
                            </h2>
                            <p className="font-light font-mono text-sm text-gray-700 hover:text-teal-200 transition-all duration-200">using
                                analysis and design techniques to solve business problems using information
                                technology</p>
                        </div>
                    </div>
                    <div
                        className="card m-2 cursor-pointer hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
                        <div className="m-3">
                            <h2 className="text-lg skills-title mb-2">web hosting
                                <span
                                    className="text-sm text-teal-600 font-mono inline px-2 align-top float-right animate-pulse">2023</span>
                            </h2>
                            <p className="font-light font-mono text-sm text-gray-700 hover:text-teal-200 transition-all duration-200">managing
                                and maintaining servers that host websites, ensuring their 24/7 accessibility and data
                                security, configuring and managing domain names,
                                email accounts, and databases, and provide technical support to clients.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
        ;
}

export default SkillsGrid;
