This is simple REAL-TIME log.
-

Just open main [page](https://realtimelog.herokuapp.com)
obtain your unique `streamId` (you will be redirected)
or open certain stream (specify `streamId` in url like: `https://realtimelog.herokuapp.com/test`)
and start listen you real time logs!!!

With purpose to post something in your log stream just run:
````
curl -XPOST https://realtimelog.herokuapp.com/test \
-H 'Content-Type: application/json' \
-d '{"code":"200", "status": "OK"}'
````

Under the hood, this log works with web sockets so you will see logs immediately in your browser!
