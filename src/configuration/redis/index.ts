import IORedis from "ioredis"

const redis = new IORedis({
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT as string),
    maxRetriesPerRequest: null,
    lazyConnect: true,
})

export { redis }