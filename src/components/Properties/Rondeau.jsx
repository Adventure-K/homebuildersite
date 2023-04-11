import ext from '../../media/properties/rondeau/ext.webp';
import master from '../../media/properties/rondeau/01.webp';
import kitchenDining from '../../media/properties/rondeau/02.webp';
import masterBath from '../../media/properties/rondeau/03.webp';
import threeSeason from '../../media/properties/rondeau/04.webp';
import family from '../../media/properties/rondeau/05.webp';
import living from '../../media/properties/rondeau/06.webp';
import living2 from '../../media/properties/rondeau/08.webp';
import livingKitchen from '../../media/properties/rondeau/09.webp';

function Rondeau() {
    return (
      <div className="container">
        <h1>The Rondeau</h1>
        <img src={ext} alt="The Rondeau" />
        <img src={living} alt="Living Room" />
        <img src={living2} alt="Living Room" />
        <img src={livingKitchen} alt="Living & Kitchen" />
        <img src={kitchenDining} alt="Kitchen & Dining" />
        <img src={master} alt="Master Bedroom" />
        <img src={masterBath} alt="Master Bathroom" />
        <img src={family} alt="Family Room" />
        <img src={threeSeason} alt="Three Season" />

      </div>
    );
  }
  
  export default Rondeau;