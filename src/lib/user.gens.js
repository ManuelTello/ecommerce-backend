import { nanoid } from "nanoid";

const generateUserUID = ()=>{
    const new_uid = nanoid(10);
    return(new_uid);
};

export default {
    generateUserUID,
}