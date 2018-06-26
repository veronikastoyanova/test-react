import React, { Component } from 'react';
import Cinema from './Cinema';
import styles from '../../App.css';
import cinema1 from '../../images/ash-cinema-03-1024x576.jpg';
import cinema2 from '../../images/Cinema.jpg';
import cinema3 from '../../images/empty-cinema.jpg';

export default class Cinemas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cinemas: [{
                address: 'bul. Bulgaria 69',
                workingHours: 'Every day from 12 AM to 12 PM',
                id: 1,
                picture: cinema1
            }, {
                address: 'bul. Ivan Vazov 23',
                workingHours: 'Every day from 9 AM to 9 PM',
                id: 2,
                picture: cinema2
            }, {
                address: 'bul. Hristo Botev 11',
                workingHours: 'Every day from 10 AM to 10 PM',
                id: 3,
                picture: cinema3
            }]
        };

        this.renderCinemas = this.renderCinemas.bind(this);
    }

    renderCinemas() {
        return this.state.cinemas.map(cinema => {
            return <Cinema info={cinema} key={cinema.id}/>
        });
    }

    render() {
        return (
            <div className={styles.Cinemas}>
                {this.renderCinemas()}
            </div>
        )
    }
}