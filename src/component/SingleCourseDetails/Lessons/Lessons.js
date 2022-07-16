import React, { Fragment, useState } from "react";
import courseLessonImg from '../../../asset/images/course-thumbnail/lesson-img.svg'
import {
    Accordion,
    AccordionHeader,
    AccordionBody
} from "@material-tailwind/react";
import { FaPlayCircle } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";

function Lessons() {
    const [open, setOpen] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    if (isLoading === true) {
        return (
            <Fragment>
                <div className="xl:ml-32">
                    <div className="flex flex-wrap xl:mt-9 xl:mb-16">
                        <div className="xl:w-11/12">
                            <h6 className="text-sectionTitleColor dark:text-white 2xl:text-3xl xl:text-2xl font-semibold xl:mb-8">
                                Lessons
                            </h6>

                            <div className="bg-gray-50 icon-select shadow mt-3 rounded-lg animate-pulse">
                                <Accordion className="rounded m-0">
                                    <AccordionHeader className="flex pr-4">
                                        <div className="h-10 w-10 ml-4 bg-gray-100 rounded-md"
                                            src={courseLessonImg}
                                            alt=""
                                        >
                                        </div>
                                        <div className="bg-gray-100 h-4 w-6/12 xl:ml-20 absolute"></div>
                                    </AccordionHeader>
                                </Accordion>
                            </div>

                            <div className="bg-gray-50 icon-select shadow mt-3 rounded-lg animate-pulse">
                                <Accordion className="rounded m-0">
                                    <AccordionHeader className="flex pr-4">
                                        <div className="h-10 w-10 ml-4 bg-gray-100 rounded-md"
                                            src={courseLessonImg}
                                            alt=""
                                        >
                                        </div>
                                        <div className="bg-gray-100 h-4 w-6/12 xl:ml-20 absolute"></div>
                                    </AccordionHeader>
                                </Accordion>
                            </div>

                            <div className="bg-gray-50 icon-select shadow mt-3 rounded-lg animate-pulse">
                                <Accordion className="rounded m-0">
                                    <AccordionHeader className="flex pr-4">
                                        <div className="h-10 w-10 ml-4 bg-gray-100 rounded-md" src={courseLessonImg} alt="" ></div>
                                        <div className="bg-gray-100 h-4 w-6/12 xl:ml-20 absolute"></div>
                                    </AccordionHeader>
                                </Accordion>
                            </div>

                            <div className="bg-gray-50 icon-select shadow mt-3 rounded-lg animate-pulse">
                                <Accordion className="rounded m-0">
                                    <AccordionHeader className="flex pr-4">
                                        <div className="h-10 w-10 ml-4 bg-gray-100 rounded-md" src={courseLessonImg} alt="" ></div>
                                        <div className="bg-gray-100 h-4 w-6/12 xl:ml-20 absolute"></div>
                                    </AccordionHeader>
                                </Accordion>
                            </div>

                            <div className="bg-gray-50 icon-select shadow mt-3 rounded-lg animate-pulse">
                                <Accordion className="rounded m-0">
                                    <AccordionHeader className="flex pr-4">
                                        <div className="h-10 w-10 ml-4 bg-gray-100 rounded-md" src={courseLessonImg} alt="" ></div>
                                        <div className="bg-gray-100 h-4 w-6/12 xl:ml-20 absolute"></div>
                                    </AccordionHeader>
                                </Accordion>
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
                <div className="xl:ml-32">
                    <div className="flex flex-wrap xl:mt-9 xl:mb-16">
                        <div className="xl:w-11/12">
                            <h6 className="text-sectionTitleColor dark:text-white 2xl:text-3xl xl:text-2xl font-semibold xl:mb-8">Lessons</h6>
                            <div className="bg-white icon-select shadow mt-3 rounded-lg">
                                <Accordion className="rounded m-0" open={open === 1} onClick={() => handleOpen(1)}>
                                    <AccordionHeader className="flex pr-4"><img className="h-10 w-10 ml-4 rounded-md" src={courseLessonImg} alt="" />
                                        <h1 className="xl:text-base text-maingray font-normal xl:pl-20 absolute">Chapter 1 : Be positive</h1>
                                    </AccordionHeader>
                                    <AccordionBody className="bg-gray-50">
                                        <div className="flex flex-wrap mt-0.5">
                                            <div className="xl:w-1/12 mt-3 mb-3">
                                                <FaPlayCircle
                                                    className="h-5 w-5 xl:ml-8"
                                                />
                                            </div>
                                            <div className="xl:w-11/12 mt-3 mb-3">
                                                <h6 className="xl:text-sm text-maingray font-light">Compile VS Interpreted Languages</h6>
                                            </div>
                                        </div>

                                        <hr className="border-white border" />

                                        <div className="flex flex-wrap mt-0.5">
                                            <div className="xl:w-1/12 mt-3 mb-3">
                                                <GrDocumentText
                                                    className="h-5 w-5 xl:ml-8"
                                                />
                                            </div>
                                            <div className="xl:w-11/12 mt-3 mb-3">
                                                <h6 className="xl:text-sm text-maingray font-light">Compile VS Interpreted Languages</h6>
                                            </div>
                                        </div>

                                        <hr className="border-white border" />

                                        <div className="flex flex-wrap mt-0.5">
                                            <div className="xl:w-1/12 mt-3 mb-3">
                                                <FaPlayCircle
                                                    className="h-5 w-5 xl:ml-8"
                                                />
                                            </div>
                                            <div className="xl:w-11/12 mt-3 mb-3">
                                                <h6 className="xl:text-sm text-maingray font-light">Compile VS Interpreted Languages</h6>
                                            </div>
                                        </div>

                                    </AccordionBody>
                                </Accordion>
                            </div>
                            <div className="bg-white icon-select shadow mt-3 rounded-lg">
                                <Accordion open={open === 2} onClick={() => handleOpen(2)}>
                                    <AccordionHeader className="flex pr-4"><img className="h-10 w-10 ml-4 rounded-md" src={courseLessonImg} alt="" />
                                        <h1 className="xl:text-base text-maingray font-normal xl:pl-20 absolute">Chapter 1 : Be positive</h1>
                                    </AccordionHeader>
                                    <AccordionBody className="bg-gray-50">
                                        <div className="flex flex-wrap mt-0.5">
                                            <div className="xl:w-1/12 mt-3 mb-3">
                                                <FaPlayCircle
                                                    className="h-5 w-5 xl:ml-8"
                                                />
                                            </div>
                                            <div className="xl:w-11/12 mt-3 mb-3">
                                                <h6 className="xl:text-sm text-maingray font-light">Compile VS Interpreted Languages</h6>
                                            </div>
                                        </div>
                                        <hr className="border-white border" />
                                        <div className="flex flex-wrap mt-0.5">
                                            <div className="xl:w-1/12 mt-3 mb-3">
                                                <FaPlayCircle
                                                    className="h-5 w-5 xl:ml-8"
                                                />
                                            </div>
                                            <div className="xl:w-11/12 mt-3 mb-3">
                                                <h6 className="xl:text-sm text-maingray font-light">Compile VS Interpreted Languages</h6>
                                            </div>
                                        </div>
                                        <hr className="border-white border" />
                                        <div className="flex flex-wrap mt-0.5">
                                            <div className="xl:w-1/12 mt-3 mb-3">
                                                <FaPlayCircle
                                                    className="h-5 w-5 xl:ml-8"
                                                />
                                            </div>
                                            <div className="xl:w-11/12 mt-3 mb-3">
                                                <h6 className="xl:text-sm text-maingray font-light">Compile VS Interpreted Languages</h6>
                                            </div>
                                        </div>
                                    </AccordionBody>
                                </Accordion>
                            </div>
                            <div className="bg-white icon-select shadow mt-3 rounded-lg">
                                <Accordion open={open === 3} onClick={() => handleOpen(3)}>
                                    <AccordionHeader className="flex pr-4"><img className="h-10 w-10 ml-4 rounded-md" src={courseLessonImg} alt="" />
                                        <h1 className="xl:text-base text-maingray font-normal xl:pl-20 absolute">Chapter 1 : Be positive</h1>
                                    </AccordionHeader>
                                    <AccordionBody className="bg-gray-50">
                                        <div className="flex flex-wrap mt-0.5">
                                            <div className="xl:w-1/12 mt-3 mb-3">
                                                <FaPlayCircle
                                                    className="h-5 w-5 xl:ml-8"
                                                />
                                            </div>
                                            <div className="xl:w-11/12 mt-3 mb-3">
                                                <h6 className="xl:text-sm text-maingray font-light">Compile VS Interpreted Languages</h6>
                                            </div>
                                        </div>
                                        <hr className="border-white border" />
                                        <div className="flex flex-wrap mt-0.5">
                                            <div className="xl:w-1/12 mt-3 mb-3">
                                                <FaPlayCircle
                                                    className="h-5 w-5 xl:ml-8"
                                                />
                                            </div>
                                            <div className="xl:w-11/12 mt-3 mb-3">
                                                <h6 className="xl:text-sm text-maingray font-light">Compile VS Interpreted Languages</h6>
                                            </div>
                                        </div>
                                        <hr className="border-white border" />
                                        <div className="flex flex-wrap mt-0.5">
                                            <div className="xl:w-1/12 mt-3 mb-3">
                                                <FaPlayCircle
                                                    className="h-5 w-5 xl:ml-8"
                                                />
                                            </div>
                                            <div className="xl:w-11/12 mt-3 mb-3">
                                                <h6 className="xl:text-sm text-maingray font-light">Compile VS Interpreted Languages</h6>
                                            </div>
                                        </div>
                                    </AccordionBody>
                                </Accordion>
                            </div>
                            <div className="bg-white icon-select shadow mt-3 rounded-lg">
                                <Accordion open={open === 4} onClick={() => handleOpen(4)}>
                                    <AccordionHeader className="flex pr-4"><img className="h-10 w-10 ml-4 rounded-md" src={courseLessonImg} alt="" />
                                        <h1 className="xl:text-base text-maingray font-normal xl:pl-20 absolute">Chapter 1 : Be positive</h1>
                                    </AccordionHeader>
                                    <AccordionBody className="bg-gray-50">
                                        <div className="flex flex-wrap mt-0.5">
                                            <div className="xl:w-1/12 mt-3 mb-3">
                                                <FaPlayCircle
                                                    className="h-5 w-5 xl:ml-8"
                                                />
                                            </div>
                                            <div className="xl:w-11/12 mt-3 mb-3">
                                                <h6 className="xl:text-sm text-maingray font-light">Compile VS Interpreted Languages</h6>
                                            </div>
                                        </div>
                                        <hr className="border-white border" />
                                        <div className="flex flex-wrap mt-0.5">
                                            <div className="xl:w-1/12 mt-3 mb-3">
                                                <FaPlayCircle
                                                    className="h-5 w-5 xl:ml-8"
                                                />
                                            </div>
                                            <div className="xl:w-11/12 mt-3 mb-3">
                                                <h6 className="xl:text-sm text-maingray font-light">Compile VS Interpreted Languages</h6>
                                            </div>
                                        </div>
                                        <hr className="border-white border" />
                                        <div className="flex flex-wrap mt-0.5">
                                            <div className="xl:w-1/12 mt-3 mb-3">
                                                <FaPlayCircle
                                                    className="h-5 w-5 xl:ml-8"
                                                />
                                            </div>
                                            <div className="xl:w-11/12 mt-3 mb-3">
                                                <h6 className="xl:text-sm text-maingray font-light">Compile VS Interpreted Languages</h6>
                                            </div>
                                        </div>
                                    </AccordionBody>
                                </Accordion>
                            </div>
                            <div className="bg-white icon-select shadow mt-3 rounded-lg">
                                <Accordion open={open === 5} onClick={() => handleOpen(5)}>
                                    <AccordionHeader className="flex pr-4"><img className="h-10 w-10 ml-4 rounded-md" src={courseLessonImg} alt="" />
                                        <h1 className="xl:text-base text-maingray font-normal xl:pl-20 absolute">Chapter 1 : Be positive</h1>
                                    </AccordionHeader>
                                    <AccordionBody className="bg-gray-50">
                                        <div className="flex flex-wrap mt-0.5">
                                            <div className="xl:w-1/12 mt-3 mb-3">
                                                <FaPlayCircle
                                                    className="h-5 w-5 xl:ml-8"
                                                />
                                            </div>
                                            <div className="xl:w-11/12 mt-3 mb-3">
                                                <h6 className="xl:text-sm text-maingray font-light">Compile VS Interpreted Languages</h6>
                                            </div>
                                        </div>
                                        <hr className="border-white border" />
                                        <div className="flex flex-wrap mt-0.5">
                                            <div className="xl:w-1/12 mt-3 mb-3">
                                                <FaPlayCircle
                                                    className="h-5 w-5 xl:ml-8"
                                                />
                                            </div>
                                            <div className="xl:w-11/12 mt-3 mb-3">
                                                <h6 className="xl:text-sm text-maingray font-light">Compile VS Interpreted Languages</h6>
                                            </div>
                                        </div>
                                        <hr className="border-white border" />
                                        <div className="flex flex-wrap mt-0.5">
                                            <div className="xl:w-1/12 mt-3 mb-3">
                                                <FaPlayCircle
                                                    className="h-5 w-5 xl:ml-8"
                                                />
                                            </div>
                                            <div className="xl:w-11/12 mt-3 mb-3">
                                                <h6 className="xl:text-sm text-maingray font-light">Compile VS Interpreted Languages</h6>
                                            </div>
                                        </div>
                                    </AccordionBody>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

}

export default Lessons;