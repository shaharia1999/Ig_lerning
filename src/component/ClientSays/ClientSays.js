import React, { Component, Fragment } from 'react';
import Client1 from "../../asset/images/client/client1.jpg";

class ClientSays extends Component {
    render() {
        return (
            <Fragment>
                <div className="container mt-8 mb-8">
                    <h4 className="text-4xl	font-semibold ml-3 text-sectionTitleColor">What Our Client Say</h4>
                    <div class="flex flex-auto mt-3 p-3">

                        <div class="lg:basis-1/3 mx-2">
                            <div class="bg-white rounded-2xl shadow-md border-none p-6 w-auto">
                                <img className="rounded-full h-24 w-24" src={Client1}/>
                                <h5 class="text-md font-normal text-clientsectiondes leading-8 mb-4 mt-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h5>
                                <p class="text-gray-700 text-sm">Jessica Strike</p>
                                <p class="text-gray-700 text-sm">Student</p>
                            </div>
                        </div>

                        <div class="lg:basis-1/3 mx-2">
                            <div class="bg-white rounded-2xl shadow-md border-none p-6 w-auto">
                                <img className="rounded-full h-24 w-24" src={Client1}/>
                                <h5 class="text-md font-normal text-clientsectiondes leading-8 mb-4 mt-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h5>
                                <p class="text-gray-700 text-sm">Jessica Strike</p>
                                <p class="text-gray-700 text-sm">Student</p>
                            </div>
                        </div>

                        <div class="lg:basis-1/3 mx-2">
                            <div class="bg-white rounded-2xl shadow-md border-none p-6 w-auto">
                                <img className="rounded-full h-24 w-24" src={Client1}/>
                                <h5 class="text-md font-normal text-clientsectiondes leading-8 mb-4 mt-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h5>
                                <p class="text-gray-700 text-sm">Jessica Strike</p>
                                <p class="text-gray-700 text-sm">Student</p>
                            </div>
                        </div>
                    
                        
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ClientSays;