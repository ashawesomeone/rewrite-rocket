"use client"

import { useState } from "react";
import Evaluation from "@/components/Evaluation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LanguageTabs from "@/components/LanguageTabs";
import About from "@/components/About";

const modes = [
  {
    language: "portuguese",
    tones: ["standard", "natural", "formal", "informal", "funny"]
  },
  {
    language: "spanish",
    tones: ["standard", "natural", "formal", "informal", "funny"]
  },
  {
    language: "french",
    tones: ["standard", "natural", "formal", "informal", "funny"]
  }
];



export default function Home() {
  const [activeStyle, setActiveStyle] = useState<string>(modes[0]?.tones[0]);
  const [activeLanguage, setActiveLanguage] = useState<string>(modes[0]?.language);
  return (
    <>
      <Header />
      <LanguageTabs activeStyle={activeStyle} setActiveStyle={setActiveStyle} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} modes={modes} />
      <Evaluation activeStyle={activeStyle} activeLanguage={activeLanguage} />
      <About />
      <Footer />
    </>
  );
}