import React, { Component } from 'react';
import styles from '../../App.css';

export default class Program extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: {
                1: {
                    name: 'movie 1',
                    freePlaces: 4,
                    id: 1
                },
                2: {
                    name: 'movie 2',
                    freePlaces: 20,
                    id: 2
                },
                3: {
                    name: 'movie 3',
                    freePlaces: 0,
                    id: 3
                },
                4: {
                    name: 'movie 4',
                    freePlaces: 12,
                    id: 4
                }
            },
            showForm: false
        };

        this.renderProgram = this.renderProgram.bind(this);
        this.openForm = this.openForm.bind(this);
    }

    renderProgram() {
        return Object.keys(this.state.movies).map(key => {
            return (<div className={styles.Program} key={this.state.movies[key].name}>
                <div className={styles.Info}>Име: {this.state.movies[key].name}</div>
                <div className={styles.Info}>Свободни места: {this.state.movies[key].freePlaces}</div>
                <button onClick={(e) => this.openForm(this.state.movies[key].id, e)}
                        className={this.state.movies[key].freePlaces === 0 ? styles.disabled : ''}>{this.state.movies[key].freePlaces === 0 ? 'cant reserve' : 'reserve'}</button>
            </div>)
        });
    }

    openForm(id, e) {
        if (this.state.movies[id].freePlaces !== 0) {
            this.setState({
                showForm: true
            })
        }
    }


    render() {
        return (
            <div className={styles.Cinemas}>
                {this.renderProgram()}
                {this.state.showForm ?
                    <div className="form">
                        <label>How many tickets</label>
                        <input type="number" placeholder="tickets"/>
                        <button onClick={() => {
                        this.setState({
                            showForm: false
                        })}
                        }>Cancel</button>
                        <button>Finish</button>
                    </div>
                    : null}
            </div>
        )
    }
}