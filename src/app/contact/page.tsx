"use client"; // Mark as a Client Component

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from 'next/link';
import { Linkedin, Mail, Phone, Github } from 'lucide-react'; // Icons
import { motion } from 'framer-motion'; // Added for animation consistency
import Image from 'next/image';

// Renamed component to ContactPage for clarity
const ContactPage: React.FC = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formState);
        alert('Thank you for your message. We will get back to you soon!');
        setFormState({ name: '', email: '', message: '' });
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black">
            {/* Background pattern on right side */}
            <div className="absolute right-0 top-0 h-full w-1/2 z-0 opacity-20">
                <Image
                    src="/hero.png"
                    alt="Technology Pattern"
                    fill
                    className="object-cover object-left"
                    priority
                />
            </div>

            <div className="container relative z-10 mx-auto px-4 py-20">
                <motion.div
                    className="glass-panel rounded-xl p-8 md:p-12 max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                        {/* Left Side: Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-5xl font-extrabold leading-tight tracking-tighter text-white mb-6">
                                    Get In Touch
                                </h1>
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
                                    className="bg-black/30 border-neutral-800 text-white placeholder:text-neutral-500 focus:border-neutral-600"
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
                                    className="bg-black/30 border-neutral-800 text-white placeholder:text-neutral-500 focus:border-neutral-600"
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
                                    className="min-h-32 bg-black/30 border-neutral-800 text-white placeholder:text-neutral-500 focus:border-neutral-600"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="mt-4 bg-black/40 hover:bg-black/60 border border-neutral-800 text-white hover:text-white w-full font-normal"
                            >
                                Send Message
                            </Button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage;
