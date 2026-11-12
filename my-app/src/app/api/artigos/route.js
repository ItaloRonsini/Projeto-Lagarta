import { NextResponse } from "next/server";
import { artigos } from "../../data/artigos";

export async function GET() {
  return NextResponse.json(artigos, {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
}
