var app = angular.module( 'app', ['react'] );

function MainController() {
  this.person = { fname: 'Clark', lname: 'Kent' };
}

app.controller( 'mainCtrl', MainController );

var Hello = React.createClass( {displayName: "Hello",
  propTypes: {
    fname: React.PropTypes.string.isRequired,
    lname: React.PropTypes.string.isRequired
  },

  render: function() {
    return React.DOM.span( null,
      'Hola ' + this.props.fname + ' ' + this.props.lname
    );
  }
} );

app.value( 'Hello', Hello );

app.directive( 'hello', function( reactDirective ) {
  return reactDirective( Hello );
} );