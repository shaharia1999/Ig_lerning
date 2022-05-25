import React, { Fragment } from "react";
import MyVideo from "../../../asset/video/mov_bbb.mp4";

function DiscountCardCourse() {
    return (
        <Fragment>
            <div class="rounded-lg fixed top-72 xl:pr-72">
                <div className="bg-BgLoveIcon">
                    <div className="rounded-lg">
                        <video type="video/mp4" muted
                            loop className="w-full xl:pt-2 xl:pr-3 xl:pl-3 h-72"
                            src={MyVideo}></video>
                    </div>

                    <div class="xl:p-5">
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <button class="text-white bg-maincolordeep xl:rounded-md xl:py-4 xl:w-full opacity-100">Enroll now</button>
                        <h6 className="text-black xl:font-semibold xl:text-2xl xl:mt-5 xl:mb-4">What's Included</h6>
                        <ul>
                            <li className="text-black">Mobile Support</li>
                            <li className="text-black">Lession Archive</li>
                            <li className="text-black">Mobile Support</li>
                            <li className="text-black">Tutor Chat</li>
                            <li className="text-black">Course Certificate</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default DiscountCardCourse;