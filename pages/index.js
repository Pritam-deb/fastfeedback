import Head from "next/head";
import { useAuth } from "@/lib/auth";
import { Heading, Text, Code } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icon";
import { Flex, Stack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";

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
      {/* <Icon color="black" name="logo" size="64px" /> */}
      <SiFastapi size="64px" />

      {auth?.user ? (
        <Button onClick={(e) => auth.signout()}>Sign Out</Button>
      ) : (
        <Stack>
          <Button
            leftIcon={<FaGithub />}
            mt={4}
            size="md"
            backgroundColor="gray.900"
            color="white"
            fontWeight="medium"
            _hover={{ bg: "gray.700" }}
            _active={{ bg: "gray.800", transform: "scale(0.95)" }}
            onClick={(e) => auth.signInWithGithub()}
          >
            Sign in with Github
          </Button>
          <Button
            leftIcon={<FaGoogle />}
            mt={4}
            size="md"
            backgroundColor="white"
            color="gray.900"
            fontWeight="medium"
            _hover={{ bg: "gray.100" }}
            _active={{ bg: "gray.100", transform: "scale(0.95)" }}
            onClick={(e) => auth.signInWithGoogle()}
          >
            Sign in with Google
          </Button>
        </Stack>
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
