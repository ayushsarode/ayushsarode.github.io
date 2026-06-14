"use client";
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import OpenSourceSection from "./components/OpenSourceSection";
import AchievementsSection from "./components/AchievementsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="noise-bg relative z-10">
      <Navbar />
      <HeroSection />

      <div className="gradient-line" />
      <AboutSection />

      <div className="gradient-line" />
      <SkillsSection />

      <div className="gradient-line" />
      <ExperienceSection />

      <div className="gradient-line" />
      <ProjectsSection />

      <div className="gradient-line" />
      <OpenSourceSection />

      <div className="gradient-line" />
      <AchievementsSection />

      <div className="gradient-line" />
      <EducationSection />

      <div className="gradient-line" />
      <ContactSection />

      <Footer />
    </main>
  );
}