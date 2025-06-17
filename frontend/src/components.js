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
  const shareOnTwitter = () => {
    const speedText = `私のインターネット速度は ${Math.floor(Math.random() * 20) + 85} Mbps でした！`;
    const tweetText = `${speedText}\n\n📊 結果の詳細:\n📥 ダウンロード: ${Math.floor(Math.random() * 20) + 85} Mbps\n📤 アップロード: ${metrics.uploadSpeed} Mbps\n⚡ 遅延: ${metrics.latency} ms\n\n#TikiFlix #SpeedTest #インターネット速度`;
    
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(twitterUrl, '_blank', 'width=550,height=420');
  };

  return (
    <div className="additional-metrics">
      <div className="action-buttons">
        <button className="show-more-btn" onClick={() => {
          const metricsDetail = document.querySelector('.metrics-detail');
          metricsDetail.style.display = metricsDetail.style.display === 'none' ? 'block' : 'none';
        }}>
          Show more info
        </button>
        
        <button className="twitter-share-btn" onClick={shareOnTwitter}>
          <svg className="twitter-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          結果をシェア
        </button>
      </div>
      
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