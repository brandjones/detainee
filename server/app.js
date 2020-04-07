const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");

const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api", async (req, res) => {
    try {
        const response = await axios.get(
            `http://www.JailBase.com/api/1/search/?source_id=fl-gcso&last_name=${req.body.lastName}&first_name=${req.body.firstName}`
        );

        if (response.data.status === 1) {
            res.send({
                record: response.data.records,
                currentPage: response.data.current_page,
                totalRecords: response.data.total_records,
                message: response.data.message
            });
        } else {
            res.send({
                status: response.data.status,
                message: response.data.msg
            });
        }
    } catch (error) {
        res.send({
            error: error,
            message: "Something outside of the request had invalid data"
        });
    }
});

app.listen(port, () => console.dir("Listening on port 3000"));
