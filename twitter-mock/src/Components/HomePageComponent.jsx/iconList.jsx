import { GrGallery } from "react-icons/gr";
import { TbGif } from "react-icons/tb";
import { CgPoll } from "react-icons/cg";
import { BsEmojiLaughing } from "react-icons/bs";
import { GrSchedule } from "react-icons/gr";
import { GrLocation } from "react-icons/gr";
import {Flex} from "@chakra-ui/react"

function IconList() {
    return ( 
        <Flex gap={2}
              p={4}
              fontSize={20}
              color={"blue.500"}>
            <GrGallery/>
            <TbGif/>
            <CgPoll/>
            <BsEmojiLaughing/>
            <GrSchedule/>
            <GrLocation/>
        </Flex>
    );
}

export default IconList;