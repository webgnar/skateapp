import { 
  Box, 
  Heading, 
  Text, 
  Image, 
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  extendTheme,
 } from "@chakra-ui/react";

const Faq = () => {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={5}>
        Skatehive
      </Heading>
      <Heading as="h2" size="lg" mb={2}>
         What is Skatehive?
        </Heading>

      
      <Box display={"flex"}>
        
        <Text mb={5} width={"50%"}
          paddingRight={"15%"}
          fontSize={"1.2em"}
        >
        Skatehive is a crypto skate website where you can make an account, and post your edits and photos in the formm of blog posts.
        </Text>
        <Box display={"flex"} 
        justifyContent={"space-between"}
        width={"50%"}
        >
          
        <Image 
        src = "https://images.hive.blog/0x0/https://files.peakd.com/file/peakd-hive/web-gnar/23x171qmVNgdVHBrj2RCXBYZUp2y2RWTuUG67SqUqq2BUKv3dQEbz68eUurHfxehCMs8w.gif"
        alt = "skatehive old logo"
        maxHeight={"200px"}
        ></Image>
          
        
        <Box mb={5} width={"50%"}>
        <Heading >
          We Built Skatehive
        </Heading>
        <Text>
        Because we were sick of giving away our data for free to platforms like instagram and youtube.
        </Text>
        </Box>
        </Box>
      </Box>

      

      <Box display={"flex"} justifyItems={"end"}>
        <Heading as="h2" size="lg" mb={2}>
         Wallets
        </Heading>
        <Text mb={5}>
         To manage your Hive tokens on Skatehive, you first need to create a wallet. A wallet is a software tool that helps manage your digital assets like cryptocurrencies.
        </Text>
      </Box>
      <Heading as="h2" size="lg" mb={2}>
        Login
      </Heading>
      <Text mb={5}>
        Users can login to Skatehive using dhive. The login process involves using the Hive Keychain and the user's username.
      </Text>

      <Accordion defaultIndex={[0]} allowMultiple allowToggle>
        <Heading>Skatehive FAQ</Heading>
        <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <Text fontSize={"1.5em"} color={"white"}>How do I make money on Skatehive?</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Text>You can earn Hive tokens anytime you send a transaction on the blockchain. 
      Any time you comment, vote, or post, you are creating a Hive transaction subject to the tokenomics of Hive. </Text>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          <Text fontSize={"1.5em"} color={"white"}>Where does the money come from?</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Text>The money comes from the upvotes that your post gets. 
      The more Hive Power you have (staked hive) the more your upvote is worth.</Text>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <Text fontSize={"1.5em"} color={"white"}>What causes some posts to get more rewards than others?</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Text>Skatehive is manually curated by @web-gnar and @knowhow92. 
      The process involves them submitting your post to OCD Nomination. </Text>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <Text fontSize={"1.5em"} color={"white"}>How do I make a post that gets me a strong upvote?</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Text>Think of making Skatehive posts like making a website. 
      There is a lot you can do in a post that is similar to how you make a webpage. 
      You can add Images, Gifs, text, some HTML markup, and Video. 
      The more brainpower and data you put into your post, the more valuable it is. 
      Hint: the curators favor the English language, and are visual people. 
      When writing your Skatehive post, make the curators excited, and involve the community by tagging other members and help make Skatehive a kind of digital skate magazine. </Text>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          <Text fontSize={"1.5em"} color={"white"}>How do I cash out my Hive for real money?</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Text>You use a crypto exchange like Simple Swap, to convert your Hive to another crypto, like Litecoin, that you can sell for your local currency. 
      Some exchanges like Binance allow you to sell Hive directly to USD or your local currency.</Text>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          <Text fontSize={"1.5em"} color={"white"}>What is "powering up" Hive?</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Text>In the crypto world, its the same as Staking. 
      Your Hive power determines the magnitude of your upvote, when you upvote posts. 
      When you upvote a post, you always get a "curation reward" for essesntially, doing your job, giving value to content.  </Text>
    </AccordionPanel>
  </AccordionItem>

</Accordion>

    </Box>
  );
};

export default Faq;