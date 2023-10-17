'use client'

export default function Select({ anoEscolhido }) {
    const anos = Array.from({ length: 2015 - 2003 + 1 }, (_, index) => 2003 + index);

    const selecionaAno = (e) => {
        anoEscolhido(e.target.value)
    }

    return (
        <select
            className="m-2 bg-amber-300 p-2 rounded font-semibold"
            name="country"
            onChange={selecionaAno}>
            {anos.map((ano) => {
                return <option key={ano}>{ano}</option>
            })}
        </select>
    )
}