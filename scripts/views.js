// Views

// View for the Team Model
var TeamView = Backbone.View.extend({
    // DOM tag
    tagName: 'li',

    // template -- On DOM, using jQuery refenence
    template: _.template($('#teamTemplate').html()),
    intitialize: function(){
        this.render();
    },

    // Passes model data to the template and then to the DOM tag listed in tagName
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    events: {
        'click': 'viewHistory'
    },

    // function to populate the view history div
    viewHistory: function(event){
        // Clears the element
        $('#team_history').empty();

        // creates variables for the element
        var teamName = event.currentTarget.id;
        var team = myTeamList.where({name: teamName})[0];

        var teamHistory = new TeamHistory(team);

        $('#team_history').append(teamHistory.render());
        return this;
    }
});

// View for the history Model
var TeamHistory = Backbone.View.extend({
    // DOM tag
    tagName: 'li',

    // template -- On DOM, using jQuery refenence
    template: _.template($('#historyTemplate').html()),
    intitialize: function(){
        this.render();
    },

    // Passes model data to the template and then to the DOM tag listed in tagName
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

// View for the Collection Model
var TeamListView = Backbone.View.extend({
    // assigns the 'scoped' DOM element
    el: '#team_names',
    initialize: function(){
        this.render()
    },
    render: function(){
        // failsafe to empty out the 'el' list above
        this.$el.empty();

        // Takes a collection as an argument and iterates through each member, setting each Model into a View for the Model
        this.collection.each(function(team){
            var teamView = new TeamView({model: team})
            
            // accesses the $el from the TeamView object and renders it within the TeamListView el listed above
            this.$el.append(teamView.render().$el);

            // final this to provide context for the .each() method above
        }, this);
    }
});

var myTeamList = new TeamListView({collection: teamList});
