import Head from "next/head";
import { auth } from "firebase";
import { useAuth } from "@/lib/auth";
import { Heading, Text, Code } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icon";
import { Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

const Home = () => {
  const auth = useAuth();
  return (
    <div className="container">
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <Flex
        as="main"
        direction="column"
        align="center"
        justify="center"
        h="100vh"
      >
        <Heading fontWeight={"heavy"}>Fast Feedback</Heading>
        <Icon color="black" name="logo" size="64px" />
        <Text>
          Current User: <Code>{auth?.user?.email}</Code>
        </Text>
        {!auth?.user && (
          <Button onClick={(e) => auth.signInWithGithub()}>SignIn</Button>
        )}

        <div>{auth?.user?.name}</div>
        {auth?.user && (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        )}
      </Flex>
    </div>
  );
};

export default Home;
