type LoginProps = {
  email: string;
  password: string;
};

type SignUpProps = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
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

export async function signUp({
  email,
  password,
  firstName,
  lastName,
}: SignUpProps) {
  const response = await fetch(
    "https://saint-valor-backend.onrender.com/api/v1/auth/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, firstName, lastName }),
    },
  );

  const data = await response.json();
  return { response, data };
}
