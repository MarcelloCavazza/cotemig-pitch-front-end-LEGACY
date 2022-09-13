import logo from '../../assets/logo-placeholder.svg';
import PropTypes from 'prop-types';

const Logo = ({tamanho}) => {
  return (
    <img src={logo} alt="" width={tamanho} height={tamanho} />
  )
};

Logo.propTypes = {
  tamanho: PropTypes.number.isRequired
}

Logo.defaultProps = {
  tamanho: 64
}

export default Logo;