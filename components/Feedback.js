import { Heading, Text, Divider, Box } from "@chakra-ui/layout";
import { parseISO, format } from "date-fns";
import React from "react";

const Feedback = ({ author, text, createdAt }) => {
  return (
    <Box borderRadius={4} maxWidth="700px" w="full">
      <Heading size="sm" as="h3" mb={0} color="gray.900" fontWeight="heavy">
        {author}
      </Heading>
      <Text color="gray.500" mb={4} fontSize="xs">
        {format(parseISO(createdAt), "pPpp")}
      </Text>
      <Text color="gray.800">{text}</Text>
      <Divider borderColor="gray.200" background="gray.200" mb={4}></Divider>
    </Box>
  );
};

export default Feedback;
