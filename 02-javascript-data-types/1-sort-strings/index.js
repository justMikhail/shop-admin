/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const copyArr = arr.slice();

  const getSort = (arrayForSort, direction) => {
    return copyArr.sort((one, two) =>
      direction * one.localeCompare(two, [`ru`, `en`], {caseFirst: `upper`}));
  };

  switch (param) {
  case `asc`:
    return getSort(arr, 1);
  case `desc`:
    return getSort(arr, -1);
  default:
    return arr;
  }
}
