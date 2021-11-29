import React from "react";
import format from "date-fns/format";
import NextLink from "next/link";

import { Box } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import { Table, Tr, Th, Td } from "./Table";
import { Link } from "@chakra-ui/layout";
import { Code, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { Switch } from "@chakra-ui/switch";
import { parseISO } from "date-fns";
import RemoveButton from "./RemoveButton";

const FeedbackTable = ({ allFeedback }) => {
  // const userSite = [];
  // userSite.push(sites);

  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Feedback</Th>
          <Th>Route</Th>
          <Th>Visible</Th>
          <Th>{""}</Th>
        </Tr>
      </thead>
      <tbody>
        {allFeedback.map((feedback) => (
          <Box as="tr" key={feedback.id}>
            <Td fontWeight="medium">{feedback.author}</Td>
            <Td>{feedback.text}</Td>
            <Td>
              <Code>{"/"}</Code>
            </Td>
            <Td>
              <Switch
                colorScheme="green"
                size="md"
                defaultIsChecked={feedback.status === "active"}
              />
            </Td>

            <Td>
              <RemoveButton feedbackId={feedback.id} />
            </Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
};

export default FeedbackTable;
