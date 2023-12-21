// import { PrismaClient } from '@prisma/client'
import { redisConnection } from '@services/redis/redisConnection';

// export const dbClient = new PrismaClient();

export const connectToRedis = async () => {
  await redisConnection.connect()
}