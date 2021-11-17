import React from "react";
import { Heading, Box, Text, Button } from "@chakra-ui/react";
import DashboardShell from "./DashboardShell";
const EmptyState = () => (
  <DashboardShell>
    <Box
      width="100%"
      backgroundColor="whiteAlpha.900"
      color="black.500"
      opacity={0.97}
      borderRadius={8}
      p={8}
    >
      <Heading size="md" as="h2">
        You haven't added any sites.
      </Heading>
      <Text>Welcome. Let's get started.</Text>
      <Button variant="solid" size="md" backgroundColor="black" color="white">
        Add Your First Site
      </Button>
    </Box>
  </DashboardShell>
);

export default EmptyState;
