import styled from 'styled-components'
import colors from '../../global-styles/colors'
import userDefault from '../../assets/user-default.jpg'

const ProfileImage = ({imageLink, width, height}) => {
  return (
    <Image width={width ? width : 50} height={width ? height : width} src={imageLink ? imageLink : userDefault} />
  )
}

const Image = styled.img`
  border-radius: 100%;
  border: 2px solid transparent;
  outline: 2px solid ${props => props.outline ? colors.chatroomBorderRight : 'transparent'};
`

export default ProfileImage