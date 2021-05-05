import React, {Component} from "react";


export class PortTheMark extends Component {

render() {
return(
    <div>
          An experimental, procedurally generated game project<br/><br/>

          Stuff I did:<br/>
            <ul>
            <li>Created a randomly generated world, complete with unique humans, creatures, and terrains/locations </li>
            <li>Using 17 JSON file imports, generates over a million possible world combinations</li>
            <li>Implemented a number of "just because" features such as day/night cycles, a character trait/skill/personality system, a travel/distance calculation system, and others </li>
            <li>"Game" logic created using FNA (C#)</li>
            </ul>

            Links:<br/>
            <ul>
            <li><a href="https://github.com/stevesefchick/The-Mark" rel="noopener noreferrer" target="_blank">Git project</a></li>
            </ul>

    </div>
);

}

}


export default PortTheMark;