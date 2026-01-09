import { betterAuth, verificationSchema } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";
import { nextCookies } from "better-auth/next-js";
import { send } from "process";
import { sendVerificationEmail } from "./Send-verification-email";


export const auth = betterAuth({

    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),

    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
    },

    emailVerification: {
        sendOnSignUp: true,
        autoSignInAfterVerification: true,
        sendVerificationEmail: async ({ user, url }) => {
            await sendVerificationEmail({
                to: user.email, // change it to your email
                verificationUrl: url,
                userName: user.name || "User",
            })
        }
    },

    socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
            prompt: "select_account",
        }, 
        github: { 
            clientId: process.env.GITHUB_CLIENT_ID as string, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
            prompt: "select_account",
        }, 
    },

    plugins: [nextCookies()]
});