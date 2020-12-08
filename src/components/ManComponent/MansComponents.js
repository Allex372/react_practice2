import React, {Component} from 'react';
import ManComponent from "./ManComponent";

class MansComponents extends Component {

    manMass=[
        {id:1,name:'Oleg',age:21,wife_id:1},
        {id:2,name:'Oleg',age:22,wife_id:2},
        {id:3,name:'Oleg',age:23,wife_id:3},
        {id:4,name:'Oleg',age:24,wife_id:4},
        {id:5,name:'Oleg',age:25,wife_id:5},
    ]

    render() {
        return (
            <div>
                {
                    this.manMass.map((value, index) => {
                        return(<ManComponent item={value} key={index}/>)
                    })
                }
            </div>
        );
    }
}

export default MansComponents;