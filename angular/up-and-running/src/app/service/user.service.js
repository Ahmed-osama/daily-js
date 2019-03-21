import { injectable } from '@angular/core';
import users from './users.mock';

class UserService {
  getUsers() {
    return users;
  }
}

export default UserService;
