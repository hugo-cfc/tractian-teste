import React, { useState, createContext, useEffect } from "react";

import { DataUsers, Units, Assets, ContextProps } from "../utils/interfaces";

import api from "../services/api";
import history from "../history";

const AuthCreateContext = createContext<Partial<ContextProps>>({});

const AuthProvider: React.FC = ({ children }) => {
  const [dataUsers, setdataUsers] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [units, setUnits] = useState([]);
  const [currentUser, setCurrentUser] = useState<DataUsers>({});
  const [authenticated, setAuthenticated] = useState(false);
  const [assets, setAssets] = useState([]);
  const assetsUnit1 = [] as any;
  const assetsUnit2 = [] as any;
  const usersUnit1 = [] as any;
  const usersUnit2 = [] as any;
  const avatarName = `${currentUser?.name?.split(" ")[0].charAt(0)}${currentUser?.name?.split(" ")[1].charAt(0)}`;

  useEffect(() => {
    (async () => {
      const { data } = await api.get("users");

      setdataUsers(data);
    })();

    (async () => {
      const { data } = await api.get(`companies`);

      setCompanies(data);
    })();

    (async () => {
      const { data } = await api.get(`units`);

      setUnits(data);
    })();

    (async () => {
      const { data } = await api.get(`assets`);

      setAssets(data);
    })();
  }, []);

  function getAssets() {
    assets.map((item: Assets, i) => {
      if (item.unitId === 1) {
        assetsUnit1.push(item);
      }
      if (item.unitId === 2) {
        assetsUnit2.push(item);
      }
    });
  }

  function getUsers() {
    dataUsers.map((item: Assets) => {
      if (item.unitId === 1) {
        usersUnit1.push(item);
      }
      if (item.unitId === 2) {
        usersUnit2.push(item);
      }
    });
  }

  function authentication(state: boolean) {
    setAuthenticated(state);
    localStorage.setItem("authentication", String(authenticated));
  }

  function emailValidation() {
    return dataUsers?.map((item: DataUsers) => {
      if (item.email === localStorage.getItem("email")) {
        setCurrentUser(item);
        authentication(true);
      }
      return true;
    });
  }

  const collectDataUser = () => {
    (async () => {
      const { data } = await api.get(`units/${currentUser?.unitId}`);

      currentUser.unitName = data.name;
    })();

    (async () => {
      const { data } = await api.get(`companies/${currentUser?.companyId}`);

      currentUser.companyName = data.name;
    })();

    getAssets();
    getUsers();
  };

  const redirector = (route: string) => history.push(route);

  function handleInputChange(e: any) {
    localStorage.setItem("email", e.target.value);
    emailValidation();
  }

  const handleLogin = (e: any) => {
    if (authenticated) redirector("/home");
    collectDataUser();
  };

  function handleLogout(e: any) {
    authentication(false);
    localStorage.clear();
    redirector("/");
  }

  return (
    <AuthCreateContext.Provider
      value={{
        handleLogin,
        handleLogout,
        handleInputChange,
        currentUser,
        authenticated,
        companies,
        units,
        avatarName,
        assets,
        assetsUnit1,
        assetsUnit2,
        usersUnit1,
        usersUnit2,
      }}
    >
      {children}
    </AuthCreateContext.Provider>
  );
};

export { AuthCreateContext, AuthProvider };
