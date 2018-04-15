import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import '../styles/login.css';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: false
        }
    }

    login(event) {
        let user = {
            email: this.refs.email.getValue(),
            password: this.refs.password.getValue()
        }
        if (this.ValidateEmail(user)) {
            this.setState({
                email: user.email,
                password: user.password
            });
        }
        else {
            this.setState({
                error: true
            })
        }
    }


    ValidateEmail(user) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) return true
        return false;
    }
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Login"
                            className="appbar"
                            showMenuIconButton={false}
                        />
                        <div className="login">
                            <h3>
                                Enter Your Email and Password
                        </h3>

                        <p className="error">{this.state.error? "Invalid Email! Please Enter Valid Email" : ""}</p>
                            <TextField
                                hintText="e.g@example.com"
                                floatingLabelText="Email"
                                floatingLabelFixed={false}
                                ref="email"
                                value={this.state.email}
                                onChange={(e) => { this.setState({ email: e.target.value }) }}
                                underlineStyle={{ display: 'none' }}
                            />
                            <br />
                            <TextField
                                hintText="*************"
                                floatingLabelText="Password"
                                ref="password"
                                value={this.state.password}
                                onChange={(e) => { this.setState({ password: e.target.value }) }}

                                floatingLabelFixed={false}
                                underlineStyle={{ display: 'none' }}
                            />
                            <br />
                            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.login(event)} />
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
const style = {
    margin: 50,
    backgroundColor: '#ff2a00 !important'
};

export default Login;