import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Title,
  Text,
  Container,
  Grid,
  Link,
  Card,
  Button,
  List,
  TransparentLink,
} from "@components";
import Testimonials from "@components/Testimonials";

import {
  SiReact,
  SiNextdotjs,
  SiKubernetes,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFirebase,
  SiGraphql,
  SiPostgresql,
  SiOpenai,
  SiPython,
  SiLangchain,
  SiN8N,
} from "react-icons/si";

import { FloatingChatWidget } from "./chat";

const experiences = [
  {
    title: "Fullstack JavaScript Developer, Independent Contractor",
    date: "9/1/2019",
    caption:
      "As an Independent Contractor/Freelancer, I successfully completed approximately 40 diverse projects for clients globally across various industries, including healthcare, ecommerce, and edtech. My expertise in JavaScript, TypeScript, React.js, Node.js, Express.js, Next.js, Firebase, and MongoDB has enabled me to achieve a Toprated Plus status on Upwork with a 100% Job Success Score. I pride myself on delivering high-quality solutions that exceed client expectations.",
  },

  {
    title: "React Developer, Atentiv LLC",
    date: "9/1/2021",
    caption:
      "At Atentiv LLC, I played a key role in building and managing a comprehensive Patient Management Portal using React and TypeScript, complemented by Material UI for an intuitive user experience. My responsibilities included developing user-facing features tailored to the needs of various roles, such as patients, caregivers, physicians, and admins. Additionally, I utilized D3.js to create beautiful, interactive data visualizations that acted as reusable React components, enhancing the analytics capabilities of the application.",
  },

  {
    title: "JavaScript Developer, Jslytics",
    date: "3/1/2021",
    caption:
      "At Jslytics, I focused on server-side tracking implementation using Google Tag Manager. I developed custom JavaScript variables to manipulate and transform data before it was sent to various analytics platforms. My work involved integrating multiple enterprise-level web applications with marketing and analytics solutions like Hubspot and Salesforce, ensuring precise data tracking and analysis for our clients.",
  },

  {
    title: "Senior Full Stack Engineer, PrivateID",
    date: "9/1/2022",
    caption:
      "In my current role at PrivateID, I am responsible for integrating Machine Learning models into ID verification workflows, enhancing system efficiency and accuracy. Additionally, I developed a configurable rules builder that allows users to customize workflows according to their specific requirements. My contributions have significantly improved our product capabilities in secure identity verification.",
  },
];
import styles from "@styles/Home.module.css";

