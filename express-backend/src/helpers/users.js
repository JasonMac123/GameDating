const userDisconnects = (list, id) => {
  const newList = list.filter((object) => object.id !== id);
  return newList;
};

const findUser = (list, id) => {
  for (const user of list) {
    if (list.id === id) {
      return user;
    }
  }
  return;
};

module.exports = { userDisconnects, findUser };
