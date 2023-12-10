"use server";

import { cache } from "react";

//@lib
import { prisma } from "@lib";

//@types
import { GetArticleResponse } from "@types";

export const getArticle = cache(async (slug: string) => {
  const result: GetArticleResponse = {
    article: {},
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

    result.article = {
      ...item,
      tags: ["New to Caregiving", "What to expect"],
      content: [
        {
          type: "paragraph",
          heading: "I have advance directives and a will",
          text: "In my advance directive, I chose the person I want to make health care decisions for me if I can’t make them for myself, either temporarily or permanently. It also specifies my health care wishes. My will ensures that my money and possessions will go where I want them to after I’m gone. Completing these took a little time, but it was easier than I thought it would be. ",
        },
        {
          type: "video",
          videoUrl: "https://vimeo.com/879408384",
        },
        {
          type: "paragraph",
          heading: "I have a great primary care physician",
          text: "Not as easy as it may seem, but I found a doctor I know I can talk to and who pays attention to me.  He understands my life choices and situation. The hospital where he practices is a good one that includes most specialties.",
        },
      ],
    };
  } catch (error) {
    if (error instanceof Error) {
      result.error = error.message;
    } else {
      result.error === "Error fetching article info";
    }
  }

  return result;
});
