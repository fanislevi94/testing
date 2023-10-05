// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "PUT") {
    console.log("var fani is" + req.body.id);
    console.log("var fani is" + req.body.description);
    const projects = await prisma.projects.update({
      where: {
        id: req.body.id,
      },
      data: {
        description: req.body.description,
      },
    });
    res.status(200).json({ projects: projects });
  }
}
