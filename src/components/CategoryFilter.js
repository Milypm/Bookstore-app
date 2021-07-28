import PropTypes from 'prop-types';

const CategoryFilter = (props) => {
  const { handleFilterChange, filterValue } = props;
  const filterCategories = [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  return (
    <form>
      <select id="filterCategories" name="filterCategories" onChange={handleFilterChange()} value={filterValue}>
        {
          filterCategories.map((filterCategory) => (
            <option key={filterCategory} value={filterCategory.toLowerCase()}>
              {filterCategory}
            </option>
          ))
        }
      </select>
    </form>
  );
};
CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};
export default CategoryFilter;
