var React = require('react');
//ReactRouter is the actually package being provided to us
var ReactRouter = require('react-router');
// To get router, you are calling into the ReactRouter package
var Router = ReactRouter.Router;
// Route is for a specific page
var Route = ReactRouter.Route;

var Base = require('./components/Base.jsx');
var Page1 = require('./components/Page1.jsx');
var Page2 = require('./components/Page2.jsx');

//JSX
var Routes = (
  <Router>
    <Route path="/" component={Base} >
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
    </Route>
  </Router>
);

module.exports = Routes;
