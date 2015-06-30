"use strict";
/**
* ReactJS/AngularJS Realtime Web Components Demo
* Copyright 2015, by Cesar Anton Dorantes @reicek for http://platzi.com/blog
**/

//*		Initialize the AngularJS app inside an object
var app				= angular.module( 'app', ['react'] );
//*/
//*	
var UserController	= function () {
  this.person = { 
	nombre		: 'Clark',
	apellido	: 'Kent' };
}
//*/
//*	
var Usuario			= React.createClass( {displayName: "Usuario",
  propTypes: {
    nombre		: React.PropTypes.string.isRequired,
    apellido	: React.PropTypes.string.isRequired
  },

  render: function() {
    return React.DOM.span( null,
      'Hola ' + this.props.nombre + ' ' + this.props.apellido
    );
  }
} );
//*/
//*	
app.controller( 'user_Ctrl', UserController );
//*/
//*	
app.directive( 'usuario', function( reactDirective ) {
  return reactDirective( Usuario );
} );
//*/