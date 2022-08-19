//similar to import statement but for express
const express = require("express");
const app = express();

//listen
app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

app.post("/api", (request, response) => {
    console.log(request);
    const data = request.body
    response.json({
        status: 'success',
        latitude: data.lat,
        longitude: data.lon
  })
});
