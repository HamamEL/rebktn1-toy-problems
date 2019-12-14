/*
URL Query String
Given a properly formatted URL, return the query string data 
//as an array of key-value pairs, in the order that they appear.

HINT: You may use decodeURIComponent()

parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/

function parseQueryString(url) {
	url = decodeURI(url)
	url = url.slice(url.indexOf('?') + 1)
	url = url.split('&')
	for (var i = 0; i < url.length; i++){
		url[i].split('=')
	}
	return url;
	}
		
