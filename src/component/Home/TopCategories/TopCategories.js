import React, { Component, Fragment } from "react";
import { useQuery } from "react-query";
import ShareIcon from "../../../asset/images/icon/icon_share.png";
import ApiUrl from "../../../Api/ApiUrl";

class TopCategories extends Component {
    state = {
        category_info: [],
        total: 0
    }

    async componentDidMount() {
        var language = document.getElementById('language').value;
        console.log('language = ', language);
        const custome_header =  { 
            // method: 'get', 
            
            headers: new Headers({
                'Accept-Language': language, 
                'Content-Type': 'application/json'
            })
        }
        const a = await (await fetch(ApiUrl.BaseUrl + "api/v2/top-category-info/", custome_header)).json();
        //    const { data, error, status } = useQuery("category_info", a);
        this.setState({total: a.category_count});
        this.setState({ category_info: a.data })
        console.log('cate = ', this.state.category_info);

    };

    render() {
        const category_info = this.state.category_info;
        const TopCategorie = category_info.map((category) => {
            return <div className="my-1 px-1 w-full md:w-1/2 lg:my-8 lg:px-5 lg:w-1/3">
                <article className="overflow-hidden rounded-lg shadow-lg hover:opacity-30 hover:bg-black">
                    <img alt="Placeholder" className="block bg-fixed h-72 w-full" src={category.category_preview_img} />

                    <h1 className="lg:text-xl lg:font-semibold text-center  text-maingray lg:mt-4 lg:mb-4">
                        {category.category_name}
                    </h1>
                </article>
            </div>
        });

        return (
            <Fragment>
                <div className="container my-12">
                    <h4 className="text-4xl	font-semibold text-sectionTitleColor ml-3">Top Categories ({this.state.total}) </h4>
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">
                        {TopCategorie}
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default TopCategories;