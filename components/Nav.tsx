import React from "react";
import Grid from "./Grid";
import Container from "./Container";
import styled from "styled-components";
import Menu from "@icons/Menu";
import Close from "@icons/Close";
import Button from "./Button";
import { motion } from "framer-motion";
import Link from "next/link";

const NavLink = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  border-bottom: none;
  margin: 0;
  padding: 0;
  z-index: 1;
  font-weight: 500;
  transition: opacity 0.3s ease 0s;

  &:hover {
    opacity: 0.5;
  }
`;

const MobileNavLink = styled.a`
  display: block;
  padding: 0.75rem 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #111;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: color 0.3s ease, border-bottom 0.3s ease;

  &:hover {
    color: #0070f3;
    border-bottom: 2px solid #0070f3;
  }
`;

const AssistantLink = styled(MobileNavLink)`
  color: #111;
  border-radius: 8px;
  background: #f1f1f1;
  text-align: center;
  margin-top: 2rem;
  font-weight: 600;
  padding: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: #0070f3;
    color: white;
    border-bottom: none;
  }
`;

const MenuContainer = styled(Container)`
  cursor: pointer;
`;

export interface NavProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const Links = (): JSX.Element => (
  <>
    <Link
      href={{
        pathname: "/",
        hash: "#about",
      }}
    >
      <NavLink>About</NavLink>
    </Link>
    <Link
      href={{
        pathname: "/",
        hash: "#tech-stack",
      }}
    >
      <NavLink>Technologies</NavLink>
    </Link>
    <Link
      href={{
        pathname: "/",
        hash: "#work-experiences",
      }}
    >
      <NavLink>Experiences</NavLink>
    </Link>
    <Link
      href={{
        pathname: "/",
        hash: "#testimonials",
      }}
    >
      <NavLink>Testimonials</NavLink>
    </Link>

    {/* <NavLink href="/projects">Projects</NavLink> */}
  </>
);

const Nav = ({ isOpen, onOpen, onClose }: NavProps): JSX.Element => {
  const MobileLinks = (): JSX.Element => (
    <div onClick={onClose}>
      <Link
        href={{
          pathname: "/",
          hash: "#about",
        }}
      >
        <MobileNavLink>About</MobileNavLink>
      </Link>
      <Link
        href={{
          pathname: "/",
          hash: "#tech-stack",
        }}
      >
        <MobileNavLink>Technologies</MobileNavLink>
      </Link>
      <Link
        href={{
          pathname: "/",
          hash: "#work-experiences",
        }}
      >
        <MobileNavLink>Experiences</MobileNavLink>
      </Link>
      <Link
        href={{
          pathname: "/",
          hash: "#testimonials",
        }}
      >
        <MobileNavLink>Testimonials</MobileNavLink>
      </Link>

      {/* <MobileNavLink href="/projects">Projects</MobileNavLink> */}
    </div>
  );

  return (
    <Grid
      as="nav"
      px={["2rem", "2rem", "2rem", "1rem"]}
      gridTemplateColumns={["1fr", "1fr", "1fr 1fr 1fr"]}
      alignContent="center"
      justifyContent={["center", "center", "space-between"]}
      margin="3rem 0"
    >
      <Container display={["none", "none", "flex"]}>
        <NavLink href="/">Haroon Jawad</NavLink>
      </Container>
      <MenuContainer display={["flex", "none", "none"]}>
        {isOpen ? (
          <Close
            size="2rem"
            style={{ margin: "-0.3rem" }}
            onClick={(evt) => evt.type === "click" && onClose()}
          />
        ) : (
          <Menu
            size="1.6rem"
            onClick={(evt) => evt.type === "click" && onOpen()}
          />
        )}
      </MenuContainer>
      {isOpen && (
        <Grid gridTemplateColumns="1fr" style={{ fontSize: "2rem" }} py="3rem">
          <MobileLinks />
          <AssistantLink href="/chat">Talk to my AI Assistant 🤖</AssistantLink>
        </Grid>
      )}
      <Container alignContent="center" display={["none", "flex", "flex"]}>
        <Grid
          width="fit-content"
          gridGap="2rem"
          alignItems="center"
          justifyItems="center"
          gridTemplateColumns="repeat(5, auto)"
          style={{
            borderRadius: "25px",
            background: "rgba(0, 0, 0, 0.04)",
            padding: "15px",
            position: "relative",
          }}
        >
          <Links />
        </Grid>
      </Container>
      <Container
        alignContent="flex-end"
        display={["none", "none", "flex"]}
        padding={"10px"}
      >
        <Link href={"/chat"}>
          <Button>
            Talk to my AI Assistant{" "}
            <motion.span
              initial={{ display: "inline-block" }}
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2.5,
              }}
            >
              🤖
            </motion.span>{" "}
          </Button>
        </Link>
      </Container>
    </Grid>
  );
};

export default Nav;
