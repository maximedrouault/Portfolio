import dynamic from 'next/dynamic';
const Navigation = dynamic(() => import('../components/Navigation'));
const Greetings = dynamic(() => import('../containers/Greetings'));
const Skills = dynamic(() => import('../containers/Skills'));
const Proficiency = dynamic(() => import('../containers/Proficiency'));
const Education = dynamic(() => import('../containers/Education'));
const Experience = dynamic(() => import('../containers/Experience'));
const Projects = dynamic(() => import('../containers/Projects'));
const Feedbacks = dynamic(() => import('../containers/Feedbacks'));
const GithubProfileCard = dynamic(
  () => import('../components/GithubProfileCard')
);
import { openSource, showContactUs } from '@/portfolio';
import Seo from '../components/SEO';
import Contact from '../components/ContactUs';
import { GithubUserType } from '@/types';
import { AssistantModal } from "@/components/assistant-ui/assistant-modal";


export default function Home({
  githubProfileData,
}: Readonly<{
  githubProfileData: any;
}>) {
  return (
    <div>
      <Seo />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Feedbacks />
      <Projects />
      {showContactUs ? <Contact /> : null}
      <GithubProfileCard {...githubProfileData} />
      <AssistantModal />
    </div>
  );
}

export async function getStaticProps() {
  const githubProfileData: GithubUserType = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
