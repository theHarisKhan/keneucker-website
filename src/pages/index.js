/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import Intro from "../components/Intro";
import About from "../components/About";
import Why from "../components/Why";
import How from "../components/How";
import What from "../components/What";
import Where from "../components/Where";
import Footer from "../components/Footer";
import SocialLinks from "../components/SocialLinks";

function index() {
  return (
    <>
      <Head>
        <title>Ken Eucker</title>
        <meta name="title" content="Ken Eucker" />
        <meta
          name="description"
          content="Software Engineer with a decade of experience in NodeJs, collaborating on multiple open-source projects. Author/Maintainer of imgur and biketag-api on npm"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Ken Eucker" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {/* Components */}
      {/* Intro Header */}
      <Intro />
      {/* About Me professionally */}
      <About 
        img={"/img/ken_eucker_boom_headshot.png"}
        name={"Ken Eucker"}
        title={"Software Engineer"}
        socialLinks={<SocialLinks />}
        description={
          <p>
            I am a Software Engineer, classically trained in
            object-oriented programming, who likes to write universal
            javascript, with extensive experience building the backend of
            web-connected properties.
            <br />
            <br />
            I have a wide range of skills writing in the serverside
            languages TypeScript, Javascript, PHP, C#, and the clientside 
            languages HTML, Javascript, CSS, TypeScript, including the database 
            languages mysql, MSSQL, and Mongodb. 
            <br />
            <br />
            I primarily work with node applications and node built 
            front-end projects at the moment. Previously to this I was working 
            on WordPress projects migrating to React front-end experiences.
          </p>
        }
        readMoreText={
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
        }
      />
      {/* About Me personally */}
      <About 
        img={"/img/Ken_Eucker_BlackRock_Ranger.jpg"}
        secondImg={"/img/brc-ranger-logo.png"}
        secondImgWidth={80}
        secondImgHeight={90}
        name={"Kendrid Spirit"}
        title={"Black Rock Ranger"}
        reversed={true}
        description={
          <p>
            I have spent over a decade volunteering for various organizations, 
            communities, and online groups. In 2016, I became a Ranger, which 
            is a peer support and emergency response role, at Portland's regional 
            Burning Man event, named SOAK. In 2019, I went to Burning Man for the third 
            time and became a Black Rock Ranger. Since then, I have continued to Ranger 
            in Black Rock City each year and I have committed to doing so for the 
            indefinite future.
          </p>
        }
        readMoreText={
          <p>
            Black Rock Rangers are participants who volunteer a portion of their time 
            at Burning Man in service of the safety and well-being of the Burning Man 
            community. Rangers act as non-confrontational community mediators, 
            providers of reliable information, facilitators of public safety (with 
            the expectation that everyone reads the back of their ticket, of course!), 
            and navigators of the edge of chaos.
            <br />
            <br />
            Rangering is, to me personally, a way for me to connect with people 
            within my community and to be able to give back to what makes our 
            shared reality such a wonderful place to express ourselves and the
            art that we all bring to the world. I am happy to be able to 
            participate in this community nearly year round with the Rangers.
          </p>
        }
      />
      {/* Where you can find me */}
      <Where />
      {/* What you can find me doing */}
      <What />
      {/* Why you can find me doing it */}
      <Why />
      {/* How I can continue doing it */}
      <How 
        availabilty={
          <p>
            I am available for hire on remote contracts only, to get in touch please
            send me an email:{" "}
            <a href="mailto:hello@keneucker.com">hello@keneucker.com</a>
          </p>
        }
        button1={
          <a href="https://www.buymeacoffee.com/keneucker" target="_blank" rel="noreferrer">
            <button className="push-btn" style={{ background: "#90390c" }}>
              <span className="btn-front" style={{ background: "#FF813F" }}>
                <span>Buy me a Coffee</span>
                <Image
                  src="/img/coffecup.svg"
                  alt="Buy me a Coffee"
                  height={20}
                  width={25}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "cover"
                  }} />
              </span>
            </button>
        </a>
        }
        button2={
          <a href="https://ko-fi.com/keneucker" target="_blank" rel="noreferrer">
          <button className="push-btn" style={{ background: "#90390c" }}>
            <span className="btn-front" style={{ background: "#FF5E5B" }}>
              <span>Support me on Ko-fi</span>
              <Image
                src="/img/kofi.svg"
                alt="Support me on Ko-fi"
                height={20}
                width={25}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "cover"
                }} />
            </span>
          </button>
        </a>
        }
        sponsor={
          <a
            className="sponsor-link"
            href="https://github.com/sponsors/KenEucker"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/img/octocat-for-sponsors.png"
              alt="sponsor me on github"
              height={150}
              width={150}
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover"
              }} />
            <span>Sponsor me on Github</span>
          </a>
        }
      />

      {/* Contact Me Footer */}
      <Footer />
    </>
  );
}

export default index;
