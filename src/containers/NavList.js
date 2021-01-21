import { connect } from 'react-redux';
import NavList from '../components/Navbar/NavList';

import { toggleMenu } from '../actions/events';

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: (payload) => {
    dispatch(toggleMenu(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavList);
