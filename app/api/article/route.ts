//@lib
import { prisma, verifyJwt } from "@lib";

//@types
import { ARTICLE_TAG } from "@types";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const articleTag =
    (searchParams.get("articleTag") as ARTICLE_TAG) ?? ARTICLE_TAG.ALL;

  const accessToken = request.headers.get("authorization");

  if (!accessToken || !verifyJwt(accessToken.replace("Bearer ", ""))) {
    return new Response(
      JSON.stringify({
        error: "unauthorized",
      }),
      {
        status: 401,
      },
    );
  }

  const filter =
    articleTag === ARTICLE_TAG.ALL
      ? {}
      : {
          type: articleTag,
        };

  const articles = await prisma.article.findMany({
    where: filter,
  });

  return new Response(
    JSON.stringify({
      articles,
    }),
  );
}
