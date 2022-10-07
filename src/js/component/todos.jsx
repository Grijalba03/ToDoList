import React,{useState} from "react"; 


export const Todos = () => { 
    // planteamiento: 
    // estructura de datos: Arreglos 

    //["tarea1" , "lavar platos", "sacar la basura" ]
    // Sabemos que podemos agrgar con el metodo .push()

    // podemos recorrer los arreglos con For, map((item,index)=> {return()})
    // podemos remover filter((item,index)=>{return (index !=2)})

    const [listTodos, setListTodos] = useState([])
    const [todo, setTodo] = useState("") 

    const deleteTodo = (indiceTarea) => {
        let aux = listTodos.filter((item, index) => index != indiceTarea)
        setListTodos(aux)

    };

// ----------------typing space function--------------------------------------------------------------------------------------------------------------------------------------------------------
    return ( 
        <div className="card"> 
            <input type="text-center fw-light" placeholder="What is there to do?" 
            onKeyUp ={(e)=> { 
                if (e.keyCode == "13") { 
                    let arrAux = listTodos.slice();
                    arrAux.push (e.target.value);
                    setListTodos(arrAux); 
                    e.target.value=""
                } 
            }}
            />
            <ul> 
                {listTodos.map((tarea,index)=>{ 
                    return( 
                    <> 
                    <li className= "list-group-item" 
                    id="indice"
                    key={index}> 
                    {tarea}  
                    </li> 
                    <button className=" btn btn-light" 
                    onClick={()=>{deleteTodo(index)}} 
                    
                     
                    > Eliminar {index} </button>
                    
                    </>
                )})
                    }    
            </ul>
        </div>
    );
};