import React from "react";
import { useQuery } from "react-query";
import ApiUrl from "../../../Api/ApiUrl";
import ShareIcon from "../../../asset/images/icon/icon_share.png";


function TopCategories() {
    
    // let language = document.getElementById('languagess');
    // console.log('language = ', language);
    const custom_headers = {
        method: 'get',

        headers: new Headers({
            'Accept-Language': 'en',
            'Content-Type': 'application/json'
        })
    }

    const fetchTopCategories = async () =>
        await (await fetch(ApiUrl.BaseUrl + "api/v2/top-category-info/", custom_headers)).json();
    const { data, error, status, isLoading, isError, isLoadingError } = useQuery("users", fetchTopCategories);
    const extra = useQuery("users", fetchTopCategories);

    if (status === 'loading') {
        return (
            <div className="container my-12">
                <h4 className="text-4xl	font-semibold text-sectionTitleColor ml-3">Top Categories </h4>
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/3">
                        <article className="overflow-hidden rounded-lg shadow-lg hover:opacity-30 hover:bg-black">
                            <div className="ph-picture block bg-fixed h-72 w-full"></div>
                            <h1 className=" lg:text-xl lg:font-semibold text-center  text-maingray lg:mt-4 lg:mb-4">
                                <div className="ph-col-6 pt-2 pb-2"></div>
                            </h1>
                        </article>
                    </div>
                    <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/3">
                        <article className="overflow-hidden rounded-lg shadow-lg hover:opacity-30 hover:bg-black">
                            <div className="ph-picture block bg-fixed h-72 w-full"></div>
                            <h1 className=" lg:text-xl lg:font-semibold text-center  text-maingray lg:mt-4 lg:mb-4">
                                <div className="ph-col-6 pt-2 pb-2"></div>
                            </h1>
                        </article>
                    </div>
                    <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/3">
                        <article className="overflow-hidden rounded-lg shadow-lg hover:opacity-30 hover:bg-black">
                            <div className="ph-picture block bg-fixed h-72 w-full"></div>
                            <h1 className=" lg:text-xl lg:font-semibold text-center  text-maingray lg:mt-4 lg:mb-4">
                                <div className="ph-col-6 pt-2 pb-2"></div>
                            </h1>
                        </article>
                    </div>
                </div>
            </div>
        );
    } else if (status === 'success') {
        console.log("Data Found ", data)
        const html_dt = data.data.map((val, index) => (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/3">
                <article className="overflow-hidden rounded-lg shadow-lg hover:opacity-30 hover:bg-black">
                    <img alt="Placeholder" className="block bg-fixed h-72 w-full" src={val.category_preview_img} />
                    <h1 className="lg:text-xl lg:font-semibold text-center text-maingray lg:mt-4 lg:mb-4">{val.category_name}</h1>
                </article>
            </div>
        ))
        return (
            <div className="container my-12">
                <h4 className="text-4xl	font-semibold text-sectionTitleColor ml-3">Top Categories {data.category_count} </h4>
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {
                        html_dt
                    }
                </div>
            </div>
        );
    }
}

export default TopCategories;