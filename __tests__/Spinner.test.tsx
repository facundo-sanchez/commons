import { render, screen } from '@testing-library/react';
import Spinner from '../src/components/Spinner/Spinner'

describe('Spinner', () => {
  it('Testeando render Spinner', () => {
    render(<Spinner styles={{}} config={{}} />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toBeInTheDocument();
  });
  it('Testeando render Spinner con Styles Color', () => {
    const styles = { color: 'red', margin: '2em' };
    const { container } = render(<Spinner styles={styles} />);

    const box = container.querySelector('.spinner');
    expect(box).toHaveStyle('color: red');
  });
  it('Testeando render Spinner con Styles Margin', () => {
    const styles = { margin: '2em' };
    const { container } = render(<Spinner styles={styles} />);

    const box = container.querySelector('.spinner');
    expect(box).toHaveStyle('margin: 2em');
  });
  it('Testeando render Spinner con Config Padding', () => {
    const config = { padding: '2em' };
    const { container } = render(<Spinner config={config} />);
    const span = container.querySelector('span.MuiCircularProgress-root');

    expect(span).toHaveStyle('padding: 2em');
  });
});
