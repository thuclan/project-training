const convertDate = (value) => {
  const localDate = new Date(value).toLocaleString();
  return localDate;
};
export default convertDate;
