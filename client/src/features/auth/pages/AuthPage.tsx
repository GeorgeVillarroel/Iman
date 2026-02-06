import React, { useState } from 'react';

type AuthMode = 'login' | 'signup' | 'reset';

const AuthPage: React.FC = () => {
    const [mode, setMode] = useState<AuthMode>('login');

    // Placeholder for your future backend logic
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(`Submitting ${mode} form...`);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-lg border border-gray-100">
                {/* Header Section */}
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-gray-900">
                        {mode === 'login' && 'Welcome Back'}
                        {mode === 'signup' && 'Create an Account'}
                        {mode === 'reset' && 'Reset Password'}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        {mode === 'login' && "Don't have an account? "}
                        {mode === 'signup' && 'Already have an account? '}
                        <button
                            onClick={() =>
                                setMode(mode === 'login' ? 'signup' : 'login')
                            }
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            {mode === 'login' ? 'Sign up' : 'Sign in'}
                        </button>
                    </p>
                </div>

                {/* Dynamic Form */}
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="-space-y-px rounded-md shadow-sm">
                        {mode === 'signup' && (
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="relative block w-full rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                required
                            />
                        )}

                        <input
                            type="email"
                            placeholder="Email address"
                            className={`relative block w-full border border-gray-300 px-3 py-2 text-gray-900 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ${
                                mode !== 'signup' ? 'rounded-t-md' : ''
                            }`}
                            required
                        />

                        {mode !== 'reset' && (
                            <input
                                type="password"
                                placeholder="Password"
                                className="relative block w-full rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                required
                            />
                        )}
                    </div>

                    {/* Helper Links */}
                    {mode === 'login' && (
                        <div className="flex items-center justify-end">
                            <button
                                type="button"
                                onClick={() => setMode('reset')}
                                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Forgot your password?
                            </button>
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
                    >
                        {mode === 'login'
                            ? 'Sign in'
                            : mode === 'signup'
                              ? 'Sign up'
                              : 'Send Reset Link'}
                    </button>

                    {/* Back to Login for Reset mode */}
                    {mode === 'reset' && (
                        <div className="text-center">
                            <button
                                type="button"
                                onClick={() => setMode('login')}
                                className="text-sm font-medium text-gray-500 hover:text-gray-700"
                            >
                                ← Back to Login
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default AuthPage;
