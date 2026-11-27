import { useState } from "react";
import "../Styles/Contact.css";
function Contact()
{
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[age,setAge]=useState(0);
    const[num,setNum]=useState(0);
    const[msg,setMsg]=useState("");
    function submitInfo(e)
    {
      console.log(name,email,age,num,msg);
      e.preventDefault();
    }
    function submitMsg()
    {
        alert("Form data has been submitted Successfully");
    }
    return(
        <div className="contact">
          <h2 style={{textTransform:'capitalize'}} className="title">contact us</h2>
          <div className="contactInfo">
             <form onSubmit={submitInfo}>
                <fieldset>
                    <input type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} />
                    <input type="email" placeholder="enter your email" onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="number" placeholder="enter your age" max="50" min="18" onChange={(e)=>setAge(e.target.value)}/>
                    <input type="number" placeholder="enter your number" onChange={(e)=>setNum(e.target.value)}/>
                    <input type="text" placeholder="message" onChange={(e)=>setMsg(e.target.value)} />
                    <button type="submit" onClick={submitMsg}>Submit</button>
                </fieldset>
             </form>
          </div>
        </div>
    )
}
export default Contact;