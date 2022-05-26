import React, { Fragment, useState, useEffect } from "react";
import Student1 from '../../../asset/images/student-bought/student1.png';
import Student2 from '../../../asset/images/student-bought/student2.png';
import Student3 from '../../../asset/images/student-bought/student3.png';
import Student4 from '../../../asset/images/student-bought/student4.png';
import Student5 from '../../../asset/images/student-bought/student5.png';
import Student6 from '../../../asset/images/student-bought/student6.png';
import ApiUrl from "../../../Api/ApiUrl";
import axios from "axios";


function StudentBoughtCourse() {
    const [courseEnrollImage, setCourseEnrollImage] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        axios.get(ApiUrl.BaseUrl + 'api/course/most-visited-course/',
            {
                headers: {
                    'Accept-Language': 'bn',
                    'Content-Type': 'application/json',
                }
            }
        ).then((response) => {
            if (response.data.error === false) {
                setIsLoading(false);
                courseEnrollImage(response.data.data);
                console.log("enroll image = ", response.data.data);
            }
        });
    }, []);
    return (
        <Fragment>
            <div className="flex-basis flex xl:ml-32">
                <div className="xl:w-1/6">
                    <img className="rounded-md" src={Student1} alt="" />
                </div>
                <div className="xl:w-1/6 flex">
                    <img className="rounded-md" src={Student2} alt="" />
                </div>
                <div className="xl:w-1/6 flex">
                    <img className="rounded-md" src={Student3} alt="" />
                </div>
                <div className="xl:w-1/6 flex">
                    <img className="rounded-md" src={Student4} alt="" />
                </div>
                <div className="xl:w-1/6 flex">
                    <img className="rounded-md" src={Student5} alt="" />
                </div>
                <div className="xl:w-1/6 flex">
                    <img className="rounded-md" src={Student6} alt="" />
                </div>
            </div>
        </Fragment>
    );
}

export default StudentBoughtCourse;