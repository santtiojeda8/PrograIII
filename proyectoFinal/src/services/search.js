import { handleGetProductLocalStorage } from "../persistence/localstorage";
import { handleRenderList } from "../views/store";

export const handleSearchProductByname=()=>{
    const inputHeader=document.getElementById("inputHeader");
    const producto=handleGetProductLocalStorage();
    const result=producto.filter((el)=>
        el && el.name && el.name.toLowerCase().includes(inputHeader.value.toLowerCase())
);
handleRenderList(result)
}
