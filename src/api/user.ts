import { getAuth } from "firebase/auth";
export class User {
  getMe() {
    const data = getAuth();
    return data.currentUser;
  }
}
