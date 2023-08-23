import React, {useState} from "react";
import "./Groups.scss"
import Participants from '../Participants/Participants'

function Groups({group, mainData}:any) {

  const [showMembers, setShowMembers] = useState(false);

  return (
    <div className="group-container" >
      <div className="group-items"onClick={()=>setShowMembers(!showMembers)}>
        <div className="group-name">{group.groupName}</div>
        <div className="group-total-members">{group.groupMembers.length}</div>
        <div className="group-add-member">+</div>
      </div>
         { showMembers && <div className="group-members">
          {
            group.groupMembers.map((participant:any)=>(
              <Participants participant={participant} mainData={mainData}/>
            ))
          }
          
         </div>}
    </div>
  )
}

export default Groups