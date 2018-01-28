var Map = require("immutable").Map;

var reducer = function(state = Map(), action) {
  switch (action.type) {
    case "SET_STATE":
        return state.merge(action.state);
    case "ADD_MESSAGE":
        return state.update("messages", (messages) => messages.push(action.message));
    case "DELETE_MESSAGE":
        return state.update("messages",
            (messages) => messages.filterNot(
                (item) => item.get('text') === action.message
            )
        );
  }
  return state;
}
module.exports = reducer;
