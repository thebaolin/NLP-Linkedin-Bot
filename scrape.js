//Importing axios and cheerio
const axios = require('axios');
const cheerio = require('cheerio');

//Setting up Cohere
const Cohere = require("cohere-js");
Cohere.init("fcCuE2KiwJqdaTYEoR2Al9RaVT13ltr32eo2cIw0");

const getJobDesc = async (url) => {
	try {
		const { data } = await axios.get(url);
		const $ = cheerio.load(data);

		return $("div.show-more-less-html__markup").text();
	} catch (error) {
		throw error;
	}
};

const parseKW = (jobDesc) => {
	
}

getJobDesc("https://www.linkedin.com/jobs/view/mechanical-technician-1-at-northrop-grumman-3285901132?trk=org-job-results").then((jobDesc) => console.log(jobDesc));
