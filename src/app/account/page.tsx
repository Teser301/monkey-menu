// ./app/account.tsx

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { logout } from "../login/action";

export default function AccountPage() {
  const cookie = cookies().get("pb_auth");

  // Check if the user is authenticated
  if (!cookie) {
    redirect(`/login`); // Redirect to the login page if not authenticated
  }

  // Parse user information from the cookie
  const { model } = JSON.parse(cookie.value);

  // Extract the user's name
  const userName = model.name || "User"; // Fallback to "User" if name is not available

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, {userName}!</h1>
      <p className="mb-4">
        This is your account page. Here you can manage your settings and
        preferences.
      </p>
      <pre className="mb-4 -100 p-4 rounded">
        {JSON.stringify(model, null, 2)}
      </pre>
      <form action={logout}>
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </form>
    </main>
  );
}
