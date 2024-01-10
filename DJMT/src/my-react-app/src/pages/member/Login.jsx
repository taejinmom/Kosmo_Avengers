import { useQuery } from "react-query";
import "./Member.css";
import { inputHandler } from "./reactQuery/MemberHandler";

import { isLogin, memberDataAtom } from "./atom/LoginAtom";
import { useRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import request from "../../api/core";

const Login = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies([]);
  // const [loginData, setLoginData] = useRecoilState(LoginDataAtom);
  const [isLoginCheck, setIsLogincheck] = useRecoilState(isLogin);
  const [memberData, setMemberData] = useRecoilState(memberDataAtom);
  const navigate = useNavigate();
  // 로그인
  const loginHandler = () => {
    return request.post("login", memberData, {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
  };
  const onError = (error) => {
    console.log("onError!! >> ", error);
  };
  const onSuccess = (data) => {
    setCookie("jwtToken", data.tokenData.accessToken);
    setCookie("refreshToken", data.tokenData.refreshToken);
    setIsLogincheck(true);
    setMemberData(data.memberData);
    // navigate("/", {
    //   state: {
    //     value: "1234",
    //   },
    // });
    // window.location.reload();
  };
  console.log("memberData >>>> ", memberData);
  const { data, isError, error, refetch } = useQuery("login", loginHandler, {
    cacheTime: 3000,
    enabled: false,
    staleTime: 3000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    onSuccess,
    onError,
  });
  // 로그인 -> home 상태에서 뒤로가기 시 home으로 강제 리턴
  useEffect(() => {
    if (isLoginCheck) {
      navigate("/");
    }
  });

  return (
    <>
      <div className="login">
        <div className="inner">
          <h2 className="title">로그인</h2>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // login(loginData, setCookie, navigate, setIsLogincheck);
              }}
              method="POST"
            >
              <span>ID</span>
              <br />
              <input
                type="text"
                name="login_id"
                id="login_id"
                onChange={(event) => {
                  inputHandler(event, memberData, setMemberData);
                }}
              />
              <br />
              <span>Password</span>
              <br />
              <input
                type="password"
                name="login_pw"
                id="login_pw"
                onChange={(event) => {
                  inputHandler(event, memberData, setMemberData);
                }}
              />
              <br />
              <button type="submit" onClick={refetch}>
                입력
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
