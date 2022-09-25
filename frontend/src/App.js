import logo from './logo.svg';
import './App.css';
import Quotes from "./Quotes";

import { useState } from 'react';

const all_concatenative_text = "Our pioneering and inventive spirit has enabled us to be at the forefront of many technological advancements in our nation's history - from the first flight across the Atlantic Ocean, to stealth bombers, to landing on the moonWe look for people who have bold new ideas, courage and a pioneering spirit to join forces to invent the future, and have fun along the wayOur culture thrives on intellectual curiosity, cognitive diversity and bringing your whole self to work - and we have an insatiable drive to do what others think is impossibleSupport manufacturing operations in the Propulsion Work Center (PWC)Typical daily activities include supporting mechanical and thermal installations and assemblies on flight hardwarePerform work using a combination of model based designs and 2D drawings, as directed per in detailed work instructionsAA or other 2 year technical degree with 0 years of experience or 2 years' mechanical assembly experience in lieu of AA degreeExperience using basic hand tooling including torque wrenches, calipers, micrometers and multimetersExcellent communication skills on all fronts (listening and speaking)Must possess good interpersonal skills to be able to get along well with other workers (cohesion)Must have good coordination and organizational abilities.Willingness to work as part of a teamAbility to multitask if need be and display flexibility while carrying out dutiesMust be a US citizenAircraft tube forming experienceGTAW orbital tubing welding training Summary Apple is a place where extraordinary people come together to do their life’s best workOur people don’t just create products—they create wonder, and transform the possibilities of technologyIf you’re excited by the idea of supporting a team that has a real impact on the world, a career with Apple may be your dream jobAre you excited about graphics programming and passionate about UI? Would you like to use your rendering and UI expertise to build beautiful, high performance Watch Faces that push the limit of what a watch can do? Join the team that is revolutionizing the watch! As a graphics engineer on the Apple Watch team, you will be one of the experts responsible for building sophisticated Watch Faces with both high and low level frameworksYou’ll work closely with the UI design, iOS Frameworks, and QA teams to develop interactions of quality that will ship to millions of usersYou will join a hands-on development team that fosters creativity and generates novel solutions to deliver engineering excellenceKey Qualifications Experience with graphics APIs (Metal, OpenGL, Direct3D, Console, etc.)Experience with Shader Languages (HLSL/GLSL, Metal Shaders) and writing custom shadersStrong Objective-C and/or Swift coding abilityExperience with Apple UI frameworks (UIKit, CoreAnimation, SwiftUI) and an eye for UI detailExcellent communication and social skills Description As a member of the team you will have many responsibilities relating to the design, development, and testing of the device softwareThese include:-  We collaborate closely with the design team to open up the boundaries on human-computer interactions.-  We craft solutions tailored to the constraints of the software and the hardware of a small, low power device.-  We work closely with the iOS Apps, iOS Frameworks and Hardware teams to craft robust and maintainable systems that will stand the test of time.-  We coordinate with the quality assurance teams to ensure full test coverage as well as to initiate focused testing on critical componentsEducation &amp; Experience BS CE/CS or equivalent experience requiredRole Number: 200389400Summary The Technology Development Group (TDG) is looking for an AR/VR Software Development Engineer to help us push the limits on the next generation of interactive experiences on our platformThis team is working with some of Apple’s most advanced technologies including augmented reality (AR) and virtual reality (VR) offered in ARKit and Metal 3As a member of our creative organization, you will have a uniquely rewarding opportunity to craft future products that will delight and inspire millions of people every single dayKey Qualifications 2 years experience with C, C++, or ObjC programming languageExperience working on developer-facing frameworks for apple platforms OR experience working with apple UI frameworks in customer-facing applications iOS and/or macOS experienceSome experience with 3D graphics API (Metal, OpenGL, DirectX, etc.)Attention to detail, creativity, passion, and excellent communication and collaboration skills Description Apple makes innovative technologies accessible for the creation of amazing user experiencesYou will have the opportunity to work in a team developing system level architecture enabling these experiences, in close collaboration with other innovative teams across Apple and TDG.The candidate for this role will be comfortable working in a dynamic and creative environment with an ambition to improve, innovate and explore these technologies to enable creators to surprise and delight our usersEngineers are expected to work quickly and smartly to help determine the viability of ideas and technologiesYou will be using your skills to guarantee that the user experience is on time, all the timeEducation &amp; Experience BS / MS Computer Science OR equivalent degree OR equivalent experience Additional Requirements -  Experience delivering developer-facing UI frameworks OR developing latency-critical, interactive UI-  Broad exposure to UI frameworks (CoreAnimation, UIKit, AppKit, etc.)-  Experience developing 3D or AR/VR applications or gamesApple’s most important resource, our soul, is our peopleApple benefits help further the well-being of our employees and their families in meaningful waysNo matter where you work at Apple, you can take advantage of our health and wellness resources and time-away programsWe’re proud to provide stock grants to employees at all levels of the company, and we also give employees the option to buy Apple stock at a discount — both offer everyone at Apple the chance to share in the company’s successYou’ll discover many more benefits of working at Apple, such as programs that match your charitable contributions, reimburse you for continuing your education and give you special employee pricing on Apple productsApple benefits programs vary by country and are subject to eligibility requirements.Apple is an equal opportunity employer that is committed to inclusion and diversityWe take affirmative action to ensure equal opportunity for all applicants without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, disability, Veteran status, or other legally protected characteristicsApple is committed to working with and providing reasonable accommodation to applicants with physical and mental disabilitiesApple is a drug-free workplaceRole Number: 200393416Summary The Arcade and Game Center teams are the home of gaming at AppleWe’d love for you to come and work with us to push the experience to the next level for both gamers and the developers who build them across all of Apple's innovative products, including iPhone, iPad, Mac, Apple TV and Apple Watch.We have an exciting future roadmap with the unique opportunity to define the face of gaming.We are seeking a proactive, highly motivated engineer with at least 3 years of experience, to share their mastery in building uniquely beautiful and robust user interfaces with Apple’s frameworks.Along with excellent skills in Swift or Objective-C, you should have strong interpersonal skills, a passion for quality, attention to detail, strong problem solving and critical thinking skillsYou will be responsible for implementing new features in existing user interfaces and frameworks as well as crafting and developing sophisticated new applications, user experiences, and frameworks from top to bottomKey Qualifications In-depth development experience at the application and user interface level with Swift or Objective-CStrong object oriented programming and design skills.Excellent problem solving, critical thinking and interpersonal skills.Eager to learn new skills and tackle new tasks.A keen eye for detail is always appreciatedInvestigate requirements for projects independently.Work closely with a multi-functional team, handling expectations and ultimately delivering great work on time.Advocate for outstanding development practises Description Do you like working on a collaborative project? Do you want to work in an energizing environment? Bring your skills and passion to build something phenomenal! Education &amp; Experience BS in computer science or equivalent.Additional Requirements- Experience with Swift and/or Objective-C- Experience with Cocoa/CocoaTouch- Experience with Apple frameworks- Experience with CPU/memory profiling- Experience with asynchronous programming- Experience with networking protocols- Experience designing and maintaining APIs- Experience with best of class user interface designs.- Familiarity with JavaScript development technologies—JavaScript, AJAX, Node, etc—a plus Role Number: 200419363";
const axios = require('axios');
const log_entry = (name, text) => [name, text];
// DUM DUM DUM DUM
const API_KEY = "fcCuE2KiwJqdaTYEoR2Al9RaVT13ltr32eo2cIw0";

