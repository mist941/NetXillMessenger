import {Image} from './Image';

export interface User {
  id: string,
  name: string,
  last_name: string,
  user_name: string,
  email: string,
  password: string,
  created_at: string,
  deleted_at: string,
  updated_at: string,
  userImage: Image,
}