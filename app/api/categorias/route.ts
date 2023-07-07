import { NextResponse } from "next/server";

let options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer 27353dab753e6ffa98cc322e2f2344431d0b3b719647a6e8b0478e1d8112876a1c4c692fffbde36f407d2c1fcbc9998e2d13bd2b47e70c14957ca7cdd604251c4435089ae45722d736c08492f5a734473840a010f45e76e12efa866be57abd6dff49136b7a8d0fa31c65eec59c60094c74ddef0e8e2fd229ed6938981333d1f4",
  },
};

export async function GET() {
  const res = await fetch(
    "http://localhost:1337/api/categorias?populate=*",
    options
  );
  const data = await res.json();

  return new Response(JSON.stringify(data), {
    status: 200,
  });
}
