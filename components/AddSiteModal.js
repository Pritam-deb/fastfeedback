import { useRef } from "react";
import { useForm } from "react-hook-form";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import useSWR, { mutate } from "swr";

import { createSite } from "@/lib/db";
import { useAuth } from "@/lib/auth";
import fetcher from "@/utils/fetcher";

function AddSiteModal({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const auth = useAuth();
  const initialRef = useRef();
  const { handleSubmit, register } = useForm();
  const { data } = useSWR("/api/sites", fetcher);

  const onCreateSite = ({ name, url }) => {
    const newSite = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      name,
      url,
    };
    const { id } = createSite(newSite);
    toast({
      title: "Success!",
      description: "We've your site.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    mutate(
      ["/api/sites", auth.user.token],
      async (data) => ({ sites: [...data.sites, { id, ...newSite }] }),
      false
    );
    onClose();
  };

  return (
    <>
      {/* <Button
        backgroundColor="black"
        color="white"
        maxW="200px"
        fontWeight="medium"
        _hover={{ color: "black", bg: "white" }}
        _active={{
          transform: "scale(0.98)",
        }}
        onClick={onOpen}
      >
        Add Your First Site
      </Button> */}

      <Button
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        _hover={{ bg: "gray.700" }}
        _active={{ bg: "gray.800", transform: "scale(0.95)" }}
        onClick={onOpen}
      >
        {children}
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader fontWeight="heavy">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Add Site"
                {...register("name", { required: true, maxLength: 20 })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder="https://website.com"
                {...register("url", { required: true })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              Cancel
            </Button>
            <Button
              backgroundColor="#99FFFE"
              color="#194D4C"
              fontWeight="medium"
              mr={3}
              type="submit"
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddSiteModal;
