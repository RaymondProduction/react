var addMessage = function (message) {
  return {
    type: "ADD_MESSAGE",
    message
  }
};
var deleteMessage = function (id) {
  return {
    type: "DELETE_MESSAGE",
    id
  }
};

module.exports = {addMessage, deleteMessage};
