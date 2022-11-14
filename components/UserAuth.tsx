import Link from "next/link";
import { useRouter } from "next/router";
import React, {
  ChangeEvent,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import styled from "styled-components";
import UserContext from "../contexts/userContext";

type Props = {
  isLogIn: boolean;
};
const UserAuth: FC<Props> = ({ isLogIn }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [nameChecker, setNameChecker] = useState("");
  const [pwChecker, setPwChecker] = useState("");

  const checkUserName = (event) => {
    setUserName(event.target.value);
    if (event.target.value.length === 0) {
      setNameChecker("아이디를 입력해주세요.");
    } else if (event.target.value.length > 12) {
      setNameChecker("12자..");
    } else {
      setNameChecker("");
    }
  };

  const logIn = () => {
    console.log("로그인");
  };

  const signUp = () => {
    console.log("싸인업");
  };

  useEffect(() => {
    if (password.length === 0) return;

    if (password.length < 6 || password.length > 12) {
      setPwChecker("6글자에서 12글자 사이로 입력해주세요.");
    } else if (!isLogIn && password !== password2) {
      setPwChecker("일치안함");
    } else {
      setPwChecker("");
    }
  }, [password, password2]);
  return (
    <Container>
      <Wrapper>
        <Label>username</Label>
        <Input onChange={checkUserName} />
        <Checker>{nameChecker}</Checker>
        <Label>password</Label>
        <Input
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        />
        <Checker>{pwChecker}</Checker>
        {!isLogIn && (
          <>
            <Label>password check</Label>
            <Input
              onBlur={(event) => setPassword2(event.target.value)}
              type="password"
            />
          </>
        )}
        {isLogIn ? (
          <>
            <LoginBtn onClick={logIn}>log in</LoginBtn>
            <SignUp href="/signup">sign up</SignUp>
          </>
        ) : (
          <>
            <LoginBtn onClick={signUp}>sign up</LoginBtn>
            <SignUp href="/">log in</SignUp>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aliceblue;
  padding: 10px;
  border-radius: 8px;
`;

const Label = styled.h2``;

const Input = styled.input`
  width: 200px;
`;

const Checker = styled.div`
  color: red;
`;
const PwChecker = styled.div``;

const LoginBtn = styled.button`
  width: 200px;
  height: 35px;
  border-radius: 8px;
  background-color: antiquewhite;
  margin: 20px 0px;
  &:hover {
    font-weight: 700;
  }
`;

const SignUp = styled.a`
  text-decoration: underline;
`;

export default UserAuth;
