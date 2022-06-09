import React, { Component, Fragment } from 'react';
import Partner1 from "../../../asset/images/partner/logo-mba-ebusiness.png";
import Partner2 from "../../../asset/images/partner/Repubblica.png";

class Partner extends Component {
    render() {
        return (
            <Fragment>
                <div className="container mt-8 mb-8">
                    <h4 className="text-4xl	font-semibold text-sectionTitleColor ml-3">Our Partners</h4>
                    <div className="flex flex-row mt-3 p-3">
                        <div className="lg:basis-1/5 p-3">
                            <img className="h-18 w-auto" src={Partner1} />
                        </div>
                        <div className="lg:basis-1/5 p-3">
                            <img className="h-18 w-auto" src={Partner2} />
                        </div>
                        <div className="lg:basis-1/5 p-3">
                            <img className="h-18 w-auto" src={Partner1} />
                        </div>
                        <div className="lg:basis-1/5 p-3">
                            <img className="h-18 w-auto" src={Partner2} />
                        </div>
                        <div className="lg:basis-1/5 p-3">
                            <img className="h-18 w-auto" src={Partner1} />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Partner;