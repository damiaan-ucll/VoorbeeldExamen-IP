Template.country.onCreated(function() {
	this.showSpecialities = new ReactiveVar(false);
})

Template.country.events({
	'click button.delete': function () {
		Countries.remove(this._id)
	},
	'dblclick .name': function() {
		var newName = prompt('Type the new name for ' + this.name, this.name);
		console.log({$set: {name: newName}});
		Countries.update(this._id, {$set: {name: newName}});
	},

	'click .showSpecialities': function(event, template) {
		template.showSpecialities.set(!template.showSpecialities.get())
	}
})

Template.country.helpers({
	showSpecialities: function() {
		return Template.instance().showSpecialities.get();
	},
	showOrHide: function() {
		return Template.instance().showSpecialities.get() ? "Hide" : "Show";
	}
})