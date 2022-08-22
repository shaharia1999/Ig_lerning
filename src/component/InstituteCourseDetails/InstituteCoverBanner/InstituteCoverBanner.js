import { Fragment } from "react";
import InstituteCoverImg from "../../../asset/images/banner/institute-banner.png"

function InstituteCoverBanner() {
    return(
        <Fragment>
            <div className="container-fluid">
                <div className="flex flex-wrap">
                    <div className="">
                        <img className="institute-cover" src={InstituteCoverImg} alt=""/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default InstituteCoverBanner;