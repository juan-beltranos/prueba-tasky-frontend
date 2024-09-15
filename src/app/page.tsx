import LandingPage from "@/components/Dashboard/LandingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Tasky App",
  description: "Prueba tecnica desarrollo",
};

export default function Home() {
  return (
    <>
      <LandingPage />
    </>
  );
}
