import React from "react";
import Head from "next/head";
import Container from "./Container";
import Footer from "./Footer";
import Nav from "./Nav";

import styles from "@styles/Home.module.css";

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>{"Haroon Jawad"}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="author" content="Haroon Jawad" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Haroon Jawad" />
        <meta
          property="og:description"
          content="Haroon Jawad is a Fullstack JavaScript developer with a passion for building web applications."
        />
        <meta property="og:type" content="website" />
      </Head>
      <Nav
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      />
      <Container justifyContent="space-between" alignContent="space-between">
        {!isOpen && <main className={styles.main}>{children}</main>}
        <Footer />
      </Container>
    </div>
  );
};

export default Layout;
