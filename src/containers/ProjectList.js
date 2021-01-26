import { connect } from 'react-redux';

import ProjectList from './../components/Projects/ProjectList';

const mapStateToProps = (state) => ({
  projects: state.projects.list,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
