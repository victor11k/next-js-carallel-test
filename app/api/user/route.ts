import { prisma } from "@lib";
import * as bcrypt from "bcrypt";

interface RequestBody {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  try {
    const body: RequestBody = await request.json();

    if (!body.email || !body.password) {
      throw new Error("Invalid credentials, provide email and password");
    }

    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: await bcrypt.hash(body.password, 10),
      },
    });

    const { password, ...result } = user;

    return new Response(JSON.stringify(result));
  } catch (error) {
    const errorMessage = (error as Error).message;

    return Response.json(
      {
        errorMessage,
      },
      {
        status: 400,
      },
    );
  }
}
