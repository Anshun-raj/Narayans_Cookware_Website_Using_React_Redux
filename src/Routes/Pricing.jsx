import React, { useReducer } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import "../Styles/Pricing.css";
function Pricing() {
  return (
    <div className="pricing">
      <h2>Pricing Plan</h2>
      <div className="pricingInfo">
        <div className="pricingCard">
          <h3 style={{textTransform:"uppercase"}}>Budget</h3>
          <h4>$10.33/month</h4>
          <h5>
            <AiOutlineCheck />
            15 Cleaning
          </h5>
          <h5>
            <AiOutlineCheck />
            10 Welding 
          </h5>
          <h5>
            <AiOutlineCheck />
              5 Policing
          </h5>
          <h5>
            <AiOutlineCheck />
              12 Electroplating
          </h5>
          <Counter/>
        </div>
        <div className="pricingCard">
          <h3 style={{textTransform:"uppercase"}}>Mid-Range</h3>
          <h4>$10.70/month</h4>
          <h5>
            <AiOutlineCheck />
            15 Cleaning
          </h5>
          <h5>
            <AiOutlineCheck />
            10 Welding
          </h5>
          <h5>
            <AiOutlineCheck />
              5 Policing
          </h5>
          <h5>
            <AiOutlineCheck />
              12 Electroplating
          </h5>
          <Counter/>
        </div>
        <div className="pricingCard">
          <h3 style={{textTransform:"uppercase"}}>Premium</h3>
          <h4>$10.40/month</h4>
          <h5>
            <AiOutlineCheck />
            15 Cleaning
          </h5>
          <h5>
            <AiOutlineCheck />
            10 Welding
          </h5>
          <h5>
            <AiOutlineCheck />
              5 Policing
          </h5>
          <h5>
            <AiOutlineCheck />
              12 Electroplating
          </h5>
          <Counter/>
        </div>
      </div>
    </div>
  );
}

function Counter() {
  const initialState = { count: 0 };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "Increase": {
        return { count: state.count + 1 };
      }
      case "Decrease": {
        return { count: state.count - 1 };
      }
      default: {
        return state;
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  


  function Increment() {
    dispatch({ type: "Increase" });
  }

  function Decrement() {
    dispatch({ type: "Decrease" });
  }

  return (
    <div>
      <h4 className="productCount">Buy for: {state.count}</h4>
      <button onClick={Increment} className="btn3">
        <AiOutlinePlus/>
      </button>
      <button onClick={Decrement} className="btn3">
        <AiOutlineMinus/>
      </button>
    </div>
  );
}


export default Pricing;