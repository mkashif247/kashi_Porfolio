"use client"; // Mark as a Client Component

import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from 'next/link';
import { Linkedin, Mail, Phone } from 'lucide-react'; // Icons

const Contact: React.FC = () => {
    // Basic placeholder for form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Contact form functionality not implemented yet.');
    };

    return (
        <section id="contact" className="container py-12 md:py-24 bg-secondary">
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
                {/* Left Side: Info */}
                <div className="space-y-6">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-4xl">
                        Get In Touch
                    </h2>
                    <p className="text-muted-foreground">
                        Have a project in mind or just want to connect? Feel free to reach out!
                    </p>
                    <div className="space-y-4">
                        <Link href="mailto:muhammadkashifbhatti70@gmail.com" className="flex items-center gap-3 hover:text-primary">
                            <Mail className="h-5 w-5" />
                            <span>muhammadkashifbhatti70@gmail.com</span>
                        </Link>
                        <Link href="tel:+923075196247" className="flex items-center gap-3 hover:text-primary">
                            <Phone className="h-5 w-5" />
                            <span>(+92) 307-5196247</span>
                        </Link>
                        <Link href="https://www.linkedin.com/in/muhammadkashif70/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary">
                            <Linkedin className="h-5 w-5" />
                            <span>LinkedIn Profile</span>
                        </Link>
                        {/* Add other links like Portfolio, GitHub if desired */}
                    </div>
                </div>

                {/* Right Side: Contact Form (Placeholder) */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your Name" required />
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Your Email" required />
                    </div>
                    <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Your Message" required />
                    </div>
                    <Button type="submit">Send Message</Button>
                </form>
            </div>
        </section>
    );
};

export default Contact; 