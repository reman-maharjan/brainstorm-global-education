'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useSubmitContactForm } from "@/hooks/use-contact";
import { ContactFormData } from "@/types/contact";

const Contact = () => {
  const { mutate: submitContact, isPending } = useSubmitContactForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const destination = formData.get("destination") as string;
    const education = formData.get("education") as string;
    const message = formData.get("message") as string;

    const fullMessage = `${message}\n\nAdditional Details:\nPreferred Destination: ${destination || 'Not Answered'}\nCurrent Education Level: ${education || 'Not Answered'}`;

    const submissionData: ContactFormData = {
      name: `${firstName} ${lastName}`.trim(),
      email: email,
      phone_number: phone,
      message: fullMessage,
    };

    submitContact(submissionData, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <>
      <section className="pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column: Hero & Form */}
            <div className="lg:col-span-2 space-y-12">
              <div className="max-w-2xl">
                <h1 className="text-2xl md:text-4xl font-extrabold mb-4">
                  Let&apos;s Start Your Journey
                </h1>
             
              </div>

              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName"  name="firstName" required className="h-15" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" name="lastName" required className="h-15" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" required className="h-15" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" name="phone" type="tel" required className="h-15" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* <div className="space-y-2">
                      <Label htmlFor="destination">Preferred Destination</Label>
                      <Select name="destination">
                        <SelectTrigger className="">
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usa">USA</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="australia">Australia</SelectItem>
                          <SelectItem value="canada">Canada</SelectItem>
                          <SelectItem value="new-zealand">New Zealand</SelectItem>
                          <SelectItem value="undecided">Not Sure Yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="education">Current Education Level</Label>
                      <Select name="education">
                        <SelectTrigger className="">
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="highschool">High School (+2)</SelectItem>
                          <SelectItem value="bachelors">Bachelor&apos;s Degree</SelectItem>
                          <SelectItem value="masters">Master&apos;s Degree</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div> */}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      rows={4}
                      className=""
                    />
                  </div>
                  <Button type="submit" size="lg" disabled={isPending} className="w-full md:w-auto shadow-sm">
                    {isPending ? (
                      "Sending..."
                    ) : (
                      <>
                        Submit Inquiry <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Right Column: Contact Info Sidebar */}
            <div className="space-y-6">
              <div className="bg-card  border-border rounded-lg pb-6">
                <h3 className="font-bold text-lg mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary flex items-center justify-center shrink-0 rounded-full">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Office Address</p>
                      <p className="text-sm text-muted-foreground">
                        Putalisadak, Kathmandu, Nepal<br />
                        Near Shanker Dev Campus
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary flex items-center justify-center shrink-0 rounded-full">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">
                        +977 1234567890<br />
                        +977 9876543210
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary flex items-center justify-center shrink-0 rounded-full">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">
                        info@brainstormglobal.edu.np<br />
                        apply@brainstormglobal.edu.np
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary flex items-center justify-center shrink-0 rounded-full">
                      <Clock className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Sunday - Friday<br />
                        9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Quick Response</h3>
                <p className="text-sm opacity-90 mb-4">
                  We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly.
                </p>
                <Button asChild  size="sm" className="bg-white text-primary hover:bg-white/90">
                  <a href="tel:+9771234567890">
                    <Phone className="mr-2 w-4 h-4 " /> Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>


<section className="border-border pt-20">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
    <div className="rounded-lg overflow-hidden border border-border h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8772833596113!2d85.33311257546674!3d27.69018747619243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199648fa2b4d%3A0xd6c11ac169c74363!2sBrainstorm%20Global%20Education!5e0!3m2!1sen!2snp!4v1765109511579!5m2!1sen!2snp"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</section>
    </>
  );
};

export default Contact;

