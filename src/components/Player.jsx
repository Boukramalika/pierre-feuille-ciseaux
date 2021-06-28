import React from 'react';
import paper from '../images/paper.png'
import rock from '../images/rock.png'
import scissors from '../images/scissors.png'
const Player = ({weapon})=>{
    return (
        <div className="player">
            <img className="player-image"
            src={
                weapon === "rock" ? rock : weapon === "scissors" ? scissors : paper
            } alt="rock paper scissors"
            />
        </div>
    )
}
export default Player;