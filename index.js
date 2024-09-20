const express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")
const cors = require("cors")

require('dotenv').config();
let port = process.env.PORT

const app = express()

app.disable("x-powered-by");
app.use(morgan("dev"))
app.use(helmet())

const http = require("http")
const https = require("https")

app.use(express.json({limit: "10000kb", extended: true}))
app.use(express.urlencoded({ limit: "10000kb", extended: true }));

app.options("*", cors());

app.use("/app", express.static("resources"));
require("./src/services/server")(app);

/* https.createServer(app).listen(19000, () => {
	console.log("HTTPS server listening on port " + 19000 + "..."); //16070
}); */

http.createServer(app)
	.listen(port, () => {
		console.log("HTTP server listening on port " + port + "...");//16071
	})
