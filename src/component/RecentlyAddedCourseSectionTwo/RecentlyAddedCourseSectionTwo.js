import React, { Fragment, useEffect, useState } from "react";
import LoveIcon from "../../asset/images/icon/love-icon.png";
import MasterCourseThumbnail from "../../asset/images/master-course/master-course-thumbnail.png";
import CourseLogo from "../../asset/images/logo/course-logo.png";
import Flag from "../../asset/images/icon/usa.png";
import { GoPrimitiveDot } from "react-icons/go";
import { MdLogin } from "react-icons/md";
import axios from "axios";
import ApiUrl from "../../Api/ApiUrl";


function RecentlyAddedCourseSectionTwo() {
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [getCourse, setCourse] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [categoryLoading, setCategoryLoading] = useState(false);
    const [subCategoryLoading, setSubCategoryLoading] = useState(false);
    const [CourseLoading, setCourseLoading] = useState(false);


    useEffect(() => {
        setCategoryLoading(true);
        setSubCategoryLoading(true);
        setCourseLoading(true);
        setIsLoading(true);
        axios.get(ApiUrl.BaseUrl + 'api/course/category-based-subcategory/').then((response) => {
            if (response.data.error === false) {
                setCategory(response.data.data);
                setSubCategory(response.data.data);
                setCourse(response.data.data);
                setCategoryLoading(false);
                setSubCategoryLoading(false);
                setCourseLoading(false);
                setIsLoading(false);
            }
        });
    }, []);

    const CategoryBasedSubCategory = (category_id) => {
        axios.get(ApiUrl.BaseUrl + 'api/course/category-based-subcategory/' + category_id + "/").then((response) => {
            if (response.data.error === false) {
                setSubCategory(response.data.data);
                setCourse(response.data.data);
            }
        });
    };

    function SubCategoryCourseInfo(sub_category_id) {
        axios.get(ApiUrl.BaseUrl + 'api/course/sub-category-based-subcategory/' + sub_category_id + "/").then((response) => {
            if (response.data.error === false) {
                setCourse(response.data.data);
            }
        });
    };

    const category_Data_Loading = (() => {
        if (categoryLoading === true) {
            return(
                <h6>kassa</h6>
            )
        }
    })()
    
    const category_data = (() => {
        if (categoryLoading === false) {
            return (
                category.map((category_info, index) => (
                    <li key={index} className="nav-item" role="presentation">
                        <button type="button"
                            onClick={() => CategoryBasedSubCategory(category_info.category_id)}
                            className="nav-link1 block w-full md:w-auto px-6 py-3 my-2 md:mr-2 active text-base font-medium leading-tight mx-2 h-11" id="pills-master-tab3" data-bs-toggle="pill" data-bs-target="#pills-master" role="tab" aria-controls="pills-master" aria-selected="true">
                            {category_info.category_name}
                        </button>
                    </li>
                ))
            )
        }
    })()

    const data_of_subcategory_Loading = (() => {
        if (subCategoryLoading === true) {
            return(
                <h6>kassa</h6>
            )
        }
    })()

    const data_of_subcategory = (() => {
        if (subCategoryLoading === false) {
            return(
                subCategory.map((category_info) => (
                    category_info.sub_category_information.map((subcategory, index) => (
                        <div key={index}>
                            <li className="nav-item" role="presentation">
                                <button type="button"
                                    className="nav-link block w-full md:w-auto px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 text-base bg-maincolor font-medium leading-tight text-black rounded-3xl mx-2 h-11"
                                    onClick={() => SubCategoryCourseInfo(subcategory.sub_category_id)}
                                >
                                    {subcategory.sub_category_name}
                                </button>
                            </li>
                        </div>
                    ))
                ))
            )
        }
    })()

    const data_of_course_details_Loading = (() => {
        if (CourseLoading === true) {
            return(
                <h6>kassa</h6>
            )
        }
    })()

    const data_of_course_details = (() => {
        if (CourseLoading === false) {
            return(
                getCourse.map((category_info) => (
                    category_info.course_information.map((course, course_index) => (
                        <div key={course_index} className="xl:my-8 xl:px-5 xl:w-1/4">
                            <div className="wrapper antialiased text-gray-900">
                                <div className="relative">
                                    <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={MasterCourseThumbnail} alt='' />
            
                                    <div className="flex flex-wrap lg:mt-3">
                                        <div className="w-1/5">
                                            <a href="!#">
                                                <div
                                                    class="text-sm absolute top-0 left-3 bg-black text-white rounded-full border-2 border-white h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                                    <img className="h-12 w-12" src={CourseLogo} alt='' />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="w-4/5">
                                            <a href="!#">
                                                <div class="text-lg absolute top-0 text-white mt-5">
                                                    <h6 className="font-medium text-xl -mt-2 text-white">{course.channel_name_id?.channel_name}</h6>
                                                    <h6 className="font-extralight lg:-ml-6 flex text-sm text-white">
                                                        <img className="w-5 h-5 rounded-full border-2 border-white mr-2"
                                                            src={ApiUrl.ImageBaseUrl + course?.channel_name_id?.channel_name_logo} alt='' />
                                                    </h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
            
                                <div className="relative px-4 -mt-16">
                                    <div className="bg-white p-4 rounded-lg shadow-lg">
                                        <div className="flex flex-wrap">
                                            <div className="w-full">
                                                <h4 className="mt-1 text-lg font-semibold text leading-tight text-CourseTitle">
                                                    {course?.course_title}
                                                </h4>
                                            </div>
                                        </div>
            
                                        <div className="flex flex-wrap">
                                            <div className="w-2/4">
                                                <div className="flex sm:justify-center xl:justify-start">
                                                    <span className="text-gray-600 text-xs mt-2">Starts September 2022</span>
                                                </div>
                                            </div>
                                            <div className="w-2/4">
                                                <div className="flex sm:justify-center xl:justify-start">
                                                    <GoPrimitiveDot className="text-sm mt-2 font-medium text-LiveBtnColor" /><span className="text-gray-600 text-xs mt-2">  11 Weeks</span>
                                                </div>
                                            </div>
                                        </div>
            
            
                                        <div className="flex flex-wrap">
                                            <div className="w-full">
                                                <div className="flex xl:justify-start">
                                                    <span className="bg-master-degree-bg rounded-xl lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 text-master-degree-text  text-xs mt-2">Certified Master Degrees</span>
                                                </div>
                                            </div>
                                        </div>
            
                                        <div className="flex flex-wrap mt-5">
                                            <div className="w-2/5">
                                                <div className="flex sm:justify-center xl:justify-start -mt-3">
                                                    <a className="z-30">
                                                        <img className="h-8 w-8 rounded-full border-2 border-white"
                                                            src="https://media.istockphoto.com/photos/got-this-picture-id1332291404?b=1&k=20&m=1332291404&s=170667a&w=0&h=uRm6p7xa_-YF9t_6sVY7DXnXaa2Jo_NeL4oUvrFJq6I=" />
                                                    </a>
                                                    <a className="-ml-3 z-20">
                                                        <img className="h-8 w-8 rounded-full border-2 border-white"
                                                            src="https://cbsnews1.cbsistatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg" />
                                                    </a>
                                                    <a className="-ml-3 z-10">
                                                        <img className="h-8 w-8 rounded-full border-2 border-white"
                                                            src="https://aisvox-a.akamaihd.net/masters/940835/26-1/27-1yk13p/2540x1429/4080/800604860-jpg.jpg" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="w-3/5 relative">
                                                <div className="flex xl:justify-end -mt-3 absolute right-0 absolute">
                                                    <button className="text-sm px-2 font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 rounded-md">
                                                        <img className="px-1 h-3 w-5" src={LoveIcon} alt='' /></button>
                                                    <button
                                                        className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ))
            )
        }
    })()

    // const category_data = category.map((category_info, index) => (
    //     <li key={index} className="nav-item" role="presentation">
    //         <button type="button"
    //             onClick={() => CategoryBasedSubCategory(category_info.category_id)}
    //             className="nav-link1 block w-full md:w-auto px-6 py-3 my-2 md:mr-2 active text-base font-medium leading-tight mx-2 h-11" id="pills-master-tab3" data-bs-toggle="pill" data-bs-target="#pills-master" role="tab" aria-controls="pills-master" aria-selected="true">
    //             {category_info.category_name}
    //         </button>
    //     </li>
    // ));

    // const data_of_subcategory = subCategory.map((category_info) => (
    //     category_info.sub_category_information.map((subcategory, index) => (
    //         <div key={index}>
    //             <li className="nav-item" role="presentation">
    //                 <button type="button"
    //                     className="nav-link block w-full md:w-auto px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 text-base bg-maincolor font-medium leading-tight text-black rounded-3xl mx-2 h-11"
    //                     onClick={() => SubCategoryCourseInfo(subcategory.sub_category_id)}
    //                 >
    //                     {subcategory.sub_category_name}
    //                 </button>
    //             </li>
    //         </div>
    //     ))
    // ));

    // const data_of_course_details = getCourse.map((category_info) => (
    //     category_info.course_information.map((course, course_index) => (
    //         <div key={course_index} className="xl:my-8 xl:px-5 xl:w-1/4">
    //             <div className="wrapper antialiased text-gray-900">
    //                 <div className="relative">
    //                     <img className="w-full h-72 object-cover object-center rounded-lg shadow-md" src={MasterCourseThumbnail} alt='' />

    //                     <div className="flex flex-wrap lg:mt-3">
    //                         <div className="w-1/5">
    //                             <a href="!#">
    //                                 <div
    //                                     class="text-sm absolute top-0 left-3 bg-black text-white rounded-full border-2 border-white h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
    //                                     <img className="h-12 w-12" src={CourseLogo} alt='' />
    //                                 </div>
    //                             </a>
    //                         </div>
    //                         <div className="w-4/5">
    //                             <a href="!#">
    //                                 <div class="text-lg absolute top-0 text-white mt-5">
    //                                     <h6 className="font-medium text-xl -mt-2 text-white">{course.channel_name_id?.channel_name}</h6>
    //                                     <h6 className="font-extralight lg:-ml-6 flex text-sm text-white">
    //                                         <img className="w-5 h-5 rounded-full border-2 border-white mr-2"
    //                                             src={ApiUrl.ImageBaseUrl + course?.channel_name_id?.channel_name_logo} alt='' />
    //                                     </h6>
    //                                 </div>
    //                             </a>
    //                         </div>
    //                     </div>
    //                 </div>

    //                 <div className="relative px-4 -mt-16">
    //                     <div className="bg-white p-4 rounded-lg shadow-lg">
    //                         <div className="flex flex-wrap">
    //                             <div className="w-full">
    //                                 <h4 className="mt-1 text-lg font-semibold text leading-tight text-CourseTitle">
    //                                     {course?.course_title}
    //                                 </h4>
    //                             </div>
    //                         </div>

    //                         <div className="flex flex-wrap">
    //                             <div className="w-2/4">
    //                                 <div className="flex sm:justify-center xl:justify-start">
    //                                     <span className="text-gray-600 text-xs mt-2">Starts September 2022</span>
    //                                 </div>
    //                             </div>
    //                             <div className="w-2/4">
    //                                 <div className="flex sm:justify-center xl:justify-start">
    //                                     <GoPrimitiveDot className="text-sm mt-2 font-medium text-LiveBtnColor" /><span className="text-gray-600 text-xs mt-2">  11 Weeks</span>
    //                                 </div>
    //                             </div>
    //                         </div>


    //                         <div className="flex flex-wrap">
    //                             <div className="w-full">
    //                                 <div className="flex xl:justify-start">
    //                                     <span className="bg-master-degree-bg rounded-xl lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 text-master-degree-text  text-xs mt-2">Certified Master Degrees</span>
    //                                 </div>
    //                             </div>
    //                         </div>

    //                         <div className="flex flex-wrap mt-5">
    //                             <div className="w-2/5">
    //                                 <div className="flex sm:justify-center xl:justify-start -mt-3">
    //                                     <a className="z-30">
    //                                         <img className="h-8 w-8 rounded-full border-2 border-white"
    //                                             src="https://media.istockphoto.com/photos/got-this-picture-id1332291404?b=1&k=20&m=1332291404&s=170667a&w=0&h=uRm6p7xa_-YF9t_6sVY7DXnXaa2Jo_NeL4oUvrFJq6I=" />
    //                                     </a>
    //                                     <a className="-ml-3 z-20">
    //                                         <img className="h-8 w-8 rounded-full border-2 border-white"
    //                                             src="https://cbsnews1.cbsistatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg" />
    //                                     </a>
    //                                     <a className="-ml-3 z-10">
    //                                         <img className="h-8 w-8 rounded-full border-2 border-white"
    //                                             src="https://aisvox-a.akamaihd.net/masters/940835/26-1/27-1yk13p/2540x1429/4080/800604860-jpg.jpg" />
    //                                     </a>
    //                                 </div>
    //                             </div>
    //                             <div className="w-3/5 relative">
    //                                 <div className="flex xl:justify-end -mt-3 absolute right-0 absolute">
    //                                     <button className="text-sm px-2 font-extralight leading-tight bg-BgLoveIcon text-white lg:pl-2 lg:pr-2 lg:pt-1 lg:pb-1 rounded-md">
    //                                         <img className="px-1 h-3 w-5" src={LoveIcon} alt='' /></button>
    //                                     <button
    //                                         className="text-sm flex font-light leading-tight bg-apply-now text-white lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 rounded-lg"> Apply Now <MdLogin className="ml-2 text-xl font-normal" />
    //                                     </button>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     ))
    // ))

    if (isLoading === true){
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
                                    <ul className="nav nav-pills flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4">
                                        {
                                            category_Data_Loading
                                        }
                                    </ul>
                                </div>
    
                            </div>
                        </div>
                    </div>
    
                    <div className="mt-4 flex flex-wrap">
                        <div className="show w-full active">
                            <ul className="nav-pills flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4">
                                {
                                    data_of_subcategory_Loading
                                }
                            </ul>
    
                            <div className="flex flex-wrap -mx-1 xl:-mx-4">
                                <div className="mt-4 w-full">
                                    <div className="fade show active">
                                        <div className="flex flex-wrap -mx-1 lg:-mx-4">
                                            {
                                                data_of_course_details_Loading
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
    else if(isLoading === false){
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
                                    <ul className="nav nav-pills flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4">
                                        {
                                            category_data
                                        }
                                    </ul>
                                </div>
    
                            </div>
                        </div>
                    </div>
    
                    <div className="mt-4 flex flex-wrap">
                        <div className="show w-full active">
                            <ul className="nav-pills flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4">
                                {
                                    data_of_subcategory
                                }
                            </ul>
    
                            <div className="flex flex-wrap -mx-1 xl:-mx-4">
                                <div className="mt-4 w-full">
                                    <div className="fade show active">
                                        <div className="flex flex-wrap -mx-1 lg:-mx-4">
                                            {
                                                data_of_course_details
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }


    

}
export default RecentlyAddedCourseSectionTwo;