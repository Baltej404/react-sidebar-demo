var React = require('react');

var FrontImage = React.createClass({
    render: function() {
        return <div><img src={'http://placehold.it/400x20&text=slide1'} alt="boohoo" className="img-responsive"/><span>Hello {this.props.name}</span></div>;
    }
});
module.exports = FrontImage;
