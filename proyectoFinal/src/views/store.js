/* ============STORE=========== */
import { openModal, setProductoActivo } from "../../main.js"
import { handleGetProductLocalStorage } from "../persistence/localstorage.js"

// funcion que se encarga de traer los productos y llamar al render
export const handleGetProductsToStore=()=>{
    const products= handleGetProductLocalStorage()
    handleRenderList(products)
}
//se encarga de filtrar y de renderizar la seccion con todos sus respectivos elementos
export const handleRenderList=(productsIn)=>{
    //filtrado de arrays por categoria
    const burgers=productsIn.filter((el)=>el.categories==="Hamburguesas")
    const potatoes=productsIn.filter((el)=>el.categories==="Papas")
    const soft_drinks=productsIn.filter((el)=>el.categories==="Gaseosas")
    //reenderiza los elementos de la seccion 
    const renderProductGroup=(productos, title)=>{
        if (productos.length>0) {
            const productosHTML=productos.map((producto,index)=>{
                return `
                <div class='containerTargetItem' id="product-${producto.categories}-${index}">
                    <div><img src='${producto.img}' /></div>
                    <div><h2>${producto.name}</h2></div>
                    <div><p><b>Precio:</b> $ ${producto.price}</p></div>
                </div>`

            })
            //retorna la seccion con todos los elementos dentro
            return `
                <section class='sectionStore'>
                    <div class='containerTitleSection'><h3>${title}</h3></div>
                    <div class='containerProductStore'>
                        <h2>${productosHTML.join("")}</h2>
                    </div>
                </section>
            
            `
        }else{
            return ""
        }
    }
    //renderizar cada uno de los productos dentro de su categoria

    const appContainer=document.getElementById("storeContainer")

    appContainer.innerHTML = `${renderProductGroup(burgers,'Hamburguesas')}
    ${renderProductGroup(potatoes,'Papas')}  
    ${renderProductGroup(soft_drinks,'Gaseosas')}   
    `;
    //añaden los eventos de manera dinamica 
    const addEvents=(productsIn)=>{
        if(productsIn){

            productsIn.forEach((element, index) => {
            const productContainer=document.getElementById(`product-${element.categories}-${index}`)

            productContainer.addEventListener('click',()=>{
                
                setProductoActivo(element)
                openModal()

                
            })
        });
        }
        
    }
    addEvents(burgers)
    addEvents(potatoes)
    addEvents(soft_drinks)

}


