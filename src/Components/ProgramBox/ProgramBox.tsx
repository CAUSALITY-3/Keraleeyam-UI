import React, {useState} from "react";
import "./ProgramBox.scss"
import Modal from "../Modal/Modal"
import Groups from "../Groups/Groups";
import Participants from "../Participants/Participants";

export default function Users({ usersData }: any) {
  const [modal, setModal] = useState(false);
  const [expand, setExpand] = useState(false);
    const [formData, setFormData] = useState({name: "",email: "",message: ""});
  
    
  const toggleModal = () => {
    setModal(!modal);
  };
  
  const addGroup = (programName:any) => {
    const handleChange = (event:any) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
  
    const handleSubmit = (event:any) => {
      event.preventDefault();
      alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
      );
  };
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Group Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
  
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
  
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange}/>
  
        <button type="submit">Submit</button>
      </form>
    );
  }

  const addParticipant = () => {
    const handleChange = (event:any) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
  
    const handleSubmit = (event:any) => {
      event.preventDefault();
      alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
      );
  };
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
  
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
  
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange}/>
  
        <button type="submit">Submit</button>
      </form>
    );
  }
  return (
    <>
    <div className="program-box-container" >
      <span><h2 onClick={()=>setExpand(!expand)}>{usersData.programName}</h2> <h1 onClick={()=>setModal(!modal)}>+</h1></span>
       

      <p>{usersData.isGroupProgram ? "Group" : "individual"}</p>
      <Modal modal={modal} toggleModal={toggleModal} modalTitle={usersData.isGroupProgram ? "Add New Group" : "Add Participant"}><p>{usersData.isGroupProgram ? addGroup(usersData.programName) : addParticipant()}</p></Modal>
      {usersData.isGroupProgram ? expand && usersData.groupDetails.map((group:any)=>(<Groups group={group} mainData={usersData} />)) : expand && usersData.participants.map((participant:any)=>(<Participants participant={participant} mainData={usersData} />))}
    </div>
    </>
  );
}
