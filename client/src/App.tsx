import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import BlogList from "@/pages/BlogList";
import BlogPost from "@/pages/BlogPost";
import NotFound from "@/pages/not-found";

function RouterView() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/post/:id" component={BlogPost} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">
            <Router base="/personal-website">
              <RouterView />
            </Router>
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
