import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Breadcrumbs() {
    return (
        <Fragment>
            <nav className="bg-breadcrumbs dark:bg-dark-color3 xl:pl-10 xl:pr-10 xl:pt-4 xl:pb-4 w-full">
                <ol className="list-reset flex text-grey-dark xl:ml-32">
                    <li><Link to="" className="text-breadcrumbs-text font-normal text-sm">Home</Link></li>
                    <li><span className="mx-2 text-breadcrumbs-text">{'>'}</span></li>
                    <li><Link to="" className="text-breadcrumbs-text font-normal text-sm">Categories</Link></li>
                    <li><span className="mx-2 text-breadcrumbs-text">{'>'}</span></li>
                    <li><Link to="" className="text-breadcrumbs-text font-normal text-sm">Finance</Link></li>
                    <li><span className="mx-2 text-breadcrumbs-text">{'>'}</span></li>
                    <li><Link to="" className="text-breadcrumbs-text font-normal text-sm">Pitching and public speaking</Link></li>
                </ol>
            </nav>
        </Fragment>
    );
}

export default Breadcrumbs;