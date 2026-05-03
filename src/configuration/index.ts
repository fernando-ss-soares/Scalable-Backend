import { prisma } from "./db";
import { redis } from "./redis";

export async function initServices() {
  try {
    // Bun permite top-level await, mas encapsulamos para o bootstrap
    await Promise.all([
      prisma.$connect(),
      redis.connect()
    ]);
    
    console.log('✅ SQL & Redis conectados com sucesso!');
  } catch (error) {
    console.error('❌ Erro na inicialização dos serviços:', error);
    process.exit(1);
  }
}