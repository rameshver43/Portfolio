import React, { useState } from "react";
import axios from 'axios';

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[subject,setSubject] = useState("");
  const[message,setMessage] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
}

const onEmailChange = (event) => {
    setEmail(event.target.value);
}

const onSubjectChange = (event) =>{
    setSubject(event.target.value);
}

const  onMsgChange = (event) => {
    setMessage(event.target.value);
}
const submitEmail = (e)=>{
  e.preventDefault();
  axios({
    method: "POST", 
    url:"/send", 
    data:  this.state
  }).then((response)=>{
    if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
    }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
    }
  })
}

const resetForm= ()=>{
  setEmail("");
  setMessage("");
  setName("");
  setSubject("");
}
  return (
    <div className="section">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="section-title">
                    <h2 className="title">Contact Us</h2>
                    <p>Let us know what you think! In order to provide better service,
                         please do not hesitate to give us your feedback. Thank you.</p><hr/>
                    <form id="contact-form" onSubmit={this.submitEmail.bind(this)} 
                        method="POST">
                    <div className="form-group">
                    <div className="row">
                    <div className="col-md-6">
                        <input placeholder = "Name"  id="name" type="text" 
                           className="form-control" required value={this.state.name} 
                           onChange={this.onNameChange.bind(this)}/>
                    </div>
                    <div className="col-md-6">
                        <input placeholder = "Email"  id="email" type="email"
                          className="form-control" aria-describedby="emailHelp"
                          required value={this.state.email} onChange=
                          {this.onEmailChange.bind(this)}/>
                    </div>
                    </div>
                    </div>
                    <div className="form-group">
                        <input placeholder = "Subject"  id="subject" type="text"
                          className="form-control" required value={this.state.subject}
                          onChange={this.onSubjectChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <textarea placeholder = "Message"  id="message" 
                           className="form-control" rows="1" 
                           required value={this.state.message}
                           onChange= {this.onMsgChange.bind(this)}/>
                    </div>
                    <button type="submit" className="primary-btn submit">Submit</button>
                    </form>
                </div>
            </div>

        </div>

    </div>
</div>
  );
};

export default ContactForm;