import { DiIonic, DiMongodb, DiNginx } from "react-icons/di";
import { FaAngular, FaDocker, FaNode } from "react-icons/fa";
import { SiGooglecloud, SiNginx } from "react-icons/si";
import WorkSection from "./WorkSection";

export function Clapback({addMargin}) {
  return (
    <WorkSection
      subtitle={['Startup CTO', 'Fullstack']}
      title="Clapback: A new media app in China"
      img="/img/clapback/phone.jpg"
      logo="/img/clapback/icon.png"
      link="https://clapbacktheapp.com"
      isRight={true}
      addMargin={addMargin}
      icons={[{
        icon: FaAngular,
        label: 'Angular',
      }, {
        icon: DiIonic,
        label: 'Ionic',
      }, {
        icon: FaNode,
        label: 'NodeJS',
      }, {
        icon: DiMongodb,
        label: 'MongoDB',
      }, {
        icon: FaDocker,
        label: 'Docker',
      }, {
        icon: SiNginx,
        label: 'NGINX',
      }, {
        icon: SiGooglecloud,
        label: 'Google Cloud',
      }, ]}
    >
    <>
      A new media app, technically similar to TikTok, with <strong>social media</strong> interactions,
      users <strong>video upload and processing</strong> and a scalable infrastructure. As the only engineer, 
      I had to build an app easy to <strong>iterate</strong> on and <strong>maintain</strong>, without any third party
      technologies potentially blocked in China.<br/>
      The backend supports a <strong>REST API</strong> and <strong>offline video encoding</strong>. 
      To let the non-technical team edit data, I built an <strong>Angular backoffice</strong>.
    </>
    <>
      A new media app, technically similar to TikTok, with <strong>social media</strong> interactions,
      users <strong>video upload and processing</strong> and a scalable infrastructure.
    </>
    </WorkSection>
  );
}