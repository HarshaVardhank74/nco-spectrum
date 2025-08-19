import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Search, BarChart3, Users, Globe, Database, FileText, Mail, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroBackground from "@/assets/hero-background.jpg";

const features = [
  {
    icon: Search,
    title: "Search & Filter Occupations",
    description: "Powerful search capabilities to find specific job roles, codes, and descriptions across all divisions and sectors.",
    link: "/search"
  },
  {
    icon: BarChart3,
    title: "Interactive Dashboard",
    description: "Comprehensive analytics and visualizations showing occupation distribution, trends, and classifications.",
    link: "/dashboard"
  },
  {
    icon: Database,
    title: "Hierarchical Browse",
    description: "Navigate through Division → Sub-division → Group → Family → Occupation structure systematically.",
    link: "/dashboard"
  },
  {
    icon: Globe,
    title: "ISCO-2008 Alignment",
    description: "Internationally compatible classification system enabling global labor market comparisons.",
    link: "/about"
  },
  {
    icon: Users,
    title: "Multi-stakeholder Platform",
    description: "Serves jobseekers, employers, policymakers, and researchers with tailored insights and data.",
    link: "/about"
  },
  {
    icon: Award,
    title: "Skill-based Classification",
    description: "Four-tier skill level system reflecting education requirements and professional expertise.",
    link: "/about"
  }
];

const stats = [
  { label: "Major Divisions", value: "9", description: "Core occupation categories" },
  { label: "Occupation Codes", value: "1000+", description: "Detailed classifications" },
  { label: "Industry Sectors", value: "15+", description: "Economic sectors covered" },
  { label: "Skill Levels", value: "4", description: "From elementary to expert" }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative hero-gradient border-b overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8 max-w-4xl mx-auto"
          >
            <div className="space-y-4">
              <Badge variant="outline" className="text-sm px-4 py-2">
                NCO 2015 • ISCO-2008 Aligned
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                National Classification of
                <span className="block">Occupations – 2015</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A central repository of job roles and occupations in India, aligned with ISCO-2008, 
                designed to help jobseekers, employers, and policymakers navigate the modern workforce.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group">
                <Link to="/dashboard">
                  Explore Dashboard
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/search">
                  <Search className="mr-2 h-4 w-4" />
                  Search Occupations
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center space-y-4 mb-12"
          >
            <Badge variant="outline">Platform Features</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">Comprehensive Occupation Intelligence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover powerful tools and insights for exploring India's occupational landscape 
              with modern search, analytics, and classification capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
              >
                <Link to={feature.link}>
                  <Card className="card-elevated h-full group cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-muted rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <feature.icon className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center space-y-8 max-w-3xl mx-auto"
          >
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Ready to Explore?</h2>
              <p className="text-xl text-muted-foreground">
                Start discovering occupational data and insights that matter to your career, 
                business, or research objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button size="lg" asChild className="group">
                <Link to="/dashboard">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  View Dashboard
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/search">
                  <Search className="mr-2 h-4 w-4" />
                  Start Searching
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">
                  <FileText className="mr-2 h-4 w-4" />
                  Learn More
                </Link>
              </Button>
            </div>

            <div className="pt-8 border-t text-sm text-muted-foreground">
              <p>
                This is a demonstration platform showcasing NCO 2015 structure and capabilities using mock data. 
                <Link to="/contact" className="underline hover:text-foreground ml-1">
                  Contact us for more information
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
