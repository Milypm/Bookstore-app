import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryFilter from '../components/CategoryFilter';
import { changeFilter } from '../actions/index';
import '../styles/navbar.css';

const Navbar = (props) => {
  const { filter } = props;
  const handleFilterChange = (e) => {
    props.changeFilter(e.target.value);
  };
  return (
    <navbar className="navbar">
      <div className="div-title-filter">
        <h1>Bookstore CMS</h1>
        <h4>Books</h4>
        <CategoryFilter handleFilterChange={handleFilterChange} filterValue={filter} />
      </div>
      <div className="div-icon">
        <i className="fas fa-user-astronaut" />
      </div>
    </navbar>
  );
};
Navbar.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  filter: state.filter,
});
const mapDispatchToProps = (dispatch) => ({
  changeFilter: (value) => {
    dispatch(changeFilter(value));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
