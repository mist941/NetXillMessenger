import {Image} from './Image';

export interface User {
  id: string,
  name: string,
  lastName: string,
  userName: string,
  email: string,
  password: string,
  createdAt: string,
  deletedAt: string,
  updatedAt: string,
  userImage: Image,
  salt: string,
}

export interface UserDTO {
  userName: string,
  email: string,
  password: string,
}