/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

export default function Why() {
  const [readmore, setReadMore] = useState(false);

  return (
    <div className="why-section">
      <h2 className="bold">Why</h2>
      <div className={readmore ? 'readit-block' : ''}>
        <div>
          <ul>
            <li style={{ color: "yellow" }}>
              Began writing poems at the age of 12 in 1999.
            </li>
            <li style={{ color: "#00ff00" }}>
              Started writing code two years later in 2001.
            </li>
            <li style={{ color: "orange" }}>
              Schooled for 8 years between 2002-2010.
            </li>
            <li style={{ color: "#00ffe0" }}>
              Worked at a web development agency in 2010.
            </li>
            <li style={{ color: "#ffffff" }}>
              Worked at a SAAS application company in 2012.
            </li>
            <li style={{ color: "#acaeff" }}>
              Freelanced full time and went traveling in 2014.
            </li>
            <li style={{ color: "#ff7a00" }}>
              Dedicated career to Open Source software in 2016.
            </li>
            <li style={{ color: "#f054ff" }}>
              Worked at a digital media publication in 2018.
            </li>
            <li style={{ color: "#b90e0a" }}>
              Went full-time digital nomad, 100% remote, in 2020.
            </li>
            <li style={{ color: "#00ff00" }}>
              Worked at a digital product consultancy in 2022.
            </li>
          </ul>
        </div>
        <div className="readmore-content">
          <br />
          <br />
          I began writing code at the age of 14, making scripts for IRC and
          playing around with HTML. In highschool, my code writing took a
          journey from BASIC to Pascal to C and finally C++. While my college
          career was focused heavily on the Microsoft stack, I also learned how
          to program microcontrollers, Xbox games, and got my first introduction
          to the web of client-server with PHP. I chose a career in Software
          Engineering because I recognized that designing and writing
          applications was something I had enough passion in to carry forward
          into the later part of my life with infinite passion. I am a maker, a
          tinkerer, a person who likes to see how things are designed and marvel
          at just how much machines can accomplish with such elegant
          engineering.
          <br />
          <br />
          My first experience in the industry was with a web development agency
          in downtown Portland, Oregon. I was working on an ASP.NET CMS
          framework that was in use by several clients for their e-commerce
          websites. A year later the agency dissolved and I formed my own LLC 
          to be able to freelance my skills and talents. Determined to
          continue to be a part of a dev team I began working for a product
          company, also on the .NET stack, and was brought onto their systems
          team to focus on their web portal. Following my time with that company
          I decided to put my full time efforts into contracting and working
          remotely, so I started working with another agency on a couple of
          Wordpress/PHP projects and went traveling.
          <br />
          <br />
          When I returned to Portland, in 2016, I had learned enough to know
          that being on a team was important to me. I had been looking to open
          source my development projects and was keen on finding a team of
          others who also shared the open source mindset, thus I found myself at
          another web development agency in downtown working on projects using
          nodejs with javascript both on the server and client side. I have to
          say that I am in love with single language development stacks! Now,
          whenever I start a new project I advocate for it being open source and
          I dedicate my life to a balance between working in an office and
          working outside of an office.
          <br />
          <br />
          Portland is great and Oregon will always be home to me. I had joined
          the Clevertech team in 2019 and finally enjoyed the freedom, autonomy,
          and balance I have long sought in my career. While working from home
          for most of 2020, and seeing the world change, I took the time to
          invest in the open source projects that I was passionate about. Now,
          as a senior developer, I am seeking to change how open source is
          percieved by clients and to change how IP is automagically awarded in
          my industry. I desire to see library code freed from the private and
          proprietary grips of companies who have no interest in evolving the
          code and to see original author accreditations go to those who put
          fingers to keyboards.
          <br />
          <br />
          At the beginning of 2021 I knew that I needed to make some big changes
          in my life, but I didn't know where I would end up. In July of 2021, I 
          moved into a 22 foot airstream travel trailer and parked it in the 
          Black Rock Desert while I volunteered in the are. One month later I 
          had purchased property with the intent to build a house. Flash forward 
          to the end of the year in 2022 and instead of building a new house, I
          got a double-wide put onto the property and then left the desert to 
          travel some more.
        </div>
      </div>
        <button className="push-btn" onClick={() => setReadMore(!readmore)}>
          <span className="btn-front">
            <span>{readmore ? 'Close' : 'Read More'}</span>
          </span>
        </button>
    </div>
  );
}
