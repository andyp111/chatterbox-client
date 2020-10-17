var MessagesView = {

  $chats: $('#chats'),



  initialize: function(data) { //clean up data in gLearn format, and put the obj in messages
    Messages = {}; //start fresh
    let msgData = data.results;
    for (let msg of msgData) {
      // somehow use MessageView to package msg and queue them up for append
      let obj = {};
      obj.username = msg.username;
      obj.text = msg.text;
      obj.roomname = msg.roomname;
      Messages[msg.objectId] = obj;
    }
  },

  render: function() { //assign to $chats then display on screen
    MessagesView.$chats.empty();
    for (let msg in Messages) {
      let msgHtml = MessageView.render(Messages[msg]);
      MessagesView.$chats.append(msgHtml);
    }
  }

};