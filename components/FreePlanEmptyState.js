import React from "react";
import { Heading, Box, Text, Button } from "@chakra-ui/react";
import DashboardShell from "./DashboardShell";
const FreePlanEmptyState = () => (
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
        Get feedback on your site instantly.
      </Heading>
      <Text>Start today, then grow with us</Text>
      <Button variant="solid" size="md" backgroundColor="black" color="white">
        Upgrade to starter
      </Button>
    </Box>
  </DashboardShell>
);

export default FreePlanEmptyState;
