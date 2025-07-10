const API_HOST = process.env.API_HOST || 'http://localhost:8000';

// Function that can be imported and used directly by components
export async function loginUser(userData: {
  email: string;
  password: string;
}) {
  try {
    const response = await fetch(`${API_HOST}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Login failed');
    }

    return data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}