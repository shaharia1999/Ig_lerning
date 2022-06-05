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

                        <div className="xl:w-2/3">
                            <MostVisited />
                            <TopCategories />
                        </div>

                        <div className="xl:w-1/3">
                            <img className="w-96 lg:ml-20 lg:mt-20 home-ad-banner" src={HomeBanner} alt=""/>
                        </div>

                    </div>
                </div>
            </Fragment>
        );
    }
}
export default HomeAdvertisedment;