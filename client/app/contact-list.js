define(['knockout', 'text!contact-list.html'], function(ko, templateString) {

	function ListViewmodel(params) {
		this.contacts = params.contacts;
		this.edit = params.edit;
		this.delete = function(contact) {
			console.log('Mock Deleting Contact', ko.toJS(contact));
		};
		this.dispose = function() {
			console.log('List Component Disposing');
		};
	}

	return { template: templateString, viewModel: ListViewmodel };
});