import { Component } from "react";
import AboutImg1 from "../Assets/about.jpg";
import AboutImg2 from "../Assets/about4.jpeg";
import AboutImg3 from "../Assets/about6.jpeg";
import "../Styles/About.css";
class About extends Component
{
    constructor(){
        super();
        this.state={
            title:'about us',
            quote:'Quality Is Remembered Long After Price Is Forgotten',
            quality:'Best Quality',
            award:'Award Winning',
            info:false,
        }
    }
    render(){
        return(
            <div className="about">
                <h2 className="title">{this.state.title}</h2>
              <div className="aboutInfo">
                <div className="aboutInfoLeft">
                   <img src={AboutImg1} alt="narayan_yard"/>
                </div>
                <div className="aboutInfoRight">
                  <h3>{this.state.quote}</h3>
                  <p>
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
                   nihil inventore error provident at natus placeat, quia est unde
                   adipisci consectetur voluptatibus assumenda.
                  </p>
                  <p>{this.state.info?"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima nihil inventore error provident at natus placeat, quia est unde adipisci consectetur voluptatibus assumenda.":""}</p>
                  <div class="achieve">
                    <div class="quality">
                     <img src={AboutImg2} alt="quality"/>
                     <h5>{this.state.quality}</h5>
                   </div>
                  <div class="award">
                    <img src={AboutImg3}  alt="award"/>
                    <h5>{this.state.award}</h5>
                  </div>
                 </div>
                 <button class="btn1" onClick={()=>this.setState({info:!this.state.info})}>{this.state.info?"Read Less":"Read More"}</button>
            </div>
                </div>
              </div>
        )
    }
}
export default About;