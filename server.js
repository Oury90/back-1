import express from "express";
import bodyParser from "body-parser";
import dataCountry from "./data.js";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded( {extended : true}));
app.use(express.static('public'));

let data;


app.get('/', (req, res) =>{

    res.render("index.ejs", {
        provinces: data
    })
})

app.post("/post", (req, res) =>{
    switch (req.body.choice) {
        case "alberta":
            data = dataCountry[0];
        break;

        case "manitoba":
            data = dataCountry[1];
        break

        case "quebec":
            data = dataCountry[2];
        break

        case "colombie":
            data = dataCountry[3];
        break

        case "princeÉdouard":
            data = dataCountry[4];
        break

        case "nouveauBrunswick":
            data = dataCountry[5];
        break

        case "nouvelleÉcosse":
            data = dataCountry[6];
        break

        case "ontario":
            data = dataCountry[7];
        break

        case "saskatchewan":
            data = dataCountry[8];
        break

        case "terreNeuveetLabrador":
            data = dataCountry[9];
        break

        case "nunavut":
            data = dataCountry[10];
        break

        case "territoiresduNordOuest":
            data = dataCountry[11];
        break

        case "yukon":
            data = dataCountry[12];
        break
    
        default:
            break;
    }
    res.redirect('/')
})

app.listen(port, () =>{
    console.log(`This server is running on port ${port}`);
})