// src/lib/mockAuth.ts
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const MOCK_EXISTING_EMAILS = new Set([
  "admin@test.com",
  "oluwatobiloba@gmail.com",
  "demo@saintvalor.com",
]);

export async function mockForgotPassword(email: string) {
  await sleep(900);

  // simulate random server failure (optional)
  // if (Math.random() < 0.05) throw new Error("Server error");

  const exists = MOCK_EXISTING_EMAILS.has(email.toLowerCase());

  // In real apps, you typically return 200 always.
  // We'll still RETURN `exists` so you can test logic if you want.
  return { ok: true, exists };
}
