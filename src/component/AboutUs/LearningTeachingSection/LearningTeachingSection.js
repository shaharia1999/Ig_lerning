import React, { Fragment } from "react";

function LearningTeachingSection() {
    const userTheme = localStorage.getItem("theme");
    if (userTheme === null) {
        localStorage.setItem("theme", "light");
    }


    if (userTheme === 'dark') {
        return (
            <Fragment>
                <section className="LearningTeachingBlack">
                    <div className="container">
                        <div className="flex flex-auto text-center">
                            <div className="w-full">
                                <h2 className="text-white dark:text-black xl:font-semibold xl:text-5xl xl:mt-96 mt-96 xl:pl-40 xl:pr-40">Learning & Teaching is an age old practice in life that never stops, let’s practice together.</h2>
                                <h2 className="text-white dark:text-black xl:font-medium xl:text-base xl:mt-24 xl:pl-72 xl:pr-72">At iG Learn, we’ve seen again and again how the seemingly simple act of creating can be a force for growth, change, and discovery in people’s lives. We want to inspire and multiply the kind of creative exploration that furthers expression, learning and application.</h2>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
    else if (userTheme === 'light') {
        return (
            <Fragment>
                <section className="LearningTeaching">
                    <div className="container">
                        <div className="flex flex-auto text-center">
                            <div className="w-full">
                                <h2 className="text-white xl:font-semibold font-bold xl:text-5xl text-2xl xl:mt-96 mt-96 xl:pl-40 pl-8 pr-8 xl:pr-40">Learning & Teaching is an age old practice in life that never stops, let’s practice together.</h2>
                                <h2 className="text-white xl:font-medium xl:text-base text-sm xl:mt-24 xl:pl-72 xl:pr-72 pl-8 pr-8">At iG Learn, we’ve seen again and again how the seemingly simple act of creating can be a force for growth, change, and discovery in people’s lives. We want to inspire and multiply the kind of creative exploration that furthers expression, learning and application.</h2>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default LearningTeachingSection;