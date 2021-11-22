import React from "react";
import { Box } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import { Table, Tr, Th, Td } from "./Table";
import { Link } from "@chakra-ui/layout";
// import sites from "pages/api/sites";

// const SkeletonRow = ({ width }) => (
//   <Box as="tr">
//     <Td>
//       <Skeleton height="10px" w={width} my={4} />
//     </Td>
//     <Td>
//       <Skeleton height="10px" w={width} my={4} />
//     </Td>
//     <Td>
//       <Skeleton height="10px" w={width} my={4} />
//     </Td>
//     <Td>
//       <Skeleton height="10px" w={width} my={4} />
//     </Td>
//   </Box>
// );

const SiteTable = ({ sites }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Site Link</Th>
          <Th>Feedback Link</Th>
          <Th>Date Added</Th>
          <Th>{""}</Th>
        </Tr>
      </thead>
      <tbody>
        {sites.map((site) => (
          <Box as="tr" key={site.id}>
            <Td>{site.name}</Td>
            <Td>{site.url}</Td>
            <Td>
              <Link>View Feedback</Link>
            </Td>
            <Td>{site.createdAt}</Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
};

export default SiteTable;
