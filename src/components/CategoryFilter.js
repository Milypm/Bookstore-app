const CategoryFilter = (changeFilter) => {
  console.log(changeFilter);
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
      <select id="filterCategories" name="filterCategories" onChange={changeFilter}>
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
export default CategoryFilter;
