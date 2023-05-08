import { Box, HStack, Text } from "@chakra-ui/core";
import React from "react";
import VoteButtons from "./vote-buttons";
import DeletePost from "./Delete"

const Post = ({ post }) => {
  return (
    <HStack key={post.id} w="100%" alignItems="flex-start">
      <VoteButtons post={post} />
      <Box bg="gray.100" p={4} rounded="md" w="100%">
        <Text>{post.posts}</Text>
        <Text>{post.title}</Text>
      </Box>
      <DeletePost post={post} />
    </HStack>
  );
};

export default Post;
