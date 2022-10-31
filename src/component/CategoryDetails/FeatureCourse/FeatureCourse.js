import React, { Fragment } from "react";
import FeaturePlay from '../../../asset/images/icon/feature-play.png';

function FeatureCourse() {
    return (
        <Fragment>
                <div className="container">
                    <h6 className="text-2xl font-semibold ml-2 lg:mb-7">
                        Featured Courses
                    </h6>
                    <div className="flex flex-wrap">
                        <div className="lg:w-1/4 px-2">
                            <img className="lg:rounded-md xl:h-112 xl:w-full" src="https://www.bethesdaheadshots.com/wp-content/uploads/2022/05/black-female-corporate-headshot-800.jpg" alt=""/>
                            <div className="text-center xl:-mt-80">
                                <img className="mx-auto" src={FeaturePlay} alt=""/>
                                <h6 className="xl:text-2xl text-maincolor xl:mt-8 font-semibold">Laurea Pausini</h6>
                                <h6 className="xl:text-sm text-gray-400">Italia - Milano</h6>
                                <h6 className="xl:text-lg text-white lg:px-3 leading-none">Learn about art of classical music, Italian and Western</h6>
                                <button className="bg-maincolor text-xs font-light border-0 border-sm rounded-md text-white px-2 py-1 mt-3">With Certificate</button>
                                <h6 className="text-xs text-maincolor mt-2">Starts September 2022 - 11 Weeks</h6>
                            </div>
                        </div>
                        <div className="lg:w-1/4 px-2">
                            <img className="lg:rounded-md xl:h-112 xl:w-full" src="https://i.pinimg.com/736x/c8/1a/8b/c81a8b6bcee899a76686672e8832863e--professional-headshots-corporate-headshots.jpg" alt=""/>
                            <div className="text-center xl:-mt-80">
                                <img className="mx-auto" src={FeaturePlay} alt=""/>
                                <h6 className="xl:text-2xl text-maincolor xl:mt-8 font-semibold">Laurea Pausini</h6>
                                <h6 className="xl:text-sm text-gray-400">Italia - Milano</h6>
                                <h6 className="xl:text-lg text-white lg:px-3 leading-none">Learn about art of classical music, Italian and Western</h6>
                                <button className="bg-maincolor text-xs font-light border-0 border-sm rounded-md text-white px-2 py-1 mt-3">With Certificate</button>
                                <h6 className="text-xs text-maincolor mt-2">Starts September 2022 - 11 Weeks</h6>
                            </div>
                        </div>
                        <div className="lg:w-1/4 px-2">
                            <img className="lg:rounded-md xl:h-112 xl:w-full" src="https://images.squarespace-cdn.com/content/v1/53b599ebe4b08a2784696956/1585161216625-SPEZ9Q48H4XWEAN47K1O/professional-headshots-nyc-043.jpg" alt=""/>
                            <div className="text-center xl:-mt-80">
                                <img className="mx-auto" src={FeaturePlay} alt=""/>
                                <h6 className="xl:text-2xl text-maincolor xl:mt-8 font-semibold">Laurea Pausini</h6>
                                <h6 className="xl:text-sm text-gray-400">Italia - Milano</h6>
                                <h6 className="xl:text-lg text-white lg:px-3 leading-none">Learn about art of classical music, Italian and Western</h6>
                                <button className="bg-maincolor text-xs font-light border-0 border-sm rounded-md text-white px-2 py-1 mt-3">With Certificate</button>
                                <h6 className="text-xs text-maincolor mt-2">Starts September 2022 - 11 Weeks</h6>
                            </div>
                        </div>
                        <div className="lg:w-1/4 px-2">
                            <img className="lg:rounded-md xl:h-112 xl:w-full" src="https://images.squarespace-cdn.com/content/v1/58b048cf1b631bb7fa6ac6c0/1b70e543-c126-4f30-a3d9-b738217d5fc0/business-headshots-e03s43d4ssdde-33we32w321sdf3.jpg?format=1500w" alt=""/>
                            <div className="text-center xl:-mt-80">
                                <img className="mx-auto" src={FeaturePlay} alt=""/>
                                <h6 className="xl:text-2xl text-maincolor xl:mt-8 font-semibold">Laurea Pausini</h6>
                                <h6 className="xl:text-sm text-gray-400">Italia - Milano</h6>
                                <h6 className="xl:text-lg text-white lg:px-3 leading-none">Learn about art of classical music, Italian and Western</h6>
                                <button className="bg-maincolor text-xs font-light border-0 border-sm rounded-md text-white px-2 py-1 mt-3">With Certificate</button>
                                <h6 className="text-xs text-maincolor mt-2">Starts September 2022 - 11 Weeks</h6>
                            </div>
                        </div>
                    </div>
                </div>
        </Fragment>
    );
}

export default FeatureCourse;