import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollText, FileText, Shield, AlertTriangle, Scale, Link2, Globe, Gavel, Lock, RefreshCw, MapPin, Phone, Mail, Eye } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageBreadcrumb currentPage="Terms of Service" />
      
      <main className="flex-grow bg-gradient-to-b from-background via-background to-muted/20">
        {/* Hero Section */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <ScrollText className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Terms of Service
              </h1>
              <Badge variant="secondary" className="mb-6">
                Effective Date: October 26, 2025
              </Badge>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="pb-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="glass">
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold text-foreground">Vitality Wellness Clinic</h2>
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>1500 Weston Rd, Weston, FL 33326</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <a href="tel:9548164002" className="hover:text-primary transition-colors">(954) 816-4002</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <a href="mailto:vitalitywellnessfl@gmail.com" className="hover:text-primary transition-colors">
                        vitalitywellnessfl@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <a href="https://vitalitywellnessfl.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        vitalitywellnessfl.com
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Terms Content */}
        <section className="pb-16">
          <div className="container mx-auto px-4 max-w-4xl space-y-6">
            {/* 1. Acceptance of Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  1. Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  By visiting or using the website vitalitywellnessfl.com (the "Site"), you agree to these Terms of Service ("Terms"). If you do not agree, please do not use this Site.
                </p>
              </CardContent>
            </Card>

            {/* 2. Purpose of the Site */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Globe className="w-6 h-6 text-primary" />
                  2. Purpose of the Site
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  This Site is operated by Vitality Wellness Clinic ("Vitality," "we," "us," or "our") for general informational and educational purposes only.
                </p>
                <p>
                  The Site does not provide medical advice, diagnosis, or treatment, and it is not a patient portal or healthcare service platform. Always consult a qualified healthcare professional for personal medical concerns.
                </p>
              </CardContent>
            </Card>

            {/* 3. Use of the Site */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  3. Use of the Site
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  You agree to use the Site only for lawful purposes and in a way that does not harm, disable, or interfere with the Site or others' use of it. You may not attempt to access secure areas, collect user data, or use the Site in a manner inconsistent with its intended purpose.
                </p>
              </CardContent>
            </Card>

            {/* 4. Intellectual Property */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Lock className="w-6 h-6 text-primary" />
                  4. Intellectual Property
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  All content on the Site—including text, graphics, logos, images, and layout—is owned by or licensed to Vitality Wellness Clinic and is protected by U.S. and international copyright laws.
                </p>
                <p>
                  You may view and print materials for personal, noncommercial use only. Any other use, including modification, reproduction, or distribution, requires our prior written permission.
                </p>
              </CardContent>
            </Card>

            {/* 5. Accuracy of Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  5. Accuracy of Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  We strive to keep all information on the Site accurate and up to date, but we do not guarantee that all content is complete, current, or error-free. The Site may include typographical errors, technical issues, or outdated details. We reserve the right to make corrections or updates at any time without notice.
                </p>
              </CardContent>
            </Card>

            {/* 6. Third-Party Links */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Link2 className="w-6 h-6 text-primary" />
                  6. Third-Party Links
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  The Site may include links to third-party websites for convenience or reference. We do not control or endorse these external sites and are not responsible for their content or privacy practices. Visiting any third-party site is at your own discretion and risk.
                </p>
              </CardContent>
            </Card>

            {/* 7. Disclaimer of Warranties */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  7. Disclaimer of Warranties
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  The Site is provided "as is" and "as available." We make no warranties or representations of any kind, express or implied, including those of accuracy, reliability, or fitness for a particular purpose.
                </p>
              </CardContent>
            </Card>

            {/* 8. Limitation of Liability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Scale className="w-6 h-6 text-primary" />
                  8. Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  To the fullest extent permitted by law, Vitality Wellness Clinic and its staff, affiliates, or partners will not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with your use of (or inability to use) the Site.
                </p>
              </CardContent>
            </Card>

            {/* 9. Privacy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Lock className="w-6 h-6 text-primary" />
                  9. Privacy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  Your use of this Site is also governed by our Privacy Policy. Please review it to understand how we collect and use information submitted through the "Contact Us" form.
                </p>
              </CardContent>
            </Card>

            {/* 10. Changes to These Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <RefreshCw className="w-6 h-6 text-primary" />
                  10. Changes to These Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  We may update these Terms periodically. The updated version will be posted on this page with a new effective date. Continued use of the Site after changes are posted means you accept the revised Terms.
                </p>
              </CardContent>
            </Card>

            {/* 11. Governing Law */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Gavel className="w-6 h-6 text-primary" />
                  11. Governing Law
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  These Terms are governed by the laws of the State of Florida, without regard to its conflict of law principles.
                </p>
              </CardContent>
            </Card>

            {/* 12. Contact Us */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-primary" />
                  12. Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>If you have any questions about these Terms, please contact us at:</p>
                <div className="space-y-1 pl-4">
                  <p className="font-semibold text-foreground">Vitality Wellness Clinic</p>
                  <p>1500 Weston Rd</p>
                  <p>Weston, FL 33326</p>
                  <p>(954) 816-4002</p>
                  <p>
                    <a href="mailto:vitalitywellnessfl@gmail.com" className="text-primary hover:underline">
                      vitalitywellnessfl@gmail.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Footer Message */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6 text-center">
                <p className="text-lg font-semibold text-foreground">
                  Vitality Wellness Clinic
                </p>
                <p className="text-muted-foreground">
                  Committed to your health and wellness in Weston and surrounding areas.
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
