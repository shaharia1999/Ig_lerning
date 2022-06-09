import React, { Fragment } from "react";

function Price() {
    return (
        <Fragment>
            <section className="md:h-screen">
                <div className="container xl:pt-10">
                    <div className="flex justify-center items-center flex-wrap text-gray-800">
                        <div className="xl:w-full block bg-white xl:rounded-lg shadow-lg">
                            <div className="xl:flex xl:flex-wrap g-0">

                                <div className="xl:w-full xl:rounded-lg flex items-center">
                                    <div className="xl:mt-12 w-full">

                                        <div className="flex justify-center">
                                            <ul className="nav bg-gray-100 xl:w-80 justify-center rounded-md shadow-lg xl:pl-2 nav-pills flex md:flex-row flex-wrap list-none pl-0 mb-4" id="pills-tab3" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        type="button"
                                                        className="nav-linkc block active:bg-white focus:bg-white font-medium text-sm leading-tight capitalize rounded w-full md:w-auto px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 active"
                                                        id="pills-home-tab3"
                                                        data-bs-toggle="pill"
                                                        data-bs-target="#pills-home3"
                                                        role="tab"
                                                        aria-controls="pills-home3"
                                                        aria-selected="true">
                                                        Monthly Plan
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        type="button"
                                                        className="nav-linkc block active:bg-white focus:bg-white font-medium text-sm leading-tight capitalize rounded w-full md:w-auto px-6 py-3 my-2 md:mx-2 focus:outline-none focus:ring-0"
                                                        id="pills-profile-tab3"
                                                        data-bs-toggle="pill"
                                                        data-bs-target="#pills-profile3"
                                                        role="tab"
                                                        aria-controls="pills-profile3" aria-selected="false">
                                                        Annual Plan
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="flex justify-center">
                                            <button className="bg-price justify-center items-center text-center flex text-xs text-white rounded-xl h-6 w-20 xl:pt-1 xl:-mt-10px xl:pl-3 xl:pr-2 xl:ml-36 xl:-mt-24">SAVE 10%</button>
                                        </div>

                                        <div className="tab-content" id="pills-tabContent3">
                                            <div className="tab-pane fade show active xl:mt-20" id="pills-home3" role="tabpanel" aria-labelledby="pills-home-tab3">
                                                <h6 className="text-2xl text-maingray xl:font-medium">Free</h6>
                                            </div>

                                            <div class="tab-pane fade show xl:mt-20" id="pills-profile3" role="tabpanel" aria-labelledby="pills-profile-tab3">
                                                <h6 className="text-2xl text-maingray xl:font-medium">Free</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
export default Price;