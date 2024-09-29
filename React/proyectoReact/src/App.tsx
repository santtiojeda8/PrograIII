
import { ComponentCounter } from "./component/ComponentCounter/ComponentCounter"
import { MiPrimerComponent } from "./component/MiPrimerComponente/MiPrimerComponent"
import { ComponentUseEffect } from "./component/ComponentUseEffect/ComponentUseEffect";
import { FormComponent } from "./component/FormComponent/FormComponent";
import { AppProduct } from "./component/AppProduct/AppProduct";

export const App = () => {

    return (
        <div style={{display:'flex', flexDirection: 'column', gap: '10px'}}>
            {/* <MiPrimerComponent text={'Texto desde propiedades'} color= {'red'} fontSize={28} />
            <ComponentCounter/> 
            <ComponentUseEffect/> 
            <FormComponent/> */}
            <AppProduct/>
        </div>
    )
}
