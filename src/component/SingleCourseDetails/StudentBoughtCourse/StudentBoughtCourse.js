import React, { useState, useEffect } from "react";
import ApiUrl from "../../../Api/ApiUrl";
import axios from "axios";
import { useParams } from 'react-router-dom'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function StudentBoughtCourse() {
    let { id } = useParams()
    const [courseEnrollImage, setCourseEnrollImage] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const student_enroll_image_data = [];

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${ApiUrl.BaseUrl}api/course/course-enroll-student-list/${id}/`).then((response) => {
            if (response.data.error === false) {
                for (var i = 0; i < response.data.data.length; i++) {
                    if (response.data.data[i].student_image == null) {
                    }
                    else {
                        student_enroll_image_data.push(response.data.data[i])
                    }
                }
                setIsLoading(false);
                setCourseEnrollImage(student_enroll_image_data);
            }
        });
    }, []);

    const profile_picture = (() => {
        if (isLoading === true) {
            return (
                <div className="flex flex-wrap">
                    <div className="xl:w-1/6 xl:px-3 animate-pulse">
                        <div className="rounded-md xl:h-44 bg-gray-100"></div>
                    </div>

                    <div className="xl:w-1/6 xl:px-3 animate-pulse">
                        <div className="rounded-md xl:h-44 bg-gray-100"></div>
                    </div>

                    <div className="xl:w-1/6 xl:px-3 animate-pulse">
                        <div className="rounded-md xl:h-44 bg-gray-100"></div>
                    </div>

                    <div className="xl:w-1/6 xl:px-3 animate-pulse">
                        <div className="rounded-md xl:h-44 bg-gray-100"></div>
                    </div>

                    <div className="xl:w-1/6 xl:px-3 animate-pulse">
                        <div className="rounded-md xl:h-44 bg-gray-100"></div>
                    </div>

                    <div className="xl:w-1/6 xl:px-3 animate-pulse">
                        <div className="rounded-md xl:h-44 bg-gray-100"></div>
                    </div>
                </div>
            )
        }
        else if (isLoading === false) {
            return courseEnrollImage.map((student_enroll_image, index) => (
                <div key={index} className="xl:w-1/6 px-3">
                    <img className="rounded-md xl:h-64 h-32" src={ApiUrl.ImageBaseUrl + "/media/" + student_enroll_image.student_image} alt="joy" />
                </div>
            ))
        }
    })()


    var settings = {
        responsive: [
            {
                breakpoint: 1279.98,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    rows: 1,
                    arrows: false
                }
            }
        ]
    };

    return (
        <div className="xl:pl-28 lg:pl-12">
        <div className="xl:mt-4 lg:mt-0">
                <div className="">
                    <Slider
                        {...settings}
                        slidesToShow={5}
                        focusOnSelect={true}
                        dots={false}
                        adaptiveHeight={false}
                        infinite={true}
                        slidesToScroll={1}
                        loop={true}
                        speed={200}
                        autoplay={false}
                        autoplaySpeed={1500}
                        swipeToSlide={true}
                        arrows={false}
                    >
                        {
                            profile_picture
                        }
                    </Slider>
                </div>
            </div>
        </div>

    );
}

export default StudentBoughtCourse;