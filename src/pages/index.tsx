import {LayoutPage} from "../typing";
import {Box, Image, Text, HStack, Link} from "@chakra-ui/react";
import TopBox from "src/components/topBox";
import {H1} from "src/components/primitives";
import ProjectBox from "src/components/projectBox";

const Home: LayoutPage = () => {
    return (
        <Box
            mb="40px"
        >
            <TopBox>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDir="column"
                    maxW="700px"
                    margin="0 auto"
                    minH="500px"
                >
                    <Image src="./logo.png"></Image>
                    <H1
                        mt="15px"
                        bg="linear-gradient(to left, #30CFD0 0%, #330867 100%)"
                        bgClip="text"
                        fill="transparent"
                    >
                        1e203
                    </H1>
                    <Text mt="40px">
                        「1e203」由六个大学生为完成软工大作业而临时凑合组建的网站。
                    </Text>
                </Box>
                <HStack
                    position="absolute"
                    top="15px"
                    right="15px"
                >
                    <Link href="https://github.com/1e203" target="_blank">
                        <Image
                            src="./github.png"
                        />
                    </Link>
                    <Link href="./member">
                        <Image
                            src="./member.png"
                        />
                    </Link>
                </HStack>
            </TopBox >
            <ProjectBox />
        </Box >
    );
};

export default Home;
