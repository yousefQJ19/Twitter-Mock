import { Box,Button,List, VStack} from "@chakra-ui/react";
import { RiTwitterXLine } from "react-icons/ri";
import ListItem from "../Components/LiftListComponents/listItem"
import { supabase } from "../utility/config";
//icons
import { IoHomeSharp } from "react-icons/io5";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoMdNotifications } from "react-icons/io";
import { LuMessageSquare } from "react-icons/lu";
import { CiCircleList } from "react-icons/ci";
import { PiBookmarkSimpleLight } from "react-icons/pi";
import { PiSuitcaseSimple } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { CiCircleMore } from "react-icons/ci";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { useContext } from "react";
import { AuthContext } from "../utility/Context";



function LeftList() {
        const {updateValue} =useContext(AuthContext)

        const logOut = async () => {
                const { error } = await supabase.auth.signOut();
                if (error) {
                        console.error('Error signing out:', error);
                } else {
                        updateValue(null);
                }
        };
        return ( 
                <VStack  position={"sticky"}
                        top={0}
                        bg={"black"} 
                        h={"100vh"} 
                        borderRight ={"1px solid gray"}
                        gap={5}
                        alignItems={"flex-start"}
                        pl={8}
                        pt={2}>
                        
                        <Box  >
                                <RiTwitterXLine color="white" 
                                                size={"40px"} />
                        </Box>

                        <List display={"flex"} flexDirection={"column"}  spacing={6}>
                                        <ListItem listIcon={IoHomeSharp} text={"Home"} link={"/"}/>
                                        <ListItem listIcon={HiMiniMagnifyingGlass} text={"Explore"}/>
                                        <ListItem listIcon={IoMdNotifications} text={"Notifications"}/>
                                        <ListItem listIcon={LuMessageSquare} text={"Messages"} />
                                        <ListItem listIcon={GiPerspectiveDiceSixFacesRandom} text={"Grok"}/>
                                        <ListItem listIcon={CiCircleList} text={"List"}/>
                                        <ListItem listIcon={PiBookmarkSimpleLight} text={"Bookmarks"}/>
                                        <ListItem listIcon={PiSuitcaseSimple} text={"Jobs"}/>
                                        <ListItem listIcon={GoPeople} text={"Communities"}/>
                                        <ListItem listIcon={GoPerson} text={"Profile"} link={"profile"}/>
                                        <ListItem listIcon={CiCircleMore} text={"More"}/>
                        </List>
                        <Button onClick={()=>logOut()}>log out</Button>
                        
                </VStack>
        );
}

export default LeftList