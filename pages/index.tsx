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
} from "react-icons/si";
const experiences = [
  {
    title: "Fullstack JavaScript Developer, Independent Contractor",
    date: "2/4/2020",
    caption:
      "As an Independent Contractor/Freelancer, I have worked on tens of projects for clients all over the world ranging from the healthcare, ecommerce, edtech industries - I have completed around 40 projects on Upwork and am a Toprated Fullstack JavaScript developer with a 100% Job Success Score - Most of these projects were using JavaScript, TypeScript, React.js, Node.js, Express.js, Next.js, Firebase, MongoDB",
  },

  {
    title: "React Developer, Atentiv LLC",
    date: "9/1/2021",
    caption:
      "Built and managed the patient Management portal for Atentiv LLC using React/TypeScript and Material UI-Implemented User facing features for different roles ranging from patient, caregiver, physician, admin etc- Visualized Data with Beautiful,interactive charts acting as reusable React components using D3 modules",
  },
  {
    title: "JavaScript Developer, Jslytics Agency",
    date: "4/1/2021",
    caption:
      "Implemented server side tracking with GTM-Built Custom JavaScript variables to transform data before sending to different analytics solutions-Integrated several enterprise level web applications with Hubspot, Salesforce",
  },
];
import styles from "@styles/Home.module.css";

const Home = (): JSX.Element => {
  const stacks = React.useMemo(
    () => [
      {
        Icon: SiHtml5,
        url: "/",

        title: "HTML5",
      },
      {
        Icon: SiCss3,
        url: "/",
        title: "CSS3",
      },
      {
        Icon: SiJavascript,
        url: "/",
        title: "JavaScript",
      },
      {
        Icon: SiReact,
        url: "https://reactjs.org/",
        title: "React",
      },
      {
        Icon: SiTypescript,
        url: "https://www.typescriptlang.org/",
        title: "TypeScript",
      },
      {
        Icon: SiNodedotjs,
        url: "/",
        title: "Node.js",
      },
      {
        Icon: SiExpress,
        url: "/",
        title: "Express.js",
      },
      {
        Icon: SiMongodb,
        url: "/",
        title: "MongoDB",
      },
      {
        Icon: SiNextdotjs,
        url: "https://nextjs.org/",
        title: "Next.js",
      },
      {
        Icon: SiFirebase,
        url: "/",
        title: "Firebase",
      },
      {
        Icon: SiKubernetes,
        url: "https://kubernetes.io/",
        title: "Kubernetes",
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
          <Image
            src="/me.jpg"
            alt="Haroon Jawad"
            width="120px"
            height="120px"
            objectFit="cover"
            className={styles.image}
          />
          <Title>
            {" "}
            <Link id="#about">Haroon Jawad</Link>{" "}
          </Title>
        </Container>
        <Container maxWidth="700px" gridGap="3rem">
          <Container>
            <Text textAlign="center">
              I&apos;m a Full Stack JavaScript developer with experience in
              Backend, Frontend and DevOps. I am an excellent problem solver,
              and will often find creative solutions for challenging problems I
              face. Currently, I am working freelance and loving it. It is very
              rewarding to be able to help people bring their visions to the web
              and even more so when you go above their expectations. I offer my
              services on multiple freelacing platforms and am a Toprated
              Fullstack JavaScript developer on Upwork. Check out{" "}
              <a
                href="https://www.upwork.com/freelancers/~0182acc05b85e44e20"
                target={"_blank"}
              >
                my Upwork Profile{" "}
              </a>{" "}
              to take a look at some of the projects that I have done and what
              my clients say about me {":)"}
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
          {stacks.map(({ Icon, url, title }, i) => (
            <Link href={url} key={url}>
              <Card key={i}>
                <Icon size="2rem" />
                <span>{title} </span>
              </Card>
            </Link>
          ))}
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
          {experiences.map((experience, i) => (
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
                      {experience.caption.split("-").map((item) => (
                        <li key={item}>- {item}.</li>
                      ))}
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
