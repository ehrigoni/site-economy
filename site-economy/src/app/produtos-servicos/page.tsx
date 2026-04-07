import Link from 'next/link'

export default function ProdutosServicosPage() {
  const products = [
    {
      id: 1,
      title: 'Sistema de Gestão de Economia',
      category: 'Producto',
      price: 'Consultar',
      description: 'Plataforma integrada para gerenciar papéis, valores e distribuição de recursos de forma transparente e eficiente.',
      features: ['Dashboard em tempo real', 'Relatórios detalhados', 'Integração com múltiplos usuários', 'API robusta'],
    },
    {
      id: 2,
      title: 'Consultoria em Nova Economia',
      category: 'Serviço',
      price: 'Consultar',
      description: 'Orientação especializada para implementar os princípios da Nova Economia na sua organização.',
      features: ['Diagnóstico inicial', 'Plano customizado', 'Treinamento de equipe', 'Acompanhamento contínuo'],
    },
    {
      id: 3,
      title: 'Análise de Modelos Econômicos',
      category: 'Serviço',
      price: 'Consultar',
      description: 'Evaluate seu modelo econômico atual e receba recomendações baseadas nos princípios da Nova Economia.',
      features: ['Auditoria completa', 'Benchmarking', 'Recomendações estratégicas', 'Relatório executivo'],
    },
    {
      id: 4,
      title: 'Treinamento para Captadores',
      category: 'Serviço',
      price: 'Consultar',
      description: 'Capacitação especializada para profissionais atuando no papel de Captador dentro do sistema.',
      features: ['Módulos interactivos', 'Certificação', 'Material didático', 'Suporte pós-treinamento'],
    },
    {
      id: 5,
      title: 'Otimização de Processos',
      category: 'Serviço',
      price: 'Consultar',
      description: 'Análise e otimização dos seus processos com foco em eficiência e redução de custos.',
      features: ['Mapeamento de fluxos', 'Identificação de gargalos', 'Recomendações práticas', 'Implementação assistida'],
    },
    {
      id: 6,
      title: 'Suporte Premium',
      category: 'Serviço',
      price: 'Consultar',
      description: 'Atendimento dedicado com especialistas disponíveis para suportar sua implementação.',
      features: ['Suporte 24/7', 'Chat prioritário', 'Reuniões estratégicas', 'Atualizações prioritárias'],
    },
  ]

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Produtos e Serviços
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Soluções completas para implementar a Nova Economia na sua organização
          </p>
        </div>

        {/* Introdução */}
        <div className="mb-12 bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg border-l-4 border-blue-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Transforme sua Economia
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Oferecemos uma suite completa de produtos e serviços para ajudar você a implementar 
            os princípios da Nova Economia. Desde consultoria estratégica até plataformas tecnológicas, 
            temos as ferramentas certas para sua transformação econômica.
          </p>
        </div>

        {/* Filtros */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            Todos
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors">
            Produtos
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors">
            Serviços
          </button>
        </div>

        {/* Grid de Produtos/Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 border-t-4 border-blue-600"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
                  {product.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {product.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {product.price}
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {product.description}
              </p>
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-700 mb-2">Inclui:</p>
                <ul className="space-y-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-semibold">
                Saiba Mais
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para Transformar sua Economia?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto leading-relaxed">
            Nossos especialistas estão prontos para ajudar você a escolher a solução ideal 
            para sua organização.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-50 transition-colors">
            Agendar Consulta Gratuita
          </button>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Como escolho o produto ou serviço certo?',
                a: 'Recomendamos começar com uma consulta gratuita com nossos especialistas. Eles entenderão suas necessidades e recomendarão a melhor solução.',
              },
              {
                q: 'Vocês oferecem suporte após implementação?',
                a: 'Sim! Oferecemos suporte premium com especialistas disponíveis para ajudar na implementação e além.',
              },
              {
                q: 'Quanto tempo leva para ver resultados?',
                a: 'A maioria dos clientes vê melhorias significativas nos primeiros 30-90 dias, mas os benefícios completos aparecem em 6-12 meses.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-600">
                <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm border-t border-gray-200 pt-8">
          <p>© 2026 Nova Economia. Todos os direitos reservados.</p>
          <p className="mt-2">Transformando a forma como as organizações funcionam economicamente</p>
        </footer>
      </div>
    </main>
  )
}
