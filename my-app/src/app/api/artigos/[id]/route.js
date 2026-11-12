import { NextResponse } from "next/server";
import { artigos } from "../../../data/artigos";

export async function GET(request, { params }) {
  const { id } = await params; // no Next 15+ params é uma Promise
  const artigo = artigos.find((a) => a.id === Number(id));

  if (!artigo) {
    return NextResponse.json({ erro: "Artigo não encontrado" }, { status: 404 });
  }

  return NextResponse.json(artigo, {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
}