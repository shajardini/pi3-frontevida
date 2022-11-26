import { useEffect, useState } from "react"
import api from "../../services/api"
import { Link } from "react-router-dom"
import './home.css'

import img from '../../images/doe.png'

var dataAtual = new Date();
var dia = dataAtual.getDate();
var mes = (dataAtual.getMonth() + 1);
var ano = dataAtual.getFullYear();
var horas = dataAtual.getHours();
var minutos = dataAtual.getMinutes();
console.log("Hoje é dia " + dia + "/" + mes + " de " + ano + ". Agora são " + horas + ":" + minutos + "h.");


export default function Home() {
    const [estado, setEstado] = useState([])

    useEffect(() => {//'https://api.themoviedb.org/3/movie/now_playing'
        async function loadEstado() {
            const response = await api.get('/')

            setEstado(response.data.sangue)
        }

        loadEstado();
    }, [])

    

    return (
        <main>
      
            <div className="container">
            {/* <div className="imgapp">
                    <img src = {img} alt="Doe sangue"/>
                    </div> */}
                <div className="article">
                
                    <article>
                   
                        <h1>Doação de sangue</h1>
                        <h2>Por que doar sangue?</h2>

                        <p>A doação de sangue é de extrema importância para a sociedade e pode ser classificado não apenas como um ato de solidariedade, mas de cidadania. De acordo com o Ministério da Saúde, uma única doação pode salvar até quatro vidas e é fundamental para ajudar pessoas que se submetem a tratamentos e intervenções médicas de grande porte e complexidade.</p>

                        

                        <p>Além disso, o aumento de acidentes, violência e doenças demandam um número maior de transfusões, ocasionando uma busca constante por novos doadores. No Brasil, a quantidade de doadores de sangue corresponde a menos de 2% da população, sendo que a OMS - Organização Mundial de Saúde, aponta que, para atender a demanda transfusional no país, o ideal seria que 3% à 5% da população com idade entre 18 e 65 anos fossem   doadores voluntários.</p>

                        <p>No Estado de São Paulo, a situação se encontra alarmante. Segundo informações da fundação Pró-Sangue, exibidas na tabela abaixo.</p>

                    

                        </article>
                    <div className="table-sangue">
                    <table>
                        <tr>
                            <th colSpan={2}>Posição do estoque da Fundação PróSangue</th>
                        </tr>
                        <tr>
                            <th colSpan={2}>Atualização: {`${dia}/${mes}/${ano} ${horas}h${minutos}`} </th>
                        </tr>
                        <tr>
                            <th>Sangue</th>
                            <th>Estado</th>
                        </tr>


                        {
                            estado.map(
                                (sangue) => {
                                    return (
                                        <tr>
                                            <td className="tipo">{sangue.tsangue}</td>
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
                

                
           
        
        </main>
    )
}