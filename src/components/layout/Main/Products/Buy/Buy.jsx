import Styles from './Buy.module.css';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsCartPlus } from 'react-icons/bs';

function Buy(props) {

    let menu

    function Active() {
        menu = 
        <div>
            <h1>Foiiii</h1>
        </div>
    }

    return(
        <div onClick={Active} className={Styles.container}>
            
            <img src={props.donuts} alt="" />

                <div className={Styles.stars}>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                </div>

            <h3>{props.name}</h3>
            <p>${props.value}</p>
            <button><BsCartPlus /> Add</button>

        </div>
    )
}

export default Buy;