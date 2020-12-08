import React, {Component} from 'react';
import WomanComponent from "./WomanComponent";

class WomansComponent extends Component {



    womanMass = [
        {id:1, name:'Katia', age:20, husband_id:1},
        {id:2, name:'Masha', age:21, husband_id:2},
        {id:3, name:'Dasha', age:22, husband_id:3},
        {id:4, name:'Karina', age:15,husband_id:4},
        {id:5, name:'Julia', age:24, husband_id:5}
    ]

    render() {
        return (
            <div>
                {
                    this.womanMass.map((value, index) => {
                        return(<WomanComponent item={value} key={index}/>)
                    })
                }
            </div>
        );
    }
}

export default WomansComponent;