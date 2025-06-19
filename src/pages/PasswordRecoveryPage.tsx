import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"; // Standalone Label, though FormLabel is preferred with Form
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { AlertTriangle, CheckCircle } from 'lucide-react';

const recoverySchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
});

type RecoveryFormValues = z.infer<typeof recoverySchema>;

const PasswordRecoveryPage: React.FC = () => {
  console.log('PasswordRecoveryPage loaded');
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const form = useForm<RecoveryFormValues>({
    resolver: zodResolver(recoverySchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: RecoveryFormValues) => {
    setError(null);
    setSuccess(null);
    console.log('Password recovery form submitted:', data);
    // Simulate API call for password recovery
    // For now, just show a success message
    setSuccess(`If an account exists for ${data.email}, a recovery email has been sent.`);
    form.reset(); // Clear the form
    // Optionally, navigate away or disable form
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
           <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="App Logo" className="mx-auto h-10 w-auto mb-4" />
          <CardTitle className="text-2xl font-bold">Forgot your password?</CardTitle>
          <CardDescription>Enter your email to receive reset instructions.</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {success && (
            <Alert variant="default" className="mb-4 bg-green-50 border-green-300 text-green-700 dark:bg-green-900/30 dark:border-green-700 dark:text-green-300">
              <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400" />
              <AlertTitle>Email Sent</AlertTitle>
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}
          {!success && (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email">Email Address</FormLabel>
                      <FormControl>
                        <Input id="email" type="email" placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Sending..." : "Send Recovery Email"}
                </Button>
              </form>
            </Form>
          )}
        </CardContent>
        <CardFooter className="text-center text-sm">
          <p className="text-gray-600 dark:text-gray-400">
            Remembered your password?{' '}
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PasswordRecoveryPage;