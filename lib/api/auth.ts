type LoginProps = {
  email: string;
  password: string;
};

export async function login({ email, password }: LoginProps) {
  const response = await fetch(
    "https://saint-valor-backend.onrender.com/api/v1/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    },
  );

  const data = await response.json();
  return { response, data };
}
