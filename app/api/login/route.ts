import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

type reqInfo = {
  email: string
  password: string
}


async function getUser(info: reqInfo) {
  const {email, password} = info
  const users = await prisma.$queryRaw`SELECT * FROM users WHERE email = ${email} AND password = ${password};`
  return users
}

export async function GET() {
  return NextResponse.json({ name: 'successful!', data: 'true' })
}

export async function POST(req: Request) {
  const { email, password } = await req.json()
  let sID = Math.floor(Math.random())

  let data = await getUser({ email, password })
  .then(async (data) => {
    await prisma.$disconnect()
    return data
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    return e
  })

  if ( data ) {
    return NextResponse.json({ message: 'Login successful!', data: { users: data || [], sID, logged: true } })
  } else {
    return NextResponse.json({ message: 'Invalid credentials'})
  }
}
