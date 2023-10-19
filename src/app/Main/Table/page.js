'use client'
import { apiGetAllData } from "@/service/apiService"
import { useEffect, useState } from "react"

export default function Table({ anoEscolhido }) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const lastItem = data[data.length - 1];
    let sortedData = {};

    if (lastItem) {
        const iterableObject = Object.entries(lastItem);
        const arrayFromIterable = iterableObject[0][1];
        const newData = {};

        for (const item of arrayFromIterable) {
            const { visitante, pontuacao_geral_visitante, mandante, pontuacao_geral_mandante } = item;
            newData[visitante] = pontuacao_geral_visitante;
            newData[mandante] = pontuacao_geral_mandante;
        }

        sortedData = Object.entries(newData)
            .sort((a, b) => b[1].total_pontos - a[1].total_pontos)
            .map(([key, value]) => ({ [key]: value }));
    }

    useEffect(() => {
        async function getAllData() {
            try {
                const backEndAllData = await apiGetAllData(anoEscolhido)
                setData(backEndAllData)
                setTimeout(() => {
                    setLoading(false)
                }, 500)
            } catch (error) {
                console.log(error.message)
            }
        }
        getAllData()
    }, [anoEscolhido])

    let mainJsx = <div className="flex justify-center my-4">Loading...</div>

    if (!loading) {
        mainJsx = (
            <table className="table-fixed">
                <thead>
                    <tr>
                        <th className="w-10"></th>
                        <th className="w-10"></th>
                        <th className="w-40"></th>
                        <th className="w-10">P</th>
                        <th className="w-10">V</th>
                        <th className="w-10">E</th>
                        <th className="w-10">D</th>
                        <th className="w-10">GP</th>
                        <th className="w-10">GC</th>
                        <th className="w-10">S</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((item, index) => {
                        return (
                            <tr className="odd:bg-gray-300 even:bg-gray-100">
                                <td>{(index + 1).toString().padStart(2, '0')}</td>
                                <td><img src={`/img/${(Object.keys(item)[0])}.png`} alt={Object.keys(item)[0]} /></td>
                                <td className="text-left px-5">{Object.keys(item)[0]}</td>
                                <td>{Object.values(item)[0].total_pontos}</td>
                                <td>{Object.values(item)[0].total_vitorias}</td>
                                <td>{Object.values(item)[0].total_empates}</td>
                                <td>{Object.values(item)[0].total_derrotas}</td>
                                <td>{Object.values(item)[0].total_gols_marcados}</td>
                                <td>{Object.values(item)[0].total_gols_sofridos}</td>
                                <td>{Object.values(item)[0].total_gols_marcados - Object.values(item)[0].total_gols_sofridos}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    return <>{mainJsx}</>
}