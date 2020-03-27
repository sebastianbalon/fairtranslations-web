import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";

const Index: NextPage<{}> = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/pl/o-firmie');
  }, []);

  return (
    <Layout language="pl">
      <progress className="progress is-medium is-dark" max="100">Ładowanie</progress>
    </Layout>
  );
};

export default Index;