import React, { Component, Fragment, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import SpeedMeter from "../../../../asset/images/icon/icon_level.png";
import CertificateIcon from "../../../../asset/images/icon/icon_certificate.png";
import LoveIcon from "../../../../asset/images/icon/love-icon.png";
import ShareIcon from "../../../../asset/images/icon/icon_share.png";
import { useQuery } from "react-query";
import ApiUrl from "../../../../Api/ApiUrl";
import Course1 from "../../../../asset/images/course-thumbnail/course-thumbnail.png";
import Play from "../../../../asset/images/icon/play.png";
import CourseLogo from "../../../../asset/images/logo/course-logo.png";
import 'tw-elements';
import RecentlyAddedCourseOne from "../../../RecentlyAddedCourseOne/RecentlyAddedCourseOne";

function BusinessCompany() {
    
    const [recently_addedsubcategory_id, setSubcategoryId] = useState(0);
    const custom_headers = {
        method: 'get',

        headers: new Headers({
            'Accept-Language': 'en',
            'Content-Type': 'application/json'
        })
    }

    const OnSubCategoryDetails = (subcategory_id) =>{
        console.log('subcategory = ', subcategory_id);
        setSubcategoryId(subcategory_id)
    } 
    
    const fetchCourseSubCategory = async () =>
        await (await fetch(ApiUrl.BaseUrl + "api/course/course-subcategory-response/", custom_headers)).json();
    const subcategory_response = useQuery("subcategory", fetchCourseSubCategory);
    const subcategory_response_data = subcategory_response.data;
    console.log('subcategory_response_data',subcategory_response.status);
    

    if (subcategory_response.status === 'loading'){
        return (
            <div className="container my-12">
                <h4 className="text-4xl	font-semibold text-sectionTitleColor ml-3">Recently Added
                                Course </h4>
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    <h1>Loading</h1>
                </div>
            </div>
        );
    }
    else if(subcategory_response.status === 'success'){
        const data_of_subcategory = subcategory_response_data.data.map((subcategory, index) => (
            <div>
                <input id={subcategory.sub_category_id} type='hidden' name={subcategory.sub_category_id} />
                <li className="nav-item" role="presentation">
                    <button type="button"
                        onClick={() => OnSubCategoryDetails(subcategory.sub_category_id)}
                        className="nav-link block w-full md:w-auto px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 text-base bg-maincolor font-medium leading-tight text-black rounded-3xl mx-2 h-11"
                        id="pills-business-tab3" 
                        data-bs-toggle="pill" 
                        data-bs-target="pills-business"
                        role="tab" aria-controls="pills-Business" 
                        aria-selected="true">{subcategory.sub_category_name}
                    </button>
                </li>
            </div>
        ))
        return (
            <Fragment>
                <div className="container my-12">

                    <div className="flex flex-wrap">
                        <div className="w-1/3">
                            <div className="flex">
                                <h4 className="text-4xl	font-semibold text-sectionTitleColor ml-3">Recently Added
                                    Course</h4>
                            </div>
                        </div>
                        <div className="w-2/3 relative">
                            <div className="flex right-0 absolute">
                                <div class="mb-4">
                                    <ul className="nav nav-pills flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4" id="pills-tab3"
                                        role="tablist">
                                        {
                                            data_of_subcategory
                                        }
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="tab-content mt-4" id="pills-tabContent3">
                        {<RecentlyAddedCourseOne subcategory_id={recently_addedsubcategory_id} />}
                    </div>
                </div>
            </Fragment>
        );
    }
}



// }
export default BusinessCompany;