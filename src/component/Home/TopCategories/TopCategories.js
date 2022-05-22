import React, { useState, useEffect, Fragment } from "react";
import ApiUrl from "../../../Api/ApiUrl";
import axios from "axios";
import CourseLogo from "../../../asset/images/logo/course-logo.png";


function TopCategories() {
    const [topCategory, setTopCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    // let language = document.getElementById('languagess');
    // console.log('language = ', language);
    console.log('props in top category1 = ', isLoading);
    function getTopCategory() {
        setIsLoading(true);
        console.log('props in top category2 = ', isLoading);
        axios.get(ApiUrl.BaseUrl + 'api/v2/top-category-info/',
            {
                headers: {
                    'Accept-Language': 'bn',
                    'Content-Type': 'application/json',
                }
            }
        ).then((response) => {
            if (response.data.error === false) {
                setIsLoading(false);
                console.log('props in top category3 = ', isLoading);
                setTopCategory(response.data.data);
                console.log("top category axios", response.data.data);
            }
        });
    }
    useEffect(() => {
        getTopCategory();
    }, []);

    const Topcategory = (() => {
        console.log('is loading4 = ', isLoading);
        if (isLoading === true) {
            <div>
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/3">
                    <article className="overflow-hidden rounded-lg shadow-lg hover:opacity-30 hover:bg-black">
                        <img alt="Placeholder" className="block bg-fixed h-72 w-full" src={CourseLogo}/>
                        <h1 className="lg:text-xl lg:font-semibold text-center text-maingray lg:mt-4 lg:mb-4">a</h1>
                    </article>
                </div>
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/3">
                    <article className="overflow-hidden rounded-lg shadow-lg hover:opacity-30 hover:bg-black">
                        <img alt="Placeholder" className="block bg-fixed h-72 w-full" src={CourseLogo} />
                        <h1 className="lg:text-xl lg:font-semibold text-center text-maingray lg:mt-4 lg:mb-4">a</h1>
                    </article>
                </div>
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/3">
                    <article className="overflow-hidden rounded-lg shadow-lg hover:opacity-30 hover:bg-black">
                        <img alt="Placeholder" className="block bg-fixed h-72 w-full" src={CourseLogo} />
                        <h1 className="lg:text-xl lg:font-semibold text-center text-maingray lg:mt-4 lg:mb-4">a</h1>
                    </article>
                </div>
            </div>
        }
        else if (isLoading === false) {
            return (
                topCategory.map((category, index) => (
                    <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/3">
                        <article className="overflow-hidden rounded-lg shadow-lg hover:opacity-30 hover:bg-black">
                            <img alt="Placeholder" className="block bg-fixed h-72 w-full" src={category.category_preview_img} />
                            <h1 className="lg:text-xl lg:font-semibold text-center text-maingray lg:mt-4 lg:mb-4">{category.category_name}</h1>
                        </article>
                    </div>
                ))
            )
        }
    })()


    return (
        <Fragment>
            <div className="container my-12">
                <h4 className="text-4xl	font-semibold text-sectionTitleColor ml-3">Top Categories {topCategory.category_count} </h4>
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {
                        Topcategory
                    }
                </div>
            </div>

        </Fragment>
    );
}

export default TopCategories;