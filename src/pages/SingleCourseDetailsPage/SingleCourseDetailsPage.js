import React, { Component, Fragment } from "react";
import NavBarTop from '../../component/Common/NavBarTop/NavBarTop';
import SingleCourseDetails from "../../component/SingleCourseDetails/SingleCourseDetails";

class SingleCourseDetailsPage extends Component {
    render() {
        return (
            <Fragment>
                <NavBarTop/>
                <SingleCourseDetails/>
            </Fragment>
        );
    }
}
export default SingleCourseDetailsPage;