import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import ApiUrl from "../../../Api/ApiUrl";
import fe1 from '../../../asset/images/shaharia/pexels-photo-4195342.jpeg'
import fe2 from '../../../asset/images/shaharia/free-photo-of-a-girl-with-a-backpack-standing-outside.jpeg'
import {
    Accordion,
    AccordionHeader,
} from "@material-tailwind/react";

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
                                <h2 className=" text-about-analytics-subTitle dark:text-white text-center xl:font-semibold xl:text-5xl xl:mt-4">Do you have any question!</h2>
                                <h2 className="text-about-analytics-subTitle text-center xl:font-medium xl:text-base xl:mt-4 xl:pl-56 xl:pr-56 xl:mb-16 dark:text-gray-400">Our support team ready to help you, please contact with them</h2>

                                <div className="justify-center items-center">
                                    <div className="bg-gray-50 icon-select shadow mt-3 rounded-lg ">
                                        <Accordion className="rounded m-0">
                                            <AccordionHeader className="flex pr-4">
                                                <div className=" w-10 ml-4 bg-gray-100 rounded-md"><img src={fe1} className="rounded-full" alt=""/></div>
                                            </AccordionHeader>
                                        </Accordion>
                                    </div>

                                    <div className="bg-gray-50 icon-select shadow mt-3 rounded-lg ">
                                        <Accordion className="rounded m-0">
                                            <AccordionHeader className="flex pr-4">
                                                <div className=" w-10 ml-4 bg-gray-100 rounded-md"><img src={fe2} className="rounded-full"></img></div>
                                            </AccordionHeader>
                                        </Accordion>
                                    </div>

                                    <div className="bg-gray-50 icon-select shadow mt-3 rounded-lg ">
                                        <Accordion className="rounded m-0">
                                            <AccordionHeader className="flex pr-4">
                                                <div className=" w-10 ml-4 bg-gray-100 rounded-md"><img src={fe1} className="rounded-full"></img></div>
                                            </AccordionHeader>
                                        </Accordion>
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
                <div className="bg-white dark:bg-dark-color2 xl:mt-10 mt-8 xl:-mb-12 mb-7">
                    <div className="container xl:pt-16 xl:pb-20">
                        <div className="flex flex-auto justify-center">
                            <div className="xl:w-7/12 ">
                                <h2 className=" text-about-analytics-subTitle dark:text-white text-center xl:font-semibold xl:text-4xl lg:text-3xl text-xl font-semibold xl:mt-4 mt-5">Do you have any question!</h2>
                                <h2 className="text-about-analytics-subTitle dark:text-gray-400 text-center xl:font-medium xl:text-base lg:text-sm text-xs xl:mt-4 xl:pl-56 pl-12 xl:pr-56 pr-12 xl:mb-16 lg:mb-10">Our support team ready to help you, please contact with them</h2>
                                <div className="justify-center items-center xl:p-0 p-4">
                                    {
                                        priceQuestionData.map((price_question) => (
                                            <div className="transition accordion-bg-color dark:bg-dark-color2 border-b">
                                                <div onClick={CoursePriceClick}
                                                    className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
                                                    <i className="fas fa-plus bg-price rounded-full p-1 font-extralight text-xs text-white"></i>
                                                    <h3 className="text-maingray dark:text-white xl:text-base text-sm font-normal">
                                                        {price_question.price_question}
                                                    </h3>
                                                </div>
                                                <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
                                                    <p className="leading-6 dark:text-gray-400 xl:text-sm text-xs font-light pl-9 pb-4 pr-4 text-justify">
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
