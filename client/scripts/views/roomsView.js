var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    //Rooms is our filtered data

    RoomsView.$select.empty();
    for (var rm in Rooms) {
      RoomsView.$select.append($('<option/>', {
        text: rm,
        value: rm
      }));
    }
    RoomsView.$select.on('change', function(event) {
      let currentRm = $(this).children('option:selected').val();
      // console.log('What is currentRm', currentRm);
      App.roomname = currentRm;
      RoomsView.render(currentRm);
    });
    RoomsView.$button.on('click', function(event) {
      // if ($roomInput) add & remove
      var $roomInput = $('<input type="text" id="newRoomname"></input>');
      if ($('input#newRoomname').length) { // grab input
        var newRoomName = $('input#newRoomname').val();
        console.log(newRoomName);
        //add to option list
        RoomsView.$select.append($('<option/>', {
          text: newRoomName,
          value: newRoomName
        }));
        App.roomname = newRoomName;
        $('input#newRoomname').remove();
      } else { // add input box
        $roomInput.insertBefore('#rooms button');
      }
    });
    //when click addRoom
    //form pops up to input roomname

  },

  render: function(currentRm) {
    // know what room we're going to
    // render messages in that room
    if (currentRm === 'allMessages') {
      MessagesView.render();
      return;
    }
    MessagesView.$chats.empty();
    for (let msgInRm of Rooms[currentRm]) {
      let msgHtml = MessageView.render(msgInRm);
      MessagesView.$chats.append(msgHtml);
    }
  }

};
