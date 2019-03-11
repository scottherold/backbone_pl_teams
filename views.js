// Views

// View for the Team Model
var TeamView = Backbone.View.extend({
    // DOM tag
    tagName: 'li',
    className: 'team',

    // template -- On DOM, using jQuery refenence
    template: _.template($('#teamTemplate').html()),

    // Passes model data to the template and then to the DOM tag listed in tagName
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    
    // Event loaded on team 'click'
    events: {
        'click': 'showTeamInfo'
    },

    // showTeamInfo function for click event
    showTeamInfo: function(){

        // Creates a new TeamHistoryView and renders it
        var teamHistory = new TeamHistoryView({model: this.model});
        teamHistory.render();
    }
});

// View for the Collection Model
var TeamListView = Backbone.View.extend({
    
    // assigns the 'scoped' DOM element
    el: '#team_names',
    initialize: function(){
        // Adds a listener for 'add'
        this.listenTo(this.collection, 'add', this.render);
    },

    render: function(){
        // failsafe to empty out the 'el' list above
        this.$el.empty()

        // Create the collection using the 'team' class set in TeamView
        this.collection.each(function(team){
            var teamView = new TeamView({model: team});
            this.$el.append(teamView.render().$el);
        }, this);

        return this;
    }
});

// View for the Team History Model
var TeamHistoryView = Backbone.View.extend({

    // assigns the 'scoped' DOM element
    el: '#output',

    // template -- On DOM, using jQuery refenence
    template: _.template($('#historyTemplate').html()),
    intitialize: function(){

        // Listens to the View being added -- this is done within the TeamView with the 'showTeamInfo' function
        this.listenTo(this.model, 'add', this.render);
    },

    // Passes model data to the template and then to the DOM tag listed in tagName
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
    },
});

// Creates the teamList variable with the list of teams in the models.js file
var teams = new TeamList()
var teamList = new TeamListView({collection: teams});
teams.add([team1, team2, team3, team4, team5]);
