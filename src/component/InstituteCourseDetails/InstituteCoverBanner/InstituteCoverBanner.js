import { Fragment } from "react";
import InstituteCoverImg from "../../../asset/images/banner/institute-banner.png"

function InstituteCoverBanner() {
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="flex flex-wrap">
                    <div className="">
                        <img className="institute-cover" src={InstituteCoverImg} alt="" />
                    </div>

                    <div className="absolute flex container">
                        <div className="xl:w-2/12 lg:w-2/12 w-3/12">
                            <img
                                className="xl:h-24 lg:h-20 h-16 xl:mt-7 xl:ml-36 mt-4 xl:w-24 lg:w-20 w-16 rounded-full xl:border-4 xl:border-white border-2 shadow border-white xl:shadow-lg"
                                src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"
                                alt="teacher" />
                        </div>
                        <div className="2xl:w-6/12 xl:w-10/12 w-9/12 xl:ml-6 lg:w-10/12 lg:-ml-2 -ml-4">
                            <h6 className=" text-white dark:text-white 2xl:text-2xl xl:text-2xl lg:text-xl text-base lg:font-semibold font-medium xl:pr-24 pr-0 xl:mt-10 lg:mt-5 mt-4">
                            Learn how to pitch and grow your business, how to make your ideas speak
                            </h6>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}
export default InstituteCoverBanner;