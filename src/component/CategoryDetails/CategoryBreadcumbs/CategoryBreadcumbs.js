import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function CategoryBreadcumbs() {
    return (
        <Fragment>
            <nav className="bg-breadcrumbs dark:bg-dark-color3 xl:pl-10 pl-5 xl:pr-10 pr-4 xl:pt-4 pt-3 xl:pb-4 pb-3 w-full">
                <ol className="list-reset flex text-grey-dark xl:ml-32">
                    <li><Link to="" className="text-breadcrumbs-text font-normal xl:text-sm text-xs">Home</Link></li>
                    <li><span className="mx-2 text-breadcrumbs-text">{'>'}</span></li>
                    <li><Link to="" className="text-breadcrumbs-text font-normal xl:text-sm text-xs">Categories</Link></li>
                    <li><span className="mx-2 text-breadcrumbs-text">{'>'}</span></li>
                    <li><Link to="" className="text-breadcrumbs-text font-normal xl:text-sm text-xs">Finance</Link></li>
                    <li><span className="mx-2 text-breadcrumbs-text">{'>'}</span></li>
                    <li><Link to="" className="text-breadcrumbs-text font-normal xl:text-sm text-xs">Pitching speaking</Link></li>
                </ol>
            </nav>
        </Fragment>
    );
}

export default CategoryBreadcumbs;
