import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Image
            src="/netspective-logo-dark.png"
            alt="Netspective Logo"
            width={139}
            height={37}
          />
          {/* <span>Praxis</span> */}
        </div>
      ),
    },
  };
}
