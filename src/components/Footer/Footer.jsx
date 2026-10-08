import { memo } from 'react';
import '@/components/Footer/Footer.css';

const LINKS = ['Terms', 'Privacy', 'Security', 'Status', 'Community', 'Docs', 'Contact', 'Manage cookies', 'Do not share my personal information'];

function Footer() {
  return (
    <footer className="footer">
      <span>⬤ © 2025 GitHub, Inc.</span>
      {LINKS.map((l) => <a key={l} href="#top">{l}</a>)}
    </footer>
  );
}
export default memo(Footer);
