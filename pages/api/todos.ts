import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const todos = await prisma.todo.findMany()
    res.json(todos)
  } else if (req.method === 'POST') {
    const todo = await prisma.todo.create({
      data: {
        title: req.body.title,
      },
    })
    res.json(todo)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}
