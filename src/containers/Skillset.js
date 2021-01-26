import { connect } from 'react-redux';
import Skillset from './../components/Skillset';

const mapStateToProps = (state) => ({
  skills: state.skillset.skillList,
  tools: state.skillset.toolList,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Skillset);
