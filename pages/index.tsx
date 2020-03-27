import React, { useEffect } from 'react';
import { NextPage } from 'next';
import Router, { useRouter } from "next/router";

const Index: NextPage<{}> = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/p/o-firme');
  }, []);

  return null;
};

export default Index;