import Table from "./Table/page";

export default function Main() {
    return (
        <main className="flex-col m-5 text-center">
            <select className="m-2 bg-amber-300 p-2 rounded font-semibold" name="country">
                <option value="Argentina">Argentina</option>
                <option value="Bolivia">Bolivia</option>
            </select>
            <h2 className="m-2 font-semibold text-xl">Campeonato Brasileiro de 2003</h2>
            <h3 className="m-2 font-semibold text-lg">Classificação</h3>
            <Table />
        </main>
    )
}