const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const MOCK_EXISTING_EMAILS = new Set([
  "admin@test.com",
  "user1@example.com",
  "demo@saintvalor.com",
]);

export async function mockForgotPassword(email: string) {
  await sleep(900);

  const exists = MOCK_EXISTING_EMAILS.has(email.toLowerCase());

  return { ok: true, exists };
}
