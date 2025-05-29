import {Colors} from "../../constants/Colors";
import { contacts } from "../../constants/data/contacts";



const returnColor = (type, colorScheme) => {
 return Colors[colorScheme ?? 'light'][type]
}

const getContactNameByid =(id)=>{
    return contacts?.filter(cx => cx.id === id)[0]
}
 
export {returnColor, getContactNameByid}