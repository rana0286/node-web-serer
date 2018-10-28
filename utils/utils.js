const add = (a, b) => a + b;

const square = n => n * n;

const setName = (user, fullName) => {
  const names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
}
module.exports = {
  add,
  square,
  setName
}
