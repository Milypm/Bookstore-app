import PropTypes from 'prop-types';

const CategoryFilter = (props) => {
  console.log('change category');
  const { handleFilterChange } = props;
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
      <select id="filterCategories" name="filterCategories" onChange={(e) => handleFilterChange(e)}>
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
};
export default CategoryFilter;
