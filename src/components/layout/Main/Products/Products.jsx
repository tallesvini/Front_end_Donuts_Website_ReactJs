import Styles from './Products.module.css';
import Buy from './Buy/Buy';

import Dun1 from '../../../../assets/img/donuts/dun1.png';
import Dun2 from '../../../../assets/img/donuts/dun2.png';
import Dun3 from '../../../../assets/img/donuts/dun3.png';
import Dun4 from '../../../../assets/img/donuts/dun4.png';

function Products() {
    return(
        <div className={Styles.container}>

            <div className={Styles.text}>
                <p>Our Ingredients</p>
                <h1>Our Best Products</h1>
            </div>

            <div className={Styles.cards}>
                <Buy donuts={Dun1} value="1.69" name="Chocolate" />
                <Buy donuts={Dun2} value="1.89" name="Pink Chocolate" />
                <Buy donuts={Dun3} value="2.09" name="Birthday" />
                <Buy donuts={Dun4} value="1.29" name="Original" />
            </div>
       
        </div>
    )
}

export default Products;