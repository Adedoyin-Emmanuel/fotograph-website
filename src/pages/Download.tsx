import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { Container } from "react-bootstrap";

const Download: React.FC = (): JSX.Element => {
  const navigateTo = useNavigate();
  return (
    <Container fluid>
      <AppHeader></AppHeader>
    </Container>
  );
};

export default Download;
