import ext from '../../media/properties/millelacs/ext.webp';
import sunroom from '../../media/properties/millelacs/01.webp';
import kitchen from '../../media/properties/millelacs/02.webp';
import kitchenLiving from '../../media/properties/millelacs/03.webp';
import master from '../../media/properties/millelacs/04.webp';
import living from '../../media/properties/millelacs/05.webp';
import living2 from '../../media/properties/millelacs/06.webp';
import dining from '../../media/properties/millelacs/07.webp';
import gameDen from '../../media/properties/millelacs/08.webp';
import masterBath from '../../media/properties/millelacs/09.webp';
import bedroom from '../../media/properties/millelacs/10.webp';

function MilleLacs() {
    return (
      <div className="container">
        <h1>The Mille Lacs</h1>
        <img src={ext} alt="The Mille Lacs" />
        <img src={kitchenLiving} alt="Kitchen & Living" />
        <img src={living} alt="Living Room" />
        <img src={living2} alt="Living Room" />
        <img src={kitchen} alt="Kitchen" />
        <img src={master} alt="Master Bedroom" />
        <img src={masterBath} alt="Master Bathroom" />
        <img src={dining} alt="Dining Room" />
        <img src={gameDen} alt="Game Room & Den" />
        <img src={sunroom} alt="Sunroom" />
        <img src={bedroom} alt="Bedroom 2" />

      </div>
    );
  }
  
  export default MilleLacs;