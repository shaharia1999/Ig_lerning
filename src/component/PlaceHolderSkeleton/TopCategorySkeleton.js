import React, { Fragment } from "react";

function TopCategorySkeleton() {
    return (
        <Fragment>
            <div className="p-4 bg-white shadow-md hover:shadow-md rounded-lg xl:mt-2">
                <div className="animate-pulse xl:w-full">
                    <div className="rounded w-full h-52 bg-gray-200"></div>
                    <div className="flex flex-col mt-5">
                        <div className="w-full h-5 bg-gray-200 rounded"></div>
                        <div className="mt-2 w-10/12 h-3 bg-gray-200 rounded"></div>
                        <div className="mt-2 w-8/12 h-3 bg-gray-200 rounded"></div>
                    </div>
                </div>
            </div>

            <div className="p-4 bg-white shadow-md hover:shadow-md rounded-lg xl:mt-2">
                <div className="animate-pulse xl:w-full">
                    <div className="rounded w-full h-52 bg-gray-200"></div>
                    <div className="flex flex-col mt-5">
                        <div className="w-full h-5 bg-gray-200 rounded"></div>
                        <div className="mt-2 w-10/12 h-3 bg-gray-200 rounded"></div>
                        <div className="mt-2 w-8/12 h-3 bg-gray-200 rounded"></div>
                    </div>
                </div>
            </div>

            <div className="p-4 bg-white shadow-md hover:shadow-md rounded-lg xl:mt-2">
                <div className="animate-pulse xl:w-full">
                    <div className="rounded w-full h-52 bg-gray-200"></div>
                    <div className="flex flex-col mt-5">
                        <div className="w-full h-5 bg-gray-200 rounded"></div>
                        <div className="mt-2 w-10/12 h-3 bg-gray-200 rounded"></div>
                        <div className="mt-2 w-8/12 h-3 bg-gray-200 rounded"></div>
                    </div>
                </div>
            </div>


            <div className="p-4 bg-white shadow-md hover:shadow-md rounded-lg xl:mt-2">
                <div className="animate-pulse xl:w-full">
                    <div className="rounded w-full h-52 bg-gray-200"></div>
                    <div className="flex flex-col mt-5">
                        <div className="w-full h-5 bg-gray-200 rounded"></div>
                        <div className="mt-2 w-10/12 h-3 bg-gray-200 rounded"></div>
                        <div className="mt-2 w-8/12 h-3 bg-gray-200 rounded"></div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TopCategorySkeleton;