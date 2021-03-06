import React, { Children } from "react";
import { Flex, Link, Stack, Icon, Avatar, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { SiFastapi } from "react-icons/si";

import { useAuth } from "@/lib/auth";
const DashboardShell = ({ children }) => {
  const auth = useAuth();
  return (
    <Flex flexDirection="column">
      <Flex
        backgroundColor="white"
        alignItems="center"
        justifyContent="space-between"
        py={4}
        px={8}
      >
        <Stack spacing={4} isInline align="center">
          <NextLink href="/" passHref>
            {/* <Icon name="logo" color="black" /> */}
            <SiFastapi size="32px" color="black" />
          </NextLink>
          <NextLink href="/feedback" passHref>
            <Link>Feedback</Link>
          </NextLink>
          <NextLink href="/dashboard" passHref>
            <Link>Sites</Link>
          </NextLink>
        </Stack>
        <Flex alignItems="center">
          {auth?.user && (
            <Button
              variant="ghost"
              mr={2}
              transform="scale(0.98)"
              onClick={() => auth.signout()}
            >
              Log Out
            </Button>
          )}
          <Avatar size="sm" src={auth?.user?.photoUrl} />
        </Flex>
      </Flex>
      <Flex
        flexDirection="row"
        backgroundColor="gray.100"
        justifyContent="flex-start"
        alignItems="stretch"
        p={8}
        height="100vh"
      >
        <Flex w="100%" direction="column" maxWidth="800px" ml="auto" mr="auto">
          {children}
        </Flex>
      </Flex>
    </Flex>

    // <Flex flexDirection="column">
    //   <Flex
    //     backgroundColor="white"
    //     alignItems="center"
    //     justifyContent="space-between"
    //     pt={4}
    //     pb={4}
    //   >
    //     <Stack spacing={4} isInline alignItems="center">
    //       <SmallAddIcon boxSize={5} />
    //       <Link>Feedback</Link>
    //       <Link>Sites</Link>
    //     </Stack>
    //     <Flex alignItems="center">
    //       <Link mr={4}>Account</Link>
    //       <Avatar size="sm" />
    //     </Flex>
    //   </Flex>
    //   <Flex
    //     flexDirection="row"
    //     backgroundColor="gray.100"
    //     justifyContent="flex-start"
    //     alignItems="stretch"
    //     p={8}
    //   >
    //     <Flex
    //       justifyContent="center"
    //       alignItems="center"
    //       flexDirection="row"
    //       maxWidth="800px"
    //       ml="auto"
    //       mr="auto"
    //     >
    //       <Flex
    //         flexDirection="column"
    //         alignItems="stretch"
    //         justifyContent="flex-start"
    //       >
    //         <Breadcrumb>
    //           <BreadcrumbItem>
    //             <BreadcrumbLink>Sites/</BreadcrumbLink>
    //           </BreadcrumbItem>
    //         </Breadcrumb>
    //         <Heading>Sites</Heading>
    //         <Box
    //           width="100%"
    //           backgroundColor="whiteAlpha.900"
    //           color="black.500"
    //           opacity={0.97}
    //           borderRadius={8}
    //           p={8}
    //         >
    //           <Heading size="md" as="h2">
    //             Get feedback on your site instantly.
    //           </Heading>
    //           <Text>Start today, then grow with us</Text>
    //           <Button
    //             variant="solid"
    //             size="md"
    //             backgroundColor="black"
    //             color="white"
    //           >
    //             Upgrade to starter
    //           </Button>
    //         </Box>
    //       </Flex>
    //     </Flex>
    //   </Flex>
    //   {children}
    // </Flex>
  );
};

export default DashboardShell;
