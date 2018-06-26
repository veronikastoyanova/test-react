import React from 'react';
import styles from '../../App.css';
import { NavLink } from 'react-router-dom';

const Cinema = (props) => {
    const { address, workingHours, id, picture } = props.info;
    return (
        <div className={styles.Cinema}>
            <div className={styles.Info}><img src={picture} alt=""/></div>
            <div className={styles.Info}>Адрес: {address}</div>
            <div className={styles.Info}>Работно време: {workingHours}</div>
            <div className={styles.Info}><NavLink to={`cinemas/${id}`}>Програма</NavLink></div>
        </div>
    )
};

export default Cinema;