const HEADER_FOR_REQUESTS = {
  headers: {
  'content-type': 'application/json',
  'authorization': `BEARER ${API_KEY}`
  }
};
async function cohere_generate(params) {
  const result = await axios.post("https://api.cohere.ai/generate", params, HEADER_FOR_REQUESTS);
  return result.data;
}
async function asdf(url) {
	const result = await axios.get("http://localhost:5000/",  { crossdomain: true, params: { url:url }});
	return result;
}

/* function cohere_generate(gcc)
 *  */
function random_integer_between(a, b) {
  return Math.floor();
}

function is_valid_url(url) { try{new URL(url);return true;}catch(e){return false;}}
function SearchBar({logstuff, add_output, update_output}) {
  const [search_string, update_search_string] = useState("");

  async function submit_entry() {
    const prompt = search_string;
    let current_output = logstuff;

    current_output = add_output(current_output, log_entry("User", prompt)) ;
    update_output(current_output);
	  if (is_valid_url(prompt)) {
		  const a=(await asdf(prompt)).data;
		  console.log(a);
		  for (let i = 0 ;i  < a.length; ++i) {
			  current_output = add_output(current_output, log_entry("Bot", a[i]));
		  }
	  } else {
		  update_search_string("");
		  for (let i = 0; i < 2; ++i) {
			  const lol = await cohere_generate({
				  prompt: `${all_concatenative_text}. I would like to be given this role because I have `+ prompt +"",
				  model: "xlarge",
				  temperature: 0.65,
				  k: 323,
				  tokens: random_integer_between(15, 40)
			  });
			  current_output = add_output(current_output, log_entry("Bot", `${lol.text}`));
		  }
	  }
    update_output(current_output);
  }

  return (
    <div className="center-this">
      <div className="search-bar">
        <input type="text"
               value={search_string}
               onKeyDown={
               function (event) {
                 if (event.keyCode === 13) {
                   submit_entry();
                 }
               }
               }
               onChange={
               function(event) {
                 update_search_string(event.target.value);
               }
               }
               placeholder="Enter a LinkedIn URL or topics/keywords"></input>
        <button onClick={submit_entry}>
          Enter
        </button>
      </div>
    </div>
        )
}

function TextLine(context) {
  function onclickhandlerlmao(event) {
    navigator.clipboard.writeText(context.text);
    /* I wanna use CSS animations, but god damn it I just wanna stop. */
    window.alert("copied text line");
  }
  return <p className="chat-line"><span className="chat-name">{context.name}: </span><span className="chat-text"><a onClick={onclickhandlerlmao}>{context.text}</a></span></p>;
}

function OutputBox(context) {
  return (
    <div className="center-this chat-box-holder">
        <div className="chat-box">
        {context.output.map(([name, line]) => <TextLine name={name} text={line} />)}
        </div>
    </div>
  );
}

function SelectionChoice({text}) {
  return <button class="selection-choice-button">{text}</button>
}

function SelectionChoiceMenu({choices}) {
  if (!choices) {
    return <></>
  } else {
    return (<>
        <div id="blackscreen">
        <div id="selection-choice-menu">
          {
            choices.map((choice) => <SelectionChoice text={choice}></SelectionChoice>)
          }
        </div>
        </div>
    </>
    );
  }
}

function App() {
  const [text_line_log, update_text_line_log] = useState([
    log_entry("Bot", "Hello! Welcome to UHired!"),
  ]);

  // garbage collector will fix this later...
  function add_output(old, entry) {
    const new_text_log = [entry, ...old];
    return new_text_log;
  }

  return (
    <div className="App">
      <OutputBox output={text_line_log} />
      <SearchBar logstuff={text_line_log} add_output={add_output} update_output={update_text_line_log} />
      {/* <SelectionChoiceMenu choices={
          [
          "I eat unicorns",
          "I poop butterflies",
          "Hello World!"
          ]
          }></SelectionChoiceMenu> */}
    </div>
  );
}

export default App;
