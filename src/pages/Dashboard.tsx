import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter, TrendingUp, Users, Building, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { mockNCOData, divisions, sectors, skillLevels, type NCOOccupation } from "@/data/mockData";

const COLORS = ['#000000', '#404040', '#808080', '#A0A0A0', '#C0C0C0'];

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("all");
  const [selectedSector, setSelectedSector] = useState("all");
  const [selectedSkillLevel, setSelectedSkillLevel] = useState("all");

  const filteredData = useMemo(() => {
    return mockNCOData.filter((item) => {
      const matchesSearch = 
        item.occupationTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.divisionTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.occupationCode.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesDivision = selectedDivision === "all" || item.divisionCode === selectedDivision;
      const matchesSector = selectedSector === "all" || item.sector === selectedSector;
      const matchesSkillLevel = selectedSkillLevel === "all" || item.skillLevel.toString() === selectedSkillLevel;

      return matchesSearch && matchesDivision && matchesSector && matchesSkillLevel;
    });
  }, [searchTerm, selectedDivision, selectedSector, selectedSkillLevel]);

  const divisionData = divisions.map(div => ({
    name: div.title,
    value: div.count,
    code: div.code
  }));

  const skillLevelData = skillLevels.map(skill => ({
    name: skill.name,
    value: mockNCOData.filter(item => item.skillLevel === skill.level).length
  }));

  const sectorData = sectors.map(sector => ({
    name: sector,
    value: mockNCOData.filter(item => item.sector === sector).length
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Occupation Dashboard</h1>
          <p className="text-xl text-muted-foreground">
            Explore and analyze occupational data from NCO 2015
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="card-elevated">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Occupations</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockNCOData.length}</div>
                <p className="text-xs text-muted-foreground">
                  Across 9 divisions
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="card-elevated">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Divisions</CardTitle>
                <Building className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{divisions.length}</div>
                <p className="text-xs text-muted-foreground">
                  Major occupation groups
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="card-elevated">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sectors</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{sectors.length}</div>
                <p className="text-xs text-muted-foreground">
                  Industry sectors
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="card-elevated">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Skill Levels</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">
                  Classification levels
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Occupations by Division</CardTitle>
                <CardDescription>Distribution across major occupation groups</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={divisionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="code" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#000000" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Skill Level Distribution</CardTitle>
                <CardDescription>Occupations categorized by skill requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={skillLevelData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {skillLevelData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Filters and Search */}
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Search & Filter Occupations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search occupations, divisions, or codes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={selectedDivision} onValueChange={setSelectedDivision}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Division" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Divisions</SelectItem>
                  {divisions.map((div) => (
                    <SelectItem key={div.code} value={div.code}>
                      {div.code} - {div.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedSector} onValueChange={setSelectedSector}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Sector" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sectors</SelectItem>
                  {sectors.map((sector) => (
                    <SelectItem key={sector} value={sector}>
                      {sector}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedSkillLevel} onValueChange={setSelectedSkillLevel}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Skill Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  {skillLevels.map((level) => (
                    <SelectItem key={level.level} value={level.level.toString()}>
                      Level {level.level} - {level.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Data Table */}
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle>Occupation Data</CardTitle>
            <CardDescription>
              {filteredData.length} of {mockNCOData.length} occupations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="data-grid rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Code</TableHead>
                    <TableHead>Occupation</TableHead>
                    <TableHead>Division</TableHead>
                    <TableHead>Sector</TableHead>
                    <TableHead>Skill Level</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                          {item.occupationCode}
                        </code>
                      </TableCell>
                      <TableCell className="font-medium">{item.occupationTitle}</TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div>{item.divisionCode} - {item.divisionTitle}</div>
                          <div className="text-xs text-muted-foreground">{item.groupTitle}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{item.sector}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={item.skillLevel >= 3 ? "default" : "outline"}>
                          Level {item.skillLevel}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}