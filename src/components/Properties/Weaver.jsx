import ext from '../../media/properties/weaver/ext.webp';
import masterBath from '../../media/properties/weaver/01.webp';
import family from '../../media/properties/weaver/02.webp';
import walkIn from '../../media/properties/weaver/03.webp';
import threeSeason from '../../media/properties/weaver/04.webp';
import deck from '../../media/properties/weaver/05.webp';
import master from '../../media/properties/weaver/06.webp';
import kitchenLiving from '../../media/properties/weaver/07.webp';
import deckHotTub from '../../media/properties/weaver/08.webp';
import bedroom2 from '../../media/properties/weaver/09.webp';
import livingDining from '../../media/properties/weaver/10.webp';
import kitchen from '../../media/properties/weaver/11.webp';
import living from '../../media/properties/weaver/12.webp';

function Weaver() {
    return (
      <div className="container">
        <h1>The Weaver</h1>
        <img src={ext} alt="The Weaver" />
        <img src={living} alt="Living Room" />
        <img src={kitchenLiving} alt="Kitchen & Living" />
        <img src={kitchen} alt="Kitchen" />
        <img src={livingDining} alt="Living & Dining" />
        <img src={master} alt="Master Bedroom" />
        <img src={masterBath} alt="Master Bathroom" />
        <img src={walkIn} alt="Walk-In Closet" />
        <img src={family} alt="Family Room" />
        <img src={bedroom2} alt="Bedroom 2" />
        <img src={threeSeason} alt="Three Season" />
        <img src={deck} alt="Back Deck" />
        <img src={deckHotTub} alt="Deck with Hot Tub" />

      </div>
    );
  }
  
  export default Weaver;