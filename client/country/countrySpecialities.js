Template.countySpecialities.onCreated(function() {
	this.form = {}
})

Template.countySpecialities.onRendered(function() {
	var template = this
	this.form.countryField = this.find('.country')
	this.form.countryId = function() {
		return template.form.countryField.value;
	}
	console.log(this.form)
})


Template.countySpecialities.helpers({
	specialities: function() {
		return Specialities.find({_id: {$in: this.specialities}})
	},
	unusedSpeciality: function() {
		return Specialities.find({_id: {$nin: this.specialities}})
	}
})

Template.countySpecialities.events({
	'submit form': function(event, template) {
		event.preventDefault();
		Countries.update(this._id, {$push: {specialities: template.form.countryId()}})
	}
})

Template.countrySpeciality.events({
	'click .remove': function() {
		Countries.update(Template.parentData()._id, {$pull: {specialities: this._id}})
	}
})