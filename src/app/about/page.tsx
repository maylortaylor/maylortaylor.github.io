import TimelineItem from "@/components/about/TimelineItem";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Matt Maylor Taylor",
  description:
    "Learn more about Matt Taylor's background, experience, and journey.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-[#263d42] mb-12 text-center">
        About Matt &quot;Maylor&quot; Taylor
      </h1>

      {/* Timeline */}
      <div className="relative">
        {/* Center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-secondary via-accent to-secondary opacity-30" />

        {/* Timeline Items */}
        <div className="relative z-0">
          <TimelineItem
            year="December 2018"
            title="Certified Scrum Master"
            isLeft={true}
          >
            <p className="mb-4">
              In December of 2018, I decided to better myself and my development
              practices by getting ScrumMaster Certified (
              <a
                href="https://www.scrumalliance.org/get-certified/practitioners/csm-certification"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#80ced7] hover:text-[#5eb5bf]"
              >
                CSM
              </a>
              ) by{" "}
              <a
                href="https://www.scrumalliance.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#80ced7] hover:text-[#5eb5bf]"
              >
                ScrumAlliance
              </a>
              .
            </p>
            <p>
              You can view my public certificate{" "}
              <a
                href="http://bcert.me/sbyourhga"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#80ced7] hover:text-[#5eb5bf]"
              >
                here
              </a>
              .
            </p>
            <div className="mt-4">
              <Image
                src="/images/seal-csm.png"
                alt="CSM Seal"
                width={150}
                height={150}
                className="rounded"
              />
            </div>
          </TimelineItem>

          <TimelineItem
            year="Summer 2018"
            title="Senior Software Engineer at Bovsi Studios"
            isLeft={false}
          >
            <p>
              Serendipitously met{" "}
              <a
                href="https://www.linkedin.com/in/matthew-parks-bovsi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#80ced7] hover:text-[#5eb5bf]"
              >
                Matthew Parks
              </a>
              , owner of{" "}
              <a
                href="https://bovsistudios.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#80ced7] hover:text-[#5eb5bf]"
              >
                Bovsi Studios
              </a>
              , at{" "}
              <a
                href="http://grassrootskavahouse.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#80ced7] hover:text-[#5eb5bf]"
              >
                Grassroots Kava House
              </a>
              . He invited me to be a Senior Software Engineer at his growing
              company. I help architect applications, plan projects, and manage
              a team of developers.
            </p>
          </TimelineItem>

          <TimelineItem
            year="2014 - 2018"
            title="Lead Developer at Presence.io"
            isLeft={true}
          >
            <p className="mb-4">
              My first year and half at{" "}
              <a
                href="http://presence.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#80ced7] hover:text-[#5eb5bf]"
              >
                Presence.io
              </a>{" "}
              (formerly Check I'm Here) involved me and a Senior Developer
              re-architecting an MVP application. The application we designed
              was a .NETCORE C# MVC Framework web app with a SQL database,
              AngularJS 1.6 front-end framework using the component-router and
              Typescript, and a C# RESTful API with the repository pattern
              design.
            </p>
            <p>
              During my time with the company, I was the lead developer for the
              company's mobile API and the go-to developer for general C# or SQL
              questions. I worked closely with the customer service team to help
              test the system's UI and APIs. I also worked with the CEO / product
              owner (
              <a
                href="https://www.linkedin.com/in/reubenpressman/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#80ced7] hover:text-[#5eb5bf]"
              >
                Reuben Pressman
              </a>
              ) on a daily basis to gather requirements for new features and
              define business logic for existing features. I also helped upgrade
              and maintain the Node.js application that our customer service team
              used internally.
            </p>
          </TimelineItem>

          <TimelineItem
            year="2012 - 2014"
            title="IT Administrator at Applied Technology Resources"
            isLeft={false}
          >
            <p className="mb-4">
              I was the IT administrator at{" "}
              <a
                href="https://www.appliedtechres.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#80ced7] hover:text-[#5eb5bf]"
              >
                Applied Technology Resources
              </a>{" "}
              handling tasks such as creating new employee accounts, preparing
              computers for new users, doing general Windows repairs on
              employees' computers, and troubleshooting the network.
            </p>
            <p>
              Due to my skill set I was able to transition this into a more
              senior role creating queries for the SQL and MySQL databases,
              updating/repairing custom written .NET C# and VB programs,
              updating/maintaining the Microsoft Access program that employees
              used, and creating various applications that helped the company's
              processes.
            </p>
          </TimelineItem>

          <TimelineItem
            year="Fall 2012"
            title="Moved to St Petersburg, FL"
            isLeft={true}
          >
            <p className="mb-4">
              After college, I moved to St Petersburg, FL because one of my
              brothers lived nearby. He and his wife helped me get on my feet
              until I was able to live on my own in the greatest city in
              Florida.
            </p>
            <div className="mt-4">
              <iframe
                width="100%"
                height="300"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJQao6aWPmwogR_4vUvANAzAQ&zoom=10&key=AIzaSyD4WASEzkM6m3h_2pd-1Uyk8mHLnbRuxNY"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </TimelineItem>

          <TimelineItem
            year="2008 - 2012"
            title="University of Alabama"
            isLeft={false}
          >
            <p>
              Graduated from{" "}
              <a
                href="https://en.wikipedia.org/wiki/University_of_Alabama"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#80ced7] hover:text-[#5eb5bf]"
              >
                The University of Alabama
              </a>
              . I completed 1.5 years of computer programming classes before
              realizing the school's program was not geared towards marketable
              skills. I moved my credits to the College of Business and I
              finished my Marketing/Business Degree with a 3.5 GPA.
            </p>
          </TimelineItem>

          <TimelineItem
            year="Fall 2008"
            title="Moved to Tuscaloosa, Alabama"
            isLeft={true}
          >
            <p className="mb-4">
              Moved to Tuscaloosa, Alabama for college at The University of
              Alabama. Roll Tide!
            </p>
            <div className="mt-4">
              <iframe
                width="100%"
                height="300"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJZ0DCkS6viIgRWCuJFv37q6w&zoom=5&key=AIzaSyD4WASEzkM6m3h_2pd-1Uyk8mHLnbRuxNY"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </TimelineItem>
        </div>
      </div>
    </div>
  );
}
