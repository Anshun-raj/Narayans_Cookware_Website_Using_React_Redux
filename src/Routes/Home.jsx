import { Component } from "react";
import "../Styles/Home.css";
class Home extends Component
{

    constructor()
    {
        super();
        this.state={
            title1:'"The Lord is moving among the pots and pans."',
            title2:'"Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            title2New:'"Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
            info:false,
        }
        
    }
    
    render(){
        return(
            <div className="home">
              <div className="homeInfo">
                <h2>{this.state.title1}</h2>
                <h3>{this.state.info?this.state.title2New:this.state.title2}</h3>
                <button onClick={()=>this.setState({info:!this.state.info})}>{this.state.info?"Read Less":"Read More"}</button>
              </div>
            </div>
        )
    }
}
export default Home;