import Head from "next/head";
import { useAuth } from "@/lib/auth";
import { Heading, Text, Code } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icon";
import { Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

import EmptyState from "@/components/EmptyState";

const Home = () => {
  const auth = useAuth();
  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
            window.location.href = "/dashboard"
          }
        `,
          }}
        />
        <title>Fast Feedback</title>
      </Head>
      <Heading fontWeight={"heavy"}>Fast Feedback</Heading>
      <Icon color="black" name="logo" size="64px" />

      {auth?.user ? (
        <Button onClick={(e) => auth.signout()}>Sign Out</Button>
      ) : (
        <Button onClick={(e) => auth.signInWithGithub()}>SignIn</Button>
      )}
      {/* 
      <div>{auth?.user?.name}</div>
      {auth.user ? (
        <EmptyState />
      ) : (
        <Button
          variant="link"
          mt={4}
          size="small"
          onClick={(e) => auth.signInWithGithub()}
        >
          SignIn
        </Button>
      )} */}
    </Flex>
  );
};

export default Home;
