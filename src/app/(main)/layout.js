"use client";

import { useEffect, useState } from 'react';
import { getCookie, setCookie, deleteCookie, hasCookie } from 'cookies-next';

import Loading from '@/app/loading';
import TokenCheck from '@/api/token-check';
import RefreshToken from '@/api/refresh-token';
import styles from '@/components/main/main.module.css';
import Sidebar from '@/components/main/sidebar/Sidebar';
import { IsLogin } from '@/components/main/LoginContext';

export default async function MainLayout({ children }) {

  const [data, setData] = useState(null);
  const [isLogin, setIsLogin] = useState(null);
  
  useEffect(() => {
    async function getNewToken(refreshToken) {
      const res = await RefreshToken(refreshToken);
    
      if (res.status === "200") {
        setCookie("auth", res.data.token);
        setCookie("refreshAuth", res.data.refreshToken);
    
        return;
      } else {
        deleteCookie("auth");
        deleteCookie("refreshAuth");
    
        return;
      }
    };

    async function getLoginData() {
      if (hasCookie("auth")) {
        const res = await TokenCheck(getCookie("auth"));
      
        if (res.status === "200") {
          return res;
        } else if (res.status === "-3") {
          await getNewToken(getCookie("refreshAuth"));
    
          return await getLoginData();
        } else {
          return false;
        }
      } else {
        return false;
      }
    };

    async function fetchData() {
      const resData = await getLoginData();

      setData(resData);
      setIsLogin(!!resData);
    }
    fetchData();
  }, []);

  return (isLogin === null || data === null) ? (<Loading />) : (
    <main className="w-screen h-screen flex">
      <div className="grow h-screen bg-slate-900"></div>
      <IsLogin.Provider value={{ isLogin }}>
        <div className="grow-0 h-screen flex">
          <Sidebar image={data.data ? data.data.image : ""} name={data.data ? data.data.name : ""} username={data ? data.data.username : ""} />
          <div className={`${styles.mainScrollbar} overflow-y-auto`}>
            {children}
          </div>
        </div>
      </IsLogin.Provider>
      <div className="grow h-screen"></div>
    </main>
  );
}