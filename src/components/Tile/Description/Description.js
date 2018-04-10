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
  ${({ isStatic }) =>
    isStatic
      ? `font-size: 16px;
         font-weight: 700;
         padding-bottom: 5px;`
      : `font-size: 24px;
         font-weight: 400;
         padding-bottom: 10px;`};
`;

const StyledDescription = styled("span")`
  color: #555555;
  font-size: 16px;
`;

const Description = ({ subtitle, title, description, isStatic }) => (
  <Container>
    {isStatic ? null : <Subtitle>{subtitle}</Subtitle>}
    <Title isStatic={isStatic}>{title}</Title>
    <StyledDescription>{description}</StyledDescription>
    {isStatic ? <hr /> : null}
  </Container>
);

Description.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  isStatic: PropTypes.bool.isRequired
};

export default Description;
