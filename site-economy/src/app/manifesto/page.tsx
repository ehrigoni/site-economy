export default function ManifestoPage() {
  const principles = [
    {
      title: 'Transparência de Valores',
      description: 'Cada papel tem seu valor claramente definido. Não há economia oculta. Todos entendem exatamente quanto custa cada parte do processo.',
    },
    {
      title: 'Distribuição Justa',
      description: 'A economia é distribuída equitativamente entre Captador, Produtor e Organizador. Cada um recebe pelo seu papel essencial.',
    },
    {
      title: 'Eficiência Compartilhada',
      description: 'Quando se trabalha em equipe, ganhos de eficiência são divididos. Maior produtividade beneficia todos os envolvidos.',
    },
    {
      title: 'Papel Claro',
      description: 'Cada pessoa sabe exatamente qual é seu papel e sua responsabilidade. Não há ambiguidade nas funções.',
    },
    {
      title: 'Custeio Realista',
      description: 'Os custos são calculados com realismo: 25% para trabalho do Produtor, alocações econômicas do Organizador, entrega de valor do Captador.',
    },
    {
      title: 'Crescimento Colaborativo',
      description: 'O sucesso não é zero-sum. Quando um ganha, os outros também ganham. A economia cresce em conjunto.',
    },
  ]

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Manifesto da Nova Economia
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Uma declaração de princípios sobre como acreditamos que a economia deve funcionar
          </p>
        </div>

        {/* Preâmbulo */}
        <section className="mb-12 bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg border-l-4 border-blue-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Preâmbulo</h2>
          <p className="text-gray-700 leading-relaxed">
            Nós acreditamos em uma economia onde cada participante é valorizado dentro de um contexto de célula, tribo ou família, onde o trabalho é fruto da sinergia de diferentes papéis, entre eles Captadores de recursos, Clientes, Produtores e Organizadores de valor. A Nova Economia não é sobre extrair valor, mas sobre criar valor juntos, baseado em informações claras e precisas. É um sistema onde Captadores, Produtores e Organizadores trabalham em harmonia, cada um contribuindo com seus talentos únicos e sendo reconhecido por isso.
          </p>
        </section>

        {/* Princípios */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Nossos Princípios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-blue-600"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Compromisso */}
        <section className="mb-12 bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-lg border-l-4 border-green-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nosso Compromisso</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-2xl mr-3">✓</span>
              <span>Operamos com transparência radical em todos os nossos processos econômicos</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">✓</span>
              <span>Valorizamos todos os papéis igualmente e reconhecemos a importância de cada um</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">✓</span>
              <span>Compartilhamos ganhos de eficiência equitativamente entre todos os participantes</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">✓</span>
              <span>Buscamos crescimento sustentável que beneficia todos os envolvidos</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">✓</span>
              <span>Educamos nossos participantes para que entendam completamente o sistema</span>
            </li>
          </ul>
        </section>

        {/* Chamada para Ação */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Junte-se à Nova Economia
          </h2>
          <p className="text-blue-100 mb-6 leading-relaxed">
            Se você acredita em uma economia mais justa, transparente e colaborativa, 
            você é parte dessa revolução. Venha colaborar conosco.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-50 transition-colors"
            >
              Explorar o Sistema
            </a>
            <a
              href="/blog"
              className="px-6 py-3 bg-blue-700 text-white font-semibold rounded border border-white hover:bg-blue-600 transition-colors"
            >
              Ler Nossos Artigos
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-500 text-sm border-t border-gray-200 pt-8">
          <p>© 2026 Nova Economia. Todos os direitos reservados.</p>
          <p className="mt-2">Construindo um futuro econômico mais justo e transparente</p>
        </footer>
      </div>
    </main>
  )
}
