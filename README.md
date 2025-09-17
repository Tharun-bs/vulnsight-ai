🔐 VulnSight-AI: The Predictive Cyber-Cognition Engine
🚀 Overview

Organizations today face an overwhelming flood of vulnerabilities and cyber threats. Traditional tools are reactive, often leading to alert fatigue, delayed responses, and resource misallocation.

VulnSight-AI shifts cybersecurity from firefighting to foresight. It’s an AI-powered analytics engine that predicts and prioritizes the most probable future cyber risks, enabling teams to act before exploitation occurs.

🎯 Key Features

Vulnerability Nexus Mapping (VNM):
Builds a knowledge graph connecting assets, CVEs, exploits, and threat intelligence to reveal possible attack paths.

Predictive Patch Prioritization (PPP):
AI-assisted scoring that goes beyond CVSS — ranking vulnerabilities using exploitability signals from OSINT feeds, dark web chatter (simulated), and asset criticality.

Explainable AI Insights:
Provides human-readable rationales for prioritization decisions (e.g., “High criticality asset + active exploitation in the wild”).

Interactive Dashboard:

Top 5 predicted exploitable vulnerabilities

Asset-level attack path visualization

CSV export of prioritized vulnerability list

🛠️ Tech Stack

Backend & AI Logic: Python, FastAPI, Pandas, scikit-learn, NetworkX

Database: SQLite (MVP-ready, extensible to PostgreSQL/MongoDB)

Frontend: HTML/JS (React optional), Chart.js/D3.js for visualization

Deployment: Docker (optional for hackathon demo)
