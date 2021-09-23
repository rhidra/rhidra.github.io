import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Button, Flex, Heading, Icon, Image, SimpleGrid, Text } from "@chakra-ui/core";
import { useState } from "react";
import { DiIonic, DiMongodb } from "react-icons/di";
import { FaAngular, FaBootstrap, FaCaretDown, FaCaretUp, FaJava, FaReact } from "react-icons/fa";
import { SiHeroku, SiMaterialUi, SiNextDotJs } from "react-icons/si";
import { TechIcon } from "../projects/ProjectCard";
import WorkSection from "./WorkSection";

export function WorkOthers() {
  const [selected, setSelected] = useState();

  const iconList = [
    'img/kerlead/cover.png',
    'img/mastermined/logo.png',
    'img/rnd4impact/icon.png',
  ]

  return (
    <div className="work-others">
      <section className={`collapsible ${selected === undefined ? 'collapsed' : ''}`}>
        {selected === 0 &&
          <MainSection
            title="Kerlead: CRM Mobile App"
            subtitle={['Internship', 'Frontend Mobile & Web']}
            icons={[
              { icon: FaAngular, label: 'Angular' }, 
              { icon: DiIonic, label: 'Ionic' }, 
              { icon: FaJava, label: 'Java' },
              { icon: DiMongodb, label: 'MongoDB' },
            ]}
          >
          <>
            In this internship, I built a <strong>CRM mobile app</strong>, and connected it to 
            its <strong>Java back-end API</strong>. Using Ionic 4 and Angular 2, the UI is efficient, 
            inspired by the current CRM web app, but adapted to a mobile environment. 
            The app was be tested on Android and iOS, smartphone and tablet.<br/>
            I also created a web based <strong>NLP text annotation tool</strong> for real time <strong>AI training</strong>.<br/>
            I learned to work fast in an <strong>agile</strong> development environment, to
            communicate with my coworkers to <strong>solve mutual problems</strong>, and 
            discuss with the client of product improvements.
          </>
          <>
            In this internship, I built a <strong>CRM mobile app</strong>, and connected it to 
            its <strong>Java back-end API</strong>. Using Ionic 4 and Angular 2, the UI is efficient, 
            inspired by the current CRM web app, but adapted to a mobile environment.
          </>
          </MainSection>
        }
        {selected === 1 &&
          <MainSection
            title="MasterMined: AI legal document organizer"
            subtitle={['Freelance', 'Frontend Web']}
            icons={[
              { icon: FaReact, label: 'React' }, 
              { icon: SiNextDotJs, label: 'NodeJS' }, 
              { icon: SiMaterialUi, label: 'Material' },
              { icon: SiHeroku, label: 'Heroku' },
            ]}
          >
          <>
            To start selling their solution, the MasterMined startup, based in the US,
            needed an interface to connect to their <strong>AI powered backend API</strong>.
            Because of future interviews with investors, they needed a functionnal
            demo in <strong>less than two weeks</strong>. I helped them reach that goal.<br/> 
            Targeted at lawyers and legal professionals, the UI needed to be <strong>clean</strong>,
            easily <strong>readable</strong> and <strong>responsive</strong>. From a design mockup, I
            built the <strong>entire frontend</strong> as a React/NextJS Web app. It features a full <strong>authentication</strong>
            system, a multiple <strong>file uploader</strong> for AI analysis, and various documents
            organizer and visualization solutions.<br/>
            Thanks to NextJS capabilities, the app was made very quickly, while staying
            <strong>very fast</strong> and <strong>scalable</strong>. It was first deployed on a free Heroku server, to
            be used as a small demo system, but can then be deployed on a <strong>CDN</strong>, for a very
            fast worldwide delivery.<br/>
            Since my contribution, MasterMined past their first round of seed investment.
            They are now expanding even more their app.
          </>
          <>
            To start selling their solution, the MasterMined startup, based in the US,
            needed an interface to connect to their <strong>AI powered backend API</strong>.
            Because of future interviews with investors, they needed a functionnal
            demo in <strong>less than two weeks</strong>. I helped them reach that goal.
          </>
          </MainSection>
        }
        {selected === 2 &&
          <MainSection
            title="Time tracker Web App"
            subtitle={['Freelance', 'Fullstack']}
            icons={[
              { icon: FaReact, label: 'React' }, 
              { icon: SiNextDotJs, label: 'NodeJS' }, 
              { icon: DiMongodb, label: 'MongoDB' },
            ]}
          >
          <>
            To manage work time between their volunteers, the non-profit RND4IMPACT used to write
            check-in and check-out time on paper. With the <strong>Covid pandemic</strong>, they were forced to go
            remote. They needed an official ID verification method, so common time tracking software
            was not an option. I designed for them a custom <strong>responsive time tracking</strong> web app,
            with <strong>official international ID verification</strong>, work contract <strong>e-signature</strong>, check-in/check-out,
            and administration at different level of authorization.<br/>
            We worked at a <strong>fast paced</strong> rythm with a lot of feedback. I helped
            them setup the app on their system, and <strong>customized</strong> it as they wanted it.
          </>
          <>
            To manage work time between their volunteers, the non-profit RND4IMPACT used to write
            check-in and check-out time on paper. With the <strong>Covid pandemic</strong>, they were forced to go
            remote. They needed an official ID verification method, so common time tracking software
            was not an option. I designed for them a custom <strong>responsive time tracking</strong> web app,
            with <strong>official international ID verification</strong>, work contract <strong>e-signature</strong>, check-in/check-out,
            and administration at different level of authorization.
          </>
          </MainSection>
        }
      </section>

      <div className="cards-wrapper">
        {iconList.map((icon, idx) => (
          <CardButton img={icon} onClick={() => setSelected(idx)} key={idx} isSelected={selected === idx}/>
        ))}
      </div>
    </div>
  );
}

function MainSection({title, subtitle, link, icons, children}) {
  return (
    <WorkSection title={title} subtitle={subtitle} link={link} isRight={false} icons={icons}>
      {children}
    </WorkSection>
  );
}

function CardButton({img, onClick, isSelected}) {
  return (
    <button className={`card ${isSelected ? 'selected' : ''}`} onClick={() => onClick()}>
      <Image transition=".2s all" src={img} 
        w={20} h={20} borderRadius="full" boxShadow="md"/>
    </button>
  );
}