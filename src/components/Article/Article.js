import React from "react";
import PropTypes from "prop-types";
import Tile from "../Tile/Tile";
import Images from "./Images/Images";
import photo01 from "../../assets/photo01.jpg";
import photo02 from "../../assets/photo02.jpg";
import photo03 from "../../assets/photo03.jpg";
import photo04 from "../../assets/photo04.jpg";
import photo05 from "../../assets/photo05.jpg";
import photo06 from "../../assets/photo06.jpg";
import photo07 from "../../assets/photo07.jpg";
import photo08 from "../../assets/photo08.jpg";
import photo09 from "../../assets/photo09.jpg";
import photo10 from "../../assets/photo10.jpg";

const images = [
  {
    src: photo01,
    id: "photo01",
    title: "Photo 01",
    caption: "Caption for Photo 01"
  },
  {
    src: photo02,
    id: "photo02",
    title: "Photo 02",
    caption: "Caption for Photo 02"
  },
  {
    src: photo03,
    id: "photo03",
    title: "Photo 03",
    caption: "Caption for Photo 03"
  },
  {
    src: photo04,
    id: "photo04",
    title: "Photo 04",
    caption: "Caption for Photo 04"
  },
  {
    src: photo05,
    id: "photo05",
    title: "Photo 05",
    caption: "Caption for Photo 05"
  },
  {
    src: photo06,
    id: "photo06",
    title: "Photo 06",
    caption: "Caption for Photo 06"
  },
  {
    src: photo07,
    id: "photo07",
    title: "Photo 07",
    caption: "Caption for Photo 07"
  },
  {
    src: photo08,
    id: "photo08",
    title: "Photo 08",
    caption: "Caption for Photo 08"
  },
  {
    src: photo09,
    id: "photo09",
    title: "Photo 09",
    caption: "Caption for Photo 09"
  },
  {
    src: photo10,
    id: "photo10",
    title: "Photo 10",
    caption: "Caption for Photo 10"
  }
];

const tile = {
  url: "https://www.youtube.com/watch?v=VxOUWgsBHI0",
  title: "University of Utah Names Historic Building After President Monson",
  description: "Some sort of short explination.",
  subtitle: null,
  isStatic: true
};

const Article = props => {
  return (
    <div>
      <Images images={images} />
      <Tile
        url={tile.url}
        title={tile.title}
        subtitle={tile.subtitle}
        description={tile.description}
        isStatic={tile.isStatic}
      />
    </div>
  );
};

Article.propTypes = {};

export default Article;
