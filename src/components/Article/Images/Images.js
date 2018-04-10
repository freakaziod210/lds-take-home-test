import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import Description from "../../Tile/Description/Description";

const Container = styled("div")`
  max-width: 800px;
  display: flex;
  flex-direction: column;
`;

const MainImage = styled("img")`
  max-width: 800px;
  max-height: 800px;
  margin: 5px;
`;

const ImageListWrapper = styled("div")`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin: 5px;
`;

const Image = styled("img")`
  max-height: 40px;
`;

class Images extends Component {
  state = {
    selectedImageId: this.props.images[0].id
  };

  render() {
    const { selectedImageId } = this.state;
    const { images } = this.props;
    const selectedImage = images.filter(
      image => image.id === selectedImageId
    )[0];

    return (
      <Container>
        <MainImage src={selectedImage.src} />
        <div style={{ display: "flex" }}>
          <div style={{ widht: 200 }}>
            <Description
              title={selectedImage.title}
              description={selectedImage.caption}
              isStatic={true}
            />
          </div>
          <ImageListWrapper>
            {images.map(image => (
              <Image
                src={image.src}
                key={image.id}
                onClick={() => this.setState({ selectedImageId: image.id })}
              />
            ))}
          </ImageListWrapper>
        </div>
      </Container>
    );
  }
}

Images.propTypes = {
  images: PropTypes.array.isRequired
};

export default Images;
