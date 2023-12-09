import React, { useState, useEffect } from 'react';
import { Box, Text, Flex, VStack, Image, HStack } from '@chakra-ui/react';
import axios from 'axios';

interface CommunityTotalPayout {
  totalHBDPayout: number;
}

const NewFeature: React.FC = () => {


  return (
    <center>
      <Box
        margin="0px"
        padding="5px"
        maxWidth="340px"
        borderRadius="md"
        boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
        background="linear-gradient(45deg, limegreen, white)"
        color="white"
        border={"2px solid limegreen"}

      >



          <Flex justifyContent="center" flexDirection="column" alignItems="center">
            <HStack>

            <Text fontSize="28px" marginBottom="5px">
            🗣
            </Text>
            <Text color={"black"} fontSize="18px" fontWeight="bold" marginBottom="5px">
              New !!! 
            </Text>
            <a href='http://skatehive.app/wallet'>
            <Text color={"black"} fontSize="12px"> Set your Gnars NFT as PFP ! </Text>
            </a>
            </HStack>
            
          </Flex>
        
      </Box>
    </center>
  );
};

export default NewFeature;