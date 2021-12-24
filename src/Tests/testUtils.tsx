import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, {
    // wrapper: SnapshotFriendlyStylesProvider,
    ...options,
  });

export * from '@testing-library/react';
// Override our render with the snapshot-friendly render.
export { customRender as render };
