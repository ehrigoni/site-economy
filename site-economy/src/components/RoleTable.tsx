'use client'

export default function RoleTable() {
  const roles = [
    {
      papel: 'Captador',
      valor: '4 (3+1) + 4 (3+1) = 8 (6+2)',
      descricao: 'Coleta valor para custear a parte de captação, organização e produção, além da parte referente ao valor entregue ao cliente. O máximo de valor coletado corresponde a 2 turnos de 4 horas de trabalho (total de 8h).',
    },
    {
      papel: 'Produtor',
      valor: '4 (+1)→ (6h)',
      descricao: 'A partir de um turno de trabalho de 4 horas, estabelece como custo de trabalho 25% (1h), resultando num turno cujo custeio é de 5 horas.',
    },
    {
      papel: 'Organizador',
      valor: '8→5, (3 ganho) | 8→6, (2 ganho)',
      descricao: 'A fim de alocar 8h de trabalho, organiza os produtores em duplas para que se obtenha uma economia no trabalho de 3h ou de 2h.',
    },
  ]

  return (
    <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <th className="px-6 py-4 text-left font-semibold">Papel</th>
            <th className="px-6 py-4 text-left font-semibold">Valor</th>
            <th className="px-6 py-4 text-left font-semibold">Descrição</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role, index) => (
            <tr
              key={index}
              className={`border-t border-gray-200 transition-colors hover:bg-blue-50 ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              <td className="px-6 py-4 font-bold text-blue-600 whitespace-nowrap">
                {role.papel}
              </td>
              <td className="px-6 py-4 font-mono text-gray-700 whitespace-nowrap">
                {role.valor}
              </td>
              <td className="px-6 py-4 text-gray-700 leading-relaxed">
                {role.descricao}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
