import Link from 'next/link'

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: 'Entendendo o Papel do Captador',
      date: '5 de abril de 2026',
      excerpt: 'Conheça as responsabilidades e o impacto do papel de Captador no sistema economy.',
      author: 'Ezequiel',
    },
    {
      id: 2,
      title: 'Produção Eficiente: Guia do Produtor',
      date: '4 de abril de 2026',
      excerpt: 'Como maximizar a eficiência com os custos de trabalho adequados.',
      author: 'Ezequiel',
    },
    {
      id: 3,
      title: 'Organizando Equipes com o Organizador',
      date: '3 de abril de 2026',
      excerpt: 'Estratégias para organizar produtores em duplas e economizar horas de trabalho.',
      author: 'Ezequiel',
    },
  ]

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Blog SiteEconomy
          </h1>
          <p className="text-xl text-gray-600">
            Artigos e insights sobre o sistema de papéis e economia
          </p>
        </div>

        {/* Articles Grid */}
        <div className="space-y-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 border-l-4 border-blue-600"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {article.excerpt}
                  </p>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-500">
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>Por {article.author}</span>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    Leia Mais
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Quer aprender mais sobre o sistema?
          </h3>
          <p className="mb-6 text-blue-100">
            Volte para a página principal para conhecer a tabela de papéis e valores.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-50 transition-colors"
          >
            Ver Sistema Economy
          </Link>
        </div>
      </div>
    </main>
  )
}
