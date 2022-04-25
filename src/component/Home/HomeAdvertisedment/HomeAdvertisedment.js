import React, { Component, Fragment } from "react";
import HomeBanner from "../../../asset/images/banner/home-banner.png";
import MostVisited from "../MostVisited/MostVisited";
import TopCategories from "../TopCategories/TopCategories";

class HomeAdvertisedment extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="flex flex-wrap">

                        <div className="lg:basis-2/3">
                            <MostVisited />
                            <TopCategories />
                        </div>

                        <div className="lg:basis-1/3">
                            <img className="w-96 lg:ml-20 lg:mt-20 home-ad-banner" src={HomeBanner} />
                        </div>

                    </div>
                </div>
            </Fragment>
        );
    }
}
export default HomeAdvertisedment;