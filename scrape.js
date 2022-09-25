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

let iFile = "tData/trainNG";

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

const parseKW = async (jobDesc, training) => {
	const keyWords = await Cohere.generate({
		model: "large",
		prompt: promptGen(training,jobDesc,"Extract the quality from the post:").toString(),
		max_tokens: 10,
		temperature: 0.1,
	});
	return `${keyWords.body.generations[0].text}`;
}

function zip(a, b) {
	let result = [];
	
	for (let i = 0; i < a.length; ++i) {
		result.push([a[i], b[i]]);
	}

	return result;
}

const promptGen2 = (a, ex, fd) => {
	exam = [...a[0], ...[ex]];
	label = [...a[1], ...[""]];
	const full = zip(exam,label);
	return full.map(([examp, label]) => ("\n---\n"+examp+"\n"+fd+label));
}
const promptGen = (full, ex, fd) => {
	const fuller = [...full, [ex, ""]];
	return fuller.map(([examp, label]) => ("\n---\n"+examp+"\n"+fd+label));
}

(async ()=> {
	try {
		const data = await fs.readFile(iFile, 'utf8');
		/* skip first line hack */
		let first_newline_location = 0;
		let newline = false;
		while (!newline) {
			if (data[first_newline_location] == '\n') {
				newline = true;
			}
			else
				first_newline_location++;
		}
		const skipped = data.slice(first_newline_location+1, data.length);
		//console.log(skipped);
		const data_as_json = await JSON.parse(skipped);
		const filtered     = data_as_json.filter(([a, b]) => (a.length && b.length));
		//console.log(promptGen(filtered, "EX", "FD").toString());
		console.log(await parseKW("BIG", filtered));
	} catch (e) {
		console.log(e);
	}

/*	const s = await getJobDesc(URL);

	try {
//		await fs.writeFile(oFile, URL+"\n");
		
//		for(let i =0;i<s.length;i++){
			
//			await fs.appendFile(oFile, "{\"\", \""+s[i]+"\"}\n");
//		}
	}catch (error) {
		throw error;
	}*/
})();
