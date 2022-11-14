import Link from "next/link";
import { useRouter } from "next/router";
import React, {
  ChangeEvent,
  FC,
  useCallback,
  useContext,
  useState,
} from "react";
import styled from "styled-components";
import UserContext from "../contexts/userContext";

type Props = {};
const UserAuth: FC<Props> = () => {
  const { signup, login } = useContext(UserContext);
  const router = useRouter();

  return <Container>로그인 / 회원가입 컴포넌트를 만들어주세요</Container>;
};

const Container = styled.div`
  display: flex;
`;

export default UserAuth;
