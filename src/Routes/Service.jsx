import { useState } from "react";
import "../Styles/Service.css";
import ServiceImg1 from "../Assets/service1.jpg";
import ServiceImg2 from "../Assets/service2.jpg";
import ServiceImg3 from "../Assets/service3.jpg";

function Service()
{
    return(
        <div className="service">
           <h2 className="title">Our Service</h2>
           <div className="serviceInfo">
             <HOCCard1 data={Counter}/>
             <HOCCard2 data={Counter}/>
             <HOCCard3 data={Counter}/>
           </div>
        </div>
    )
}

function HOCCard1(props)
{
    return(
        <div className="serviceCard">
          <img src={ServiceImg1} alt="polishing"/>
          <h3>Polishing</h3>
          <p>
             Lorem Ipsum Dolor,Sit Amet Consectetur Adipisicing Elit.Omnis In
             Excepturi.
          </p>
          <h4>
                <props.data />
          </h4>

        </div>
    )
}
function HOCCard2(props)
{
    return(
        <div className="serviceCard">
          <img src={ServiceImg2} alt="electroplating"/>
          <h3>Electroplating</h3>
          <p>
             Lorem Ipsum Dolor,Sit Amet Consectetur Adipisicing Elit.Omnis In
            Excepturi.
          </p>
          <h4>
            <props.data />
          </h4>

        </div>
    )
}

function HOCCard3(props)
{
    return(
        <div className="serviceCard">
          <img src={ServiceImg3} alt="welding"/>
          <h3>Welding</h3>
          <p>
              Lorem Ipsum Dolor,Sit Amet Consectetur Adipisicing Elit.Omnis In
              Excepturi.
         </p>
         <h4>
             <props.data />
         </h4>

        </div>
    )
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>
        {count >= 1 ? "Booked for" : "Book Now for"}:{count}
      </h4>
      <button onClick={() => setCount(count + 1)} className="btn2">
        +
      </button>
      <button onClick={() => setCount(count - 1)} className="btn2">
        -
      </button>
    </div>
  );
}
export default Service;