import React from "react";
import Grid from "./Grid";
import Container from "./Container";
import styled from "styled-components";
import Menu from "@icons/Menu";
import Close from "@icons/Close";

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
    <NavLink href="#about">About</NavLink>
    <NavLink href="#tech-stack">Technologies</NavLink>
    <NavLink href="#work-experiences">Experiences</NavLink>
    <NavLink href="#testimonials">Testimonials</NavLink>
    {/* <NavLink href="/projects">Projects</NavLink> */}
  </>
);

const Nav = ({ isOpen, onOpen, onClose }: NavProps): JSX.Element => {
  return (
    <Grid
      as="nav"
      px={["2rem", "2rem", "2rem", "0"]}
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
          <Links />
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
      <Container alignContent="flex-end" display={["none", "none", "flex"]}>
        <NavLink href="mailto:haroonjawad6@gmail.com">Contact</NavLink>
      </Container>
    </Grid>
  );
};

export default Nav;
