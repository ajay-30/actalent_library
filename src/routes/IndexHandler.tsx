import { useState } from "react";
import { useActalentLibraryContext } from "../shared/context/ActalentLibraryContext";
import { Container, Skeleton, Typography } from "@mui/material";
import UserRoute from "./user/UserRoute";
import AdminRoute from "./admin/AdminRoute";

function IndexHandler(){

    const [isLoading,setIsLoading] = useState(true);
    const {token, setToken,userType,setUserType,id,setId} = useActalentLibraryContext();

    if(isLoading){
        return ( <Container sx={{display:"flex",justifyContent:"center",marginTop:"30px"}}>
            <Skeleton
                sx={{ bgcolor: 'grey.200' }}
                variant="rectangular"
                width={900}
                height={400}
            />
        </Container>
            
        )
    }
    else{
        if( userType == "User" ){
            return <UserRoute/>
        }
        if( userType == "Admin" ){
            return <AdminRoute/>
        }
        else{
            return <UserRoute/>
        }
    }

}

export default IndexHandler;