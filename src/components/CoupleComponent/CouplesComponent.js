import React, {Component} from 'react';
import MansComponents from "../ManComponent/MansComponents";
import WomansComponent from "../WomanComponent/WomansComponent";
import CoupleComponent from "./CoupleComponent";

class CouplesComponent extends Component {

    state = {man:[],woman:[]}

    man = <MansComponents/>
    woman = <WomansComponent/>



    render() {
        // console.log(this.man)


        return (
            <div>

            </div>
        );
    }
}
export default CouplesComponent;