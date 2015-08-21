import Flux from 'flux'
let userDispatcher = new Flux.Dispatcher();

let user = {
  username: null
}


userDispatcher.saveUser = function (userInfo) {
  user.username = userInfo.username;
  user.logs = userInfo.logs;
}


module.exports = userDispatcher;