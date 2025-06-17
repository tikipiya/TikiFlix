import React from 'react';

// Header Component
export const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="tikiflix-logo">
          <h1>TikiFlix</h1>
        </div>
      </div>
    </header>
  );
};

// Speed Test Component
export const SpeedTest = ({ speed, isTestStarted, isTestComplete }) => {
  const displaySpeed = isTestStarted ? Math.floor(speed) : 0;
  
  return (
    <div className="speed-test-container">
      <div className="speed-display">
        <div className="speed-number">
          {displaySpeed}
        </div>
        <div className="speed-unit">Mbps</div>
      </div>
      
      {!isTestStarted && (
        <div className="test-status">
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
      
      {isTestStarted && !isTestComplete && (
        <div className="test-status">
          <p>Testing download speed...</p>
        </div>
      )}
      
      {isTestComplete && (
        <div className="test-status">
          <p>Your download speed is</p>
        </div>
      )}
    </div>
  );
};

// Additional Metrics Component
export const AdditionalMetrics = ({ metrics }) => {
  return (
    <div className="additional-metrics">
      <button className="show-more-btn" onClick={() => {
        const metricsDetail = document.querySelector('.metrics-detail');
        metricsDetail.style.display = metricsDetail.style.display === 'none' ? 'block' : 'none';
      }}>
        Show more info
      </button>
      
      <div className="metrics-detail" style={{ display: 'none' }}>
        <div className="metrics-grid">
          <div className="metric-item">
            <div className="metric-value">{metrics.uploadSpeed}</div>
            <div className="metric-label">Upload</div>
            <div className="metric-unit">Mbps</div>
          </div>
          
          <div className="metric-item">
            <div className="metric-value">{metrics.latency}</div>
            <div className="metric-label">Latency</div>
            <div className="metric-unit">ms</div>
          </div>
          
          <div className="metric-item">
            <div className="metric-value">{metrics.loadedLatency}</div>
            <div className="metric-label">Loaded Latency</div>
            <div className="metric-unit">ms</div>
          </div>
        </div>
        
        <div className="connection-info">
          <p><strong>Server:</strong> {metrics.location}</p>
          <p><strong>Your IP:</strong> {metrics.isp}</p>
        </div>
      </div>
    </div>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">© 2025 TikiFlix</p>
      </div>
    </footer>
  );
};