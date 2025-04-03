"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

// pagina vai ter ID, TITULO do produto
interface Produto {
  uniqueId: string; // Adicionado campo uniqueId
  id: number;
  title: string;
}

export default function ListaProdutos() {
  // Estado que vai armazenar a lista de produtos obtidos da api
  const [produtos, setProdutos] = useState<Produto[]>([]);

  // A lista de produtos vai ser exibida ja de cara ao carrega a pagina
  useEffect(() => {
    axios.get("https://dummyjson.com/carts")
      .then(res => {
        // PERCORRER TODOS OS CARRINHOS
        // EXTRAIR OS PRODUTOS DE CADA CARRINHO
        // flatMap - união de todas as listas de produtos em um lugar so
        const todos: Produto[] = res.data.carts.flatMap((cart: any) =>
          cart.products.map((p: any) => ({
            uniqueId: `${cart.id}-${p.id}`, // Gera uniqueId combinando id do carrinho e id do produto
            id: p.id,
            title: p.title
          }))
        );
        // atualizar o estado com todos produtos coletados
        setProdutos(todos);
      })
      .catch(function (error) {
        console.error("Erro ao buscar API");
      });
  }, []); // o array vazio aqui garante que o useEffect rode apenas uma vez

  return (
    <>
      <h1>Lista de Produtos</h1>
      <ul>
        {produtos.map(prod => (
          <li key={prod.uniqueId}> {/* Usa uniqueId como chave */}
            <Link href={`/Produtos/${prod.id}`}>
              {prod.id} - {prod.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}