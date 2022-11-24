import { useEffect, useState } from "react"
import api from "../../services/api"
import { Link } from "react-router-dom"



export default function Home(){
    const [estado, setEstado] = useState([])

    useEffect(()=>{//'https://api.themoviedb.org/3/movie/now_playing'
        async function loadFilme(){
            const response = await api.get('/')
            console.log(response)
            setEstado(response.data.sangue)

           
        }
        loadFilme();
    })

    return(
        <div>
            <div className="container">
                <div className="lista-filmes">
                    <table>
                        <tr>
                            <th>Sangue</th>
                            <th>Estado</th>
                        </tr>

                  
                    {
                        estado.map(
                            (sangue)=>{
                                return(
                                   <tr>
                                    <td>{sangue.tsangue}</td>
                                    <td>{sangue.estado}</td>
                                   </tr>
                                )
                            }
                        )
                    }
  </table>
                </div>
            </div>
        </div>
    )
}