import RoleTable from '@/components/RoleTable'

export default function Home() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Nova Economia
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sistema de Papéis, Valores e Descrições
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Tabela de alocação de recursos e custeio de trabalho
          </p>
        </div>

        {/* Main Content */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Estrutura de Papéis e Valores
          </h2>
          <RoleTable />
        </div>

        {/* Summary Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-600">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Captador</h3>
            <p className="text-sm text-gray-600">
              Responsável pela captação e entrega de valor ao cliente
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-600">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Produtor</h3>
            <p className="text-sm text-gray-600">
              Executa o trabalho com custo de 25% por turno
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border-l-4 border-orange-600">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Organizador</h3>
            <p className="text-sm text-gray-600">
              Organiza produtores em duplas para economia de horas
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 text-sm border-t border-gray-200 pt-8">
          <p>© 2026 Nova Economia. Todos os direitos reservados.</p>
          <p className="mt-2">Hospedado no Vercel</p>
        </footer>
      </div>
    </main>
  )
}
