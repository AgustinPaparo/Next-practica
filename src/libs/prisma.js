//Conectar a la base de datos SQLite mendiante prisma

import {PrismaClient} from '@prisma/client'

export const prisma = new PrismaClient()