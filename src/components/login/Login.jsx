import React, { Component } from 'react';
import styles from '../../App.css';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputs: {
                name: {
                    type: 'text',
                    placeholder: 'Име',
                    value: ''
                },
                password: {
                    type: 'password',
                    placeholder: 'Парола',
                    value: ''
                }
            },
            users: [{
                name: 'asd',
                password: '123456'
            }, {
                name: 'afk',
                password: 'qwerty'
            }, {
                name: 'qwerty',
                password: 'asd'
            }]
        };

        this.renderForm = this.renderForm.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.onChange = this.onChange.bind(this);

    };

    renderForm() {
        const { inputs } = this.state;
        return Object.keys(inputs).map(key => {
            return <input type={inputs[key].type}
                          value={inputs[key].value}
                          placeholder={inputs[key].placeholder}
                          key={key}
                          onChange={e => this.onChange(key, e)}/>
        })
    }

    onChange(key, e) {
        const value = e.target.value;
        const inputs = { ...this.state.inputs };
        const input = { ...inputs[key] };
        input.value = value;

        this.setState((prevState) => ({
            inputs: {
                ...prevState.inputs,
                [key]: input
            }
        }));
    }

    submitForm() {
        let name = this.state.inputs.name.value;
        let password = this.state.inputs.password.value;

        for (let index = 0; index < this.state.users.length; index++) {
            if (this.state.users[index].name === name && this.state.users[index].password === password) {
                this.props.history.push('/cinemas')
            }
        }

        localStorage.setInte('userLogged', true);
    }

    render() {
        return (
            <div className={styles.loginForm}>
                {this.renderForm()}
                <button onClick={this.submitForm}>Влез</button>
            </div>
        );
    }
}

export default withRouter(Login);