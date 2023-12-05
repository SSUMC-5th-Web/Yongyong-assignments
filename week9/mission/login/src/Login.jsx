import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  //   const handleLogin = async (e) => {
  //     e.preventDefault();
  //     const userName = e.target[0].value;
  //     const userPW = e.target[1].value;
  //     console.log(userName, userPW);
  //     try {
  //       const response = await axios.post("http://localhost:8000/user/login", {
  //         userName,
  //         userPW,
  //       });
  //       console.log(response.data);
  //       console.log("HIHI");
  //     } catch (error) {
  //       console.log("에러발생");
  //       console.log(error);
  //     }
  //   };
  const [id, setId] = useState(null);
  const [pw, setPw] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (e.target[0].value == "") {
      return alert("아이디를 입력하세요!");
    } else if (e.target[1].value == "") {
      return alert("비밀번호를 입력하세요!");
    }
    try {
      const response = await axios.post("http://localhost:8000/user/login", {
        id,
        pw,
      });
      if (response.status == 200) {
        alert(`${id}님 환영합니다.`);
        setIsLoggedIn(true);
        console.log(response);
        localStorage.setItem("accessToken", response.data.result.AccessToken);
        localStorage.setItem("id", response.data.result.userId);
      }
    } catch (error) {
      if (error.response.status == 404) {
        alert("로그인 실패! 아이디와 비밀번호를 확인해주세요.");
        e.target[0].value = "";
        e.target[1].value = "";
      }
      console.log(error);
    }
  };
  return (
    <div>
      {isLoggedIn ? (
        <div>{id}님 안녕하세요!</div>
      ) : (
        <form className="loginForm" onSubmit={handleLogin}>
          <div>
            <label htmlFor="ID">아이디</label>
            <input
              type="text"
              id="ID"
              onChange={(e) => setId(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="PW">비밀번호</label>
            <input
              type="password"
              id="PW"
              onChange={(e) => setPw(e.target.value)}
            ></input>
          </div>
          <button>로그인</button>
        </form>
      )}
    </div>
  );
}
