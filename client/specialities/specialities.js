Template.specialityOverview.onCreated(function() {
	this.form = {}
})

Template.specialityOverview.onRendered(function() {
	var template = this
	this.form.nameField = this.find('.name')
	this.form.name = function() {
		return template.form.nameField.value;
	}
	console.log(this.form)
})


Template.specialityOverview.helpers({
	specialities: function() {
		return Specialities.find()
	}
})

Template.specialityOverview.events({
	'submit form': function(event, template) {
		event.preventDefault();
		console.log(template.form.name(), template.form.nameField)
		Specialities.insert({
			name: template.form.name()
		})
	}
})