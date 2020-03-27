import React, {CSSProperties} from 'react';
import Layout from '../../components/Layout/Layout';
import { NextPage, NextPageContext } from 'next';
import texts from './texts.json';

interface Props {
  text: string;
}

const Styles: { [key: string]: CSSProperties } = {
  content: {
    color: 'black',
  }
};

const Index: NextPage<Props> = (props: Props) => {
  return (
    <>
      <Layout>
        <div style={Styles.content} dangerouslySetInnerHTML={{ __html: props.text }} />
      </Layout>
    </>
  );
};

interface Context extends NextPageContext {
  page: string;
}

Index.getInitialProps = (context: Context): Props => {
  const { page } = context.query;

  return { text: texts.cs["o-firme"].text || 'Page not found :(' };
};

export default Index;