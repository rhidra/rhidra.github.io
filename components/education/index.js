import EducationRow from "./EducationRow";

export default function Education() {
  return (
    <>
    <EducationRow
      degree={['Master of Research', 'Computer Science']}
      year={['2019', '2021']}
      title="Shanghai Jiao Tong University"
    >

      During this master, I learned a lot of general knowledge in Geographic Information 
      Systems, satellite data processing and robot navigation, while exploring AI computer vision techniques.

    </EducationRow>

    <EducationRow
      degree={['Master\'s degree', 'Telecommunications engineer']}
      year={['2015', '2020']}
      title="INSA Lyon"
      ml={[0, 0, 10, 40, 48]}
    >

      At the INSA Lyon, I learned the basics of engineering and specialized myself in Telecommunications. 
      I learned Fullstack Web development, networking, distributed systems and signal processing. 
      Additionally, I became familiar with modern team management practices.
    </EducationRow>

    <EducationRow
      degree="Exchange semester"
      year="Fall 2018"
      title="Seoul Sogang University"
      ml={[0, 0, 20, 80, 96]}
    >

      Through this exchange semester in South Korea, I took various mobile networking and 
      algorithmic courses, while discovering the great Korean culture.
    </EducationRow>


    </>
  );
}