/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Lakshay Dhiman",
  title: "Hi all, I'm Lakshay Dhiman",
  subTitle: emoji(
    "A passionate Competitive Programmer, Full Stack Software Developer 🚀 and AI Enthusiast with experience in building scalable and performant web and mobile applications using JavaScript, React.js, Next.js, and Node.js, along with other modern libraries and frameworks. I enjoy solving algorithmic challenges and designing clean, efficient solutions—whether it’s in a coding contest or a real-world application."
  ),
  resumeLink:
    "https://drive.google.com/file/d/182UA0C8BAYIv8E33pzUV5NO0dT8oqdeG/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/LakshayDhiman023",
  linkedin: "https://www.linkedin.com/in/lakshaydhiman023/",
  gmail: "dhimanlakshay.02@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Crazy Full Stack Developer who loves exploring every tech stack ⚙️ | Competitive Programmer addicted to solving tricky problems 🧠",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute of Information Technology, Vadodara",
      logo: require("./assets/images/IIITVLOGO.png"),
      subHeader: "Bachelor Of Technology, Computer Science",
      duration: "NOV 2022 - AUG 2026",
      desc: "CPI - 7.30 / 10",
      descBullets: [
        "Built an end-to-end predictive maintenance system using IoT sensor data and deployed it using AWS SageMaker to enable real-time machine failure detection with low latency over 5G under Assistant Professor Dr. Bhupendra Kumar, recieved a LOR.",
        "Designed a deep learning system using ResNet to detect and analyze the severity of plant diseases, enhancing agricultural diagnostics through automated visual inspection under Assistant Professor Dr. Deepika Gupta, recieved a LOR."
      ]
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/React", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend/Nodejs",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming/C++",
      progressPercentage: "80%"
    },
    {
      Stack: "AI/ML",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "React Developer Intern",
      company: "Canyfix",
      companylogo: require("./assets/images/canyfixlog.jpeg"),
      date: "Jan 2025 – Feb 2025",
      desc: "Built responsive and performant user interfaces using Next.js and Tailwind CSS by translating Figma designs, integrating 20+ APIs, and optimizing with lazy loading and dynamic imports. Ensured smooth mobile and desktop experiences through effective state management and adaptive layouts.",
      descBullets: [
        // "Translated Figma wireframes into responsive, interactive UI using Next.js and Tailwind CSS for a seamless user experience.",
        // "Fetched and integrated 20+ APIs, managed component state, and displayed dynamic data efficiently.",
        // "Integrated lazy loading and dynamic imports, improving page performance and reducing initial load times.",
        // "Designed UI layouts and managed state for mobile and desktop views, ensuring optimized performance and responsiveness.",
                
      ]
    },
    {
      role: "Secretary",
      company: "Football Club IIITV-ICD",
      companylogo: require("./assets/images/IIITVFOOTBALLLOGO.png"),
      date: "May 2024 – May 2025",
      desc: "Coordinated the Hermes football tournament for 300 students during the IIITV-ICD Sports Fest."
    },
    {
      role: "Member",
      company: "Coding Club IIITV-ICD",
      companylogo: require("./assets/images/dcoder.png"),
      date: "May 2023 – May 2025",
      desc: "Mentored juniors in DSA and STL, teaching vectors, stacks, queues, maps, and sets effectively. Hosted coding contests on HackerRank, engaging 150+ participants in competitive programming challenges."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Academic Projects",
  subtitle: "",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: " Smart-Expense-Analyser",
      projectDesc: "A powerful full-stack web application that automates expense tracking by extracting and analyzing data from receipts using advanced OCR and NLP technologies.",
      footerLink: [
        {
          name: "Visit Live Demo",
          url: "https://smart-expense-analyser-frontend.onrender.com/"
        },
        {
          name: "Visit Github",
          url: "https://github.com/LakshayDhiman023/Smart-Expense-Analyser"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "📡 Predictive Maintenance for IoT over 5G with AWS SageMaker",
      projectDesc: "This project demonstrates a predictive maintenance system for IoT devices using sensor data, with a focus on network latency performance between 4G and 5G. It utilizes synthetic sensor data to train a machine learning model on AWS SageMaker and evaluates the system's prediction latency over MQTT using both 4G and 5G networks.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/LakshayDhiman023/Predictive-Maintenance-for-IoT-over-5G-with-AWS-Sagemaker"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: " Plant Disease Detection and Severity Analysis",
      projectDesc: "An advanced deep learning project for automated plant disease classification using computer vision and machine learning techniques. This project combines ResNet architecture with traditional ML classifiers to provide robust plant disease detection and analysis.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/aroramoksh11/AgriVision-AI-Advanced-Plant-Disease-Detection-System"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Competitive Programming",
      subtitle:
        "Achieved Expert(1777) on Codeforces, Knight(2025) on LeetCode, and 4★(1950) on CodeChef with top global contest ranks.",
      image: require("./assets/images/cplogo.png"), // Use a custom image or generic CP logo
      imageAlt: "Competitive Programming",
      footerLink: [
        {
          name: "Codeforces Profile",
          url: "https://codeforces.com/profile/HelloBuddyJr23"
        },
        {
          name: "LeetCode Profile",
          url: "https://leetcode.com/u/j3GxocERYn/"
        },
        {
          name: "CodeChef Profile",
          url: "https://www.codechef.com/users/yohohohooooo"
        },
        {
          name: "Cleared Meta Hacker Cup",
          url: "https://drive.google.com/file/d/1VPi84Ec9K43fhuGmjiXx7qjNwQlWvEV0/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Certificates",
      subtitle: "Completed top-tier certifications in Deep Learning and Machine Learning from industry leaders.",
      image: require("./assets/images/certificate.png"), // Add a relevant icon here
      imageAlt: "Certificate Badge",
      footerLink: [
        {
          name: "Deep Learning Certificate by NVIDIA",
          url: "https://drive.google.com/file/d/1Z5nDHBqUky3t4QGcAvnGsFCGBWk8OrPm/view?usp=drive_link"
        },
        {
          name: "ML Regression & Classification - Stanford (Coursera)",
          url: "https://drive.google.com/file/d/1GMV6uPfH24iMh8W5VcSSEixivCkI88zj/view?usp=drive_link"
        }
      ]
    }

    // {
    //   title: "Google Assistant Action",
    //   subtitle:
    //     "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   imageAlt: "Google Assistant Action Logo",
    //   footerLink: [
    //     {
    //       name: "View Google Assistant Action",
    //       url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
    //     }
    //   ]
    // },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-6396914939",
  email_address: "dhimanlakshay.02@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true ; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
