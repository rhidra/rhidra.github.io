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
            subtitle={['Frontend Mobile & Web']}
            icons={[
              { icon: FaAngular, label: 'Angular' }, 
              { icon: DiIonic, label: 'Ionic' }, 
              { icon: FaJava, label: 'Java' },
              { icon: DiMongodb, label: 'MongoDB' },
            ]}
          >
          <>
            I built a CRM mobile app, and connected it to its Java back-end API. 
            Using Ionic 4 and Angular 2, the UI is efficient, inspired by the current CRM web app, 
            but adapted to a mobile environment. 
            The app was be tested on Android and iOS, on smartphone and tablet.
          </>
          </MainSection>
        }
        {selected === 1 &&
          <MainSection
            title="MasterMined: AI legal document organizer"
            subtitle={['Frontend Web']}
            icons={[
              { icon: FaReact, label: 'React' }, 
              { icon: SiNextDotJs, label: 'NodeJS' }, 
              { icon: SiMaterialUi, label: 'Material' },
              { icon: SiHeroku, label: 'Heroku' },
            ]}
          >
          <>
            To start selling their solution, the MasterMined startup, based in the US,
            needed an interface to connect to their AI powered backend API.
            Because of future interviews with investors, they needed a functionnal
            demo in less than two weeks. I helped them reach that goal.<br/> 
            Targeted at lawyers and legal professionals, the UI needed to be clean,
            easily understandable and responsive. From a design mockup, I
            built the entire frontend as a React/NextJS Web app. It features a full authentication
            system, a multiple file uploader for AI analysis, and various document
            organizer and visualization solutions.<br/>
            Thanks to NextJS capabilities, the app was made very quickly, while staying
            very fast and scalable. It was first deployed on a free Heroku server, to
            be used as a small demo system, but can then be deployed on a CDN, for a very
            fast worldwide delivery.<br/>
            Since my contribution, MasterMined past their first round of seed investment.
            They are now expanding the app even more.
          </>
          <>
            To start selling their solution, the MasterMined startup, based in the US,
            needed an interface to connect to their AI powered backend API.
            Because of future interviews with investors, they needed a functionnal
            demo in less than two weeks. I helped them reach that goal.
          </>
          </MainSection>
        }
        {selected === 2 &&
          <MainSection
            title="Time tracker Web App"
            subtitle={['Fullstack']}
            icons={[
              { icon: FaReact, label: 'React' }, 
              { icon: SiNextDotJs, label: 'NodeJS' }, 
              { icon: DiMongodb, label: 'MongoDB' },
            ]}
          >
          <>
            To manage work time between their volunteers, the non-profit RND4IMPACT used to write
            check-in and check-out time on paper. With the Covid pandemic, they were forced to go
            remote. They needed an official ID verification method, so common time tracking software
            was not an option. I designed for them a custom responsive time tracking web app,
            with official international ID verification, work contract e-signature, check-in/check-out,
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
    <WorkSection
      title={title}
      subtitle={subtitle}
      link={link}
      isRight={false}
      icons={icons}
    >
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