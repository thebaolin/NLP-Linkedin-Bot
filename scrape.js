//Importing axios and cheerio
const axios = require('axios');
const cheerio = require('cheerio');

//Setting up Cohere
const Cohere = require("cohere-ai");
Cohere.init("fcCuE2KiwJqdaTYEoR2Al9RaVT13ltr32eo2cIw0");

//IOstream
const fs = require("fs").promises;

let URL = "https://www.linkedin.com/jobs/view/mechanical-technician-1-at-northrop-grumman-3285901132?trk=org-job-results";

let oFile = "tData/trainNG";

const getJobDesc = async (url) => {
	try {
		const { data } = await axios.get(url);
		const $ = cheerio.load(data);
	
		return $("div.show-more-less-html__markup").html().trim().replace( /(<\/([^>]+)>)/ig, '. ').replace( /(<([^>]+)>)/ig, '').split(". ");
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

	try {
		await fs.writeFile(oFile, URL+"\n");
		
		for(let i =0;i<s.length;i++){
			await fs.appendFile(oFile, "{\"\", \""+s[i]+"\"}\n");
		}
	}catch (error) {
		throw error;
	}
})();
