"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const LandingPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard/users");
  }, [router]);

  return (
    <div className="flex justify-center items-center">
      <h1>Landing Page</h1>
    </div>
  );
};

export default LandingPage;
