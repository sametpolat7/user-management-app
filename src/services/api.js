import db from '../model/db.json';

const database = db;
const users = database.users;

const fetchUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users.length > 0) {
        resolve(users);
      } else {
        reject(console.error('Not users found!'));
      }
    }, 500);
  });
};

const createUser = (newUser) => {
  return new Promise((resolve, reject) => {
    if (!newUser) {
      reject(console.error('User information not available!'));
    } else {
      users.push(newUser);
      resolve('New user added successfully');
    }
  }, 500);
};

export { fetchUsers, createUser };
