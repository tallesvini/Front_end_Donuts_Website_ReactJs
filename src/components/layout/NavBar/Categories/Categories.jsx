import Styles from './Categories.module.css';

function Categories(props) {
    return(
        <div className={Styles.container}>
            <img src={props.food} alt="sdsd" />
            <p>{props.name}</p>
        </div>
    )
}

export default Categories;