import playroom from '../../media/properties/medicinelake/01.webp';
import bathroom from '../../media/properties/medicinelake/02.webp';
import foyerUp from '../../media/properties/medicinelake/03.webp';
import basement from '../../media/properties/medicinelake/04.webp';
import extBack from '../../media/properties/medicinelake/05.webp';
import livingUp from '../../media/properties/medicinelake/06.webp';
import living from '../../media/properties/medicinelake/07.webp';
import kitchen from '../../media/properties/medicinelake/08.webp';
import master from '../../media/properties/medicinelake/09.webp';
import living2 from '../../media/properties/medicinelake/10.webp';
import living3 from '../../media/properties/medicinelake/11.webp';
import nursery from '../../media/properties/medicinelake/12.webp';
import livingKitchen from '../../media/properties/medicinelake/13.webp';
import ext from '../../media/properties/medicinelake/ext.webp';

function MedicineLake() {
    return (
      <div className="container">
        <h1>The Medicine Lake</h1>
        <img src={ext} alt="Medicine Lake"/>
        <img src={livingKitchen} alt="Living Room & Kitchen"/>
        <img src={living} alt="Living Room"/>
        <img src={living2} alt="Living Room"/>
        <img src={living3} alt="Living Room"/>
        <img src={livingUp} alt="Living Room"/>
        <img src={kitchen} alt="Kitchen"/>
        <img src={foyerUp} alt="Foyer"/>
        <img src={master} alt="Master Bedroom"/>
        <img src={bathroom} alt="Bathroom"/>
        <img src={playroom} alt="Playroom"/>
        <img src={nursery} alt="Nursery"/>
        <img src={basement} alt="Finished Basement"/>
        <img src={extBack} alt="Exterior Back"/>
      </div>
    );
  }
  
  export default MedicineLake;