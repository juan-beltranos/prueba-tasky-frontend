import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import FormLayout from "@/app/forms/ebooks/page";

export const metadata: Metadata = {
  title: "Listado de mensajes",
  description: "Listado de mensajes enviados con Twilio",
};

const WordsoupPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Listado de mensajes" />
      <FormLayout />
    </DefaultLayout>
  );
};

export default WordsoupPage;
