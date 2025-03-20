import { useState } from "react";


export default function Player ({initialName, symbol, isActive}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick(){
        setIsEditing((editing) => !editing );
    }

    function handleChange(event) {
        setPlayerName(event.target.value)
    }

    let buttonCaption = "Edit"; 
    if(isEditing){
        buttonCaption = 'Save';
    }

    return ( <li className={isActive ? "active" : undefined }>
   
    <span className="player">
        {
            !isEditing ?  <span className="player-name">{playerName}</span> : <input type="text" required  value={playerName} onChange={handleChange}/> 
        }
      </span>
     <span className="player-symbol">{symbol}</span>
    <button onClick={handleEditClick}>{buttonCaption}</button>
  </li>)
}