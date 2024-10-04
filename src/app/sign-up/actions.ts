'use server';

import PocketBase from 'pocketbase';

export async function register(
    prevState: { message: string | null, status: boolean },
    formData: FormData
) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const passwordConfirm = formData.get('confirm_password') as string;
    console.log(email)
    console.log(password)
    console.log(passwordConfirm)
    const pb = new PocketBase(process.env.POCKETBASE_URL);

    try {
        await pb.collection('users').create({
            email,
            password,
            passwordConfirm
        });
        // Return success state
        return { message: "User successfully registered!", status: true };
    } catch (error: unknown) {
        // Return error message to update the state
        console.log(error)
        return { message: (error as Error).message, status: false };
    }
}
