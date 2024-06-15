/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/web_dev.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Academic Insight Portal",
    description:
      "Implements an institute-level management website, facilitating interactions for three primary user roles: Students, Teachers, and Admins.",
    url: "https://github.com/LakshayDhiman023/AcademicInsightPortal",
  },
  {
    title: "Automated Accident Response System",
    description:
      "Developed and implemented location-based services for faster emergency responses, automated communication with local authorities, and established CRUD endpoints for streamlined operations.",
    url: "https://github.com/LakshayDhiman023/Automated-Accident-Response-system",
  },
  {
    title: "CP LeaderBoard",
    description:
      "Created a CP leaderboard website featuring rankings from CodeChef, Codeforces, and LeetCode for 300+ students. Integrated profile redirection to coding platforms, boosting visits by 40%. Implemented sorting by rating and academic year, increasing user engagement by 25%..",
    url: "https://dhruvbhalodia.github.io/Leader-Board/",
  },
  {
    title: "Shopping Cart",
    description:
      "Built a dynamic shopping website with detailed item listings and streamlined checkout using React, aimed at enhancing user engagement and optimizing purchasing experience.",
    url: "https://github.com/LakshayDhiman023/ShoppingCart",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