const Home = (): JSX.Element => {
  const stacks = React.useMemo(
    () => [
      {
        Icon: SiHtml5,
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        title: "HTML5",
      },
      {
        Icon: SiCss3,
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        title: "CSS3",
      },
      {
        Icon: SiJavascript,
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        title: "JavaScript",
      },
      {
        Icon: SiTypescript,
        url: "https://www.typescriptlang.org/",
        title: "TypeScript",
      },
      {
        Icon: SiReact,
        url: "https://reactjs.org/",
        title: "React",
      },
      {
        Icon: SiNextdotjs,
        url: "https://nextjs.org/",
        title: "Next.js",
      },
      {
        Icon: SiNodedotjs,
        url: "https://nodejs.org/",
        title: "Node.js",
      },
      {
        Icon: SiExpress,
        url: "https://expressjs.com/",
        title: "Express.js",
      },
      {
        Icon: SiMongodb,
        url: "https://mongodb.com/",
        title: "MongoDB",
      },
      {
        Icon: SiFirebase,
        url: "https://firebase.google.com/",
        title: "Firebase",
      },
      {
        Icon: SiPostgresql,
        url: "https://www.postgresql.org/",
        title: "PostgreSQL",
      },
      {
        Icon: SiKubernetes,
        url: "https://kubernetes.io/",
        title: "Kubernetes",
      },
      {
        Icon: SiOpenai,
        url: "https://openai.com/",
        title: "OpenAI",
      },
      {
        url: "https://www.langchain.com/",
        title: "LangChain",
        Icon: SiLangchain,
      },
      {
        url: "https://n8n.io/",
        title: "n8n",
        Icon: SiN8N,
      },

      {
        Icon: SiPython,
        url: "https://www.python.org/",
        title: "Python",
      },
      {
        Icon: SiGraphql,
        url: "https://graphql.org/",
        title: "GraphQL",
      },
    ],
    [],
  );

  return (
    <Container>
      <FloatingChatWidget />
      <Container
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        textAlign="center"
        paddingY="25px"
        paddingBottom="40px"
        gridGap="2rem"
      >
        <Container alignItems="center" alignContent="center">
          <div className={styles.imageWrapper}>
            <Image
              src="/me.jpeg"
              alt="Haroon Jawad"
              layout="fill"
              className={styles.image}
            />
          </div>
          {/* <Image
            src="/me.jpeg"
            alt="Haroon Jawad"
            width="120px"
            height="120px"
            objectFit="cover"
            className={styles.image} */}
          {/* /> */}
          <Title>
            {" "}
            <Link id="#about">Haroon Jawad</Link>{" "}
          </Title>
        </Container>
        <Container maxWidth="700px" gridGap="3rem">
          <Container>
            <Text textAlign="center">
              I'm a Senior Full Stack Engineer and AI Applications Developer
              with deep experience in building scalable web platforms and
              intelligent systems. My work spans both ends of the stack—React,
              Node.js, MongoDB, and SQL—as well as advanced AI/ML integrations
              using OpenAI, LangChain, LangGraph, and Retrieval-Augmented
              Generation (RAG).
            </Text>
            <Text>
              In addition to full stack development, I specialize in building
              agentic AI systems—autonomous agents that reason, plan, and take
              action using tools like CrewAI and structured reasoning pipelines.
              Whether it’s deploying LLM-powered assistants, integrating AI into
              real-world workflows, or creating robust APIs around intelligent
              features, I bring both technical execution and strategic thinking
              to every project.
            </Text>
            <Text>
              I've delivered projects for startups, healthcare platforms,
              ML-integrated ID verification tools, and analytics dashboards. I’m
              also a Top Rated Plus developer on Upwork, where I help global
              clients bring their technical visions to life.
            </Text>
          </Container>
          <Button>Contact Me &rarr;</Button>
        </Container>
      </Container>

      <Container alignItems="center" paddingY="4rem">
        <Container maxWidth="600px" alignItems="center" alignContent="center">
          <Title fontSize="3rem" as="h3">
            Get in touch
          </Title>
          <Text textAlign="center">
            There are a million people out there who know how to code. Not
            everybody knows how to listen to your needs, follow up with you
            promptly, meet deadlines, or talk about your website in a way that's
            not filled with technical jargon. In addition to these, I strive to
            be open, friendly, easy, and fun to work with!
          </Text>
          <Grid
            gridGap="2rem"
            marginTop="2rem"
            gridTemplateColumns={["1fr", "repeat(2, 1fr)"]}
            justifyItems="stretch"
            alignItems="stretch"
          >
            <Link href="mailto:haroonjawad6@gmail.com">
              <Button width="100%">
                <motion.span
                  initial={{ display: "inline-block" }}
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2.5,
                  }}
                >
                  👋
                </motion.span>{" "}
                Say hello
              </Button>
            </Link>
            <Link target="_blank" href="mailto:haroonjawad6@gmail.com">
              <Button
                width="100%"
                backgroundColor="rgb(226,232,240)"
                color="black"
                variant="secondary"
              >
                Schedule a meeting
              </Button>
            </Link>
          </Grid>
        </Container>
      </Container>
      <Container
        paddingY="4rem"
        gridGap="2rem"
        alignContent="center"
        alignItems="center"
        textAlign="center"
        width="100%"
      >
        <Title fontSize="40px" as="h2">
          <Link id="tech-stack">Technologies</Link> I frequently use
        </Title>
        <Grid
          gridTemplateColumns={["repeat(3 , 1fr)", "repeat(6 , 1fr)"]}
          gridGap="1rem"
          justifyItems="center"
          maxWidth="40rem"
          links
        >
          {stacks.map(({ Icon, url, title }, i) => {
            // if (img) {
            //   return (
            //     <Link href={url} key={url}>
            //       <Card key={i}>
            //         <Image src={img} alt={title} width="40px" height="40px" />
            //         <span>{title} </span>
            //       </Card>
            //     </Link>
            //   );
            // }
            return (
              <Link href={url} key={url}>
                <Card key={i}>
                  {/* @ts-ignore */}
                  <Icon size="2rem" />
                  <span>{title} </span>
                </Card>
              </Link>
            );
          })}
        </Grid>
      </Container>
      <Container
        alignContent="center"
        alignItems="center"
        textAlign="center"
        width="100%"
        paddingBottom="4rem"
        gridGap="3rem"
      >
        <Title fontSize="40px" as="h2">
          <Link id="work-experiences">Work Experiences</Link>
        </Title>
        <Container width="100%">
          {experiences.reverse().map((experience, i) => (
            <TransparentLink href="#" key={i}>
              <Grid
                key={i}
                gridTemplateColumns="1fr 4fr"
                justifyItems="flex-start"
                gridGap="1rem"
                paddingY="2rem"
                borderBottom="1px solid rgba(0,0,0,0.1)"
              >
                <Container width="100%">
                  <Text>0{i + 1}</Text>
                </Container>
                <Grid width="100%" gridTemplateColumns="4fr 1fr">
                  <Container
                    width="100%"
                    alignItems="flex-start"
                    textAlign="start"
                  >
                    <Grid
                      width="100%"
                      gridTemplateColumns="repeat(2, auto)"
                      justifyItems="flex-start"
                      justifyContent="flex-start"
                      gridGap="1rem"
                    >
                      <Title fontSize="1.5rem" margin={0} as="h3">
                        {experience.title}
                      </Title>
                      <Text
                        fontSize="smaller"
                        margin={0}
                        color="rgba(0, 0, 0, 0.1)"
                      >
                        {experience.date}
                      </Text>
                    </Grid>
                    <List marginTop={10}>
                      {experience.caption}
                      {/* {experience.caption.split("-").map((item) => (
                        <li key={item}>- {item}.</li>
                      ))} */}
                    </List>
                  </Container>
                </Grid>
              </Grid>
            </TransparentLink>
          ))}
        </Container>
      </Container>
      <Container
        paddingY="4rem"
        gridGap="2rem"
        alignContent="center"
        alignItems="center"
        textAlign="center"
        width="100%"
      >
        <Title fontSize="40px" as="h2">
          <Link id="testimonials">Testimonials</Link>
        </Title>
        <Testimonials />
      </Container>
    </Container>
  );
};

export default Home;
