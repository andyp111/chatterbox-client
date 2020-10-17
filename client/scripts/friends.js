var Friends = {
  $FriendsList: $('FriendsList'),
  friends: [],


  // make all usernames clickable
  // when clicked, add username to f's list and fs select
  // when selected, bold/highlight messagges
  initialize: function() {
    $(document).on('click', 'div.username', function() {

      var friendName = $(this).text();
      if (Friends.friends.indexOf(friendName) === -1) {
        Friends.friends.push(friendName);
        // grab the list of chats elemets
        // loop through them
        // if match username
        // add css styling
        let chats = MessagesView.$chats.children();
        console.log(chats[0]);
        for (let chat of chats) {
          if (chat.firstChild.textContent === friendName) {
            chat.setAttribute('style', 'background-color: gray;');
          }
        }
      }
    });
  }
};