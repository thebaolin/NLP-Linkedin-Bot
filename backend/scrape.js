//Importing axios and cheerio
const axios = require('axios');
const cheerio = require('cheerio');
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

export const getJobQuals = async (url) => {
	try {
		const { data } = await axios.get(url);
		const $ = cheerio.load(data);
		let sects = [];
		let inter = [];
		let quals = [];
	
		sects = $("div.show-more-less-html__markup").html().split("<strong>");

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
	} catch (error) {
		throw error;
	}
};
