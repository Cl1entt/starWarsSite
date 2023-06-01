import { useHistory } from 'react-router-dom';
import styles from './PersonLinkBack.module.css'
import iconBack from './img/back.png'

const PersonLinkBack = () => {
    const history = useHistory();

    const handleGoBack = e => {
        e.preventDefault();

        history.goBack();
    }

    return(
        <a
         href="#"
         onClick={handleGoBack}
         className={styles.link}
        >
          <img className={styles.link__img} src={iconBack} alt ="GoBack"/>
          <span>Go Back</span>
        </a>
    )
}

export default PersonLinkBack;