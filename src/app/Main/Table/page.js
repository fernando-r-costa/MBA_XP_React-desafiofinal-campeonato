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
        // console.log('Novo objeto:', newData);

        const sortedArray = Object.entries(newData)
            .sort((a, b) => b[1].total_pontos - a[1].total_pontos)
            .map(([key, value]) => ({ [key]: value }));

        sortedData = Object.assign({}, ...sortedArray);

    }

    console.log(sortedData);

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
                    <tr className="odd:bg-gray-300 even:bg-gray-100">
                        <td>01</td>
                        <td>Img</td>
                        <td className="text-left px-5">Cruzeiro</td>
                        <td>50</td>
                        <td>10</td>
                        <td>5</td>
                        <td>5</td>
                        <td>20</td>
                        <td>10</td>
                        <td>10</td>
                    </tr>
                    {sortedData.map((time) => {
                        return (
                            <tr className="odd:bg-gray-300 even:bg-gray-100">
                                <td>01</td>
                                <td>Img</td>
                                <td className="text-left px-5">Cruzeiro</td>
                                <td>50</td>
                                <td>10</td>
                                <td>5</td>
                                <td>5</td>
                                <td>20</td>
                                <td>10</td>
                                <td>10</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    return <>{mainJsx}</>
}