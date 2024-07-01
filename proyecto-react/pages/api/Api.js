const API_URL = "https://proyecto-backen.onrender.com";

export async function login(username, password) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const json = await response.json();
  return json.token;
}

export async function createAccount(email, password, name) {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      name,
    }),
  });
  const json = await response.json();
  return json.token;
}

export async function getProducts() {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/products`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await response.json();
  return json.products;
}

export async function getProduct(id) {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "GET",
  });
  const json = await response.json();
  return json;
}
