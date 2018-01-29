var Map = require("immutable").Map;
var id;

var reducer = function(state = Map(), action) {
  switch (action.type) {
    case "SET_STATE":
        id = action.state.messages[action.state.messages.length-1].id+1;
        return state.merge(action.state);
    case "ADD_MESSAGE":
        return state.update("messages", (messages) => messages.push(new Map({
            title: action.message.title,
            text: action.message.text,
            id: id++,
          })));

    case "DELETE_MESSAGE":
        return state.update("messages",
            (messages) => messages.filterNot(
                (item) => item.get('id') === action.id
            )
        );
  }
  return state;
}
module.exports = reducer;
