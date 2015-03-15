(function (window) {
	'use strict';
	var NinjaCollapse;

	NinjaCollapse = {
		//Attributes
		publish: {
			collapsed: {
				value: false,
				reflect: true
			}
		},

		//Public methods
		toggle: function () {
			this.collapsed = !this.collapsed;
		}
	};

	//wire up the prototype
	window.Polymer('ninja-collapse', NinjaCollapse);
}(this));