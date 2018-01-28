var addMessage = function (message) {
  return {
    type: "ADD_MESSAGE",
    message
  }
};
var deleteMessage = function (message) {
  return {
    type: "DELETE_MESSAGE",
    message
  }
};

module.exports = {addMessage, deleteMessage};
