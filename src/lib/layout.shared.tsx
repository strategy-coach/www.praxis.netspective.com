import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Image
            src="/icon.png"
            alt="Praxis Logo"
            width={24}
            height={24}
          />
          <span>Praxis</span>
        </div>
      ),
    },
  };
}
