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

const getJobDesc = async (url) => {
	try {
		const { data } = await axios.get(url);
		const $ = cheerio.load(data);
	
		return $("div.show-more-less-html__markup").html().trim().replace( /(<\/([^>]+)>)/ig, '. ').replace( /(<([^>]+)>)/ig, '').split(". ");
	} catch (error) {
		throw error;
	}
};

const parseKW = async (jobDesc, training) => {
  const keyWords = await Cohere.generate({
    model: "xlarge",
    prompt: promptGen(training,jobDesc,query_question).toString(),
    max_tokens: 10,
    temperature: 0.20,
    /* k: 3, */
    p: 0.7,
    stop_sequences: ['\n']
  });
  return `${keyWords.body.generations[0].text}`;
}

function join_strings(string_array, joiner) {
  let result = "";

  for (let i = 0; i < string_array.length; ++i) {
    result += string_array[i];
    if (i+1 < string_array.length) result += joiner;
  }

  return result;
}
const promptGen = (full, ex, fd) => {
  const fuller = [...full, ["", ex]];
  return join_strings(fuller.map(
    ([label, examp]) => examp+"\n"+fd+label
  ), "\n---\n");
  /* return fuller.map(([label, examp]) => ("\n---\n"+examp+"\n"+fd+label)); */
}

async function extract_data_as_json(filename) {
  const data = await fs.readFile(filename, 'utf8');
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
  return filtered;
}

(async function() {
  const file_data = await extract_data_as_json(iFile);
  /* const query = "Did you watch Deadpool 2? I did today."; */
  /* const query_cases = [
   *   "Hayao Miyazaki Got So Bored with Retirement He Started Directing Again 'in Order to Live'",
   *   "First poster for Pixar's Luca",
   *   "New images from Space Jam: A New Legacy",
   *   "Official Poster for \"Sonic the Hedgehog 2\"",
   *   "Ng Man Tat, legendary HK actor and frequent collborator of Stephen Chow (Shaolin Soccer, God of Gambler) died at 70",
   *   "Zach Snyder's Justice League has officially been Rated R for for violence and some language",
   *   "HBOMax and Disney+ NEED to improve their apps if they want to compete with Netflix.",
   *   "I want a sequel to Rat Race where John Cleese’s character dies and invites everyone from the first film to his funeral, BUT, he’s secretly set up a Rat Maze to trap them all in. A sort of post-mortem revenge on them for donating all his wealth to charity.",
   *   "'Trainspotting' at 25: How an Indie Film About Heroin Became a Feel-Good Classic",
   *   "‘Avatar: The Last Airbender’ Franchise To Expand With Launch Of Nickelodeon’s Avatar Studios, Animated Theatrical Film To Start Production Later This Year" ,
   *   "Christian Bale stars in 'The Dark Knight'",
   *   "Hi, I’m Sam Raimi, producer of THE GRUDGE which hits theaters tonight. Ask Me Anything!",
   *   "Hair Love | Oscar Winning Short Film (Full)"
   * ]; */
  let all_stuff_together = "";

  for ([label, text] of file_data) {
    all_stuff_together += text;
  }

  console.log(all_stuff_together);
})();

