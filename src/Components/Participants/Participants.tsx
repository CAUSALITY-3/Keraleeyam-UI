import React from 'react'
import "./Participants.scss"

function Participants({participant, mainData}:any) {
  return (
    <div className="participant-container">
      <div className="participant-items">
        <div className="participant-name">{participant.name}</div>
        <div className="participant-total-members">{participant.age}</div>
      </div>
         
    </div>
  )
}

export default Participants