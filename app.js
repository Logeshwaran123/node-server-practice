const http = require("http");

http
	.createServer((req, res) => {
		res.writeHead(200, {
			"Content-Type": "text/html",
		});
		console.log(req.url);
		if (req.url == "/home") {
			res.write("<h1>Home Route</h1>");
			res.end();
		} else {
			res.write("<h1>General Route</h1>");
			res.end();
		}
	})
	.listen(9090);
