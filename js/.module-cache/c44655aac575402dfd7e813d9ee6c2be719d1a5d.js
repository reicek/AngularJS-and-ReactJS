var app = angular.module( 'app', ['react'] );

app.controller( 'mainCtrl', function( $scope ) {
  $scope.person = { fname: 'Clark', lname: 'Kent' };
} );

var UserName = React.createClass( {displayName: "UserName",
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

app.value( "UserName", UserName );

app.directive( 'userName', function( reactDirective ) {
  return reactDirective( UserName );
} );