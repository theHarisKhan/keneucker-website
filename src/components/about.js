/* eslint-disable react/no-unescaped-entities */
import SocialLinks from "./SocialLinks";
import Image from "next/image";
import { useState } from "react";

function About() {
  const [readMoreOpen, setReadMoreOpen] = useState(false);

  return <>
    <div className="about-section">
      <div className="about-top">
        <div className="about-img">
          <div className="about-thumbnail">
            <Image
              src="/img/ken_eucker_boom_headshot.png"
              alt="ken_eucker_boom_headshot"
              height={290}
              width={170}
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover"
              }} />
          </div>
          <h2>Ken Eucker</h2>
          <SocialLinks />
        </div>

        <div className="about-info">
          <h4>Software Engineer</h4>
          <p>
            I am a Software Engineer, classically trained in
            object-oriented programming, who likes to write universal
            javascript, with extensive experience building the backend of
            web-connected properties.
            <br />
            <br /> I have a wide range of skills writing in the serverside
            languages C#, PHP, Javascript, and the clientside languages HTML,
            Javascript, CSS, TypeScript, including the database languages
            mysql, MSSQL, and Mongodb. <br />
            <br />I primarily work with node applications and node built 
            front-end projects at the moment. Previously to this I was working 
            on WordPress projects migrating to React front-end experiences.
          </p>
          {!readMoreOpen && (
          <button className="push-btn" onClick={() => setReadMoreOpen(!readMoreOpen)}>
            <span className="btn-front">
              <span>Read More</span>
            </span>
          </button>
          )}
        </div>
      </div>
      {readMoreOpen && (
      <div className="about-info-more">
        <p>
        I am a writer; I write in human languages and in machine languages. I
        like writing poetry and short stories. I like writing blogs and
        reflecting upon my personal experience. I have written different blogs
        over the years trying to find out where my niche is. I have been
        building a universe for a novel that I want to write entirely in
        javascript. I have some odd ideas.
        <br />
        <br />
        I am a maker; I woodwork, weld metal, solder electronics, program
        microcontrollers, and I like to find projects that combines these
        skills. I have a desire to create kinetic water art installations.
        <br />
        <br />
        I am an adventurer; I like to go biking, hiking, backpacking, and
        traveling to remote areas to connect with the natural world and I find
        those experiences to be invaluable. I like to believe that life
        happens in between the moments that you plan for, and I actively seek
        out adventures that will grow who I am as a person with those around
        me.
        <br />
        <br />
        I am a contributor; I contribute to a range of projects in various
        capacities by writing open source code and submitting pull requests on
        GitHub, by being a member of cycling related non-profit organizations
        in the Pacific Northwest, by First Doing Nothing and providing peer
        support while participating in artful events both local and
        international.
        </p>
        {readMoreOpen && (
          <button className="push-btn" onClick={() => setReadMoreOpen(!readMoreOpen)}>
            <span className="btn-front">
              <span>Close</span>
            </span>
          </button>
          )}
      </div>
      )}
    </div>
  </>;
}

export default About;
