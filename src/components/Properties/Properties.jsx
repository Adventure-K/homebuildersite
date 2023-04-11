import { Link } from 'react-router-dom';

function Properties() {
    return (
      <div className="container">
        <h1>Properties</h1>
        <p>
          <Link to='/properties/medicinelake'>The Medicine Lake</Link>
        </p>
        <p>
          <Link to='/properties/millelacs'>The Mille Lacs</Link>
        </p>
        <p>
          <Link to='/properties/whitebear'>The White Bear</Link>
        </p>
        <p>
          <Link to='/properties/turtlelake'>The Turtle Lake</Link>
        </p>
        <p>
          <Link to='/properties/rondeau'>The Rondeau</Link>
        </p>
        <p>
          <Link to='/properties/weaver'>The Weaver</Link>
        </p>
      </div>
    );
  }
  
  export default Properties;