export const Capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const genOrderByFirstItem = (title:string) => {
  switch (title) {
    case 'Users':
      return 'name'
    case 'Posts':
      return 'title'
    case 'Comments':
      return 'content'
    default:
      return false
  }
}
const genOrderByItems = (title:string) => {
  if (genOrderByFirstItem(title) === false) {
    return [
      { value: 'id', label: 'Id' },
      { value: 'createdAt', label: 'Created At' },
      { value: 'updatedAt', label: 'Updated At' }
    ];
  }

  return [
      { value: 'id', label: 'Id' },
      { value: String(genOrderByFirstItem(title)).toLowerCase(), label: Capitalize(String(genOrderByFirstItem(title)))},
      { value: 'createdAt', label: 'Created At' },
      { value: 'updatedAt', label: 'Updated At' }
    ];
};