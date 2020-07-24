import React from "react";
import { useRecoilState } from "recoil";
import { loginUser } from "../atoms/globalState";

function useLoginUserData() {
  const [loginUserData, setLoginUserData] = useRecoilState(loginUser);

  const data = loginUserData;

  return data;
}
function setLoginUser(x) {
  const [loginUserData, setLoginUserData] = useRecoilState(loginUser);

  setLoginUserData(x);
}

export { useLoginUserData, setLoginUser };
