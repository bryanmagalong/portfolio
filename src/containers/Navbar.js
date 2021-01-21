// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Navbar from '../components/Navbar';

// Action Creators
import { toggleMenu } from '../actions/events';

const mapStateToProps = (state) => ({
  menuOpened: state.events.menuOpened,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: (payload) => {
    dispatch(toggleMenu(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
