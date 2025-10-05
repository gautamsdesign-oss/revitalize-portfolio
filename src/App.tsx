import { useState } from 'react';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import { getProjectById } from './data/projects';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(null);

  const handleNavigate = (page: string, projectId?: string) => {
    setCurrentPage(page);
    if (projectId) {
      setCurrentProjectId(projectId);
    } else {
      setCurrentProjectId(null);
    }
    
    // Scroll to top when navigating to home page or any page navigation
    if (page === 'home') {
      // Use a small delay to ensure the component has rendered
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      // For other pages, scroll to top immediately
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (currentPage === 'about') {
    return <About onNavigate={handleNavigate} />;
  }

  if (currentPage === 'work') {
    return <Work onNavigate={handleNavigate} />;
  }

  if (currentPage === 'contact') {
    return <Contact onNavigate={handleNavigate} />;
  }

  if (currentPage === 'project' && currentProjectId) {
    const project = getProjectById(currentProjectId);
    if (project) {
      return <ProjectDetail project={project} onNavigate={handleNavigate} />;
    }
    // If project not found, redirect to work page
    setCurrentPage('work');
    return <Work onNavigate={handleNavigate} />;
  }

  return <Portfolio onNavigate={handleNavigate} />;
}