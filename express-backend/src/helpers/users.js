const userDisconnects = (list, id) => {
  const newList = list.filter((object) => object.id !== id);
  return newList;
};

const findUser = (list, id) => {
  for (const user of list) {
    if (user.user === id) {
      return user;
    }
  }
  return;
};

module.exports = { userDisconnects, findUser };
