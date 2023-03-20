const userDisconnects = (list, id) => {
  const newList = list.filter((object) => object.id !== id);
  return newList;
};

module.exports = { userDisconnects };
