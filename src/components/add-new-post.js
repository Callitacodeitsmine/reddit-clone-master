import {
  Button,
  FormControl,
  FormLabel,
  Textarea,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  HStack,
  useDisclosure,
} from "@chakra-ui/core";
import React, { useState } from "react";
import db from "../lib/firebase";

const AddNewPost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [posts, setposts] = useState("");
  const [isSaving, setSaving] = useState(false);

  const handleSubmit = async () => {
    setSaving(true);

    const date = new Date();

    await db.collection("posts").add({
      title,
      posts,
      upVotesCount: 0,
      downVotesCount: 0,
      createdAt: date.toUTCString(),
      updatedAt: date.toUTCString(),
    });

    onClose();
    setTitle("");
    setSaving(false);
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue" >
        Add new post
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Add new post</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              <FormControl id="post-posts">
                <FormLabel bg="gray.100" p={4} rounded="md" w="100%">Post Heading</FormLabel>
                <Textarea
                  type="post-posts"
                  value={posts}
                  onChange={(e) => setposts(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalBody>
              <FormControl id="post-title">
                <FormLabel>Post title</FormLabel>
                <Textarea
                  type="post-title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <HStack spacing={4}>
                <Button onClick={onClose}>Close</Button>
                <Button
                  onClick={handleSubmit}
                  colorScheme="blue"
                  disabled={!title.trim()}
                  isLoading={isSaving}
                >
                  Save
                </Button>
              </HStack>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>

      
    </>
  );
};

export default AddNewPost;
