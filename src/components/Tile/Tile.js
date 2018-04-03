import React, { Component } from "react";
import PropTypes from "prop-types";
import Description from "./Description/Description";
import ReactPlayer from "react-player";

const tile = {
  title: "University of Utah Names Historic Building After President Monson",
  subtitle: "News Release",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
};

class Tile extends Component {
  render() {
    return (
      <div>
        <ReactPlayer url="https://www.youtube.com/watch?v=VxOUWgsBHI0" />
        <Description
          title={tile.title}
          subtitle={tile.subtitle}
          description={tile.description}
        />
      </div>
    );
  }
}

Tile.propTypes = {};

export default Tile;
