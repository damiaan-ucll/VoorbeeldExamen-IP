Template.overview.onCreated(function() {
	this.form = {}
})

Template.overview.onRendered(function() {
	var template = this
	this.form.nameField = this.find('form.country .name')
	this.form.name = function() {
		return template.form.nameField.value;
	}
})

Template.overview.helpers({
	countries: function() {
		return Countries.find();
	}
})

Template.overview.events({
	'submit form.country': function(event, template) {
		event.preventDefault()
		Countries.insert({
			name: template.form.name()
		})
		template.form.nameField.value = "";
	}
})