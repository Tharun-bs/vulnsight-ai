import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, Database, Globe, CheckCircle } from "lucide-react";

const DataUpload = () => {
  const dataTypes = [
    {
      title: "Vulnerability Scans",
      description: "Upload CSV/JSON exports from Nessus, Qualys, OpenVAS",
      icon: FileText,
      formats: ["CSV", "JSON"],
      status: "ready"
    },
    {
      title: "Asset Inventory", 
      description: "Define organizational assets and criticality levels",
      icon: Database,
      formats: ["CSV", "Excel"],
      status: "ready"
    },
    {
      title: "External Threat Intel",
      description: "OSINT feeds and threat intelligence sources",
      icon: Globe,
      formats: ["API", "JSON"],
      status: "connected"
    }
  ];

  return (
    <div id="upload" className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Data Integration Hub</h2>
            <p className="text-muted-foreground">Upload your security data to power predictive analytics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {dataTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card key={index} className="bg-gradient-to-br from-card to-card/50 border-border hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Icon className="w-8 h-8 text-cyber-blue" />
                      {type.status === "connected" && (
                        <CheckCircle className="w-5 h-5 text-cyber-green" />
                      )}
                    </div>
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{type.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {type.formats.map((format) => (
                        <span key={format} className="px-2 py-1 bg-secondary rounded text-xs">
                          {format}
                        </span>
                      ))}
                    </div>
                    <Button 
                      variant={type.status === "connected" ? "secondary" : "cyber"} 
                      size="sm" 
                      className="w-full"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      {type.status === "connected" ? "Reconfigure" : "Upload Data"}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Upload Area */}
          <Card className="bg-gradient-to-br from-card to-card/50 border-border">
            <CardHeader>
              <CardTitle>Quick Upload</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-cyber-blue/50 transition-colors">
                <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Drag & Drop Files</h3>
                <p className="text-muted-foreground mb-4">
                  Drop your vulnerability scan files here or click to browse
                </p>
                <Button variant="outline">
                  Browse Files
                </Button>
              </div>
              
              <div className="mt-6 p-4 bg-cyber-blue/10 rounded-lg border border-cyber-blue/20">
                <h4 className="font-medium text-cyber-blue mb-2">Supported Formats:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Nessus (.nessus, .csv)</li>
                  <li>• Qualys (.xml, .csv)</li>
                  <li>• OpenVAS (.xml, .csv)</li>
                  <li>• Generic vulnerability CSV/JSON</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DataUpload;