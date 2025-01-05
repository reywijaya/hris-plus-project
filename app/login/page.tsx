import { Metadata } from "next"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {Icons} from "@/components/icons";
import {UserLoginForm} from "@/components/auth/user-login-form";

export const metadata: Metadata = {
    title: "Log in",
    description: "Login to your account",
}

export default function AuthenticationPage() {
    return (
        <>
            <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <Link
                    href="/signup"
                    className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "absolute right-4 top-4 md:right-8 md:top-8"
                    )}
                >
                    Sign up
                </Link>
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                    <div className="absolute inset-0 bg-zinc-900" />
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        <Link href="/" className="flex items-center gap-2">
                            <Icons.logo2 className="h-6 w-6"/>
                            HRIS PLUS+
                        </Link>
                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                &ldquo;This tools has saved me countless hours of administrative work and helped streamline HR processes,
                                allowing me to manage employee data, payroll, and performance more efficiently than ever before.&rdquo;
                            </p>
                            <footer className="text-sm">Rey Wijaya</footer>
                        </blockquote>
                    </div>
                </div>
                <div className="py-8 px-2 lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 lg:text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Log in to your account
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Enter your email and password to log in.
                            </p>
                        </div>
                        <UserLoginForm />
                    </div>
                </div>
            </div>
        </>
    )
}