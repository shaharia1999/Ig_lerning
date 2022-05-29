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
    const student_enroll_image_data = [];

    useEffect(() => {
        setIsLoading(true);
        axios.get(ApiUrl.BaseUrl + 'api/course/course-enroll-student-list/10/',
            {
                headers: {
                    'Accept-Language': 'bn',
                    'Content-Type': 'application/json',
                }
            }
        ).then((response) => {
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
            return <div className="xl:w-1/6">
            <img className="rounded-md" src={Student1} alt="" />
        </div>
        }
        else if (isLoading === false) {
            return courseEnrollImage.map((student_enroll_image, index) => (
                    <div className="xl:w-1/6">
                         <img className="rounded-md" src={ApiUrl.ImageBaseUrl+"/media/"+student_enroll_image.student_image} alt="joy" /> 
                    </div>
                    
                ))   
        }
    })()

    return (

        <div className="flex-basis flex xl:ml-32">
            {
                profile_picture
            }
        </div>

    );
}

export default StudentBoughtCourse;