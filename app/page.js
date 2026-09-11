"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [cursos, setCursos] = useState([]);
  const [cursoSelecionado, setCursoSelecionado] = useState(null);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    carregarCursos();
  }, []);

  async function carregarCursos() {
    const { data, error } = await supabase
      .from("cursos")
      .select("*");

    if (error) {
      console.error(error);
      setErro(error.message);
      setCarregando(false);
      return;
    }

    setCursos(data || []);
    setCarregando(false);
  }

  if (carregando) {
    return (
      <main className="container">
        <h1>Carregando cursos...</h1>
      </main>
    );
  }

  if (cursoSelecionado) {
    return (
      <main className="container">
        <button
          className="voltar"
          onClick={() => setCursoSelecionado(null)}
        >
          ← Voltar
        </button>

        <div className="detalhes">
          <h1>{cursoSelecionado.titulo}</h1>

          <h3>Descrição</h3>
          <p>
            {cursoSelecionado.descricao || "Sem descrição cadastrada."}
          </p>

          {cursoSelecionado.data_hora_inicio && (
            <>
              <h3>Data e horário</h3>
              <p>
                {new Date(
                  cursoSelecionado.data_hora_inicio
                ).toLocaleString("pt-BR")}
              </p>
            </>
          )}

          <p>
            <strong>ID:</strong> {cursoSelecionado.id}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="container">
      <h1>Cursos disponíveis</h1>

      {erro && (
        <div className="erro">
          <strong>Erro:</strong>
          <p>{erro}</p>
        </div>
      )}

      {cursos.length === 0 && !erro && (
        <p>Nenhum curso cadastrado.</p>
      )}

      <div className="cursos">
        {cursos.map((curso) => (
          <div className="curso" key={curso.id}>
            <h2>{curso.titulo}</h2>

            <p>
              {curso.descricao || "Sem descrição cadastrada."}
            </p>

            <button
              className="botao"
              onClick={() => setCursoSelecionado(curso)}
            >
              Ver informações
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
