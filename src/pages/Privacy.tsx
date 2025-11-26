import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Lock, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  FileText, 
  AlertTriangle, 
  Users, 
  Eye, 
  Server,
  Cookie,
  Bell,
  UserCheck,
  ScrollText
} from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageBreadcrumb currentPage="Privacy Policy" />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
          <div className="relative mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Privacy Policy
            </h1>
            <Badge variant="secondary" className="mb-6">
              Last Updated: October 14, 2025
            </Badge>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Vitality Wellness Clinic</p>
                    <p className="text-sm text-muted-foreground">1500 Weston Rd</p>
                    <p className="text-sm text-muted-foreground">Weston, FL 33326</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">(954) 816-4002</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">vitalitywellnessfl@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Eye className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Website</p>
                    <p className="text-sm text-muted-foreground">vitalitywellnessfl.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-8">
            
            {/* Our Commitment */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Our Commitment to Your Privacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  At Vitality Wellness Clinic, we are committed to protecting the privacy and security of your personal health information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information in compliance with the Health Insurance Portability and Accountability Act (HIPAA) and other applicable federal and state privacy laws.
                </p>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  How We May Use and Disclose Your Health Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="without-auth">
                    <AccordionTrigger className="text-left">
                      <span className="font-semibold">Without Your Written Authorization</span>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          For Treatment
                        </h4>
                        <p className="text-sm text-muted-foreground pl-6">
                          We may use and disclose your health information to provide, coordinate, or manage your healthcare services. This includes sharing information with physicians, nurses, medical assistants, and other healthcare professionals involved in your care.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          For Payment
                        </h4>
                        <p className="text-sm text-muted-foreground pl-6">
                          We may use and disclose your health information to bill and collect payment for services provided. This includes sharing information with your health insurance company, Medicare, Medicaid, or other payers.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          For Healthcare Operations
                        </h4>
                        <p className="text-sm text-muted-foreground pl-6">
                          We may use and disclose your health information for our healthcare operations, including quality assessment, training, accreditation, and business planning.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Other Permitted Uses Without Authorization:</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground pl-6">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span><strong>Public Health Activities:</strong> Reporting diseases, injuries, births, deaths, and public health investigations</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span><strong>Health Oversight Activities:</strong> Audits, investigations, and inspections by health oversight agencies</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span><strong>Legal Proceedings:</strong> In response to court orders, subpoenas, or other lawful processes</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span><strong>Law Enforcement:</strong> When required by law or in response to valid law enforcement requests</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span><strong>Workers' Compensation:</strong> As necessary to comply with workers' compensation laws</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span><strong>Emergency Situations:</strong> To avert a serious threat to health or safety</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span><strong>Military and Veterans:</strong> For activities deemed necessary by military command authorities</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span><strong>National Security:</strong> For national security and intelligence activities</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span><strong>Coroners and Funeral Directors:</strong> For identification purposes and determination of cause of death</span>
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="with-auth">
                    <AccordionTrigger className="text-left">
                      <span className="font-semibold">With Your Written Authorization</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">
                        For uses and disclosures beyond treatment, payment, and healthcare operations, we will obtain your written authorization. You may revoke any authorization in writing at any time, except to the extent that we have already taken action in reliance on it.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Website Privacy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  Website Privacy & Information Collection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="auto-collect">
                    <AccordionTrigger className="text-left">
                      <span className="font-semibold">Automatically Collected Information</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        When you visit vitalitywellnessfl.com, we may automatically collect:
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Browser type and version</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Operating system</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>IP address (anonymized)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Pages visited and time spent on site</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Referring website</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Date and time of visit</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="provided-info">
                    <AccordionTrigger className="text-left">
                      <span className="font-semibold">Information You Provide</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Contact information (name, email, phone number) when you request an appointment or information</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Health information you voluntarily provide through any secure patient portal or contact forms</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Feedback or communications you send to us</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="how-use">
                    <AccordionTrigger className="text-left">
                      <span className="font-semibold">How We Use Website Information</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>To respond to your appointment requests and inquiries</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>To improve our website functionality and user experience</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>To send appointment reminders and health information (with your consent)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>To comply with legal obligations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>To maintain security and prevent fraud</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="cookies">
                    <AccordionTrigger className="text-left">
                      <span className="font-semibold flex items-center gap-2">
                        <Cookie className="h-4 w-4 text-primary" />
                        Cookies and Tracking Technologies
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Our website may use cookies and similar technologies to:
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground mb-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Remember your preferences and settings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Understand how visitors use our site</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Improve website performance and functionality</span>
                        </li>
                      </ul>
                      <p className="text-sm text-muted-foreground">
                        You can control cookie settings through your browser preferences. Disabling cookies may limit some website functionality.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  Data Security Measures
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We implement comprehensive physical, technical, and administrative safeguards to protect your health information.
                </p>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="physical">
                    <AccordionTrigger className="text-left">
                      <span className="font-semibold">Physical Safeguards</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Secure facility access controls</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Locked storage for paper records</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Secure disposal procedures for confidential information</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Private consultation and examination areas</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="technical">
                    <AccordionTrigger className="text-left">
                      <span className="font-semibold">Technical Safeguards</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Encrypted electronic health records (EHR) or practice management systems where applicable</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Secure network infrastructure and firewalls</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Password-protected systems with automatic logoff</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Regular security updates and patches</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Secure backup and disaster recovery procedures</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Encrypted email or secure platforms for sensitive communications when appropriate</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="administrative">
                    <AccordionTrigger className="text-left">
                      <span className="font-semibold">Administrative Safeguards</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Staff training on HIPAA and privacy practices</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Written policies and procedures</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Designated Privacy Officer or privacy contact</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Business associate agreements with vendors</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Regular risk assessments and security audits</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Workforce clearance procedures</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Third Party Service Providers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-primary" />
                  Third-Party Service Providers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-3">Business Associates</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  We work with third-party service providers ("business associates") who may have access to your health information to perform services on our behalf, including:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Electronic health record or practice management vendors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Billing and coding services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>IT support and security services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Medical waste disposal services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Legal and accounting services</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  All business associates are required to sign agreements ensuring they will appropriately safeguard your information and comply with HIPAA requirements.
                </p>
              </CardContent>
            </Card>

            {/* Email and Text Communications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  Email and Text Message Communications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="standard">
                    <AccordionTrigger className="text-left">
                      <span className="font-semibold">Standard Email and Text</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Regular email and text messages are NOT secure methods for transmitting sensitive health information. We may use these methods for:
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Appointment reminders (without specific health details)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>General office announcements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Wellness tips and health education</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="secure">
                    <AccordionTrigger className="text-left">
                      <span className="font-semibold">Secure Messaging</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">
                        For confidential health communications, please use any secure patient portal or encrypted messaging system we may provide.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Minors and Parental Access */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Minors and Parental Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-3">Privacy Rights of Minor Patients</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  For patients under 18 years of age:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Parents or legal guardians generally have the right to access their child's health information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Florida law provides certain minors with the right to consent to specific healthcare services without parental consent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>In cases where a minor has legal authority to consent to care, parental access may be restricted</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  We comply with all Florida laws regarding minor consent and parental access.
                </p>
              </CardContent>
            </Card>

            {/* Breach Notification */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  Breach Notification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-3">In the Event of a Breach</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  In the unlikely event of a breach of your unsecured health information, we will:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Notify you promptly as required by law (generally within 60 days of discovery)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Provide information about what happened</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Explain steps we are taking to mitigate harm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Describe what you can do to protect yourself</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Notify appropriate regulatory authorities as required</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Your Privacy Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="h-5 w-5 text-primary" />
                  Your Privacy Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-3">Protecting Your Own Information</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  You can help protect your health information by:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Keeping your patient portal login credentials confidential</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Logging out of the patient portal after each session</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Not sharing your health information on unsecured platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Reviewing your medical records for accuracy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Notifying us immediately if you suspect unauthorized access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Updating your contact information so we can reach you securely</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ScrollText className="h-5 w-5 text-primary" />
                  Changes to This Privacy Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  We reserve the right to modify this Privacy Policy and our privacy practices at any time. Changes will be effective immediately upon posting to our website or distribution in our office. The "Last Updated" date at the top of this notice indicates when it was last revised.
                </p>
                <p className="text-sm font-semibold mb-2">We will:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Post the current notice in our office and/or on our website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Provide you with a copy upon request</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Make the notice available at your first service delivery date after the effective date</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Filing a Complaint */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  Filing a Complaint
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-3">Your Right to Complain</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  If you believe your privacy rights have been violated, you have the right to file a complaint:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">With Our Practice:</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Privacy Officer</p>
                      <p>Vitality Wellness Clinic</p>
                      <p>1500 Weston Rd</p>
                      <p>Weston, FL 33326</p>
                      <p>(954) 816-4002</p>
                      <p>vitalitywellnessfl@gmail.com</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">With the Federal Government:</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Office for Civil Rights</p>
                      <p>U.S. Department of Health and Human Services</p>
                      <p>200 Independence Avenue, S.W.</p>
                      <p>Washington, D.C. 20201</p>
                      <p>Phone: 1-877-696-6775</p>
                      <p>Website: www.hhs.gov/ocr/privacy/hipaa/complaints</p>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm font-semibold mb-1">No Retaliation:</p>
                    <p className="text-sm text-muted-foreground">
                      You will not be penalized, retaliated against, or denied care for filing a complaint.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Questions & Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Questions & Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-3">Privacy Officer</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  For questions about this Privacy Policy, your privacy rights, or to request access to your medical records:
                </p>
                <div className="text-sm text-muted-foreground space-y-1 mb-4">
                  <p className="font-semibold text-foreground">Vitality Wellness Clinic</p>
                  <p>1500 Weston Rd</p>
                  <p>Weston, FL 33326</p>
                  <p>Website: vitalitywellnessfl.com</p>
                  <p>(954) 816-4002</p>
                  <p>vitalitywellnessfl@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            {/* Acknowledgment */}
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Acknowledgment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  By receiving services at Vitality Wellness Clinic, you acknowledge that you have been provided with the opportunity to review this Privacy Policy and Notice of Privacy Practices. Your signature on our acknowledgment form indicates that you have received this notice, though your treatment is not conditioned on signing the acknowledgment.
                </p>
                <p className="text-sm text-muted-foreground">
                  This Privacy Policy complies with the Health Insurance Portability and Accountability Act (HIPAA), the Health Information Technology for Economic and Clinical Health (HITECH) Act, and applicable Florida state privacy laws. It applies to all health information created, received, or maintained by Vitality Wellness Clinic.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
