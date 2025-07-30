import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Shield, TrendingUp, Download, Eye, Zap } from "lucide-react";

const Dashboard = () => {
  const topVulnerabilities = [
    {
      id: "CVE-2024-0001",
      severity: "Critical",
      asset: "web-server-01.internal",
      exploitability: 0.95,
      prediction: "High likelihood of exploitation within 24hrs",
      reasons: ["Internet-facing asset", "Active exploitation in wild", "PoC available"]
    },
    {
      id: "CVE-2024-0002", 
      severity: "High",
      asset: "db-server-03.internal",
      exploitability: 0.78,
      prediction: "Medium-high risk, monitor closely",
      reasons: ["Critical asset", "Similar CVE recently exploited", "Network segment accessible"]
    },
    {
      id: "CVE-2024-0003",
      severity: "Medium",
      asset: "workstation-15.internal", 
      exploitability: 0.62,
      prediction: "Elevated risk due to dark web chatter",
      reasons: ["Dark web mentions detected", "User workstation", "Email access point"]
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical": return "critical";
      case "High": return "warning";
      case "Medium": return "cyber-blue";
      default: return "muted";
    }
  };

  return (
    <div id="dashboard" className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Threat Intelligence Dashboard</h2>
          <p className="text-muted-foreground">Real-time vulnerability predictions and risk assessment</p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-card to-card/50 border-border hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Vulnerabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">1,247</div>
              <div className="flex items-center gap-1 text-sm text-cyber-green">
                <TrendingUp className="w-4 h-4" />
                <span>-12% from last week</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-card/50 border-border hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">High-Risk Predictions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-critical">23</div>
              <div className="flex items-center gap-1 text-sm text-critical">
                <AlertTriangle className="w-4 h-4" />
                <span>Immediate attention</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-card/50 border-border hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Threat Intelligence</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-cyber-blue">156</div>
              <div className="flex items-center gap-1 text-sm text-cyber-blue">
                <Eye className="w-4 h-4" />
                <span>Active IOCs</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-card/50 border-border hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Prediction Accuracy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-cyber-green">99.2%</div>
              <div className="flex items-center gap-1 text-sm text-cyber-green">
                <Zap className="w-4 h-4" />
                <span>Last 30 days</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Predicted Exploitable Vulnerabilities */}
        <Card className="mb-8 bg-gradient-to-br from-card to-card/50 border-border">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-critical" />
                Top 5 Predicted Exploitable Vulnerabilities
              </CardTitle>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {topVulnerabilities.map((vuln, index) => (
              <div key={vuln.id} className="p-4 rounded-lg bg-secondary/50 border border-border hover:bg-secondary/70 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-sm font-mono text-muted-foreground">#{index + 1}</div>
                    <div>
                      <div className="font-semibold text-foreground">{vuln.id}</div>
                      <div className="text-sm text-muted-foreground">{vuln.asset}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={getSeverityColor(vuln.severity) as any} className="text-xs">
                      {vuln.severity}
                    </Badge>
                    <div className="text-right">
                      <div className="text-sm font-medium">
                        {Math.round(vuln.exploitability * 100)}% Exploitability
                      </div>
                      <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-cyber-blue to-critical transition-all duration-500"
                          style={{ width: `${vuln.exploitability * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="text-sm font-medium text-cyber-blue mb-1">VulnSight Prediction:</div>
                  <div className="text-sm text-foreground">{vuln.prediction}</div>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-2">Risk Factors:</div>
                  <div className="flex flex-wrap gap-2">
                    {vuln.reasons.map((reason, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {reason}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Network Visualization Placeholder */}
        <Card className="bg-gradient-to-br from-card to-card/50 border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-cyber-blue" />
              Vulnerability Nexus Map
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-muted/20 rounded-lg border border-dashed border-border flex items-center justify-center">
              <div className="text-center">
                <Shield className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                <div className="text-sm text-muted-foreground">Interactive network visualization</div>
                <div className="text-xs text-muted-foreground">Shows attack paths and asset relationships</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;