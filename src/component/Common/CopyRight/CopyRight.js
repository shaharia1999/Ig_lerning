import React, { Component, Fragment } from 'react';

class CopyRight extends Component {
    render() {
        return (
            <Fragment>
                <div className="bg-maincolordeep py-4">
                    <div className="container px-4 mx-auto">

                        <div className="md:flex md:-mx-4 md:items-center">
                            <div className="md:flex-1 md:px-4 text-center md:text-left">
                                <p className="copyright-text">Copyright &copy; <strong>2020 IntelloGeek. All Right Reserved.</strong></p>
                            </div>
                            <div className="md:flex-1 md:px-4 text-center md:text-right">
                                <a href="#" className="py-2 px-4 copyright-text">Trusted Partner: The Cube</a>
                            </div>
                        </div>

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default CopyRight;



