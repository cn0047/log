global.port = process.env.PORT || 3000;
global.host = process.env.ENV === "prod" ? "https://realtimelog.herokuapp.com" : "http://localhost";
global.socketIoJs = (process.env.ENV === "prod" ? global.host : "") + "/socket.io/socket.io.js";
