Template.specialities.onCreated(function() {
	this.form = {}
})

Template.specialities.onRendered(function() {
	var template = this
	this.form.nameField = this.find('.name')
	this.form.name = function() {
		return template.form.nameField.value;
	}
	console.log(this.form)
})


Template.specialities.helpers({
	specialities: function() {
		return Specialities.find({country: this._id})
	}
})

Template.specialities.events({
	'submit form': function(event, template) {
		event.preventDefault();
		Specialities.insert({
			country: this._id,
			name: template.form.name()
		})
	}
})