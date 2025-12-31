import { SignIn } from "@clerk/nextjs"

export default function SignInPage() {
    return (
        <div className="h-[calc(100vh-72px)] flex items-center justify-center">
            <SignIn />
        </div>
    )
}