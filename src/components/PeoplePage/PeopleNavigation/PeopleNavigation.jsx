import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import UIButton from '@ui/UIButton';
import styles from './PeopleNavigation.module.css';

const PeopleNavigation = ({
    getResource,
    prevPage,
    nextPage,
    counterPage,
}) => {
    const handleChangeNext = () => getResource(nextPage);
    const handleChangePrev = () => getResource(prevPage);

    return (
        <div className={styles.container}>
            <Link to={`/people/?page=${counterPage-1}`} className={styles.buttons}>
              <UIButton 
                 text="Previous"
                 onClick={handleChangePrev}
                 disabled={!prevPage}
              />
            </Link>
            <Link to={`/people/?page=${counterPage+1}`} className={styles.buttons}>
              <UIButton
              text="Next"
              onClick={handleChangeNext}  
              className={!nextPage}
              />
            </Link>
        </div>
    )
}
  PeopleNavigation.propTypes = {
    getResource: PropTypes.string,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    counterPage: PropTypes.string

  }
export default PeopleNavigation;