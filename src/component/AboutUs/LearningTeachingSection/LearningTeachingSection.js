import React, { Fragment } from "react";

function LearningTeachingSection() {
    const userTheme = localStorage.getItem("theme");
    if (userTheme === null) {
        localStorage.setItem("theme", "light");
    }

    return (
        <Fragment>
            <section className="LearningTeaching">
                <div className="container">
                    <div className="flex flex-auto text-center">
                        <div className="w-full">
                            <h2 className="text-white xl:font-semibold md:font-semibold font-bold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-xl text-2xl 2xl:mt-96 xl:mt-80 lg:mt-72 md:mt-64 sm:mt-44 mt-96 xl:pl-40 pl-8 pr-8 xl:pr-40">Learning & Teaching is an age old practice in life that never stops, let’s practice together.</h2>
                            <h2 className="text-white xl:font-medium xl:text-base md:text-sm sm:text-xs text-sm 2xl:mt-24 xl:mt-16 lg:mt-20 md:mt-20 sm:mt-12 xl:pl-72 xl:pr-72 lg:pl-32 lg:pr-32 md:pl-16 md:pr-16 sm:pl-16 sm:pr-16 pl-8 pr-8">At iG Learn, we’ve seen again and again how the seemingly simple act of creating can be a force for growth, change, and discovery in people’s lives. We want to inspire and multiply the kind of creative exploration that furthers expression, learning and application.</h2>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default LearningTeachingSection;