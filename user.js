


const axios = require('axios');



// create token

// const params = new URLSearchParams();
// params.append('username', 'guacadmin');
// params.append('password', 'EMI-linux09');

// // const qs = require('qs');
// const data = { username: 'guacadmin', password: 'EMI-linux09' };
// const headers = {
//     headers: { 'content-type': 'application/x-www-form-urlencoded' },
// };
// axios.post('https://dcv.electromech.info/api/tokens', params,headers ).then(function (response){

//     console.log(response);
// })





// create user


// var token = 'F372B8E57A297A8F073982773BD1DDFF07B2E200B299DEA7C264B1691DBE1E7F';

// const data = {
//     "username": "user23",
//     "password": "EMI-linux09",
//     "attributes": {
//         "disabled": "",
//         "expired": "",
//         "access-window-start": "",
//         "access-window-end": "",
//         "valid-from": "",
//         "valid-until": "",
//         "timezone": null,
//         "guac-full-name": "",
//         "guac-organization": "",
//         "guac-organizational-role": ""
//     }
// };
// const headers = {
//     headers: { 'content-type': 'application/json' },
// };
// axios.post('https://dcv.electromech.info/api/session/data/mysql/users?token=' + token, data, headers).then(function (response) {
//     console.log(response.data);
// })


// create ssh connection 

var token = 'C2BFB043BD20BA37E85E22D88CFF69CD96976B26AB9EA5977237FF0C2C4EE7EA';

const data = {
    "parentIdentifier": "ROOT",
    "name": "user5",
    "protocol": "ssh",
    "parameters": {
      "port": "22",
      "read-only": "",
      "swap-red-blue": "",
      "cursor": "",
      "color-depth": "",
      "clipboard-encoding": "",
      "disable-copy": "",
      "disable-paste": "",
      "dest-port": "",
      "recording-exclude-output": "",
      "recording-exclude-mouse": "",
      "recording-include-keys": "",
      "create-recording-path": "",
      "enable-sftp": "",
      "sftp-port": "",
      "sftp-server-alive-interval": "",
      "enable-audio": "",
      "color-scheme": "",
      "font-size": "",
      "scrollback": "",
      "timezone": null,
      "server-alive-interval": "",
      "backspace": "",
      "terminal-type": "",
      "create-typescript-path": "",
      "hostname": "10.192.173.145",
      "host-key": "",
      "private-key": "",
      "username": "user5",
      "password": "student",
      "passphrase": "",
      "font-name": "",
      "command": "",
      "locale": "",
      "typescript-path": "",
      "typescript-name": "",
      "recording-path": "",
      "recording-name": "",
      "sftp-root-directory": ""
    },
    "attributes": {
      "max-connections": "",
      "max-connections-per-user": "",
      "weight": "",
      "failover-only": "",
      "guacd-port": "",
      "guacd-encryption": "",
      "guacd-hostname": ""
    }
  };

axios.post('https://dcv.electromech.info/api/session/data/mysql/connections?token=' + token, data).then(function (response) {
    console.log(response.data);
})