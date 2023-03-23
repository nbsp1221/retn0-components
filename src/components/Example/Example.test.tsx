import { render } from '@testing-library/react';
import { Example } from './Example';

describe('<Example />', () => {
  test('renders', () => {
    expect(render(<Example />)).toBeTruthy();
  });
});
