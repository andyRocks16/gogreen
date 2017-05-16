import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import firebaseAuth from '../firebase/config';
import Checkbox from 'material-ui/Checkbox';
import { grey500, white } from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router';
import { userUrl } from '../app.config';
import ThemeDefault from '../theme-default';

class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      reload: false
    }
  }

  componentDidMount() {
    this.props.fetchTraders(userUrl);
  }

  loginClicked() {
    var id = this.refs.idInput.input.value;
    var pwd = this.refs.pwdInput.input.value;
    this.props.login({id, pwd});
    this.props.change("LOAD");
  }
  componentWillMount() {
    this.props.getUser(null);
    console.log(this.props)
    this.props.change("NOT_LOAD");
    this.Listener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
    this.Listener();
  }

  changeLayout(event, shouldChange) {
    console.log("into layout", $(this.refs.div))
    $(this.refs.div).toggleClass('active');
    $(this.refs.div).children('i').toggleClass('zmdi-account-add');
    $(this.refs.div).children('i').toggleClass('zmdi-close');
  }

  register() {
    var email = this.refs.emailRegInput.input.value;
    var password = this.refs.pwdRegInput.input.value;
    //var pwd = this.refs.pwdRegInputAgain.input.value;  
    var name = this.refs.name.input.value;
    var pno = this.refs.no.input.value;
    //if(password == pwd){
    this.props.registerUser(email, password, name, pno);
    this.props.info({
      title: 'Registered',
      message: "Succesfully registered with Email : " + email,
      position: 'tc',
      autoDismiss: 5,
    })
    //}
  }

  render() {

    return (
      <div className="card">
        <div className="field">
          <span className="header">Login</span>
          <div className="form-group">
            <TextField
              hintText="Email"
              ref="idInput"
              type="email"
              floatingLabelText="Email ID"
              floatingLabelFixed={false}
              required
            />
          </div>
          <div className="form-group">
            <TextField
              hintText="Password"
              ref="pwdInput"
              type="password"
              floatingLabelText="Password"
              floatingLabelFixed={false}
            />
          </div>

          <Link to={`/dashboard`}>
            <div className="button-container">
              <button type="button" className="button" onClick={this.loginClicked.bind(this)}><span>Submit</span></button>
            </div>
          </Link>
        </div>
        <div className="fab" ref="div">
          <i className="zmdi zmdi-account-add" onClick={this.changeLayout.bind(this, this.state.reload)}></i>
          <div className="field">
            <span className="header-active">Register</span>
            <div className="form-group">
              <TextField
                hintText="Email"
                ref="emailRegInput"
                type="email"
                floatingLabelText="Email ID"
                floatingLabelFixed={false}
              />
            </div>
            <div className="form-group">
              <TextField
                hintText="Password"
                ref="pwdRegInput"
                type="password"
                floatingLabelText="Password"
                floatingLabelFixed={false}
              />
            </div>
            <div className="form-group">
              <TextField
                hintText="Password"
                ref="pwdRegInputAgain"
                type="password"
                floatingLabelText="Password Again"
                floatingLabelFixed={false}
              />
            </div>
            <div className="form-group">
              <TextField
                hintText="Name"
                ref="name"
                type="name"
                floatingLabelText="Name"
                floatingLabelFixed={false}
              />
            </div>
            <div className="form-group">
              <TextField
                hintText="Phone No"
                ref="no"
                type="number"
                floatingLabelText="Phone No"
                floatingLabelFixed={false}
              />
            </div>
            <div className="button-container">
              <button type="button" className="button" onClick={this.register.bind(this)}><span>Submit</span></button>
            </div>

          </div>
        </div>
      </div>

    );
  }

}


export default LoginPage;
