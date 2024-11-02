import {z} from 'zod';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const signupSchema = z
	.object({
		email: z.string().email('form.invalid-email'),
		password: z.string().min(8, 'form.short-password').regex(passwordRegex, 'form.password-requirements'),
		confirmPassword: z.string().min(8, 'form.short-password'),
	})
	.refine(data => data.password === data.confirmPassword, {
		message: 'form.password-mismatch',
		path: ['confirmPassword'],
	});

export type SignupSchema = z.infer<typeof signupSchema>;
