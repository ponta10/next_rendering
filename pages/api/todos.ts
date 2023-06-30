import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const todos = await prisma.todo.findMany();
      res.json(todos);
      break;
    case "POST":
      if (!req.body.title) {
        res.status(400).json({ error: "Missing title" });
        return;
      }
      const newTodo = await prisma.todo.create({
        data: {
          title: req.body.title,
        },
      });
      res.json(newTodo);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
