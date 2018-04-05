import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import Description from "./Description/Description";
import ReactPlayer from "react-player";

const tile = {
  url: "https://www.youtube.com/watch?v=VxOUWgsBHI0",
  title: "University of Utah Names Historic Building After President Monson",
  subtitle: "News Release",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
};

const Container = styled("div")`
  width: 800px;
  margin: 40px;
  display: flex;
  ${props =>
    props.isPlaying ? "flex-direction: column" : "flex-direction: row"};
`;

const PlayerWrapper = styled("div")`
  ${props =>
    props.isPlaying
      ? "margin-bottom: 20px; height:400px; width:800px;"
      : "margin-right: 20px; height:150px; width:300px;"};

  transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
`;

class Tile extends Component {
  state = {
    isPlaying: false
  };

  handlePlay = () => {
    this.setState({ isPlaying: true });
  };

  render() {
    const { isPlaying } = this.state;

    return (
      <Container isPlaying={isPlaying}>
        <PlayerWrapper isPlaying={isPlaying}>
          <ReactPlayer
            url={tile.url}
            height="100%"
            width="100%"
            onPlay={this.handlePlay}
          />
        </PlayerWrapper>
        <Description
          title={tile.title}
          subtitle={tile.subtitle}
          description={tile.description}
        />
      </Container>
    );
  }
}

Tile.propTypes = {};

export default Tile;
