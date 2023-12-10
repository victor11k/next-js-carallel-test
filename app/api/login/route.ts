import * as bcrypt from "bcrypt";

//@lib
import { prisma, signJwtAccessToken } from "@lib";

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

    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (!user) {
      throw new Error("User with these credentials was not found");
    }

    if (user && (await bcrypt.compare(body.password, user.password))) {
      const { password, ...userWithoutPass } = user;
      const accessToken = signJwtAccessToken(userWithoutPass);
      const result = {
        ...userWithoutPass,
        accessToken,
      };

      return new Response(JSON.stringify(result));
    } else {
      return new Response(JSON.stringify(null));
    }
  } catch (error) {
    return new Response(JSON.stringify(null));
  }
}
