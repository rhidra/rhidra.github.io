import { CgDatabase } from "react-icons/cg";
import { FaDatabase, FaDocker, FaJava, FaLinux } from "react-icons/fa";
import { SiCplusplus, SiPerl } from "react-icons/si";
import WorkSection from "./WorkSection";

export function MorganStanley({addMargin}) {
  return (
    <WorkSection
      subtitle={['Software Engineer', 'Backend']}
      title="Morgan Stanley: Agency MBS Trading Tech"
      img="/img/morganstanley/img.jpg"
      logo="/img/morganstanley/logo.png"
      isRight={true}
      imgSize={400}
      addMargin={addMargin}
      icons={[{
        icon: CgDatabase,
        label: 'Q/KDB+',
      }, {
        icon: FaJava,
        label: 'Java / SpringBoot',
      }, {
        icon: FaDatabase,
        label: 'SQL Sybase',
      }, {
        icon: FaLinux,
        label: 'Linux',
      }, {
        icon: SiPerl,
        label: 'Perl',
      }, {
        icon: FaDocker,
        label: 'Docker',
      }, {
        icon: SiCplusplus,
        label: 'C++',
      }, ]}
    >
    <>
    At Morgan Stanley in Montréal, I developed a Java-based mortgage allocations web application that handles over <strong>$30 billion MBS transactions</strong> each month and supports <strong>10,000 real-time WebSocket updates per minute</strong>. I also built a KDB/Q marking app that <strong>reduced trading systems load by 80%</strong> and engineered a risk hedge tool using quant models to improve duration predictions.<br/>

    I ensured high reliability by quickly addressing <strong>critical production issues</strong>, maintaining <strong>99% uptime</strong> during market hours. Additionally, I introduced <strong>integration and unit testing practices</strong>, integrating over <strong>300 KDB/Q unit tests</strong> into our CI/CD pipeline. I also modernized our infrastructure with tools like <strong>Splunk, Grafana, and Prometheus</strong>, enhancing observability and alerting across our systems.
    </>
    <>
    At Morgan Stanley in Montréal, I developed a Java-based mortgage allocations web application that handles over <strong>$30 billion MBS transactions</strong> each month and supports <strong>10,000 real-time WebSocket updates per minute</strong>. I also built a KDB/Q marking app that <strong>reduced trading systems load by 80%</strong> and engineered a risk hedge tool using quant models to improve duration predictions.
    </>
    </WorkSection>
  );
}