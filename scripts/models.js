// Models

// Creates the model for a team
var Team = Backbone.Model.extend({
    // sets default model attributes
    defaults:{
        name: null,
        nickname: null,
        founded: null,
    },
})

// Creates the new teams with information
var team1 = new Team({name: "Leicester City", nickname: "The Foxes", founded: "1884"});
var team2 = new Team({name: "Arsenal", nickname: "The Gunners", founded: "1886"});
var team3 = new Team({name: "Mancher United", nickname: "The Red Devils", founded: "1878"});
var team4 = new Team({name: "Everton", nickname: "The Toffees", founded: "1878"});
var team5 = new Team({name: "Tottenham Hotspur", nickname: "Spurs", founded: "1882"});
