const express = require("express");
const Quote = require('inspirational-quotes');
const axios = require('axios');
const cheerio = require('cheerio');
// import {getJobQuals} from "scrape";

const app = express();
//Importing axios and cheerio
// const fs = require('fs');

//Setting up Cohere
const Cohere = require("cohere-ai");
Cohere.init("fcCuE2KiwJqdaTYEoR2Al9RaVT13ltr32eo2cIw0");

//IOstream
const fs = require("fs").promises;

let URL = "https://www.linkedin.com/jobs/view/mechanical-technician-1-at-northrop-grumman-3285901132?trk=org-job-results";

/* let iFile = "tData/movie"; */
let iFile = "tData/trainAP";

/* const query_question =  "extract the movie title from the post:"; */
const query_question =  "extract the skills from the sentence:";

const getJobQuals = async (url) => {
	try {
	const { data } = await axios.get(url);
	const $ = cheerio.load(data);
	let sects = [];
	let inter = [];
	let quals = [];
	try{
	sects = $("div.show-more-less-html__markup").html().split("<strong>")
	} catch(error) {
		sects = "";
	}

	for(let i =0;i<sects.length;i++){
		if(!(sects[i].toLowerCase().includes('benefits'))){
			inter.push(...sects[i].split("<"));
		}
	}

	for(let i = 0;i<inter.length;i++){
		if(inter[i].length>3 && inter[i].charAt(0) == 'l' && inter[i].charAt(1) == 'i'){
			quals.push(inter[i].slice(3));
		}
	}
	return quals;
	} catch(e) {
		return ["Please Check URL, Unable to View"];
	}
};

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get("/", async function(req, res) {
	// console.log("get request???")
	// console.log(req);
	if (req.query.url) {

	const sad = await getJobQuals(req.query.url);
	res.send(sad);
	}
});

let port = process.env.PORT;
if(port == null || port == "") {
 port = 5000;
}
app.listen(port, function() {
 console.log("Server started successfully");
});
