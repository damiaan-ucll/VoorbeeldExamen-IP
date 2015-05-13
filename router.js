Router.configure({
	layoutTemplate: "appLayout"
})

Router.route('/', function() {
	this.render('overview')
})

Router.route('/specialities', function() {
	this.render('specialityOverview')
})