import Layout from "../components/Layout";
import Profile from "../components/Profile";
import Bio from "../components/Bio";
import TechStack from "../components/TechStack";
import TabsNavigation from "../components/TabNavigation";
import {
  experience,
  projects,
  skills,
  social,
  tilCategories,
} from "../data/personal";

export default function Home() {
  return (
    <Layout>
      <Profile
        name="Shainil P.S."
        title="A FullStack Dev"
        profileImage="/pfp.jpeg"
        social={social}
      />
      <Bio />
      <TechStack stack={skills} />

      <TabsNavigation
        projects={projects}
        experience={experience}
        tilCategories={tilCategories}
      />
    </Layout>
  );
}
