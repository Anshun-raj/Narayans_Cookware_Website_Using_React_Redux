import { Component } from "react";
import "../Styles/Review.css";
import ReviewImg1 from "../Assets/review1.jpg";
import ReviewImg2 from "../Assets/review2.jpg";
import ReviewImg3 from "../Assets/review3.jpg";
class Review extends Component
{
    Calling1=()=>{
        this.setState({call1:!this.setState.call1})
        alert("Shivam Singh..");
    }
    Calling2=()=>{
        this.setState({call2:!this.setState.call2})
        alert("Rohit Pandey..");
    }
    Calling3=()=>{
        this.setState({call3:!this.setState.call3})
        alert("Amrit Sahu..");
    }
    constructor()
    {
        super();
        this.state={
            title:'Our Reviewer',
            name1:'Shivam Singh',
            name2:'Rohit Pandey',
            name3:'Amrit Sahu',
            call1:false,
            call2:false,
            call3:false,
        }

    }
    render(){
        return(
            <div className="review">
                <h2 className="title">{this.state.title}</h2>
                <div className="reviewInfo">
                  <div className="reviewCard">
                   <img src={ReviewImg1} alt=""/>
                   <h3>Name:{this.state.name1}</h3>
                   <div className="socialIcon">
                       <i className="fab fa-facebook"></i>
                       <i className="fab fa-twitter"></i>
                       <i className="fab fa-instagram"></i>
                       <i className="fab fa-pinterest"></i>
                    </div>
                    <button className="btn" onClick={this.Calling1}>
                       {this.state.call1 ? "Calling..." : "Contact Now"}
                    </button>
                  </div>
                  <div className="reviewCard">
                   <img src={ReviewImg2} alt=""/>
                    <h3>Name:{this.state.name2}</h3>
                    <div className="socialIcon">
                       <i className="fab fa-facebook"></i>
                       <i className="fab fa-twitter"></i>
                       <i className="fab fa-instagram"></i>
                       <i className="fab fa-pinterest"></i>
                    </div>
                    <button className="btn" onClick={this.Calling2}>
                       {this.state.call2 ? "Calling..." : "Contact Now"}
                    </button>
                  </div>
                  <div className="reviewCard">
                   <img src={ReviewImg3} alt=""/>
                    <h3>Name:{this.state.name3}</h3>
                    <div className="socialIcon">
                       <i className="fab fa-facebook"></i>
                       <i className="fab fa-twitter"></i>
                       <i className="fab fa-instagram"></i>
                       <i className="fab fa-pinterest"></i>
                    </div>
                    <button className="btn" onClick={this.Calling3}>
                       {this.state.call3 ? "Calling..." : "Contact Now"}
                    </button>
                  </div>
                </div>
            </div>
        )
    }
}
export default Review;