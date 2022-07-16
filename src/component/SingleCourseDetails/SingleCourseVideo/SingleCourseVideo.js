import React, { Fragment } from "react";
import VideoTest from "../../../asset/images/master-course/videoTest.png";

function SingleCourseVideo() {
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="">
                    <div>
                        <img src={VideoTest} alt=""/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default SingleCourseVideo;