import Styles from './Information.module.css';

import { RiUserLocationFill } from 'react-icons/ri';
import { GiPodiumWinner } from 'react-icons/gi';
import { FaStore } from 'react-icons/fa';
import { BiHistory } from 'react-icons/bi';

function Information() {
    return(
        <div className={Styles.container}>

            <div className={Styles.text}>
                <p>Our story</p>
                <h1>Different from competitors</h1>
            </div>

            <div className={Styles.principal}>
                <div className={Styles.barOne}>
                    <div className={Styles.barOne1}>
                        <RiUserLocationFill className={Styles.img1} size={150} />
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in luctus nulla.</p>
                    </div>

                    <div className={Styles.barOne2}>
                        <GiPodiumWinner className={Styles.img2} size={150} />
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in luctus nulla.</p>
                    </div>
                </div>
            </div>

            <div className={Styles.principal2}>
                <div className={Styles.barTwo}>
                    <div className={Styles.barTwo1}>    
                        <FaStore className={Styles.img3} size={150} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in luctus nulla.</p>
                    </div>

                    <div className={Styles.barTwo2}>
                        <BiHistory className={Styles.img4} size={150} />
                        <p>Lorem ipsum dolor sit, consectetur adipiscing elit. Etiam in luctus nulla.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Information;