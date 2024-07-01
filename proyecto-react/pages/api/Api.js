const API_URL = "https://proyecto-backen.onrender.com";

export async function login(email, password) {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
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
  console.log("Respuesta completa de la API:", json);
  return json;
}

async function createPost(title, text) {
  const newPost = new Post({ title, text });
  try {
    const savedPost = await newPost.save();
    return savedPost;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
}
