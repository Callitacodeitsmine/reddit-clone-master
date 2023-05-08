import { IconButton, VStack } from "@chakra-ui/core";
import React, {} from "react";
import {FiDelete } from "react-icons/fi";
import db from "../lib/firebase";

const DeletePost = ({ post }) => {

const DeletePost = () => {
  db.collection("posts").doc(post.id).delete();
};
return (
  <>
    <VStack>
      <IconButton
        size="lg"
        colorScheme="red"
        icon={<FiDelete/>}
        onClick={() => DeletePost("Delete")}
      />
    </VStack>
  </>
);
};

export default DeletePost;