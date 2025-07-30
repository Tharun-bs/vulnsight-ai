import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import DataUpload from "@/components/DataUpload";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Dashboard />
      <DataUpload />
    </div>
  );
};

export default Index;
