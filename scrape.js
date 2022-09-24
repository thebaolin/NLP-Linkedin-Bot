//Importing axios and cheerio
const axios = require('axios');
const cheerio = require('cheerio');

//Setting up Cohere
const Cohere = require("cohere-ai");
Cohere.init("fcCuE2KiwJqdaTYEoR2Al9RaVT13ltr32eo2cIw0");

let URL = "https://www.linkedin.com/jobs/view/mechanical-technician-1-at-northrop-grumman-3285901132?trk=org-job-results"

const getJobDesc = async (url) => {
	try {
		const { data } = await axios.get(url);
		const $ = cheerio.load(data);
	
		return $("div.show-more-less-html__markup").text().split(".");
	} catch (error) {
		throw error;
	}
};

//req_ex = //list of tuples, training data

const parseKW = async (jobDesc) => {
	const keyWords = await Cohere.generate({prompt: 'We have a fun time here' });
	return `${keyWords.body.generations[0].text}`;
}

;(async () => {
const s = await getJobDesc(URL);	
for(let i =0;i<s.length;i++){
	console.log(s[i]);
}
})();
