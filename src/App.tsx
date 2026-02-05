import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { LoggedNavigation } from "./routes";
import { Auth } from "./pages";

export default function App() {
  const [user, setUser] = useState<undefined | any>(undefined);
  const auth = getAuth();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  if (user === undefined) return null;

  console.log("User state:", user);
  return user ? <LoggedNavigation /> : <Auth />;
}
