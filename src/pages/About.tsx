import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Users, Target, Book } from "lucide-react";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">About NCO 2015</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The National Classification of Occupations (NCO) 2015 is India's official system for 
            classifying occupations, aligned with the International Standard Classification of 
            Occupations (ISCO-2008).
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="card-elevated h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Purpose & Objectives
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  NCO 2015 serves as a comprehensive framework for organizing and categorizing 
                  occupations in India, facilitating better understanding of the labor market 
                  and supporting policy development.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Standardize occupation classification across India</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Support employment data collection and analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Facilitate career guidance and workforce planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Enable international comparability of occupation data</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="card-elevated h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5" />
                  Structure & Classification
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  NCO 2015 follows a hierarchical structure with four main levels, each 
                  providing increasing levels of detail about occupational categories.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <span className="font-medium">Major Groups (1-digit)</span>
                    <Badge variant="outline">9 divisions</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <span className="font-medium">Sub-Major Groups (2-digit)</span>
                    <Badge variant="outline">40+ categories</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <span className="font-medium">Minor Groups (3-digit)</span>
                    <Badge variant="outline">130+ groups</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <span className="font-medium">Unit Groups (4-digit)</span>
                    <Badge variant="outline">430+ families</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="card-elevated text-center">
              <CardHeader>
                <Globe className="h-8 w-8 mx-auto mb-2" />
                <CardTitle>ISCO-2008 Aligned</CardTitle>
                <CardDescription>
                  Internationally compatible classification system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ensures global compatibility and enables international labor 
                  market comparisons and mobility.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="card-elevated text-center">
              <CardHeader>
                <Users className="h-8 w-8 mx-auto mb-2" />
                <CardTitle>Multi-stakeholder</CardTitle>
                <CardDescription>
                  Serves jobseekers, employers, and policymakers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Provides valuable insights for career planning, recruitment, 
                  and workforce development initiatives.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="card-elevated text-center">
              <CardHeader>
                <Target className="h-8 w-8 mx-auto mb-2" />
                <CardTitle>Skill-based</CardTitle>
                <CardDescription>
                  Classification based on skill levels and specialization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Four skill levels from elementary to highly skilled, 
                  reflecting education and training requirements.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Major Divisions */}
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle>Major Occupation Divisions</CardTitle>
            <CardDescription>
              The nine major groups that form the foundation of NCO 2015
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { code: "1", title: "Managers", description: "Planning, directing and coordinating activities" },
                { code: "2", title: "Professionals", description: "Apply scientific/artistic concepts and theories" },
                { code: "3", title: "Technicians and Associate Professionals", description: "Perform technical tasks requiring specialized knowledge" },
                { code: "4", title: "Clerical Support Workers", description: "Record, organize and compute information" },
                { code: "5", title: "Service and Sales Workers", description: "Provide personal services and sales" },
                { code: "6", title: "Skilled Agricultural, Forestry and Fishery Workers", description: "Produce food, fiber and wood products" },
                { code: "7", title: "Craft and Related Trades Workers", description: "Apply specific skills to create products" },
                { code: "8", title: "Plant and Machine Operators and Assemblers", description: "Operate equipment and assemble products" },
                { code: "9", title: "Elementary Occupations", description: "Perform simple and routine tasks" }
              ].map((division, index) => (
                <motion.div
                  key={division.code}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className="p-4 border rounded-lg"
                >
                  <div className="flex items-start gap-3">
                    <Badge className="font-mono text-xs">{division.code}</Badge>
                    <div>
                      <h3 className="font-medium text-sm mb-1">{division.title}</h3>
                      <p className="text-xs text-muted-foreground">{division.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Implementation */}
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle>Implementation & Usage</CardTitle>
            <CardDescription>
              How NCO 2015 is used across different sectors and applications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Government Applications</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Employment surveys and census data</li>
                  <li>• Labor market statistics and analysis</li>
                  <li>• Skills development program planning</li>
                  <li>• Immigration and visa processing</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Private Sector Usage</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Job classification and recruitment</li>
                  <li>• Workforce planning and development</li>
                  <li>• Career counseling and guidance</li>
                  <li>• Training program design</li>
                </ul>
              </div>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                This demonstration website showcases the structure and potential applications of NCO 2015 
                using mock data for educational and illustrative purposes. The actual NCO 2015 contains 
                thousands of detailed occupation descriptions and codes.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}