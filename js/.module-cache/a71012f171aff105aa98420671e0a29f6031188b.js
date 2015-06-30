"use strict";
/**
* ReactJS/AngularJS Realtime Web Components Demo
* Copyright 2015, by Cesar Anton Dorantes @reicek for http://platzi.com/blog
**/
/*
*	Nota: Elimina la primer / en //* para deshabilitar ese elemento.
*/

//*		Initialize the AngularJS app inside an object
var app				= angular.module( 'app', ['react'] );
//*/

//*	
var User_ctrl	= function () {
  this.usuario = { 
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
		return React.createElement("div", null, "Hola ", this.props.nombre, " ", this.props.apellido);
  }
} );
//*/

//*	
app.controller( 'user_ctrl', User_ctrl );
//*/

//*	
app.directive( 'usuario', function( reactDirective ) {
  return reactDirective( Usuario );
} );
//*/