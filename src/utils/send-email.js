import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const sendEmail = async (to, subject, html) => {
    return await resend.emails.send({
        from: 'Event Planner <onboarding@resend.dev>',
        to: ['josejaviergarciap123@gmail.com'],
        subject: subject,
        html: html,
    });
}