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
    const data1 = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Victor Wayne" },
        { id: 3, name: "Jane Doe" },
    ];
    console.log('dataraw = ', data1);
    const [courseEnrollImage, setCourseEnrollImage] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    var data = [];

    useEffect(() => {
        setIsLoading(true);
        axios.get(ApiUrl.BaseUrl + 'api/course/course-enroll-student-list/7/',
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
                        console.log('null data mathc');
                    }
                    else {
                        console.log(i);
                        console.log('loop data is = ', response.data.data[i]);
                        data.push(response.data.data[i])
                        // setCourseEnrollImage.append(response.data.data[i])
                        console.log('log data = ', courseEnrollImage);
                    }

                }
                console.log('array data = ', data)
                setIsLoading(false);
                // setCourseEnrollImage(response.data.data);
                console.log("enroll image = ", response.data.data);
                console.log("enroll image = ", response.data.length);
                console.log('image = ', response.data.data[1].student_image);
                console.log('image = ', typeof (response.data.data[1].student_image));


            }
        });
    }, []);

    // const profile_picture = (() => {
    //     console.log('is loading4 = ', isLoading);
    //     if (isLoading === true) {

    //     }
    //     else if (isLoading === false) {
    //         return (
    //             // for(var i=0; i<courseEnrollImage.length; i++){
    //             //     if(courseEnrollImage[i].student_image == null){
    //             //         console.log('null data mathc');
    //             //     }
    //             //     else{
    //             //         <div className="xl:w-1/6">
    //             //             <img className="rounded-md" src={ApiUrl.ImageBaseUrl+courseEnrollImage[i].student_image} alt="" />
    //             //         </div>
    //             //     }
    //             // }
    //         // )
    //             array1.map((student_enroll_image, index) =>

    //                 <div className="xl:w-1/6">
    //                     <h1>{student_enroll_image.course_id}</h1>
    //                     {/* <img className="rounded-md" src={ApiUrl.ImageBaseUrl+student_enroll_image.student_image} alt="" /> */}
    //                 </div>

    //             )
    //         )
    //     }
    // })()

    return (

        <div className="flex-basis flex xl:ml-32">
            {data.map((user) => (
                <img className="rounded-md" src={Student2} alt="" />
            ))}
            {/* <div className="xl:w-1/6">
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
                </div> */}
        </div>

    );
}

export default StudentBoughtCourse;