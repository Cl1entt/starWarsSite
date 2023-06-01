import { NavLink } from 'react-router-dom';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context/ThemeProvider';
import imgDroid from './img/droid.png'
import imgStar from './img/deathstar.png'
import imgLightsaber from './img/lightsabers.png'

import styles from './Header.module.css';
import { useEffect } from 'react';
import { useState } from 'react';

const Header = () => {
    const [icon, setIcon] = useState(imgStar)
    const isTheme = useTheme();

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT: setIcon(imgLightsaber); break;
            case THEME_DARK: setIcon(imgStar); break;
            case THEME_NEITRAL: setIcon(imgDroid); break;
            default:setIcon(imgStar);
        }
    },[isTheme])
    return (
        <div className={styles.container}>
            <img className={styles.logo} src={icon} alt="Star Icon" />

            <ul className={styles.list__container}>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/people/?page=1">People</NavLink></li>
                <li><NavLink to="/not-found" exact>Not Found</NavLink></li>
                <li><NavLink to="/search" exact>Search</NavLink></li>
            </ul>
        </div>
    )
}

export default Header;