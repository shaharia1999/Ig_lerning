import React, { Fragment } from "react";
import 'tw-elements';
import FeaturedTrainingImg from '../../../asset/images/team/featured-training1.png'

function FeatureTraining() {
    return (
        <Fragment>
            <div className="">
                <div className="mt-4">
                    <div className="fade show active">
                        <h6 className="xl:text-3xl font-semibold text-sectionTitleColor float-right xl:mb-5">Featured Training</h6>
                        <div className="">
                            <hr className="w-full flex border" />
                            <hr className="w-64 flex border-4 xl:-mt-2 float-right" />
                        </div>

                        <div className="flex flex-wrap w-full -px-1 xl:-px-4">
                            <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3">
                                <article className="relative overflow-hidden rounded-sm shadow-xl hover:opacity-30 hover:bg-black">
                                    <img alt="Placeholder" className="block bg-fixed h-72 w-full" src={FeaturedTrainingImg} />
                                    <h1 className="xl:text-base xl:font-normal absolute bg-black bg-opacity-20 text-center text-white xl:-mt-12 xl:pt-3 xl:h-16 xl:w-full xl:mb-4">Personal Development</h1>
                                </article>
                            </div>

                            <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3">
                                <article className="relative overflow-hidden rounded-sm shadow-xl hover:opacity-30 hover:bg-black">
                                    <img alt="Placeholder" className="block bg-fixed h-72 w-full" src={FeaturedTrainingImg} />
                                    <h1 className="xl:text-base xl:font-normal absolute bg-black bg-opacity-20 text-center text-white xl:-mt-12 xl:pt-3 xl:h-16 xl:w-full xl:mb-4">Love and Wellness</h1>
                                </article>
                            </div>

                            <div className="my-1 px-1 w-full md:w-1/2 xl:my-8 xl:px-5 xl:w-1/3">
                                <article className="relative overflow-hidden rounded-sm shadow-xl hover:opacity-30 hover:bg-black">
                                    <img alt="Placeholder" className="block bg-fixed h-72 w-full" src={FeaturedTrainingImg} />
                                    <h1 className="xl:text-base xl:font-normal absolute bg-black bg-opacity-20 text-center text-white xl:-mt-12 xl:pt-3 xl:h-16 xl:w-full xl:mb-4">Personal Development</h1>
                                </article>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default FeatureTraining;