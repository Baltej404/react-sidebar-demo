var React = require('react');
var Topbar = require('Topbar');

//objectives of this file
//set the default layout for application
//add the navigation file to the div


var Home = React.createClass({
  render: function(){
    return(
      <div>
        <div><img className="expanded" src={'http://zellox.com/wp-content/uploads/2016/02/background-image-for-website.jpg'} alt="boohoo" className="img-responsive"/>
        </div>
        <Topbar/>
      </div>
    );
  }
});

module.exports = Home;
