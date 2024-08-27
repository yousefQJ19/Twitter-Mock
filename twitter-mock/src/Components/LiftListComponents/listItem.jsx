import { ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function listItem({listIcon,text,link}) {
    return ( 
        <ListItem as={NavLink} to={link} color={"white"} fontSize={"25px"}>
            <ListIcon as={listIcon}/>
            {text}
        </ListItem>
    );
}

export default listItem;