import React, { Fragment } from "react";
import ContactTrainer from "./ContactTrainer/ContactTrainer";
import CurrentCourse from "./CurrentCourse/CurrentCourse";
import NewsFeed from "./NewsFeed/NewsFeed";
import UpCommingEvents from "./UpCommingEvents/UpCommingEvents";

function TrainerProfile() {
    return (
        <Fragment>
            <div className="container">

                <div className="flex flex-wrap xl:mt-10">
                    <div className="xl:w-4/12">
                        <NewsFeed/>
                    </div>
                    <div className="xl:w-8/12 xl:pl-7 xl:pr-7">
                        <CurrentCourse/>
                    </div>
                </div>


                <div className="flex flex-wrap xl:mt-10">
                    <div className="xl:w-4/12">
                        <UpCommingEvents />
                    </div>
                    <div className="xl:w-8/12 xl:pl-12 xl:pr-12">
                        <ContactTrainer />
                    </div>
                </div>
            </div >
        </Fragment>
    );
}

export default TrainerProfile;