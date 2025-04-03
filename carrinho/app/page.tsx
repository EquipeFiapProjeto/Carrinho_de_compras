// Importa o componente ListaProdutos, que será usado dentro da página
// Esse componente é responsável por buscar os produtos e exibir a lista
// de títulos com links

import ListaProdutos from "./Components/ListaProdutos"

// Componente principal da Home (página inicial do projeto)
export default function Home() {
  return (
    // O conteúdo da página está dentro de uma tag <main>, que é
    // semanticamente correta para áreas principais
    <main style={{ padding: "32px" }}>
      {/* Título da página, que será exibido no topo */}
      <h1> Produtos do Carrinho</h1>

      {/* Renderiza o componente ListaProdutos, que irá exibir os nomes
          dos produtos com links clicáveis */}
      <ListaProdutos />
    </main>
  )
}