import {z} from 'zod';

export const signinSchema = z.object({
	email: z.string().email('form.invalid-email').min(1, 'Email is required'),
	password: z.string().min(8, 'form.short-password'),
});

export type SigninSchema = z.infer<typeof signinSchema>;
