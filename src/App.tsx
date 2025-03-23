import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/landing';
import { ChatPage } from './pages/chat';
import { HowItWorksPage } from './pages/how-it-works';
import { SignInPage } from './pages/sign-in';
import { SignUpPage } from './pages/sign-up';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/theme-toggle';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App