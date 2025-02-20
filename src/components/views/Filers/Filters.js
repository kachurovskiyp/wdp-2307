import React from 'react';
import styles from './Filters.module.scss';
import FilterByCategory from '../../features/FilterByCategory/FilterByCategory';
import FilterBySize from '../../features/FilterBySize/FilterBySize';
import FilterByColors from '../../features/FilterByColors/FilterByColors';

const Filters = () => {
  return (
    <div className={styles.roots}>
      <FilterByColors />
      <FilterByCategory />
      <FilterBySize />
    </div>
  );
};

export default Filters;
