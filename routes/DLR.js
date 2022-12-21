const fs = require("fs");

function dynamicallyLoadRoutes(app) {
 let files = fs.readdirSync(__dirname);
 files.forEach((file) => {
    if (
        file === "DLR.js" ||
        file.substr(file.lastIndexOf(".") + 1 !== "js"
    )) {
        return;
    }
    let filename = file.substr(0, file.indexOf("."));
    require("./" + filename)(app);
 });

}

module.exports = dynamicallyLoadRoutes;