"use server";

import { cache } from "react";

//@lib
import { prisma } from "@lib";

//@types
import { GetRelatedArticlesResponse } from "@types";

export const getRelatedArticles = cache(async (slug: string) => {
  const result: GetRelatedArticlesResponse = {
    articles: [],
    error: null,
  };

  try {
    const item = await prisma.article.findFirst({
      where: {
        slug,
      },
    });

    if (!item) {
      throw new Error(`Article not found with slug ${slug}`);
    }

    const relatedArticles = await prisma.article.findMany({
      where: {
        type: item?.type,
      },
    });

    result.articles = relatedArticles;
  } catch (error) {
    if (error instanceof Error) {
      result.error = error.message;
    } else {
      result.error === "Error fetching article info";
    }
  }

  return result;
});
