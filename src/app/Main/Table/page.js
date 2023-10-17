import { apiGetAllData } from "@/service/apiService"
import { useEffect, useState } from "react"

export default function Table({ anoEscolhido }) {
    const [allData, setAllData] = useState([])
    const [data, setData] = useState([])
    console.log("🚀 ~ file: page.js:7 ~ Table ~ data:", data)
    const [loading, setLoading] = useState(true)
    
    
    // const dataMap = data[data.length -1].flatMap()

    useEffect(() => {
        async function getAllData() {
            try {
                const backEndAllData = await apiGetAllData(anoEscolhido)
                setAllData(backEndAllData)
                setTimeout(() => {
                    setLoading(false)
                }, 500)
            } catch (error) {
                console.log(error.message)
            }
        }
        getAllData()
        setData(allData)
    }, [])

    let mainJsx = <div className="flex justify-center my-4">Loading...</div>

    if(!loading) {
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
                </tbody>
            </table>
        )
    }

    return <>{mainJsx}</>
}