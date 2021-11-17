import React, { Children } from "react";
import {
  Flex,
  Link,
  Stack,
  Icon,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import { useAuth } from "@/lib/auth";
const DashboardShell = ({ children }) => {
  const auth = useAuth();
  return (
    <Flex flexDirection="column">
      <Flex
        backgroundColor="white"
        alignItems="center"
        justifyContent="space-between"
        p={4}
      >
        <Stack spacing={4} isInline alignItems="center">
          <Icon name="logo" color="black" />
          <Link>Feedback</Link>
          <Link>Sites</Link>
        </Stack>
        <Flex alignItems="center">
          <Link mr={4}>Account</Link>
          <Avatar size="sm" src={auth.user.photoUrl} />
        </Flex>
      </Flex>
      <Flex
        flexDirection="row"
        backgroundColor="gray.100"
        justifyContent="flex-start"
        alignItems="stretch"
        p={8}
      >
        <Flex w="100%" direction="column" maxWidth="800px" ml="auto" mr="auto">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink>Sites/</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading>Sites</Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
