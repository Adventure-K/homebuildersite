import ext from '../../media/properties/whitebear/ext.webp';
import living from '../../media/properties/whitebear/01.webp';
import sunroom from '../../media/properties/whitebear/02.webp';
import kitchen from '../../media/properties/whitebear/03.webp';
import bathroom from '../../media/properties/whitebear/04.webp';
import master from '../../media/properties/whitebear/05.webp';
import bedroom2 from '../../media/properties/whitebear/06.webp';
import sitting from '../../media/properties/whitebear/07.webp';

function WhiteBear() {
    return (
      <div className="container">
        <h1>The White Bear</h1>
        <img src={ext} alt="The White Bear" />
        <img src={living} alt="Living Room" />
        <img src={sunroom} alt="Sunroom" />
        <img src={kitchen} alt="Kitchen" />
        <img src={bathroom} alt="Bathroom" />
        <img src={master} alt="Master Bedroom" />
        <img src={bedroom2} alt="Bedroom 2" />
        <img src={sitting} alt="Sitting Room" />

      </div>
    );
  }
  
  export default WhiteBear;