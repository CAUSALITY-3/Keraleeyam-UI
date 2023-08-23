import React, {useState} from "react";
import "./ProgramBox.scss"
import Modal from "../Modal/Modal"
import Groups from "../Groups/Groups";
import Participants from "../Participants/Participants";

export default function Users({ usersData }: any) {
  const [modal, setModal] = useState(false);
  const [expand, setExpand] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  //console.log(usersData);
  return (
    <>
    <div className="program-box-container" >
      <span><h2 onClick={()=>setExpand(!expand)}>{usersData.programName}</h2> <h1 onClick={()=>setModal(!modal)}>+</h1></span>
       

      <p>{usersData.isGroupProgram ? "Group" : "individual"}</p>
      <Modal modal={modal} toggleModal={toggleModal} usersData={usersData}/>
      {usersData.isGroupProgram ? expand && usersData.groupDetails.map((group:any)=>(<Groups group={group} mainData={usersData} />)) : expand && usersData.participants.map((participant:any)=>(<Participants participant={participant} mainData={usersData} />))}
    </div>
    </>
  );
}
