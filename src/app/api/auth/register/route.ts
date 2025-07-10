const API_HOST = process.env.API_HOST || 'http://localhost:8000';

// Function that can be imported and used directly by components
export async function registerUser(userData: {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}) {
  try {
    const response = await fetch(`${API_HOST}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Registration failed');
    }

    return data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
}