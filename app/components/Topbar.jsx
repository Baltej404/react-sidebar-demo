var React = require('react');
var {Link, IndexLink} = require('react-router');


var Topbar = React.createClass({
  render: function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li >React Web Application</li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form>
            <ul className="menu">
              <li>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
              </li>
              <li>
                <Link to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>FAQ</Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});
module.exports = Topbar;
