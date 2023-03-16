import storeItems from "../data/items.json"
import {Row,Col} from "react-bootstrap"


export function Store(){
    return (<><h1>store</h1>
    <Row>
        {storeItems.map((it)=>(
            <Col>{JSON.stringify(it)}</Col>
                
          
        ) 
            
            
            )}
        
    </Row>
    
    
    </>)
}