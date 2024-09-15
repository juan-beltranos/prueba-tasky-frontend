import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import FormLayout from "@/app/forms/stories/page";

export const metadata: Metadata = {
  title: "Usuarios",
  description: "Administrador de usuarios",
};

const WordsoupPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Administrador de usuarios" />
      <FormLayout />
    </DefaultLayout>
  );
};

export default WordsoupPage;
