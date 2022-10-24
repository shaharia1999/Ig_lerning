import React from 'react';
import { FaStar } from 'react-icons/fa';

const PopularInstructor = () => {
    return (
        <div>
            <h4>Popular Instructors</h4>
            <div className='grid grid-cols-5 mx-10 gap-5'>
                <div className='text-center bg-gray-400 rounded-lg py-10'>
                    <div className='relative flex flex-col items-center'>
                        <div class="avatar relative">
                            <div class="w-24 -z-1 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                        <div className='w-3/12 flex items-center bg-red-100 absolute bottom-0 text-sm px-2 py-2 text-center rounded-md'><FaStar /><span className='ml-2'>4.8</span></div>
                    </div>
                    <h5 className="text-lg font-semibold">Daniel Walter Scott</h5>
                    <p className="text-gray-200">User Experience Design, <br /> User Interface Design </p>
                    <div className='flex justify-center'>
                        <div className='text-left'>
                            <p>Total Students</p>
                            <p>546,238</p>
                        </div>
                        <div class="divider lg:divider-horizontal"></div>
                        <div className='text-left'>
                            <p>Total Course</p>
                            <p>30</p>
                        </div>
                    </div>
                </div>
                <div className='text-center bg-gray-400 rounded-lg py-10'>
                    <div class="avatar relative">
                        <div class="w-24 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                        {/* <div className='w-8/12 flex items-center mx-auto bg-red-100 py-2 px-3 -mt-4 absolute bottom-0 -mb-6 text-sm'><FaStar /><span className='ml-2'>4.8</span></div> */}
                    </div>
                    <h5 className="text-lg font-semibold">Daniel Walter Scott</h5>
                    <p className="text-gray-200">User Experience Design, <br /> User Interface Design </p>
                    <div className='flex justify-center'>
                        <div className='text-left'>
                            <p>Total Students</p>
                            <p>546,238</p>
                        </div>
                        <div class="divider lg:divider-horizontal"></div>
                        <div className='text-left'>
                            <p>Total Course</p>
                            <p>30</p>
                        </div>
                    </div>
                </div>
                <div className='text-center bg-gray-400 rounded-lg py-10'>
                    <div class="avatar relative">
                        <div class="w-24 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                        {/* <div className='w-8/12 flex items-center mx-auto bg-red-100 py-2 px-3 -mt-4 absolute bottom-0 -mb-6 text-sm'><FaStar /><span className='ml-2'>4.8</span></div> */}
                    </div>
                    <h5 className="text-lg font-semibold">Daniel Walter Scott</h5>
                    <p className="text-gray-200">User Experience Design, <br /> User Interface Design </p>
                    <div className='flex justify-center'>
                        <div className='text-left'>
                            <p>Total Students</p>
                            <p>546,238</p>
                        </div>
                        <div class="divider lg:divider-horizontal"></div>
                        <div className='text-left'>
                            <p>Total Course</p>
                            <p>30</p>
                        </div>
                    </div>
                </div>
                <div className='text-center bg-gray-400 rounded-lg py-10'>
                    <div class="avatar relative">
                        <div class="w-24 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                        {/* <div className='w-8/12 flex items-center mx-auto bg-red-100 py-2 px-3 -mt-4 absolute bottom-0 -mb-6 text-sm'><FaStar /><span className='ml-2'>4.8</span></div> */}
                    </div>
                    <h5 className="text-lg font-semibold">Daniel Walter Scott</h5>
                    <p className="text-gray-200">User Experience Design, <br /> User Interface Design </p>
                    <div className='flex justify-center'>
                        <div className='text-left'>
                            <p>Total Students</p>
                            <p>546,238</p>
                        </div>
                        <div class="divider lg:divider-horizontal"></div>
                        <div className='text-left'>
                            <p>Total Course</p>
                            <p>30</p>
                        </div>
                    </div>
                </div>
                <div className='text-center bg-gray-400 rounded-lg py-10'>
                    <div class="avatar relative">
                        <div class="w-24 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                        {/* <div className='w-8/12 flex items-center mx-auto bg-red-100 py-2 px-3 -mt-4 absolute bottom-0 -mb-6 text-sm'><FaStar /><span className='ml-2'>4.8</span></div> */}
                    </div>
                    <h5 className="text-lg font-semibold">Daniel Walter Scott</h5>
                    <p className="text-gray-200">User Experience Design, <br /> User Interface Design </p>
                    <div className='flex justify-center'>
                        <div className='text-left'>
                            <p>Total Students</p>
                            <p>546,238</p>
                        </div>
                        <div class="divider lg:divider-horizontal"></div>
                        <div className='text-left'>
                            <p>Total Course</p>
                            <p>30</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularInstructor;