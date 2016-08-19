import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import Navigation from 'Navigation';
import HomeIcon from 'material-ui/svg-icons/action/home';
import PersonIcon from 'material-ui/svg-icons/social/person';
import Divider from 'material-ui/Divider';
import styles from 'material-ui/styles/colors';
import Home from 'Home';
//Install material-ui
//---------------
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
export default class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
            <AppBar
              title="Title"
              iconElementLeft={<IconButton onTouchTap={this.handleToggle}><NavigationClose /></IconButton>}>
              <h1>Hello</h1>
              </AppBar>

      <Drawer
        docked={false}
        width={200}
        open={this.state.open}
        onRequestChange={(open) => this.setState({open})}
        >
        <MenuItem  href="https://facebook.github.io/react" onTouchTap={this.handleClose}leftIcon={<HomeIcon/>}>React</MenuItem>
        <MenuItem  href="https://facebook.github.io/react" onTouchTap={this.handleClose}>Hello World</MenuItem>
        <Divider />
        <MenuItem onTouchTap={this.handleClose} leftIcon={<PersonIcon/>}>Log In</MenuItem>
      </Drawer>
      <Home/>

      <div className="row">
        <div className="large-2 columns">
          <Navigation/>
        </div>
        <div className="large-8 columns">
          <h1 className="text-center">Hello World2</h1>
            <p>To get started, click placeholder text and start typing.
              Use your cover letter to show how your talent and experience will solve a problem or drive results for your future employer. For example, if you say you’re collaborative, give an example of how you used your collaboration skills at your last internship, and then show how that experience will benefit the employer.
              It’s all about personalization. Write a cover letter that uniquely presents the real you and the future impact only you can make at the company.
            </p>
            <p>To get started, click placeholder text and start typing.
              Use your cover letter to show how your talent and experience will solve a problem or drive results for your future employer. For example, if you say you’re collaborative, give an example of how you used your collaboration skills at your last internship, and then show how that experience will benefit the employer.
              It’s all about personalization. Write a cover letter that uniquely presents the real you and the future impact only you can make at the company.
            </p>
            <p>To get started, click placeholder text and start typing.
            Use your cover letter to show how your talent and experience will solve a problem or drive results for your future employer. For example, if you say you’re collaborative, give an example of how you used your collaboration skills at your last internship, and then show how that experience will benefit the employer.
            It’s all about personalization. Write a cover letter that uniquely presents the real you and the future impact only you can make at the company.
          </p>
          <p>To get started, click placeholder text and start typing.
            Use your cover letter to show how your talent and experience will solve a problem or drive results for your future employer. For example, if you say you’re collaborative, give an example of how you used your collaboration skills at your last internship, and then show how that experience will benefit the employer.
            It’s all about personalization. Write a cover letter that uniquely presents the real you and the future impact only you can make at the company.
          </p>
          <p>To get started, click placeholder text and start typing.
            Use your cover letter to show how your talent and experience will solve a problem or drive results for your future employer. For example, if you say you’re collaborative, give an example of how you used your collaboration skills at your last internship, and then show how that experience will benefit the employer.
            It’s all about personalization. Write a cover letter that uniquely presents the real you and the future impact only you can make at the company.
          </p>
          <p>To get started, click placeholder text and start typing.
            Use your cover letter to show how your talent and experience will solve a problem or drive results for your future employer. For example, if you say you’re collaborative, give an example of how you used your collaboration skills at your last internship, and then show how that experience will benefit the employer.
            It’s all about personalization. Write a cover letter that uniquely presents the real you and the future impact only you can make at the company.
          </p>
          <p>To get started, click placeholder text and start typing.
            Use your cover letter to show how your talent and experience will solve a problem or drive results for your future employer. For example, if you say you’re collaborative, give an example of how you used your collaboration skills at your last internship, and then show how that experience will benefit the employer.
            It’s all about personalization. Write a cover letter that uniquely presents the real you and the future impact only you can make at the company.
          </p>
          <p>To get started, click placeholder text and start typing.
            Use your cover letter to show how your talent and experience will solve a problem or drive results for your future employer. For example, if you say you’re collaborative, give an example of how you used your collaboration skills at your last internship, and then show how that experience will benefit the employer.
            It’s all about personalization. Write a cover letter that uniquely presents the real you and the future impact only you can make at the company.
          </p>
          <p>To get started, click placeholder text and start typing.
            Use your cover letter to show how your talent and experience will solve a problem or drive results for your future employer. For example, if you say you’re collaborative, give an example of how you used your collaboration skills at your last internship, and then show how that experience will benefit the employer.
            It’s all about personalization. Write a cover letter that uniquely presents the real you and the future impact only you can make at the company.
          </p>
        </div>
        <div className="large-2 columns">
          <h1>helloworld3</h1>
        </div>
      </div>
      </div>
    );
  }
}
