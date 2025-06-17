import React, { useState, useEffect } from 'react';
import './App.css';

// Import components from components.js
import { SpeedTest, Header, Footer, AdditionalMetrics } from './components';

function App() {
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [currentSpeed, setCurrentSpeed] = useState(0);
  const [isTestComplete, setIsTestComplete] = useState(false);
  const [additionalMetrics, setAdditionalMetrics] = useState({
    uploadSpeed: 0,
    latency: 0,
    loadedLatency: 0,
    location: 'San Francisco, CA',
    isp: 'Your ISP'
  });

  // Mock speed test functionality
  useEffect(() => {
    let interval;
    
    // Start test after a short delay
    const startTest = setTimeout(() => {
      setIsTestStarted(true);
      
      // Simulate speed test progression
      interval = setInterval(() => {
        setCurrentSpeed(prevSpeed => {
          const newSpeed = prevSpeed + Math.random() * 15 + 5;
          
          // Complete test when speed reaches a realistic value
          if (newSpeed >= 85) {
            clearInterval(interval);
            setIsTestComplete(true);
            
            // Set final metrics
            setAdditionalMetrics(prev => ({
              ...prev,
              uploadSpeed: Math.floor(Math.random() * 20) + 15,
              latency: Math.floor(Math.random() * 30) + 10,
              loadedLatency: Math.floor(Math.random() * 50) + 40
            }));
            
            return Math.floor(Math.random() * 20) + 85; // Final speed between 85-105
          }
          
          return newSpeed;
        });
      }, 100);
    }, 1000);

    return () => {
      clearTimeout(startTest);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <SpeedTest 
          speed={currentSpeed}
          isTestStarted={isTestStarted}
          isTestComplete={isTestComplete}
        />
        {isTestComplete && (
          <AdditionalMetrics metrics={additionalMetrics} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;