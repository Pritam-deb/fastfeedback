import React from "react";
import format from "date-fns/format";
import NextLink from "next/link";

import { Box } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import { Table, Tr, Th, Td } from "./Table";
import { Link } from "@chakra-ui/layout";
import { parseISO } from "date-fns";

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
          <Box as="tr" key={sifeedbackte.id}>
            <Td fontWeight="medium">{feedback.name}</Td>
            <Td>{feedback.text}</Td>
            <Td>
              <Code>{"/"}</Code>
            </Td>
            <Td>{"Remove"}</Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
};

export default FeedbackTable;
