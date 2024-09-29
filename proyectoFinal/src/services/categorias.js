
export const renderCategories = () => {

    //tomamos elementos de la lista
    const ulList = document.getElementById("listFilter");

    //creamos esos elementos dentro de la lista
    ulList.innerHTML = `
    <li id="todo">Todos los productos</li>
    <li id="hamburguesas">Hamburguesas </li>
    <li id="papas">Papas</li>
    <li id="gaseosas">Gaseosas</li>
    <li id="mayorPrecio">Mayor Precio</li>
    <li id="menorPrecio">Menor Precio</li>
    `;

    //añadimos dinamicamente el evento click
    const liElements = ulList.querySelectorAll("li");
    liElements.forEach(liElement => {
        liElement.addEventListener ("click", () => {
            handleClick(liElement);
        });
    });

    // verificamos y manejamos el estilo del elemento activo
    const handleClick = (elemento) => {
        liElements.forEach((el) => {
            if(el.classList.contains ("liActive")){
                el.classList.remove("liActive");
            }else{
                if(elemento == el) {
                    el.classList.add("liActive");
                };
            };
        });
    };
};
