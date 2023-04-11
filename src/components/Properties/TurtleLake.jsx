import ext from '../../media/properties/turtlelake/ext.webp';
import bed2 from '../../media/properties/turtlelake/01.webp';
import livingKitchen from '../../media/properties/turtlelake/02.webp';
import threeSeason from '../../media/properties/turtlelake/03.webp';
import gym from '../../media/properties/turtlelake/04.webp';
import bathroom from '../../media/properties/turtlelake/05.webp';
import living from '../../media/properties/turtlelake/06.webp';
import den from '../../media/properties/turtlelake/07.webp';
import kitchenDining from '../../media/properties/turtlelake/08.webp';
import threeSeason2 from '../../media/properties/turtlelake/09.webp';
import minibar from '../../media/properties/turtlelake/10.webp';
import bed3 from '../../media/properties/turtlelake/11.webp';
import living2 from '../../media/properties/turtlelake/12.webp';
import kitchen from '../../media/properties/turtlelake/13.webp';
import master from '../../media/properties/turtlelake/14.webp';

function TurtleLake() {
    return (
      <div className="container">
        <h1>The Turtle Lake</h1>
        <img src={ext} alt="The Turtle Lake" />
        <img src={livingKitchen} alt="Living & Kitchen" />
        <img src={kitchen} alt="Kitchen" />
        <img src={kitchenDining} alt="Kitchen & Dining" />
        <img src={living} alt="Living Room" />
        <img src={living2} alt="Living Room" />
        <img src={den} alt="Den" />
        <img src={minibar} alt="Basement Minibar" />
        <img src={master} alt="Master Bedroom" />
        <img src={bathroom} alt="Bathroom" />
        <img src={bed2} alt="Bedroom 2" />
        <img src={bed3} alt="Bedroom 3" />
        <img src={threeSeason} alt="Three Season" />
        <img src={threeSeason2} alt="Three Season" />
        <img src={gym} alt="Gymnasium" />
      </div>
    );
  }
  
  export default TurtleLake;