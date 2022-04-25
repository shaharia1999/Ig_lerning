import React, { Component, Fragment } from "react";

class TopCategories extends Component {
    render() {
        return (
            <Fragment>
                <div className="container my-12">
                    <h4 className="text-4xl	font-semibold text-sectionTitleColor ml-3">Top Categories (28) </h4>
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">

                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/3">
                            <article className="overflow-hidden rounded-lg shadow-lg hover:opacity-30 hover:bg-black">
                                <img alt="Placeholder" className="block bg-fixed h-72 w-full" src="https://picsum.photos/600/400/?random" />

                                <h1 className="lg:text-xl lg:font-semibold text-center  text-maingray lg:mt-4 lg:mb-4">
                                    Business & Company
                                </h1>
                            </article>
                        </div>

                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/3">
                            <article className="overflow-hidden rounded-lg shadow-lg">
                                <img alt="Placeholder" className="block h-72 w-full" src="https://picsum.photos/600/400/?random" />

                                <h1 className="lg:text-xl lg:font-semibold text-center  text-maingray lg:mt-4 lg:mb-4">
                                    IA & BigData
                                </h1>
                            </article>
                        </div>

                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/3">
                            <article className="overflow-hidden rounded-lg shadow-lg">
                                <img alt="Placeholder" className="block h-72 w-full" src="https://picsum.photos/600/400/?random" />

                                <h1 className="lg:text-xl lg:font-semibold text-center  text-maingray lg:mt-4 lg:mb-4">
                                    Art & Design
                                </h1>
                            </article>
                        </div>

                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/3">
                            <article className="overflow-hidden rounded-lg shadow-lg">
                                <img alt="Placeholder" className="block h-72 w-full" src="https://picsum.photos/600/400/?random" />

                                <h1 className="lg:text-xl lg:font-semibold text-center  text-maingray lg:mt-4 lg:mb-4">
                                    Digital Marketing
                                </h1>
                            </article>
                        </div>

                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/3">
                            <article className="overflow-hidden rounded-lg shadow-lg">
                                <img alt="Placeholder" className="block h-72 w-full" src="https://picsum.photos/600/400/?random" />

                                <h1 className="lg:text-xl lg:font-semibold text-center  text-maingray lg:mt-4 lg:mb-4">
                                    Logistics & Transport
                                </h1>
                            </article>
                        </div>

                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/3">
                            <article className="overflow-hidden rounded-lg shadow-lg">
                                <img alt="Placeholder" className="block h-72 w-full" src="https://picsum.photos/600/400/?random" />

                                <h1 className="lg:text-xl lg:font-semibold text-center  text-maingray lg:mt-4 lg:mb-4">
                                    Programming
                                </h1>
                            </article>
                        </div>

                    </div>
                </div>
            </Fragment>
        );
    }
}
export default TopCategories;