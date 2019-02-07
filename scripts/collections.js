// Collections

// Creates the collection for hte list of teams
var TeamList = Backbone.Collection.extend({
    model: Team
});

// Creates the teamList variable with the list of teams in the models.js file
var teamList = new TeamList([team1, team2, team3, team4, team5]);