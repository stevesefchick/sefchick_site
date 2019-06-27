import React, {Component} from "react";


export class PortLife4Bot extends Component {

render() {
return(
    <div>
          A Twitter/Discord bot created with NodeJS using Heroku to tweet player updates in the Dance Dance Revolution LIFE4 community. The bot scans a Google Sheets doc, compares against a known list in MySQL, and tweets new players and rank updates. It also updates the community Discord server. <br/><br/>

          Stuff I did:<br/>
            <ul>
            <li>Developed bot logic using Node.js and took advantage of several libraries to utilize Twitter and Discord functionality</li>
            <li>Worked with the LIFE4 Community to continue to develop features and improvements</li>
            <li>Bot currently has a following of 200+ (~40% of all enrolled players).</li>
            </ul>

            Links:<br/>
            <ul>
            <li><a href="https://twitter.com/LIFE4BOT" rel="noopener noreferrer" target="_blank">@LIFE4BOT</a></li>
            <li><a href="https://github.com/stevesefchick" rel="noopener noreferrer" target="_blank">Git project</a></li>
            <li><a href="https://www.life4ddr.com/" rel="noopener noreferrer" target="_blank">LIFE4 official site</a></li>
            </ul>

    </div>
);

}

}


export default PortLife4Bot;