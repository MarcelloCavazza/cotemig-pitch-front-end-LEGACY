import styled from "styled-components";
import colors from "../../global-styles/colors";
import userDefault from "../../assets/user-default.jpg";
import PropTypes, { string } from "prop-types";

const ProfileImage = ({ imageLink, width, height, outline }) => {
  return (
    <Image
      width={width ? width : 50}
      height={width ? height : width}
      src={imageLink ? imageLink : userDefault}
      outline={outline}
    />
  );
};

ProfileImage.propTypes = {
  imageLink: PropTypes.string,
  outline: PropTypes.bool,
};

ProfileImage.defaultProps = {
  outline: false,
};

const Image = styled.img`
  border-radius: 100%;
  border: 2px solid transparent;
  outline: 2px solid
    ${(props) => (props.outline ? colors.chatroomBorder : "transparent")};
`;

export default ProfileImage;
