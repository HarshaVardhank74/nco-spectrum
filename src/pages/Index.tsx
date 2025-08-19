import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Search, BarChart3, Users, Globe, Database, FileText, Award } from "lucide-react";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0
  }
};

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section 
        className="relative hero-gradient overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="relative container-wide hero-content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center space-y-8 max-w-5xl mx-auto text-white"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Badge variant="outline" className="text-sm px-6 py-2 border-white/30 text-white bg-white/10 backdrop-blur">
                  NCO 2015 • ISCO-2008 Aligned
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="hero-title text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                National Classification of
                <span className="block">Occupations – 2015</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                A central repository of job roles and occupations in India, aligned with ISCO-2008, 
                designed to help jobseekers, employers, and policymakers navigate the modern workforce.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button size="lg" asChild className="group bg-white text-black hover:bg-white/90 shadow-lg">
                <Link to="/dashboard">
                  Explore Dashboard
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/30 text-white hover:bg-white/10 backdrop-blur">
                <Link to="/search">
                  <Search className="mr-2 h-4 w-4" />
                  Search Occupations
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="section-padding border-b">
        <div className="container-wide">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="text-4xl lg:text-5xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="font-semibold mb-1 text-lg">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-16"
          >
            <Badge variant="outline" className="text-sm px-4 py-2">Platform Features</Badge>
            <h2 className="section-title">Comprehensive Occupation Intelligence</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Discover powerful tools and insights for exploring India's occupational landscape 
              with modern search, analytics, and classification capabilities.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
              >
                <Link to={feature.link}>
                  <Card className="feature-card h-full group cursor-pointer">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-muted rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                          <feature.icon className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-xl font-bold leading-tight">{feature.title}</CardTitle>
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
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-10 max-w-4xl mx-auto"
          >
            <div className="space-y-6">
              <h2 className="section-title">Ready to Explore?</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Start discovering occupational data and insights that matter to your career, 
                business, or research objectives.
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button size="lg" asChild className="group h-14">
                <Link to="/dashboard">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  View Dashboard
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-14">
                <Link to="/search">
                  <Search className="mr-2 h-5 w-5" />
                  Start Searching
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-14">
                <Link to="/about">
                  <FileText className="mr-2 h-5 w-5" />
                  Learn More
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              className="pt-8 border-t text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>
                This is a demonstration platform showcasing NCO 2015 structure and capabilities using mock data. 
                <Link to="/contact" className="underline hover:text-foreground ml-1 transition-colors">
                  Contact us for more information
                </Link>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
