import axios from 'axios'

const url = "/api";

export const getAllUsers = async () => {
  const response = await axios.get(`${url}/users`);
  return response.data.users;
}

export const addUser = async (user) => {
  return await axios.post(`${url}/users`, user);
}

export const getUserById = async (id) => {
  const response = await axios.get(`${url}/users/${id}`);
  return response.data.user;
}

export const updateUser = async (id, user) => {
  return await axios.put(`${url}/users/${id}`, user);
}

export const deleteUserById = async (id) => {
  return await axios.delete(`${url}/users/${id}`);
}