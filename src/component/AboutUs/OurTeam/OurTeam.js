import React, { Fragment } from "react";
import Team1 from "../../../asset/images/team/team1.jpg";
import { ImFacebook, ImTwitter } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

function OurTeam() {
    return (
        <Fragment>
            <div className="container xl:mt-8 xl:mb-12">
                <h4 className="text-xl	font-semibold text-watch-video text-center xl:mt-20">Our Hero</h4>
                <h4 className="text-4xl	font-semibold text-our-team text-center xl:mt-2 xl:mb-16">Our Team!</h4>

                <div className="flex flex-wrap xl:mt-6 xl:pl-20 xl:pr-20">

                    <div className="xl:w-1/3 w-full xl:px-2 xl:py-2 flex justify-center">
                        <div className="">
                            <div className="myDIV bg-white rounded-md hover:shadow-md border-2 border-white xl:pl-24 xl:pr-24 xl:pt-8 xl:pb-8">
                                <img className="xl:h-28 xl:w-28 border-maincolor  xl:border-2 xl:rounded-xl xl:ml-5 xl:mb-4" src={Team1} alt="" />
                                <p className="text-our-team xl:text-xl xl:mb-3 xl:font-semibold text-center">Saimon Harmer</p>
                                <p className="text-our-team-subtitle text-sm font-light xl:mt-1 text-center">CEO & Founder</p>
                            </div>
                            <div className="hide"><ImFacebook className="my-3" /><ImTwitter className="my-3" /><BsInstagram className="my-3" /></div>
                        </div>
                    </div>

                    <div className="xl:w-1/3 w-full xl:px-2 xl:py-2 flex justify-center">
                        <div className="">
                            <div className="myDIV bg-white rounded-md hover:shadow-md border-2 border-white xl:pl-24 xl:pr-24 xl:pt-8 xl:pb-8">
                                <img className="xl:h-28 xl:w-28 border-maincolor  xl:border-2 xl:rounded-xl xl:ml-5 xl:mb-4" src={Team1} alt="" />
                                <p className="text-our-team xl:text-xl xl:mb-3 xl:font-semibold text-center">Lina Jutila</p>
                                <p className="text-our-team-subtitle text-sm font-light xl:mt-1 text-center">Web Developer</p>
                            </div>
                            <div className="hide"><ImFacebook className="my-3" /><ImTwitter className="my-3" /><BsInstagram className="my-3" /></div>
                        </div>
                    </div>

                    <div className="xl:w-1/3 w-full xl:px-2 xl:py-2 flex justify-center">
                        <div className="">
                            <div className="myDIV bg-white rounded-md hover:shadow-md border-2 border-white xl:pl-24 xl:pr-24 xl:pt-8 xl:pb-8">
                                <img className="xl:h-28 xl:w-28 border-maincolor  xl:border-2 xl:rounded-xl xl:ml-5 xl:mb-4" src={Team1} alt="" />
                                <p className="text-our-team xl:text-xl xl:mb-3 xl:font-semibold text-center">Aaron Nunez</p>
                                <p className="text-our-team-subtitle text-sm font-light xl:mt-1 text-center">Web Designer</p>
                            </div>
                            <div className="hide"><ImFacebook className="my-3" /><ImTwitter className="my-3" /><BsInstagram className="my-3" /></div>
                        </div>
                    </div>


                    <div className="xl:w-1/3 w-full xl:px-2 xl:py-2 flex justify-center">
                        <div className="">
                            <div className="myDIV bg-white rounded-md hover:shadow-md border-2 border-white xl:pl-24 xl:pr-24 xl:pt-8 xl:pb-8">
                                <img className="xl:h-28 xl:w-28 border-maincolor  xl:border-2 xl:rounded-xl xl:ml-5 xl:mb-4" src={Team1} alt="" />
                                <p className="text-our-team xl:text-xl xl:mb-3 xl:font-semibold text-center">Aaron Nunez</p>
                                <p className="text-our-team-subtitle text-sm font-light xl:mt-1 text-center">Web Designer</p>
                            </div>
                            <div className="hide"><ImFacebook className="my-3" /><ImTwitter className="my-3" /><BsInstagram className="my-3" /></div>
                        </div>
                    </div>

                    <div className="xl:w-1/3 w-full xl:px-2 xl:py-2 flex justify-center">
                        <div className="">
                            <div className="myDIV bg-white rounded-md hover:shadow-md border-2 border-white xl:pl-24 xl:pr-24 xl:pt-8 xl:pb-8">
                                <img className="xl:h-28 xl:w-28 border-maincolor  xl:border-2 xl:rounded-xl xl:ml-5 xl:mb-4" src={Team1} alt="" />
                                <p className="text-our-team xl:text-xl xl:mb-3 xl:font-semibold text-center">Aaron Nunez</p>
                                <p className="text-our-team-subtitle text-sm font-light xl:mt-1 text-center">Web Designer</p>
                            </div>
                            <div className="hide"><ImFacebook className="my-3" /><ImTwitter className="my-3" /><BsInstagram className="my-3" /></div>
                        </div>
                    </div>

                    <div className="xl:w-1/3 w-full xl:px-2 xl:py-2 flex justify-center">
                        <div className="">
                            <div className="myDIV bg-white rounded-md hover:shadow-md border-2 border-white xl:pl-24 xl:pr-24 xl:pt-8 xl:pb-8">
                                <img className="xl:h-28 xl:w-28 border-maincolor  xl:border-2 xl:rounded-xl xl:ml-5 xl:mb-4" src={Team1} alt="" />
                                <p className="text-our-team xl:text-xl xl:mb-3 xl:font-semibold text-center">Aaron Nunez</p>
                                <p className="text-our-team-subtitle text-sm font-light xl:mt-1 text-center">Web Designer</p>
                            </div>
                            <div className="hide"><ImFacebook className="my-3" /><ImTwitter className="my-3" /><BsInstagram className="my-3" /></div>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    );
}


export default OurTeam;