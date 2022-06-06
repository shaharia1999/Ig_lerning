import React, { Fragment } from "react";

function TopCategorySkeleton() {
    return (
        <Fragment>
            <div class="p-4 bg-white shadow-md hover:shadow-md rounded-lg xl:mt-2">
                <div class="animate-pulse xl:w-full">
                    <div class="rounded w-full h-52 bg-gray-200"></div>
                    <div class="flex flex-col mt-5">
                        <div class="w-full h-5 bg-gray-200 rounded"></div>
                        <div class="mt-2 w-10/12 h-3 bg-gray-200 rounded"></div>
                        <div class="mt-2 w-8/12 h-3 bg-gray-200 rounded"></div>
                    </div>
                </div>
            </div>

            <div class="p-4 bg-white shadow-md hover:shadow-md rounded-lg xl:mt-2">
                <div class="animate-pulse xl:w-full">
                    <div class="rounded w-full h-52 bg-gray-200"></div>
                    <div class="flex flex-col mt-5">
                        <div class="w-full h-5 bg-gray-200 rounded"></div>
                        <div class="mt-2 w-10/12 h-3 bg-gray-200 rounded"></div>
                        <div class="mt-2 w-8/12 h-3 bg-gray-200 rounded"></div>
                    </div>
                </div>
            </div>

            <div class="p-4 bg-white shadow-md hover:shadow-md rounded-lg xl:mt-2">
                <div class="animate-pulse xl:w-full">
                    <div class="rounded w-full h-52 bg-gray-200"></div>
                    <div class="flex flex-col mt-5">
                        <div class="w-full h-5 bg-gray-200 rounded"></div>
                        <div class="mt-2 w-10/12 h-3 bg-gray-200 rounded"></div>
                        <div class="mt-2 w-8/12 h-3 bg-gray-200 rounded"></div>
                    </div>
                </div>
            </div>


            <div class="p-4 bg-white shadow-md hover:shadow-md rounded-lg xl:mt-2">
                <div class="animate-pulse xl:w-full">
                    <div class="rounded w-full h-52 bg-gray-200"></div>
                    <div class="flex flex-col mt-5">
                        <div class="w-full h-5 bg-gray-200 rounded"></div>
                        <div class="mt-2 w-10/12 h-3 bg-gray-200 rounded"></div>
                        <div class="mt-2 w-8/12 h-3 bg-gray-200 rounded"></div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TopCategorySkeleton;