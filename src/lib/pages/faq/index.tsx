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
        Skatehive is a crypto skate website where you can make an account, 
        and post your edits and photos in the formm of blog posts.
        Skatehive posts are Hive blockchain posts inside the Skatehive Community.
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
    <Text fontSize={"1.2em"}>You can earn Hive tokens by making Skatehive posts. By voting on Skatehive posts, by commenting on posts, or by earning intrest on the Hive tokens you already have.
    
       </Text>
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
    <Text fontSize={"1.2em"}>The money comes from people upvoting your post.
      
      Imagine if bank accounts were connected to 
        instagram accounts and the amount of money in a bank account determined 
        the value of their "like" on your post. 
        That is how Skatehive works.
      The more Hive Power a voter has, the more their upvote is worth.</Text>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          <Text fontSize={"1.5em"} color={"white"}>Again, WHERE does the money come from?</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Text fontSize={"1.2em"}>

      The crypto tokenomics of Hive work in a way where, 
      when new coins are mined, some go to the miners, and the rest go to whats called the Reward Pool.
      The Reward Pool is a pool of Hive that needs to get distributed to people, in order to give Hive a use-case.
      The amount of Hive Power someone has, determines the weight of their say, 
      in how that reward pool should be "spent".
      So the money comes from a reward pool of mined hive, that must be distributed to people voting on posts!
    </Text>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <Text fontSize={"1.5em"} color={"white"}>Why do some posts get more $$$ than others?</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Text fontSize={"1.2em"}>Skatehive is manually curated by @web-gnar and @knowhow92. 
      The process involves them submitting your post to OCD Nomination. </Text>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <Text fontSize={"1.5em"} color={"white"}>How do I make a good post?</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Text fontSize={"1.2em"}>Think of making Skatehive posts like making a website. 
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
    <Text fontSize={"1.2em"}>You use a crypto exchange like Simple Swap, to convert your Hive to another crypto, like Litecoin, that you can sell for your local currency. 
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
    <Text fontSize={"1.2em"}>In the crypto world, its the same as staking. 
      Staking is when you lock up your crypto and earn intrest on it.
      Hive Power is non-transferable and requires 3 months (13 payments) to convert back to Hive.
      Your Hive power determines the magnitude of your upvote. 
      When you upvote a post, you always get a "curation reward" for essesntially, doing your job, giving value to content. 
      So powering up your Hive allows you to distribute money to others with your upvote.  </Text>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          <Text fontSize={"1.5em"} color={"white"}>What does "delegating" mean?</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Text fontSize={"1.2em"}>You can delegate your Hive Power to other people. 
    What this does is attach your hive power to their account. 
    You can take back your Hive Power at any time.  
    Even when your HP is delegated to someone else, you will earn the Curation Rewards from the amount you delegated. 
    It's good for earning passive Hive if you dont have the time to sit online and upvote things everyday. 
    We encourage users to delegate Hive to the @skatehive account, because the grows the Skatehive Hive account, and also kicks you back a small reward everytime it upvotes something.  </Text>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          <Text fontSize={"1.5em"} color={"white"}>What is this "curation trail" I keep hearing about?</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Text fontSize={"1.2em"}> You can follow another user's Curation Trail, making your account automatically upvote something that another user upvotes. 
    This is similar to delegating your hive to another account, but you get more rewards, and it consumes your accounts vote strength. </Text>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          <Text fontSize={"1.5em"} color={"white"}>Why does my upvote strength get weaker?</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Text fontSize={"1.2em"}> Your upvote strenth is throttled by your Voting Mana. Your voting mana decreases every time you vote, and recharges every 24 hours.  You can control the power of your individual upvotes to slow down Mana degredation, by using the voting slider.</Text>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          <Text fontSize={"1.5em"} color={"white"}>What are Hive Backed Dollars (HBD)?</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Text fontSize={"1.2em"}>Hive Backed Dollars are one dollar's worth of Hive. It is Hive's stablecoin.
      You can convert your Hive into the Hive Backed Dollar stablecoin to preserve your gains. 
      You can then send/recieve your HBD or put it into HBD Savings, 
      which earns 20% APR and pays out every 30 days. </Text>
    </AccordionPanel>
  </AccordionItem>

</Accordion>

    </Box>
  );
};

export default Faq;