import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import Description from "./Description/Description";
import ReactPlayer from "react-player";

const Container = styled("div")`
  width: ${({ isStatic }) => (isStatic ? "400px" : "800px")};
  margin: 40px;
  display: flex;
  ${({ isPlaying, isStatic }) =>
    isPlaying || isStatic ? "flex-direction: column" : "flex-direction: row"};
`;

const PlayerWrapper = styled("div")`
  ${({ isPlaying, isStatic }) => {
    if (isStatic) {
      return "margin-bottom: 10px; height:200px; width:400px;";
    }
    return isPlaying
      ? "margin-bottom: 20px; height:400px; width:800px;"
      : "margin-right: 20px; height:150px; width:300px;";
  }};

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
    const { url, title, subtitle, description, isStatic } = this.props;

    return (
      <Container
        className="tile-component"
        isPlaying={isPlaying}
        isStatic={isStatic}
      >
        <PlayerWrapper isPlaying={isPlaying} isStatic={isStatic}>
          <ReactPlayer
            url={url}
            height="100%"
            width="100%"
            onPlay={this.handlePlay}
          />
        </PlayerWrapper>
        <Description
          title={title}
          subtitle={subtitle}
          description={description}
          isStatic={isStatic}
        />
      </Container>
    );
  }
}

Tile.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  subtitle: PropTypes.string,
  isStatic: PropTypes.bool.isRequired
};

export default Tile;
