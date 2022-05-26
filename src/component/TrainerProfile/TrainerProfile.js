import React, { Fragment } from "react";
import ContactTrainer from "./ContactTrainer/ContactTrainer";

function TrainerProfile() {
    return (
        <Fragment>
            <div className="container">
                <div className="flex flex-wrap xl:mt-10">
                    <div className="xl:w-4/12">
                        <p>sjbnjs sjdhfsjd fjsdhnf sfnjksdnf sdjnfksdfnsdks df sfi sdkfn sif sdnkfksdnfki s fsnkfnks fks ndfksd sdkfnsk fksnd</p>
                    </div>
                    <div className="xl:w-8/12 xl:pl-12 xl:pr-12">
                            <ContactTrainer/>
                    </div>
                </div>
            </div >
        </Fragment>
    );
}

export default TrainerProfile;