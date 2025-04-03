export const getUsers = () => {
    return JSON.parse(localStorage.getItem("users")) || [];
  };
  
  export const addUser = (user) => {
    const users = getUsers();
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  };
  
  export const updateUser = (index, updatedUser) => {
    const users = getUsers();
    users[index] = updatedUser;
    localStorage.setItem("users", JSON.stringify(users));
  };
  
  export const deleteUser = (index) => {
    const users = getUsers();
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
  };
  