import React, { Component, Fragment } from "react";
import NoData from "../../asset/images/icon/no_data.png";

class Opss extends Component {
    render() {
        return (
            <Fragment>
                <div className="container lg:mb-16">
                    <div className="text-center lg:mt-16">
                        <p className="text-4xl	font-semibold text-sectionTitleColor leading-8">Opss....</p>
                        <p className="text-xl font-semibold text-sectionTitleColor mt-4 leading-8">It looks like what you are searching for</p>
                        <p className="text-xl font-semibold text-sectionTitleColor leading-8">is currently not available on our platform!</p>

                        <div className="justify-center object-center items-center content-center flex mt-8">
                            <img className="h-96 w-auto" src={NoData}></img>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Opss;