import { Resend } from 'resend';

export const sendEmail = async (to, subject, html, apiKey) => {
    const key = apiKey || import.meta.env.RESEND_API_KEY;
    if (!key) {
        return { error: { message: 'Missing RESEND_API_KEY' } };
    }
    const resend = new Resend(key);

    return await resend.emails.send({
        from: 'Event Planner <onboarding@resend.dev>',
        to: ['josejaviergarciap123@gmail.com'],
        subject: subject,
        html: html,
    });
}