import Styles from './Navigator.module.css';
import { useState } from 'react';

import Categories from './Categories/Categories';

import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import IcedCoffee from '../../../assets/img/foods/iced-coffee.png';
import Sandwich from '../../../assets/img/foods/sand.png';
import Breakfast from '../../../assets/img/foods/breakfast.png';
import Donuts from '../../../assets/img/foods/donuts.png';
import BlackCoffee from '../../../assets/img/foods/black-coffee.png';

function Navigator() {
    
    const [showMenu, setShowMenu] = useState(false)
    const [cls, setCls] = useState('none')

    let menu 

    if(showMenu) {
        menu = 
        <div className={Styles.links2}>

            <p>Home</p>
            <p>About</p>
            <p>Products</p>
            <div className={Styles.car}>
                <AiOutlineShoppingCart />
                <h4>Cart</h4>
            </div>
            
        </div>
    }

    return(
        <div className={Styles.container}>

            <style>{`
                .none {display: none}
                .block {display: block }
            `}</style>

            <div className={Styles.links}>

                <button>Home</button>
                <button>About</button>
                <button onClick={() => setCls((cls) => (cls == 'none' ? 'block' : 'none'))}>Products</button>   
                    <div className={Styles.car}>
                        <AiOutlineShoppingCart />
                        <h4>Cart</h4>
                    </div>

            </div>

            <div className={cls}>

                <div className={Styles.categories}>
                    <Categories food={Donuts} name="Donuts" />
                    <Categories food={Sandwich} name="Sandwich" />
                    <Categories food={Breakfast} name="Breakfast" />
                    <Categories food={IcedCoffee} name="Iced Coffee" />
                    <Categories food={BlackCoffee} name="Black Coffee" />
                </div>

            </div>

            <div className={Styles.mobile}>
                <GiHamburgerMenu 
                    className={Styles.hamburger} 
                    size={35}
                    onClick={() => setShowMenu(!showMenu)}
                />
                {menu}
            </div>

        </div>
    )
}

export default Navigator;