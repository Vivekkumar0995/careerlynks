"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { Separator } from "@/components/ui/separator";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Spinner } from "./ui/spinner";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const formSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    email: z.email("Please enter a valid email address"), // if error in email then see this line
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export function SignUpForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      await authClient.signUp.email(
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          onSuccess: async () => {
            toast.success("Signed up successfully!");
          },
          onError: async (ctx) => {
            toast.error(`Sign-up failed: ${ctx.error.message}`);
          },
        }
      );
    } catch (error) {
      console.error("Sign-up error:", error);
      throw new Error("Sign-up failed something went wrong");
    }
  };

  const signInWithGoogle = async () => {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    };
  
    const signInWithGitHub = async () => {
      await authClient.signIn.social({
        provider: "github",
        callbackURL: "/",
      });
    }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Sign-up</CardTitle>
        <CardDescription>
          Create an account to get started with CareerLynk
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="signup-form" onSubmit={form.handleSubmit(onSubmit)}>
          {/* name */}
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Name</FieldLabel>
                <Input
                  {...field}
                  autoComplete="off"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* email */}
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Email</FieldLabel>
                  <Input
                    {...field}
                    autoComplete="off"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* Password */}
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Password</FieldLabel>
                  <Input
                    {...field}
                    autoComplete="off"
                    aria-invalid={fieldState.invalid}
                    type="password"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* confirmPassword */}
            <Controller
              name="confirmPassword"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Confirm Password</FieldLabel>
                  <Input
                    {...field}
                    autoComplete="off"
                    type="password"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col w-full">
        <Field
          orientation="horizontal"
          className="flex w-full items-center justify-between"
        >
          <p className="text-sm flex items-center gap-1">
            Already have an account?
            <Link
              href="/sign-in"
              className="ml-1 text-blue-600 hover:underline"
            >
              Sign-in
            </Link>
          </p>
          <>
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
            >
              Reset
            </Button>
            <Button type="submit" form="signup-form">
              {form.formState.isSubmitting ? <Spinner /> : "Sign-up"}
            </Button>
          </>
        </Field>

        <p className="text-sm">Or</p>
        <Separator className="gap-6 my-2" />

        <div className="flex flex-col gap-2 w-full">
          <Button
            type="button"
            className="text-sm cursor-pointer"
            onClick={signInWithGoogle}
          >
            Sign in with Google
          </Button>

          <Button
            type="button"
            className="text-sm cursor-pointer"
            onClick={signInWithGitHub}
          >
            Sign in with GitHub
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
