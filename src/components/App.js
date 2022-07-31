import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <ol key="relativeList">
                <li key="relativeListItem1">person 1</li>
                <li key="relativeListItem2">person 2</li>
                <li key="relativeListItem3">person 3</li>
               </ol>
            </div>
        )
    }
}


export default App;
