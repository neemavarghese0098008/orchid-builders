import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './style.css';

class ApplicationErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) {
      return <main className="login-shell"><section className="login-card" role="alert"><h1>We couldn’t load the admin panel</h1><p className="muted">Refresh the page to try again. If the problem continues, sign in again.</p><button className="btn-primary" onClick={() => window.location.reload()}>Refresh page</button></section></main>;
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(<ApplicationErrorBoundary><App/></ApplicationErrorBoundary>);
