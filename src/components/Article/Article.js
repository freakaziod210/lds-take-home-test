import React from "react";
import Tile from "../Tile/Tile";
import Images from "./Images/Images";
import styled from "react-emotion";

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

const Container = styled("div")`
  display: flex;
  justify-content: center;
`;

const Subtitle = styled("h4")`
  font-size: 14px;
  font-weight: 300;
`;

const Title = styled("h1")`
  font-size: 18px;
  font-weight: 700;
`;
const Article = () => {
  return (
    <Container>
      <div>
        <Subtitle>Article Subtitle</Subtitle>
        <Title>Article Title</Title>
        <Images images={images} />

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <p>
          Where does it come from? Contrary to popular belief, Lorem Ipsum is
          not simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
          Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", comes from a line in section 1.10.32.
        </p>
        <div style={{ float: "right" }}>
          <Tile
            url={tile.url}
            title={tile.title}
            subtitle={tile.subtitle}
            description={tile.description}
            isStatic={tile.isStatic}
          />
        </div>
        <p>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </p>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>
    </Container>
  );
};

export default Article;
