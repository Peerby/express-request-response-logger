# express-request-response-logger
Logs an incoming request. Upon response it logs response status and duration.

### Why?

Who wouldn't want to know this information? :)

### Installation

```
npm isntall express-request-response-logger
```

### Usage

#### Code

Put this line before your app's routes:

```
app.use(require('express-request-response-logger')());
```

#### Logger

By default, `console.log` is used. You can pass in your own logging function:

```
app.use(require('express-request-response-logger')(logThisBaby));
```

#### Output

Upon request, the following is logged:

- unique id (so you can match it with the response)
- HTTP Method
- requested url
- user agent
- ip address, using `req.headers['x-forwarded-for'] || req.connection.remoteAddress`

For example:
```
DCA13F GET / http://localhost:1337/ Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36 127.0.0.1
```

Upon response, the following is logged:

- unique id (so you can match it with the request)
- time spent on server (response time)
- HTTP Response status

For example:
```
DCA13F 148ms (304)
```
