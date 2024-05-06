import { Box, Flex, Heading, Text, VStack, Link, IconButton, Container } from '@chakra-ui/react';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" w="full" p={4} position="fixed" bg="white" zIndex="banner" boxShadow="sm">
        <Flex justify="space-between" align="center" maxW="container.md" m="0 auto">
          <Heading as="h1" size="lg">Lovable.dev</Heading>
          <Flex as="nav">
            <Link href="#about" p={2}>About</Link>
            <Link href="#experience" p={2}>Experience</Link>
            <Link href="#projects" p={2}>Projects</Link>
            <Link href="#blog" p={2}>Blog</Link>
            <Link href="#contact" p={2}>Contact</Link>
          </Flex>
        </Flex>
      </Box>
      <VStack spacing={8} align="stretch" mt="100px">
        <Box id="about" p={4}>
          <Heading as="h2" size="xl">About Me</Heading>
          <Text mt={2}>Passionate Developer Relations and Community Manager at Lovable.dev, dedicated to building and nurturing tech communities.</Text>
        </Box>
        <Box id="experience" p={4}>
          <Heading as="h2" size="xl">Experience</Heading>
          <Text mt={2}>Over 10 years of experience in tech industry, focusing on software development and community engagement.</Text>
        </Box>
        <Box id="projects" p={4}>
          <Heading as="h2" size="xl">Projects</Heading>
          <Text mt={2}>Developed multiple high-impact projects, including open-source contributions and community-driven platforms.</Text>
        </Box>
        <Box id="blog" p={4}>
          <Heading as="h2" size="xl">Blog</Heading>
          <Text mt={2}>Insights into the latest in tech, community management, and developer relations.</Text>
        </Box>
        <Box id="contact" p={4}>
          <Heading as="h2" size="xl">Contact</Heading>
          <Flex mt={2}>
            <IconButton as="a" href="https://twitter.com/lovabledev" aria-label="Twitter" icon={<FaTwitter />} />
            <IconButton as="a" href="https://linkedin.com/in/lovabledev" aria-label="LinkedIn" icon={<FaLinkedin />} />
            <IconButton as="a" href="https://github.com/lovabledev" aria-label="GitHub" icon={<FaGithub />} />
            <IconButton as="a" href="mailto:hello@lovable.dev" aria-label="Email" icon={<FaEnvelope />} />
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;