var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({
  render: function () {
    return(
      <div>
        <ul className="menu vertical main-menu">
          <li>
            <IndexLink to="/" activeClassName="active" className="menu-text" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink>
          </li>
          <li>
            <a href="https://facebook.github.io" className="menu-text" activeClassName="active-link">Page One</a>
          </li>
          <li>
            <a href="https://facebook.github.io/react" className="menu-text" activeClassName="active-link">Page Two</a>
          </li>
          <li>
            <a href="#" className="menu-text" activeClassName="active-link">Page Three</a>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Navigation;
