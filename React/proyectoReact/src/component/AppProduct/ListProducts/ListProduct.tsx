import { FC } from "react"
import { Button, Card } from "react-bootstrap"

interface ItemProduct {
    precio: number,
    imagen: string,
    nombre: string
}

interface IPropsListProducts{
    arrayItems : ItemProduct[]
}

export const ListProduct : FC <IPropsListProducts> = ( {arrayItems} ) => {
    return (
        <div
            className="p-1 m-3 border rounded d-grip gap-2"
            style={{
                gridTemplateColumns: "repeat (2, 1fr)",
                justifyItems: "center",
                alignItems: "center"
            }}
        >
            {arrayItems.map((el) => (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={el.imagen} />
                    <Card.Body>
                        <Card.Title>{el.nombre}</Card.Title>
                        <Card.Text>{el.precio}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}
