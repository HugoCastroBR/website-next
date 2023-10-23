import React from 'react'
import ContainerBox from '../atoms/containerBox'
import CustomText from '../atoms/customText'
import { convertDate } from '@/utils/dateHandlers';
import CustomBit from '../atoms/customBit';
import CustomTextDataContainer from '../molecules/customTextDataContainer';

interface ExperienceProps {
  startDate: Date,
  endDate: Date,
  title: string,
  description: string,
  company: string,
  skills: string[]
}

const experienceData: ExperienceProps[] = [
  {
    startDate: new Date("2023-05-01"),
    endDate: new Date("2023-09-01"),
    title: "Back-end Engineer",
    description: "As a back-end engineer, I play a crucial role in a team dedicated to meeting our clients' critical demands. My responsibilities include addressing emergency fixes and implementing solutions swiftly, in line with a Kanban-based project management process. My key competencies are centered around vital technologies such as Node.js, Go, Python, and efficient management of PostgreSQL databases. I am committed to ensuring our clients receive effective and high-quality solutions in a timely manner.",
    company: "HARMO",
    skills: ["DevOps","Node.js", "Go", "Python", "PostgreSQL"],
  },
  {
    startDate: new Date("2023-02-01"),
    endDate: new Date("2023-04-01"),
    title: "Full Stack Software Engineer",
    description: "During my time as a full-stack software engineer in a temporary contract, I played an essential role in defining the architecture needed for the international expansion of the system. My responsibilities included managing critical tasks, establishing efficient workflows, and creating detailed documentation. My contribution played a vital role in the project's success, ensuring the successful implementation of the new architecture and readiness to meet the needs of global expansion.",
    company: "QRPOINT",
    skills: ["Algorithms","NodeJs","Javascript","Typescript","Documentation" ],
  },
  {
    startDate: new Date("2021-09-01"),
    endDate: new Date("2022-11-01"),
    title: "Junior Software Developer",
    description: "In the role of Junior Software Developer at LUBY SOFTWARE, I was responsible for the development and architecture of a wide range of systems, each with its own goals and challenges. I worked with various technologies to meet the specific needs of each project, ensuring an adaptable and innovative approach. Additionally, I maintained effective communication with multidisciplinary teams, where English played a fundamental role in our success, enabling smooth and productive collaboration. My ability to work flexibly and interdisciplinary was an asset in delivering high-quality solutions in a dynamic environment.",
    company: "LUBY SOFTWARE",
    skills: ["JavaScript", "TypeScript", "Node.js", "Angular", "React.js",],
  },
  {
    startDate: new Date("2021-03-01"),
    endDate: new Date("2021-09-01"),
    title: "Software Developer Intern",
    description: "In my position as a Software Developer Intern at LUBY SOFTWARE, I played a crucial role in the development of various systems, employing a variety of technologies, including JavaScript, TypeScript, Node.js, Angular, React.js, React Native, AdonisJS, NestJS, GraphQL, RestAPI, MySQL, HTML5, and CSS3. My exposure to agile methodologies allowed me to collaborate efficiently in agile teams, delivering high-quality solutions within specified timelines. I also had the privilege of participating in various workshops to expand my knowledge and skills. I had the opportunity to share my knowledge by conducting an introduction to Svelte, demonstrating my commitment to continuous learning and knowledge sharing with the community. My diverse experience and enthusiasm for professional growth are essential elements of my journey as a software developer.",
    company: "LUBY SOFTWARE",
    skills: ["TypeScript", "Node.js", "React Native", "GraphQL", 'Python'],
  },
];

const generateSkills = (skills: string[]) => {
  return (
    skills.map((skill, index) => {
      return (
        <CustomBit className='w-auto h-10' key={index} text={skill} index={index} />
      )
    })
  )
}


const generateListItems = () => {
  return (
    experienceData.map((item, index) => {
      return (
        <CustomTextDataContainer key={index} title={item.title}>
          <div>
            <CustomText
              className='text-justify dark:text-gray-300 text-gray-700 text-lg font-sans font-semibold italic'
              text={item.company}
            />
            <CustomText
              className='ml-4 text-justify dark:text-gray-300 text-gray-700 text-lg font-sans font-semibold italic'
              text={`${convertDate(item.startDate.toLocaleDateString())} - ${convertDate(item.endDate.toLocaleDateString())}`}
            />
          </div>
          <CustomText
            className='text-justify dark:text-gray-300 text-gray-700 text-lg font-sans font-normal'
            text={item.description}
          />
          <div className='-ml-4'>
            <div className='flex w-full justify-start mx-2 flex-wrap overflow-hidden mt-2 mb-6'>
              {generateSkills(item.skills)}
            </div>
          </div>
        </CustomTextDataContainer>
      )
    })
  )
}

const ExperiencesSection = () => {
  return (
    <ContainerBox id='experiences' className='flex flex-col justify-start items-start'>
      <CustomText
        className='text-center dark:text-gray-100 text-gray-900 text-3xl font-mono font-bold'
        text='Experiences'
      />
      <div className="flex flex-col">
        {generateListItems()}
      </div>

    </ContainerBox>
  )
}

export default ExperiencesSection