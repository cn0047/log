This is simple REAL-TIME log.
-
[![Build Status](https://travis-ci.org/cn007b/log.svg?branch=master)](https://travis-ci.org/cn007b/log)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/cn007b/log/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/cn007b/log/?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/cn007b/log/badge.svg?branch=master)](https://coveralls.io/github/cn007b/log?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1b5adb99d453499e88aa9e4b7314e979)](https://www.codacy.com/app/cn007b/log?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=cn007b/log&amp;utm_campaign=Badge_Grade)
[![Maintainability](https://api.codeclimate.com/v1/badges/e1b69241abdf0aa0b4cf/maintainability)](https://codeclimate.com/github/cn007b/log/maintainability)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

![Demo: how to use REAL-TIME log](/public/i/demo.gif)

Just open main [page](https://realtimelog.herokuapp.com)
obtain your unique `streamId` (you will be redirected)
or open certain stream (specify `streamId` in url like: `https://realtimelog.herokuapp.com/test`)
and start listen you real time logs!!!

Under the hood, this log works with `WebSockets` so you will see logs immediately in your browser!

With the purpose to post something in your log stream use any code from examples below.

JavaScript:

````javascript
fetch('https://realtimelog.herokuapp.com/test', {
  method: 'post', headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({code: 200, status: 'OK'})
});
````

NodeJS:

````javascript
const r = require('https').request({
  host: 'realtimelog.herokuapp.com',
  path: '/test',
  method: 'POST',
  headers: {'Content-Type': 'application/json'}
});
r.write(JSON.stringify({code: 200, status: 'OK'}));
r.end();
````

GO:

````go
import (
  "bytes"
  "encoding/json"
  "net/http"
)
j, _ := json.Marshal(map[string]string{"code": "200", "status": "ok"})
http.Post("https://realtimelog.herokuapp.com/test", "application/json", bytes.NewBuffer(j))
````

PHP:

````php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://realtimelog.herokuapp.com/test');
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(['code' => 200, 'status' => 'OK']));
curl_exec($ch);
// OR
exec("curl -s https://realtimelog.herokuapp.com/test -H 'Content-Type: application/json' -d '".json_encode(['code' => 200])."'");
````

Bash:

````bash
curl -XPOST 'https://realtimelog.herokuapp.com/test' \
-H 'Content-Type: application/json' -d '{"code": 200, "status": "OK"}'
````

### Sponsors

[![JetBrains](/public/i/jetbrains.svg)](https://www.jetbrains.com/)
