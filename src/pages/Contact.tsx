import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team for questions about NCO 2015, technical support, 
            or collaboration opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization (Optional)</Label>
                    <Input id="organization" placeholder="Your organization" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Multiple ways to reach our team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 mt-1 text-muted-foreground" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground mb-2">Send us an email anytime</p>
                    <p className="text-sm">info@nco2015.gov.in</p>
                    <p className="text-sm">support@nco2015.gov.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 mt-1 text-muted-foreground" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-sm text-muted-foreground mb-2">Call us during business hours</p>
                    <p className="text-sm">+91-11-2345-6789</p>
                    <p className="text-sm">+91-11-2345-6790 (Support)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 mt-1 text-muted-foreground" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-sm text-muted-foreground mb-2">Visit our office</p>
                    <p className="text-sm">
                      Ministry of Labour & Employment<br />
                      Directorate General of Employment & Training<br />
                      Shram Shakti Bhawan, Rafi Marg<br />
                      New Delhi - 110001, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 mt-1 text-muted-foreground" />
                  <div>
                    <h3 className="font-medium">Business Hours</h3>
                    <p className="text-sm text-muted-foreground mb-2">When we're available</p>
                    <p className="text-sm">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                    <p className="text-sm">Saturday: 9:00 AM - 1:00 PM IST</p>
                    <p className="text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Project Team</CardTitle>
                <CardDescription>
                  The people behind NCO 2015
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-3 border rounded-lg">
                    <h3 className="font-medium">Dr. Rajesh Kumar</h3>
                    <p className="text-sm text-muted-foreground">Project Director</p>
                    <p className="text-xs mt-1">Policy Development & Implementation</p>
                  </div>
                  
                  <div className="p-3 border rounded-lg">
                    <h3 className="font-medium">Priya Sharma</h3>
                    <p className="text-sm text-muted-foreground">Technical Lead</p>
                    <p className="text-xs mt-1">Data Management & Classification</p>
                  </div>
                  
                  <div className="p-3 border rounded-lg">
                    <h3 className="font-medium">Amit Patel</h3>
                    <p className="text-sm text-muted-foreground">Research Analyst</p>
                    <p className="text-xs mt-1">Occupation Analysis & Mapping</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Official NCO 2015 Documentation
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      ISCO-2008 International Standards
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Ministry of Labour & Employment
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <Card className="card-elevated">
          <CardContent className="pt-6">
            <div className="text-center text-sm text-muted-foreground">
              <p className="mb-2">
                <strong>Note:</strong> This is a demonstration website showcasing NCO 2015 structure and functionality.
              </p>
              <p>
                The contact information provided is illustrative. For official NCO 2015 information, 
                please visit the Ministry of Labour & Employment's official website.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}