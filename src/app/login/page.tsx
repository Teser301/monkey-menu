// ./app/page.tsx

import { login } from "./action";
import Input from "@/components/Input";
import Button from "@/components/Button";
export default function Page() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="max-w-lg bg-gray-800 mx-auto rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          Login Form
        </h1>
        <form action={login}>
          <Input label="Email" type="email" />
          <Input label="Password" type="password" />
          <Button type="submit">Login</Button>
        </form>
      </div>
    </main>
  );
}
