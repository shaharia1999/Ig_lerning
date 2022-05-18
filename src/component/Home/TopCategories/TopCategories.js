import React from "react";
import { useQuery } from "react-query";
import ApiUrl from "../../../Api/ApiUrl";
import ShareIcon from "../../../asset/images/icon/icon_share.png";
import axios from "axios";


function TopCategories() {
    const [topCategory, setTopCategory] = React.useState([]);
    
    // let language = document.getElementById('languagess');
    // console.log('language = ', language);
 
    React.useEffect(() => {
        axios.get(ApiUrl.BaseUrl + 'api/v2/top-category-info/',
            {
                headers: {
                    'Accept-Language': 'bn',
                    'Content-Type': 'application/json',
                }
            }
        ).then((response) => {
            if (response.data.error === false) {
                setTopCategory(response.data.data);
                console.log("top category axios", response.data.data);
            }
        });
    }, []);
    

    const html_dt = topCategory.map((val, index) => (
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg hover:opacity-30 hover:bg-black">
                <img alt="Placeholder" className="block bg-fixed h-72 w-full" src={val.category_preview_img} />
                <h1 className="lg:text-xl lg:font-semibold text-center text-maingray lg:mt-4 lg:mb-4">{val.category_name}</h1>
            </article>
        </div>
    ))
    return (
        <div className="container my-12">
            <h4 className="text-4xl	font-semibold text-sectionTitleColor ml-3">Top Categories {topCategory.category_count} </h4>
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {
                    html_dt
                }
            </div>
        </div>
    );
}

export default TopCategories;