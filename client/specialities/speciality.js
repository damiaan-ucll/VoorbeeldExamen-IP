Template.speciality.events({
	'click button.delete': function () {
		Specialities.remove(this._id)
	},
	'dblclick .name': function() {
		var newName = prompt('Type the new name for ' + this.name, this.name);
		console.log({$set: {name: newName}});
		Specialities.update(this._id, {$set: {name: newName}});
	},

	'click .showSpecialities': function(event, template) {
		template.showSpecialities.set(!template.showSpecialities.get())
	}
})