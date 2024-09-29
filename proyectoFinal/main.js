import { renderCategories } from "./src/services/categories.js";
import { handleGetProductLocalStorage, setInLocalStorage } from "./src/persistence/localstorage.js";
import Swal from "sweetalert2";
import { handleGetProductsToStore, handleRenderList } from "./src/views/store.js";
import { handleSearchProductByname } from "./src/services/search.js";

/*===========APLICACION==================== */
/*handleGetProductsToStore();
renderCategories();*/
export let categoriaActiva = null
export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn
}

export let productoActivo = null
export const setProductoActivo = (productoIn) => {
    productoActivo = productoIn
}
handleGetProductsToStore();
window.onload = () => {
    renderCategories();
};
/*===========POPUP============ */

const cancelButton = document.getElementById("cancelButton")
cancelButton.addEventListener('click', () => {
    handleCancelButton()
})
const handleCancelButton = () => {
    closeModal()
}
//FUNCIONES ABRIR - CERRAR MODAL
export const openModal = () => {
    const modal = document.getElementById("modalPopUp")
    modal.style.display = 'flex'
    const buttonDelete = document.getElementById('deleteButton')
    if (productoActivo) {
        buttonDelete.style.display = "block";

    } else {
        buttonDelete.style.display = "none";
    }
    if (productoActivo) {
        const name = document.getElementById("nombre"),
            img = document.getElementById("img"),
            price = document.getElementById("precio"),
            categories = document.getElementById("categoria");
        name.value = productoActivo.name
        img.value = productoActivo.img
        price.value = productoActivo.price
        categories.value = productoActivo.categories
    }
}
export const closeModal = () => {
    const modal = document.getElementById("modalPopUp")
    modal.style.display = 'none'
    setProductoActivo(null)
    resetModal()
}

const resetModal = () => {
    const name = document.getElementById("nombre"),
        img = document.getElementById("img"),
        price = document.getElementById("precio"),
        categories = document.getElementById("categoria");
    name.value = ""
    img.value = ""
    price.value = 0
    categories.value = "Seleccione una categoria"
}
const deleteButton = document.getElementById('deleteButton')
deleteButton.addEventListener('click', () => {
    handlebuttonDelete();
})
const handlebuttonDelete = () => {
    handleDeletePoduct();
}
//Buttons search
const buttonSearch = document.getElementById('buttonSearch');
buttonSearch.addEventListener("click", () => {
    handleSearchProductByname()
})


//GUARDAR O MODIFICAR ELEMENTOS

//=================productos

/* ===========product================== */
const buttonAdd = document.getElementById("buttonAddElement")
buttonAdd.addEventListener('click', () => {
    openModal()
})
// guardamos 
const acceptButton = document.getElementById("acceptButton")
acceptButton.addEventListener('click', () => {
    handleSaveOrModifyElement()
})
const handleSaveOrModifyElement = () => {
    const name = document.getElementById("nombre").value,
        img = document.getElementById("img").value,
        price = document.getElementById("precio").value,
        categories = document.getElementById("categoria").value;
    let object = null
    if (productoActivo) {
        object = {
            ...productoActivo,
            name,
            img,
            price,
            categories
        };
    } else {
        object = {
            id: new Date().toISOString(),
            name,
            img,
            price,
            categories
        }
    }
    Swal.fire({
        title: "Correcto!",
        text: "Se guardo el producto!",
        icon: "success"
    });


    setInLocalStorage(object)
    handleGetProductsToStore()
    closeModal()
}
//eliminar elemento
export const handleDeletePoduct = () => {
    Swal.fire({
        title: "Estas seguro?",
        text: "No se pude revertir esta opcion!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
    }).then((result) => {
        if (result.isConfirmed) {
            const prouct = handleGetProductLocalStorage();
            const result = prouct.filter((el) => el.id !== productoActivo.id);
            localStorage.setItem('products', JSON.stringify(result))
            const newProduct = handleGetProductLocalStorage();
            handleRenderList(newProduct);
            closeModal();
        } else {
            closeModal();
        }
    });
}