const fs = require("fs");

function file (app) {
    app.get(
        "/file/:name",
        (request, response) => {
            let value = request.params.name;
            let pathName = __dirname;
            pathName = pathName.substr(0, pathName.lastIndexOf("\\"));
            pathName += "./data/";
            let listOfFiles = fs.readdirSync(pathName);

            if (!listOfFiles.includes(value)) {
                response
                    .status(400)
                    .send ("ERROR: File not found");
                return;
            }

            response.sendFile(
                value,
                {
                    root: pathName,
                    headers: {
                        "x-timestamp": Date.now(),
                        "x-sent": true
                
                    }
                },
                (err) => {
                    if (err) {
                        let errorMsg = `Error in sending files: ${err}`;
                        console.error(errorMsg);
                        response    
                            .status(400)
                            .send(errorMsg);
                        return;
                
                    }
                    console.log(`File ${value} sent successfully!`);
                    response.status(200);
                    return;
                }
            )

        }
    )
}

module.exports = file;