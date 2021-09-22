import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Button, Flex, Heading, Icon, Image, SimpleGrid, Text } from "@chakra-ui/core";
import { useState } from "react";
import { DiIonic, DiMongodb } from "react-icons/di";
import { FaAngular, FaCaretDown, FaCaretUp, FaJava } from "react-icons/fa";
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
      <section className={`collapsible ${selected !== 0 ? 'collapsed' : ''}`}>
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
      </section>
      <section className={`collapsible ${selected !== 1 ? 'collapsed' : ''}`}>
      </section>
      <section className={`collapsible ${selected !== 2 ? 'collapsed' : ''}`}>
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