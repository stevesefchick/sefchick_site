import React, {Component} from "react";


export class PortLife4Bot extends Component {

render() {
return(
    <div>

          A backend system that delivers automated progression updates using Twitter or Discord for players in the Dance Dance Revolution <a href="https://www.life4ddr.com/" rel="noopener noreferrer" target="_blank">LIFE4</a> community. <br/><br/>


          Stuff I did:<br/>
            <ul>
            <li>Developed a backend services that reads from a MySQL database and sends announcements/broadcasts based on player achievements or progress</li>
            <li>Worked on a small team alongside admins, moderators, and web/app developers to build a nondisruptive backend app</li>
            <li>Created a messenger app to allow for mod controls to start or stop the bot using discord</li>
            <li>Built and deployed updates based on new features and player requests</li>
            <li>Sends communications to a community of over 1000 members</li>
            </ul>

            How I did it:<br/>
            <ul>
            <li>Code - Node.js, twit, discord.js</li>
            <li>Integrations - MySQL, Wordpress</li>
            </ul>

            Links:<br/>
            <ul>
            <li><a href="https://twitter.com/LIFE4BOT" rel="noopener noreferrer" target="_blank">@LIFE4BOT</a></li>
            <li><a href="https://github.com/stevesefchick/life4ddrbot" rel="noopener noreferrer" target="_blank">Git project - core app</a></li>
            <li><a href="https://github.com/life4ddr/life4messenger" rel="noopener noreferrer" target="_blank">Git project - messenger</a></li>
            <li><a href="https://www.life4ddr.com/" rel="noopener noreferrer" target="_blank">LIFE4 official site</a></li>
            </ul>

    </div>
);

}

}


export default PortLife4Bot;