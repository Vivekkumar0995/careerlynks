import { SignUp } from "@clerk/nextjs"

export default function SignUpPage() {
    return (
        <div className="h-[calc(100vh-72px)] flex items-center justify-center">
            <SignUp />
        </div>
    )
}