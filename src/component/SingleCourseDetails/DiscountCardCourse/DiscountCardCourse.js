import React, { Fragment } from "react";
import MyVideo from "../../../asset/video/mov_bbb.mp4";
import { MdEuro } from "react-icons/md";
import { FaHandPointer } from "react-icons/fa";

function DiscountCardCourse() {
    return (
        <Fragment>
            <div class="rounded-2xl fixed top-72">
                <div className="bg-BgLoveIcon rounded-2xl">
                    <div className="rounded-2xl">
                        <video type="video/mp4" muted
                            loop className="w-96 rounded-2xl xl:pt-4 xl:pr-4 xl:pl-4"
                            src={MyVideo}></video>
                    </div>

                    <div class="xl:p-5">
                        <div class="flex xl:mt-4 xl:mb-5">
                            <div className="xl:w-6/12">
                                <h6 className="flex text-sectionTitleColor xl:text-3xl xl:font-semibold">228 <MdEuro className="xl:mt-.5"/>  <strike className="flex text-client-section-des xl:text-xl xl:font-extralight xl:ml-4">528€ </strike></h6>
                            </div>
                            <div className="xl:w-6/12">
                                <h6>60% Discounted Price</h6>
                            </div>
                        </div>
                        <button class="text-white justify-center flex bg-maincolor xl:rounded-md xl:py-4 xl:w-full opacity-100">Enroll now <FaHandPointer className="ml-2 xl:mt-1"/> </button>
                        <h6 className="text-sectionTitleColor xl:font-semibold xl:text-2xl xl:mt-5 xl:mb-4">What's Included</h6>
                        <ul className="leading-8">
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