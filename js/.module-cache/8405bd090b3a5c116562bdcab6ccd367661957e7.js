var app				= angular.module( 'app', ['react'] );

var MainController	= function () {
  this.person = { fname: 'Clark', lname: 'Kent' };
}

app.controller( 'mainCtrl', MainController );

var usuario			= React.createClass( {displayName: "usuario",
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

app.directive( 'usuario', function( reactDirective ) {
  return reactDirective( usuario );
} );