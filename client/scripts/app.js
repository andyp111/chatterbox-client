var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);


    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    FormView.initialize();

    $('#refresh').on('click', function() {
      App.startSpinner();
      App.fetch(App.stopSpinner);
    });
  },
  //event listener
  //when submit button is clicked, want to capture username, text, roomname
  //pass data by calling create in Parse

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // store data in messages
      MessagesView.initialize(data);
      console.log(Messages);
      // call messagesView
      MessagesView.render();
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
