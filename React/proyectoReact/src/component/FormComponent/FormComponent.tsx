
import { useForm } from "../../hooks/useForm"

export const FormComponent = () => {

    const {values, handleChange, resetForm}= useForm({
        email:'',
        nombre:'',
        edad:0
    })

    const {email, nombre, edad} = values

    const handleSubmitForm = () => {
        console.log(values)
    }

    const handleResetForm = () => {
        resetForm()
    }

    return (
        <div>
            <div>
                <h2 style={{
                        textAlign:'center'
                    }}>Formulario</h2>
            </div>
            <div style={{
                    display:'flex', 
                    flexDirection:'column', 
                    gap:'10px', 
                    justifyContent:'center'
                }}>
                <input 
                    name= 'email' 
                    value={email} 
                    onChange= {handleChange}  
                    type="email" 
                    placeholder="example@example.com"
                />
                <input 
                    name= 'nombre' 
                    value={nombre} 
                    onChange= {handleChange} 
                    type="text" 
                    placeholder="Nombre"
                />
                <input 
                    name= 'edad' 
                    value={edad} 
                    onChange= {handleChange} 
                    type="number" 
                    placeholder="Edad"
                />
            </div>
            <div style={{margin:'10px 0px'}}>
                <button onClick={handleSubmitForm}>Enviar</button>
                <button onClick={handleResetForm}>Resetear</button>
            </div>
        </div>
    )
}
