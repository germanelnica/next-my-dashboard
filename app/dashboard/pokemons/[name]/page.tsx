import { Pokemon, PokemonDetail } from "@/pokemons";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata(props: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> {

  try {
    return {
      title: `${name}`,
      description: `Página del pokémon ${name}`,
    };
  } catch {
    return {
      title: "Página del pokémon",
      description: "Información no encontrada",
    };
  }
}

export async function generateStaticParams() {
  const pokemonNames = await getPokemonsName();
  return pokemonNames.map((name:string) => ({
    name: name, // because [id] now accepts names or numbers
  }));
}

async function getPokemonsName(): Promise<string[]> {
  try {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

    const data = await fetch(url, {
      cache: "force-cache",
    }).then((resp) => {
      if (!resp.ok) throw new Error("No encontrado");
      return resp.json();
    });

    // Extract names only
    return data.results.map((p: { name: string }) => p.name);
  } catch (error) {
    console.error("Error fetching names:", error);
    return [];
  }
}

const getPokemon = async (name: string): Promise<Pokemon> => {
  try {
      const url =  `https://pokeapi.co/api/v2/pokemon/${name}`.toLocaleLowerCase();

    const pokemon = await fetch(url, {
      cache: "force-cache",
    }).then((resp) => {
      if (!resp.ok) throw new Error("No encontrado");
      return resp.json();
    });

    return pokemon;
  } catch (error) {
    console.error(error);
    notFound();
  }
};

export default async function PokemonPage(props: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await props.params;

  const pokemon = await getPokemon(name);
  return (
    <PokemonDetail pokemon={pokemon} />
  );
}
