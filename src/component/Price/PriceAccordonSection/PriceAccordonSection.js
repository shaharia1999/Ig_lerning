import React, { Fragment } from "react";

function PriceAccordonSection() {
    return (
        <Fragment>
            <div className="">
                <div className="container xl:pt-24 xl:pb-24">
                    <div class="flex flex-auto justify-center">
                        <div class="xl:w-8/12 ">
                            <h2 className=" text-about-analytics-subTitle text-center xl:font-semibold xl:text-5xl xl:mt-4">Do you have any question!</h2>
                            <h2 className="text-about-analytics-subTitle text-center xl:font-medium xl:text-base xl:mt-4 xl:pl-56 xl:pr-56">Our support team ready to help you, please contact with them</h2>



                            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingOne">
                                        <h4 class="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Collapsible Group Item #1
                                            </a>
                                        </h4>

                                    </div>
                                    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                        <div class="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS.</div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingTwo">
                                        <h4 class="panel-title">
                                            <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Collapsible Group Item #2
                                            </a>
                                        </h4>

                                    </div>
                                    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                        <div class="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingThree">
                                        <h4 class="panel-title">
                                            <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Collapsible Group Item #3
                                            </a>
                                        </h4>

                                    </div>
                                    <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                        <div class="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default PriceAccordonSection;
