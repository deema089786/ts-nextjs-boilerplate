import React from 'react';
import Head from 'next/head';

interface Props {
  children: JSX.Element | JSX.Element[];
  title: string;
  description: string;
}
const Layout: React.FC<Props> = ({ title, description, children }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
    {children}
  </>
);

export default Layout;
