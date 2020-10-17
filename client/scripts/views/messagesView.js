var MessagesView = {

  $chats: $('#chats'),



  initialize: function(data) { //clean up data in gLearn format, and put the obj in messages
    Messages = {}; //start fresh
    Rooms = {allMessages: []};
    let msgData = data.results;
    for (let msg of msgData) {
      // somehow use MessageView to package msg and queue them up for append
      let obj = {};
      obj.username = msg.username || 'undefined';
      obj.text = msg.text;
      obj.roomname = msg.roomname;
      Messages[msg.objectId] = obj;
      Rooms.allMessages.push(obj);
      // group messages
      if (Rooms[msg.roomname]) {
        Rooms[msg.roomname].push(obj);
      } else {
        Rooms[msg.roomname] = [obj];
      }
    }
  },

  render: function() { //assign to $chats then display on screen
    MessagesView.$chats.empty();
    for (let msgId in Messages) {
      let msgHtml = MessageView.render(Messages[msgId]);
      MessagesView.$chats.append(msgHtml);
    }
  }

};