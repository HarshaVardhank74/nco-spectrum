import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search as SearchIcon, Filter, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockNCOData, divisions, sectors, skillLevels } from "@/data/mockData";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<{
    divisions: string[];
    sectors: string[];
    skillLevels: string[];
  }>({
    divisions: [],
    sectors: [],
    skillLevels: []
  });

  const searchResults = useMemo(() => {
    if (!searchTerm.trim() && 
        selectedFilters.divisions.length === 0 && 
        selectedFilters.sectors.length === 0 && 
        selectedFilters.skillLevels.length === 0) {
      return [];
    }

    return mockNCOData.filter((item) => {
      const matchesSearch = !searchTerm.trim() || 
        item.occupationTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.divisionTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.occupationCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.familyTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.groupTitle.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDivision = selectedFilters.divisions.length === 0 || 
        selectedFilters.divisions.includes(item.divisionCode);
      
      const matchesSector = selectedFilters.sectors.length === 0 || 
        selectedFilters.sectors.includes(item.sector);
      
      const matchesSkillLevel = selectedFilters.skillLevels.length === 0 || 
        selectedFilters.skillLevels.includes(item.skillLevel.toString());

      return matchesSearch && matchesDivision && matchesSector && matchesSkillLevel;
    });
  }, [searchTerm, selectedFilters]);

  const toggleFilter = (type: keyof typeof selectedFilters, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(item => item !== value)
        : [...prev[type], value]
    }));
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      divisions: [],
      sectors: [],
      skillLevels: []
    });
    setSearchTerm("");
  };

  const hasActiveFilters = selectedFilters.divisions.length > 0 || 
                          selectedFilters.sectors.length > 0 || 
                          selectedFilters.skillLevels.length > 0 ||
                          searchTerm.trim();

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Search Occupations</h1>
          <p className="text-xl text-muted-foreground">
            Find specific occupations, job roles, and career paths within NCO 2015
          </p>
        </div>

        {/* Search Bar */}
        <Card className="card-elevated">
          <CardContent className="pt-6">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search for occupations, job titles, codes, or descriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 text-lg h-12"
              />
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <Card className="card-elevated">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                <CardTitle>Filters</CardTitle>
              </div>
              {hasActiveFilters && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearAllFilters}
                  className="flex items-center gap-2"
                >
                  <X className="h-4 w-4" />
                  Clear All
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Division Filters */}
            <div>
              <h3 className="font-medium mb-3">Divisions</h3>
              <div className="flex flex-wrap gap-2">
                {divisions.map((division) => (
                  <Button
                    key={division.code}
                    variant={selectedFilters.divisions.includes(division.code) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleFilter('divisions', division.code)}
                    className="text-xs"
                  >
                    {division.code} - {division.title}
                  </Button>
                ))}
              </div>
            </div>

            {/* Sector Filters */}
            <div>
              <h3 className="font-medium mb-3">Sectors</h3>
              <div className="flex flex-wrap gap-2">
                {sectors.map((sector) => (
                  <Button
                    key={sector}
                    variant={selectedFilters.sectors.includes(sector) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleFilter('sectors', sector)}
                    className="text-xs"
                  >
                    {sector}
                  </Button>
                ))}
              </div>
            </div>

            {/* Skill Level Filters */}
            <div>
              <h3 className="font-medium mb-3">Skill Levels</h3>
              <div className="flex flex-wrap gap-2">
                {skillLevels.map((level) => (
                  <Button
                    key={level.level}
                    variant={selectedFilters.skillLevels.includes(level.level.toString()) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleFilter('skillLevels', level.level.toString())}
                    className="text-xs"
                  >
                    Level {level.level} - {level.name}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        {hasActiveFilters && (
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle>Search Results</CardTitle>
              <CardDescription>
                {searchResults.length} occupation{searchResults.length !== 1 ? 's' : ''} found
              </CardDescription>
            </CardHeader>
            <CardContent>
              {searchResults.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <SearchIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No occupations found matching your criteria</p>
                  <p className="text-sm">Try adjusting your search terms or filters</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {searchResults.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">{item.occupationTitle}</h3>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <p><strong>Code:</strong> {item.occupationCode}</p>
                            <p><strong>Division:</strong> {item.divisionCode} - {item.divisionTitle}</p>
                            <p><strong>Group:</strong> {item.groupTitle}</p>
                            <p><strong>Family:</strong> {item.familyTitle}</p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Badge variant="secondary">{item.sector}</Badge>
                          <Badge variant={item.skillLevel >= 3 ? "default" : "outline"}>
                            Skill Level {item.skillLevel}
                          </Badge>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Search Tips */}
        {!hasActiveFilters && (
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle>Search Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2">What you can search for:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Job titles (e.g., "Engineer", "Manager")</li>
                    <li>• Occupation codes (e.g., "2111.0100")</li>
                    <li>• Division names (e.g., "Professionals")</li>
                    <li>• Industry sectors (e.g., "Healthcare")</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Filter by:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Major occupation divisions</li>
                    <li>• Industry sectors</li>
                    <li>• Required skill levels</li>
                    <li>• Combine multiple filters</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </motion.div>
    </div>
  );
}