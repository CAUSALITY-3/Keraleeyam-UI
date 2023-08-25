import React, {useState} from "react";

export const AddGroup = () => {
    const [formData, setFormData] = useState({name: "",email: "",message: ""});

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
