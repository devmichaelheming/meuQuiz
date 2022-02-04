import { firebase, auth } from "~/services/firebase";
import React, {
  createContext,
  ReactNode,
  useMemo,
  useState,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";

interface IAuthProps {
  children: ReactNode;
}

interface AuthContextProps {
  signIn: (nome?: string) => Promise<void>;
  user: UserProps;
  signed: boolean;
}

interface UserProps {
  id: string | undefined;
  name: string | undefined | null;
  email?: string | undefined | null;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvider = ({ children }: IAuthProps) => {
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const navigate = useNavigate();

  useEffect(() => {
    function loadStorageData() {
      const UserStorage = localStorage.getItem("@Auth:userData");

      if (UserStorage) {
        setUser(JSON.parse(UserStorage));
      } else {
        navigate("/");
      }
    }

    loadStorageData();
  }, []);

  const signIn = async (nome?: string) => {
    if (nome) {
      setUser({
        id: "aimosdkomakosdm",
        name: nome,
      });

      localStorage.setItem(
        "@Auth:userData",
        JSON.stringify({
          id: "aimosdkomakosdm",
          name: nome,
        })
      );
    } else {
      const provider = new firebase.auth.GoogleAuthProvider();

      const result = await auth.signInWithPopup(provider);

      const { user } = result;

      setUser({
        id: user?.uid,
        name: user?.displayName,
        email: user?.email,
      });

      localStorage.setItem(
        "@Auth:userData",
        JSON.stringify({
          id: user?.uid,
          name: user?.displayName,
          email: user?.email,
        })
      );
    }
  };

  const ContextData = useMemo(
    () => ({ signed: !!user.id, signIn, user }),
    [user]
  );

  return (
    <AuthContext.Provider value={ContextData}>{children}</AuthContext.Provider>
  );
};
