if (Meteor.isClient) {
  
  Template.home.rendered = function() {
    $('#fullpage').fullpage({
      verticalCentered: false,
      autoScrolling: false,
			anchors: ['home', 'about', 'team', 'gallery', 'sponsors'],
			sectionsColor: ['#E62B2B', '#E8BF19', '#169340', '#005CB8', '#2EB8E6'],
			scrollBar: true
		});
  }
}
