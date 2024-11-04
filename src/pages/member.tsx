import {LayoutPage} from "../typing";
import {Box, Image, Text, HStack, Link} from "@chakra-ui/react";
import TopBox from "src/components/topBox";
import {H1} from "src/components/primitives";
import MemberBox from "src/components/memberBox";

const Home: LayoutPage = () => {
    return (
        <Box>
            <TopBox>
                <Box
                    display="flex"
                    justifyContent="center"
                    flexDir="column"
                    maxW="700px"
                    margin="0 auto"
                    minH="500px"
                >
                    <H1 textAlign="center">1e203宿舍成员</H1>
                    <Text m="40px 0">
                        为了完成软工大作业，我们整个宿舍六名成员都还各自搭建了自己的个人博客网站，可通过点击下方昵称跳转。
                    </Text>
                    <Text>
                        如有需要请联系：
                        <Link
                            href="mailto:2650583860@qq.com"
                            bg="linear-gradient(to left, #315891 0%, #330867 100%)"
                            bgClip="text"
                            fill="transparent"
                        >
                            2650583860@qq.com
                        </Link>
                    </Text>
                </Box>
                <Link href="/">
                    <Image src="./return.svg" pos="absolute" top="15px" left="15px" />
                </Link>
            </TopBox>
            <MemberBox />
        </Box>
    );
};

export default Home;
