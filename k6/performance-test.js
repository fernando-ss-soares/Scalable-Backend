import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 50 },  // Sobe para 50 usuários simultâneos
    { duration: '1m', target: 50 },   // Mantém a carga
    { duration: '30s', target: 0 },   // Desce para zero
  ],
  thresholds: {
    http_req_failed: ['rate<0.05'],  // Falha se mais de 5% das reqs derem erro
    http_req_duration: ['p(95)<500'], // 95% das reqs devem responder em < 500ms
  },
};

export default function () {
  const url = 'http://localhost:3000/products';
  
  // O corpo da requisição (Payload)
  const payload = JSON.stringify({
    name: "Teste de carga",
    price: 199,
    description: "Teste de carga",
  });

  // Configuração dos Headers (ajustado para application/json que é o padrão de APIs)
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);

  check(res, {
    'produto criado (202 ou 200)': (r) => r.status === 202 || r.status === 200,
    'tempo de resposta < 800ms': (r) => r.timings.duration < 800,
  });

  sleep(0.5); // Espera meio segundo entre as requisições de cada usuário virtual
}