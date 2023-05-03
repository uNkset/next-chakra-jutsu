import { Box, Flex, useColorModeValue } from '@chakra-ui/react';

export default function NavBar() {
  return (
    <Box>
      <Flex bg={useColorModeValue('white', 'gray.800')}>
        <h2>sup niggas</h2>
      </Flex>
    </Box>
  );
}
