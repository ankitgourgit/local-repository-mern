//url module
import {URL} from 'url';
//parsing the URL string using  the whatwg api

const myURL =new URL('http://www.example.com:8080/p/a/t/h?query=string#hash');

console.log(myURL.hash);
console.log(myURL.host);
console.log(myURL.hostname);
console.log(myURL.href);
console.log(myURL.hash);
console.log(myURL.port);
console.log(myURL.portocol);
console.log(myURL.search);
console.log(myURL.searchParams);
console.log(myURL.toString());
console.log(myURL.toJSON());











