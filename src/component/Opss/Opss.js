import React, { Component, Fragment } from "react";
import NoData from "../../asset/images/icon/no_data.png";

class Opss extends Component {
    render() {
        return (
            <Fragment>
                <div className="container lg:mb-16">
                    <div className="text-center xl:mt-16 mt-12">
                        <p className="xl:text-4xl text-3xl font-semibold text-sectionTitleColor dark:text-white xl:leading-8">Opss....</p>
                        <p className="xl:text-xl lg:text-sm md:text-sm sm:text-sm text-xs font-semibold text-sectionTitleColor dark:text-white mt-4 xl:leading-8">It looks like what you are searching for</p>
                        <p className="xl:text-xl lg:text-sm md:text-sm sm:text-sm text-xs font-semibold text-sectionTitleColor dark:text-white xl:leading-8">is currently not available on our platform!</p>

                        <div className="justify-center object-center items-center content-center flex mt-8">
                            <img className="xl:h-96 lg:h-64 md:h-48 sm:h-36 h-32 w-auto" src={NoData} alt=""></img>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Opss;