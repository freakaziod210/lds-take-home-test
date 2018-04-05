import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";

const Container = styled("div")`
  height: 100%;
  width: 100%;
`;

const Subtitle = styled("div")`
  color: #97b4b9;
  font-size: 12px;
  padding-bottom: 5px;
`;

const Title = styled("div")`
  color: #555555;
  font-size: 24px;
  padding-bottom: 10px;
`;

const StyledDescription = styled("span")`
  color: #555555;
  font-size: 16px;
`;

const Description = props => (
  <Container>
    <Subtitle>{props.subtitle}</Subtitle>
    <Title>{props.title}</Title>
    <StyledDescription>{props.description}</StyledDescription>
  </Container>
);

Description.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default Description;
