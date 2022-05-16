import React, { Component, Fragment } from 'react';
import Client1 from "../../asset/images/client/client1.jpg";
import { FaStar } from "react-icons/fa";
import ApiUrl from '../../Api/ApiUrl';
import { useQuery } from "react-query";


function ClientSays(){
    const cliensays_custom_headers =  { 
        method: 'get',
        headers: new Headers({
            'Accept-Language': 'bn', 
            'Content-Type': 'application/json'
        })
    }

    const fetchClientSays = async () =>
        await (await fetch(ApiUrl.BaseUrl + "api/course/what-our-client-say/", cliensays_custom_headers)).json();
    const says_client = useQuery("says", fetchClientSays);
    const says_client_data = says_client;

    if (says_client.status === 'loading'){
        return (
            <div className="container my-12">
                <h4 className="text-4xl	font-semibold text-sectionTitleColor ml-3">loading</h4>
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    <h1>Loading</h1>
                </div>
            </div>
        );
    }else if (says_client.status === 'success'){
        const html_says_client = says_client_data.data.data.map((says_client, index) => (
            <div class="lg:basis-1/3 px-4">
                <div class="bg-white rounded-2xl shadow-client border-none lg:p-12 h-full w-auto">
                    <img className="rounded-full h-36 w-36 mt-8 mb-12" src={ApiUrl.ImageBaseUrl+ says_client.user_info.image} />
                    <h5 class="text-base font-normal text-client-section-des leading-8 mb-4 mt-0">{says_client.review_description}</h5>
                    
                    {(() => {
                        if(says_client.rating === 5){
                            return <ul className="flex sm:justify-center xl:justify-start mt-2">
                                <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                <h6 className="mb-4 mx-1 text-sm font-normal text-client-section-des">( {says_client.rating} )</h6>
                            </ul> 
                        }else if(says_client.rating === 4){
                            return <ul className="flex sm:justify-center xl:justify-start mt-2">
                                <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                <h6 className="mb-4 mx-1 text-sm font-normal text-client-section-des">( {says_client.rating} )</h6>
                            </ul> 
                        }else if(says_client.rating === 3){
                            return <ul className="flex sm:justify-center xl:justify-start mt-2">
                                <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                <h6 className="mb-4 mx-1 text-sm font-normal text-client-section-des">( {says_client.rating} )</h6>
                            </ul> 
                        }else if(says_client.rating === 2){
                            return <ul className="flex sm:justify-center xl:justify-start mt-2">
                                <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                <h6 className="mb-4 mx-1 text-sm font-normal text-client-section-des">( {says_client.rating} )</h6>
                            </ul> 
                        }else if(says_client.rating === 1){
                            return <ul className="flex sm:justify-center xl:justify-start mt-2">
                                <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                <h6 className="mb-4 mx-1 text-sm font-normal text-client-section-des">( {says_client.rating} )</h6>
                            </ul> 
                        }
                            
                    })()}
                    
                    <p class="text-sectionTitleColor text-2xl font-semibold">{says_client.user_info.username}</p>
                    <p class="text-client-section-des text-md mt-2">Student</p>
                </div>
            </div>
        ))

    return (
        <Fragment>
            <div className="container lg:mt-8 lg:mb-12">
                <h4 className="text-4xl	font-semibold ml-3 text-sectionTitleColor">What Our Client Say</h4>
                <div class="flex flex-wrap lg:mt-6 p-3">
                    {
                        html_says_client
                    }
                </div>
            </div>
        </Fragment>
    );
}
}

export default ClientSays;