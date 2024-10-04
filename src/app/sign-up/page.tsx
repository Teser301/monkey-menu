"use client";

import { register } from "./actions";
import { useFormState } from "react-dom";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Page() {
  const initialState = { message: "", status: false };
  const [state, formAction] = useFormState(register, initialState);

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="max-w-lg bg-gray-800 mx-auto rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          Signup Form
        </h1>
        <form action={formAction} className="flex flex-col">
          <p
            className={`mb-4 text-center ${
              state.status ? "text-green-400" : "text-red-400"
            }`}
          >
            {state.message}
          </p>
          <Input label="Email" type="email" />
          <Input label="Password" type="password" />
          <Input label="Confirm Password" type="password" />
          <Button>Register</Button>
        </form>
      </div>
    </main>
  );
}
