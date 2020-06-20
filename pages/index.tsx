import React, { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "../components/Layout/Layout";

const Index: NextPage<{}> = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/cs/o-firme");
  }, []);

  return (
    <Layout language="cs">
      <progress className="progress is-medium is-dark" max="100">
        100%
      </progress>
    </Layout>
  );
};

export default Index;
