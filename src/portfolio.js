
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Tejas Vedak",
  title: "Hi, I'm Tejas",
  subTitle: emoji("Enthusiastic IT Engineer 🚀 who builds Web and Mobile applications with MERN Stack and some other cool libraries and frameworks."),
  //resumeLink: ""
};

// Your Social Media Links

const socialMediaLinks = {

  github: "https://github.com/tejasvedak/",
  linkedin: "https://www.linkedin.com/in/tejasvedak/",
  gmail: "tejasvedak2005@gmail.com"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Progressive Web Applications ( PWA ) in MERN Stack"),
    emoji("⚡ Integration of third party services such as AWS/ MongoDB/ Netlify/ Heroku")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node JS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend",  //Insert stack or technology you have experience in
      progressPercentage: "60%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ]
};

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "tejas_vedak", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company or your personal projects.

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS WHICH I BUILD WHILE EXPLORING DIFFERENT TECH (Click on the image to view the project)",
  projects: [
    {
      image: require("./assets/images/socially.webp"),
      link: "https://socially-chat-app.netlify.app/"
    },
    {
      image: require("./assets/images/coronogo.webp"),
      link: "https://corona-go-tracker.netlify.app/"
    },
    {
      image: require("./assets/images/pollpeeps.webp"),
      link: "http://pollpeeps-env.eba-vdyqrkxj.us-west-2.elasticbeanstalk.com/"
    }
  ]
};

// Your Contact Info

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to approach me? or just want to say hi? My Inbox is open for all.",
  number: "+91 8268396990",
  email_address: "tejasvedak2005@gmail.com"
};

export { greeting, socialMediaLinks, skillsSection, techStack, openSource, bigProjects, contactInfo};
