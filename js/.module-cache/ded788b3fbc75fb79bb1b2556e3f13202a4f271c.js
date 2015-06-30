var app				= angular.module( 'app', ['react'] );

var MainController	= function () {
  this.person = { nombre: 'Clark', nombre: 'Kent' };
}

app.controller( 'mainCtrl', MainController );

var usuario			= React.createClass( {displayName: "usuario",
  propTypes: {
    nombre: React.PropTypes.string.isRequired,
    apellido: React.PropTypes.string.isRequired
  },

  render: function() {
    return React.DOM.span( null,
      'Hola ' + this.props.nombre + ' ' + this.props.nombre
    );
  }
} );

app.directive( 'usuario', function( reactDirective ) {
  return reactDirective( usuario );
} );