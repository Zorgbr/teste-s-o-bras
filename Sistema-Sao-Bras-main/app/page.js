"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [cursos, setCursos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    carregarCursos();
  }, []);

  async function carregarCursos() {
    setCarregando(true);
    setErro("");

    const { data, error } = await supabase
      .from("cursos")
      .select("*");

    if (error) {
      console.error("Erro ao buscar cursos:", error);

      setErro(error.message);
      setCarregando(false);

      return;
    }

    setCursos(data || []);
    setCarregando(false);
  }

  return (
    <main className="container">

      <h1>Meus Cursos</h1>

      <p>
        Cursos disponíveis
      </p>

      {carregando && (
        <p>
          Carregando cursos...
        </p>
      )}

      {erro && (
        <div className="erro">
          <strong>Erro:</strong>
          <p>{erro}</p>
        </div>
      )}

      {!carregando && !erro && cursos.length === 0 && (
        <p>
          Nenhum curso cadastrado.
        </p>
      )}

      <section className="cursos">

        {cursos.map((curso) => (
          <article
            className="curso"
            key={curso.id}
          >

            <h2>
              {curso.titulo}
            </h2>

            <p>
              {curso.descricao}
            </p>

          </article>
        ))}

      </section>

    </main>
  );
}
