import React from 'react';

const Footer: React.FC = () => (
  <footer style={{ background: '#282c34', color: '#fff', padding: '1rem', textAlign: 'center', position: 'fixed', bottom: 0, width: '100%' }}>
    <p>My Application Footer &copy; {new Date().getFullYear()}</p>
  </footer>
);

export default Footer;
