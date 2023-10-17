'use client'
import { useState } from "react";
import Select from "./Select/page";
import Table from "./Table/page";

export default function Main() {
    const [ano, setAno] = useState('2003')

    return (
        <main className="flex flex-col m-5 text-center items-center">
            <Select anoEscolhido={setAno} />
            <h2 className="m-2 font-semibold text-xl">Campeonato Brasileiro de {ano}</h2>
            <h3 className="m-2 font-semibold text-lg">Classificação</h3>
            <Table anoEscolhido={ano} />
        </main>
    )
}