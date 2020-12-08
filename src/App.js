import React, {Component} from 'react';
import MansComponents from "./components/ManComponent/MansComponents";
import WomansComponent from "./components/WomanComponent/WomansComponent";
import CouplesComponent from "./components/CoupleComponent/CouplesComponent";

class App extends Component {

    //Створити масив man. { id, name, age, wife_id }
    // Створити масив woman. { id, name, age, husband_id }



    render() {

        return (
            <div>
                    {/*<MansComponents/>*/}
                    {/*<hr/>*/}
                    {/*<WomansComponent/>*/}
                    <hr/>
                    <CouplesComponent/>
                    <hr/>
            </div>
        );
    }
}

export default App;