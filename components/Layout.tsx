import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Nav from "./Nav";

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

const DESCRIPTION =
  "Haroon Jawad is a Senior Full Stack Engineer & AI Applications Developer — React, Node and TypeScript on one end; LangChain, RAG and agentic AI systems on the other.";

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Head>
      <title>Haroon Jawad — Senior Full Stack & AI Engineer</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="author" content="Haroon Jawad" />
      <meta name="description" content={DESCRIPTION} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#05070A" />
      <meta
        property="og:title"
        content="Haroon Jawad — Senior Full Stack & AI Engineer"
      />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:type" content="website" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Nav />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
