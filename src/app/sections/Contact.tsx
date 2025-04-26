"use client"; // Mark as a Client Component

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from 'next/link';
import { Linkedin, Mail, Phone, Github, Loader2, CheckCircle, AlertTriangle } from 'lucide-react'; // Icons
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils"; // Assuming you have a utility for class names

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setStatus('idle'); // Reset status on change
        setFeedbackMessage('');
        setFormState({
            ...formState,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setFeedbackMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('success');
                setFeedbackMessage(result.message || 'Message sent successfully!');
                setFormState({ name: '', email: '', message: '' }); // Clear form
            } else {
                setStatus('error');
                setFeedbackMessage(result.error || 'Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus('error');
            setFeedbackMessage('An unexpected error occurred. Please try again.');
        }
    };

    return (
        <section id="contact" className="py-20">
            <motion.div
                className="container mx-auto px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="glass-panel rounded-xl p-8 md:p-12 max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                        {/* Left Side: Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-4xl font-extrabold leading-tight tracking-tighter text-white mb-6">
                                    Get In Touch
                                </h2>
                                <p className="text-lg text-neutral-400">
                                    Have a project in mind or just want to connect? Feel free to reach out!
                                </p>
                            </div>

                            <div className="space-y-6 pt-4 border-t border-neutral-800">
                                <Link href="mailto:muhammadkashifbhatti70@gmail.com" className="flex items-center gap-4 text-neutral-400 hover:text-white transition-colors">
                                    <Mail className="h-5 w-5" />
                                    <span>muhammadkashifbhatti70@gmail.com</span>
                                </Link>
                                <Link href="tel:+923075196247" className="flex items-center gap-4 text-neutral-400 hover:text-white transition-colors">
                                    <Phone className="h-5 w-5" />
                                    <span>(+92) 307-5196247</span>
                                </Link>
                                <Link href="https://www.linkedin.com/in/muhammadkashif70/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-neutral-400 hover:text-white transition-colors">
                                    <Linkedin className="h-5 w-5" />
                                    <span>LinkedIn Profile</span>
                                </Link>
                                <Link href="https://github.com/mkashif247" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-neutral-400 hover:text-white transition-colors">
                                    <Github className="h-5 w-5" />
                                    <span>GitHub</span>
                                </Link>
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-sm text-neutral-400">Name</Label>
                                <Input
                                    id="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    disabled={status === 'loading'}
                                    className="bg-black/30 border-neutral-800 text-white placeholder:text-neutral-500 focus:border-neutral-600 disabled:opacity-50"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm text-neutral-400">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                    disabled={status === 'loading'}
                                    className="bg-black/30 border-neutral-800 text-white placeholder:text-neutral-500 focus:border-neutral-600 disabled:opacity-50"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-sm text-neutral-400">Message</Label>
                                <Textarea
                                    id="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    required
                                    disabled={status === 'loading'}
                                    className="min-h-32 bg-black/30 border-neutral-800 text-white placeholder:text-neutral-500 focus:border-neutral-600 disabled:opacity-50"
                                />
                            </div>
                            <Button
                                type="submit"
                                disabled={status === 'loading'}
                                className="mt-4 bg-black/40 hover:bg-black/60 border border-neutral-800 text-white hover:text-white w-full font-normal disabled:opacity-50"
                            >
                                {status === 'loading' && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </Button>
                            {feedbackMessage && (
                                <div className={cn(
                                    "mt-4 p-3 rounded-md text-sm flex items-center gap-2",
                                    status === 'success' && "bg-green-900/30 text-green-300 border border-green-700",
                                    status === 'error' && "bg-red-900/30 text-red-300 border border-red-700",
                                )}>
                                    {status === 'success' && <CheckCircle className="h-4 w-4" />}
                                    {status === 'error' && <AlertTriangle className="h-4 w-4" />}
                                    {feedbackMessage}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact; 