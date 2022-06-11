import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import ApiUrl from "../../../Api/ApiUrl";


function PriceAccordonSection() {

    const [isLoading, setIsLoading] = useState(false);
    const [priceQuestionData, setPriceQuestionData] = useState([]);

  
    useEffect(() => {
        setIsLoading(true)
        axios.get(`${ApiUrl.BaseUrl}api/course/price-question/`).then((response) => {
            if (response.data.error === false) {
                setPriceQuestionData(response.data.data)
                setIsLoading(false)
            }
        })
    }, []);

    const CoursePriceClick = () => {
        const accordionHeader = document.querySelectorAll(".accordion-header");
        console.log('accordionHeader = ', accordionHeader);
        accordionHeader.forEach((header) => {
            header.addEventListener("click", function () {
                const accordionContent = header.parentElement.querySelector(".accordion-content");
                let accordionMaxHeight = accordionContent.style.maxHeight;

                // Condition handling
                if (accordionMaxHeight === "0px" || accordionMaxHeight.length === 0) {
                    accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
                    header.querySelector(".fas").classList.remove("fa-plus");
                    header.querySelector(".fas").classList.add("fa-minus");
                    header.parentElement.classList.add("bg-indigo-50");
                } else {
                    accordionContent.style.maxHeight = `0px`;
                    header.querySelector(".fas").classList.add("fa-plus");
                    header.querySelector(".fas").classList.remove("fa-minus");
                    header.parentElement.classList.remove("bg-indigo-50");
                }
            });
        });
    }

    if (isLoading === true) {
        return (
            <Fragment>
                <div className="">
                    <div className="container xl:pt-24 xl:pb-10">
                        <div className="flex flex-auto justify-center">
                            <div className="xl:w-7/12 ">
                                <h2 className=" text-about-analytics-subTitle text-center xl:font-semibold xl:text-5xl xl:mt-4">Do you have any question!</h2>
                                <h2 className="text-about-analytics-subTitle text-center xl:font-medium xl:text-base xl:mt-4 xl:pl-56 xl:pr-56 xl:mb-16">Our support team ready to help you, please contact with them</h2>

                                <div className="justify-center items-center">
                                    <div className="transition accordion-bg-color border-b">
                                        <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
                                            <i className="fas fa-plus bg-price rounded-full p-1 font-extralight text-xs text-white"></i>
                                            <h3 className="text-maingray text-base font-medium">How to contact with riders emergency ?</h3>
                                        </div>
                                        <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
                                            <p className="leading-6 text-sm font-light pl-9 pb-4 pr-4 text-justify">
                                                 your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home.                                    </p>
                                        </div>
                                    </div>


                                    <div className="transition accordion-bg-color border-b">
                                        <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
                                            <i className="fas fa-plus bg-price rounded-full p-1 font-extralight text-xs text-white"></i>
                                            <h3 className="text-maingray text-base font-medium">App installation failed, how to update system information?</h3>
                                        </div>
                                        <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
                                            <p className="leading-6 text-sm font-light pl-9 pb-4 pr-4 text-justify">
                                                Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home.                                    </p>
                                        </div>
                                    </div>


                                    <div className="transition accordion-bg-color border-b">
                                        <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
                                            <i className="fas fa-plus bg-price rounded-full p-1 font-extralight text-xs text-white"></i>
                                            <h3 className="text-maingray text-base font-medium">Website reponse taking time, how to improve?</h3>
                                        </div>
                                        <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
                                            <p className="leading-6 text-sm font-light pl-9 pb-4 pr-4 text-justify">
                                                Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home.                                    </p>
                                        </div>
                                    </div>


                                    <div className="transition accordion-bg-color border-b">
                                        <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
                                            <i className="fas fa-plus bg-price rounded-full p-1 font-extralight text-xs text-white"></i>
                                            <h3 className="text-maingray text-base font-medium">New update fixed all bug and issues</h3>
                                        </div>
                                        <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
                                            <p className="leading-6 text-sm font-light pl-9 pb-4 pr-4 text-justify">
                                                Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home.                                    </p>
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
    else if (isLoading === false) {
        return (
            <Fragment>
                <div className="">
                    <div className="container xl:pt-24 xl:pb-10">
                        <div className="flex flex-auto justify-center">
                            <div className="xl:w-7/12 ">
                                <h2 className=" text-about-analytics-subTitle text-center xl:font-semibold xl:text-5xl xl:mt-4">Do you have any question!</h2>
                                <h2 className="text-about-analytics-subTitle text-center xl:font-medium xl:text-base xl:mt-4 xl:pl-56 xl:pr-56 xl:mb-16">Our support team ready to help you, please contact with them</h2>
                                <div className="justify-center items-center">
                                    {
                                        priceQuestionData.map((price_question) => (
                                            <div className="transition accordion-bg-color border-b">
                                                <div onClick={CoursePriceClick}
                                                    className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
                                                    <i className="fas fa-plus bg-price rounded-full p-1 font-extralight text-xs text-white"></i>
                                                    <h3 className="text-maingray text-base font-medium">
                                                        {price_question.price_question}
                                                    </h3>
                                                </div>
                                                <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
                                                    <p className="leading-6 text-sm font-light pl-9 pb-4 pr-4 text-justify">
                                                        {
                                                            price_question.price_question_answer
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }


}

export default PriceAccordonSection;
