import Layout from "@/components/layout";
import AboutMeSection from "@/components/sections/aboutme-section";
import ContactSection from "@/components/sections/contact-section";
import HomeSection from "@/components/sections/home-section";
import ProjectsSection from "@/components/sections/projects-section";
import SkillsSection from "@/components/sections/skills-section";

export default function Home() {

  return (
    <Layout>
      <HomeSection />
      <AboutMeSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </Layout>
  )
}
