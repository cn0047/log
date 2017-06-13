This is simple REAL-TIME log.
-

[![Build Status](https://scrutinizer-ci.com/g/cn007b/log/badges/build.png?b=master)](https://scrutinizer-ci.com/g/cn007b/log/build-status/master)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/cn007b/log/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/cn007b/log/?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1b5adb99d453499e88aa9e4b7314e979)](https://www.codacy.com/app/cn007b/log?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=cn007b/log&amp;utm_campaign=Badge_Grade)
[![SensioLabsInsight](https://insight.sensiolabs.com/projects/d947a4c8-b9a3-4ab2-a81f-376dc1334bbc/mini.png)](https://insight.sensiolabs.com/projects/d947a4c8-b9a3-4ab2-a81f-376dc1334bbc)

Just open main [page](https://realtimelog.herokuapp.com)
obtain your unique `streamId` (you will be redirected)
or open certain stream (specify `streamId` in url like: `https://realtimelog.herokuapp.com/test`)
and start listen you real time logs!!!

Under the hood, this log works with web sockets so you will see logs immediately in your browser!

With the purpose to post something in your log stream use any code from examples below.

Bash:

````bash
curl -XPOST https://realtimelog.herokuapp.com/test \
-H 'Content-Type: application/json' -d '{"code":"200", "status": "OK"}'
````

JavaScript:

````javascript
fetch('https://realtimelog.herokuapp.com/test', {
    method: 'post', headers: {"Content-Type": "application/json"},
    body: JSON.stringify({code: 200, status: "OK"})
});
````

PHP:

````php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://realtimelog.herokuapp.com/test');
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(['code' => 200]));
curl_exec($ch);
// OR
exec("curl -s https://realtimelog.herokuapp.com/test -H 'Content-Type: application/json' -d '".json_encode(['code' => 200])."'");
````
