import React, { Component } from "react";
import Tile from "./components/Tile/Tile";
import Article from "./components/Article/Article";
import { BrowserRouter, Route, Link } from "react-router-dom";
import styled, { css } from "react-emotion";

const tile = {
  url: "https://www.youtube.com/watch?v=VxOUWgsBHI0",
  title: "University of Utah Names Historic Building After President Monson",
  subtitle: "News Release",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  isStatic: false
};

const Container = styled("div")`
  padding: 20px;
`;

const ButtonStyles = css`
  margin: 10px;
  padding: 10px;
  background-color: blue;
  color: white;
  text-decoration: none;
  text-align: center;
  border-radius: 4px;
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Link className={ButtonStyles} to="/tile">
            Tile
          </Link>
          <Link className={ButtonStyles} to="/article">
            Article
          </Link>
          <Route
            path="/tile"
            render={() => (
              <Tile
                url={tile.url}
                title={tile.title}
                subtitle={tile.subtitle}
                description={tile.description}
                isStatic={tile.isStatic}
              />
            )}
          />
          <Route path="/article" component={Article} />
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
