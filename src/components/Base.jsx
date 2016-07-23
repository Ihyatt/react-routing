//This is the main file and code that will show up on every page ie base.html
// React knows to insert other views/pages into this by having .children
//When you switch between routes it will switch the pages automatically for you behind the scenes
var React = require('react');

var Base = React.createClass({
    render: function() {
      return (
        <div>
          <h1>Header 1</h1>
          {this.props.children}
        </div>
      );
    }
});

module.exports = Base;
