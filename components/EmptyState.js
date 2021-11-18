import React from "react";
import { Heading, Flex, Text, Button } from "@chakra-ui/react";
import DashboardShell from "./DashboardShell";
import AddSiteModal from "./AddSiteModal";
const EmptyState = () => (
  <DashboardShell>
    <Flex
      width="100%"
      backgroundColor="whiteAlpha.900"
      color="black.500"
      borderRadius={8}
      p={16}
      justify="center"
      direction="column"
      align="center"
    >
      <Heading size="lg" as="h2" mb={2}>
        You haven't added any sites.
      </Heading>
      <Text mb={4}>Welcome. Let's get started.</Text>
      {/* <Button
        backgroundColor="black"
        color="white"
        maxW="200px"
        fontWeight="medium"
      >
        Add Your First Site
      </Button> */}
      <AddSiteModal />
    </Flex>
  </DashboardShell>
);

export default EmptyState;
