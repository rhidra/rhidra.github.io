import EducationRow from "./EducationRow";

export default function Education() {
  return (
    <EducationRow
      degree={['Master\'s degree', 'Telecommunications engineer']}
      year={['2015', '2020']}
      title="INSA Lyon"
    >

      At the INSA Lyon, I learned the basics of engineering and specialized myself in Telecommunications. 
      I learned Fullstack Web development, networking, distributed systems and signal processing. 
      Additionally, I became familiar with modern team management practices.
    </EducationRow>
  );
}