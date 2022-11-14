import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import UserAuth from "../../components/UserAuth";

const SignupScreeen = () => {
  return (
    <Layout>
      <UserAuth isLogIn={false} />
    </Layout>
  );
};
export default SignupScreeen;
