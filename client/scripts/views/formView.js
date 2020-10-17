var FormView = {

  $form: $('form'),


  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) { // this is what we want to do when we click submit
    // Stop the browser from submitting the form
    FormView.setStatus();
    event.preventDefault();
    //grab username from a data
    //add username to message default
    //grab text and add to message default
    //send to server
    //call fetch to re-render the page with new messages
    var $text = $('#message');

    let newMessage = {
      username: App.username,
      text: $text.val(),
      roomname: 'lobbyString'
    };
    console.log(newMessage);
    Parse.create(newMessage, () => {
      App.startSpinner();
      App.fetch(App.stopSpinner);
    });

    $text.val('');
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};