import Styles from './Footer.module.css';

function Footer() {
    return(
        <div className={Styles.container}>
            <div className={Styles.principal}>
                <div className={Styles.about}>
                    <h1>About us</h1>
                    <a href="/">Who we are</a>
                    <a href="/">Terms of use</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Work with us</a>
                    <a href="/">Advertise with us</a>
                    <a href="/">Be a partner</a>
                    <a href="/">Safety</a>     
                </div>

                <div className={Styles.help}>
                    <h1>More Help</h1>
                    <a href="/">FAQ</a>
                    <a href="/">How to buy</a>
                    <a href="/">Warranty time</a>
                    <a href="/">Relatioship center</a>
                    <a href="/">Forms of delivery</a>
                </div>

                <div className={Styles.form}>
                    <h1>Contact</h1>
                    <p>Email</p>
                    <input type="text" placeholder='123aaa@gmail.com' />
                    <p>Message</p>
                    <input type="text" placeholder='aaaa1234' />
                    <button>Send</button>
                </div>
            </div>

            <div className={Styles.copyright}>
                <p>Copyright 2022 TM Code - All rights reserved</p>
            </div>

        </div>
    )
}

export default Footer;