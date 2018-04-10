import React from "react";
import Tile from "../Tile/Tile";
import Images from "./Images/Images";
import styled from "react-emotion";

/*
  This is a simulation of an HTTP request
  which I would usually do in the ComponentDidMount
  lifecycle hook using a class component.
*/
import data from "./data";

const Container = styled("div")`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled("div")`
  width: 1000px;
`;

const Header = styled("div")`
  margin-bottom: 50px;
`;

const Subtitle = styled("h4")`
  font-size: 14px;
  font-weight: 300;
`;

const Title = styled("h1")`
  font-size: 18px;
  font-weight: 700;
`;

const TileWrapper = styled("div")`
  float: right;
`;

const Content = ({ content }) => {
  return content.map((p, i) => {
    if (i === 0) {
      return (
        <React.Fragment key={i}>
          <p>{p}</p>
          <TileWrapper>
            <Tile
              url={data.tile.url}
              title={data.tile.title}
              subtitle={data.tile.subtitle}
              description={data.tile.description}
              isStatic={data.tile.isStatic}
            />
          </TileWrapper>
        </React.Fragment>
      );
    } else {
      return <p key={i}>{p}</p>;
    }
  });
};

const Article = () => (
  <Container>
    <Wrapper>
      <Header>
        <Subtitle>Article Subtitle</Subtitle>
        <Title>Article Title</Title>
        <Images images={data.images} />
      </Header>
      <Content content={data.text} />
    </Wrapper>
  </Container>
);

export default Article;
