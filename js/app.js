"use strict";
/**
* ReactJS/AngularJS Realtime Web Components Demo
* Copyright 2015, by Cesar Anton Dorantes @reicek for http://platzi.com/blog
**/
/*
*	Note: Remove / in //* to disable that element
*/

//*		Initialize the AngularJS app inside an object
var app				= angular.module( 'app', ['react'] );
//*/

//*		Create ReactJS visualization in JSX
var Usuario			= React.createClass( {displayName: "Usuario",
	propTypes: {
		nombre		: React.PropTypes.string.isRequired,
		apellido	: React.PropTypes.string.isRequired
	},

	render: function() {
		return React.createElement("span", null, "Hola ", this.props.nombre, " ", this.props.apellido);
	}
} );
//*/

//*		Assign default values in the Angular Controller
var User_ctrl	= function () {
	this.usuario = { 
		nombre		: 'Clark',
		apellido	: 'Kent' 
	}
}
//*/

//*		Define AngularJS controller
app.controller( 'user_ctrl', User_ctrl );
//*/

//*		Define AngularJS directive
app.directive( 'usuario', function( reactDirective ) {
  return reactDirective( Usuario );
} );
//*/