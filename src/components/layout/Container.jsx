import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return <div className='mainLayout'>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
