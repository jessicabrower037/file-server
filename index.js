// The "require" statement looks up and caches a module. Basically, it "imports"
// Why not "import"? 

// Express is utilized to handle server networking
const express = require("express");
// Morgan is utilized for logging the requests coming into our server in the console.
// It also pretty prints them with nice colors
const morgan = require("morgan");

// TCP/UDP port number
const port = 8008;

const app = express();
app.use(express.json());
app.use(morgan("dev"));

require("./routes/DLR")(app);

app.listen(port, () => {
    console.log(`Server is up and running at http://localhost:${port}`);

});