import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import Description from "../../Tile/Description/Description";

const Container = styled("div")`
  width: 1000px;
  display: flex;
  flex-direction: column;
`;

const MainImage = styled("img")`
  max-width: 1000px;
  max-height: 600px;
  padding-bottom: 5px;
`;

const BottomSection = styled("div")`
  display: flex;
`;

const DescriptionWrapper = styled("div")`
  margin-right: 5px;
`;

const ImageListWrapper = styled("div")`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Image = styled("img")`
  max-height: 40px;
  margin-left: 5px;
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
        <BottomSection>
          <DescriptionWrapper>
            <Description
              title={selectedImage.title}
              description={selectedImage.caption}
              isStatic={true}
            />
          </DescriptionWrapper>
          <ImageListWrapper>
            {images.map(image => (
              <Image
                src={image.src}
                key={image.id}
                onClick={() => this.setState({ selectedImageId: image.id })}
              />
            ))}
          </ImageListWrapper>
        </BottomSection>
      </Container>
    );
  }
}

Images.propTypes = {
  images: PropTypes.array.isRequired
};

export default Images;
