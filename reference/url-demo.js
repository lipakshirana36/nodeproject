const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

myUrl.searchParams.append('abc', '123');

myUrl.searchParams.forEach((value, name) =>
    console.log(`${name}:${value}`)
);