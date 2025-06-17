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
    let step = 0;
    const totalSteps = 100; // 10 seconds * 100ms intervals = 100 steps
    const finalSpeed = Math.floor(Math.random() * 20) + 85; // Final speed between 85-105
    
    // Start test after a short delay
    const startTest = setTimeout(() => {
      setIsTestStarted(true);
      
      // Simulate speed test progression over exactly 10 seconds
      interval = setInterval(() => {
        step++;
        
        if (step >= totalSteps) {
          // Test complete after 10 seconds
          clearInterval(interval);
          setIsTestComplete(true);
          setCurrentSpeed(finalSpeed);
          
          // Set final metrics
          setAdditionalMetrics(prev => ({
            ...prev,
            uploadSpeed: Math.floor(Math.random() * 20) + 15,
            latency: Math.floor(Math.random() * 30) + 10,
            loadedLatency: Math.floor(Math.random() * 50) + 40
          }));
        } else {
          // Calculate speed progression with some randomness
          const progress = step / totalSteps;
          const baseSpeed = finalSpeed * progress;
          const randomVariation = (Math.random() - 0.5) * 10; // ±5 Mbps variation
          const currentSpeed = Math.max(0, baseSpeed + randomVariation);
          
          setCurrentSpeed(currentSpeed);
        }
      }, 100); // Update every 100ms for smooth animation
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