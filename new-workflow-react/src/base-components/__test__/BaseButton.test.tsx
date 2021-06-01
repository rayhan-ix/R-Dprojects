import React from 'react';
import { render, screen } from '@testing-library/react';
import { BaseButton } from '../base-button';
import { IconButton, WithIcon } from '../../stories/base-components/BaseButton.stories';

describe('Button Testing', () => {
  it('should render normal button', () => {
    render(<BaseButton label='Primary' buttonType='button' onClick={() => jest.fn()} />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Primary');
  });

  it('Snapshot', () => {
    const { asFragment } = render(<BaseButton label='Primary' buttonType='button' onClick={() => jest.fn()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render label with icon', () => {
    // @ts-ignore
    const { container } = render(<WithIcon {...WithIcon.args} />);
    expect(container.firstChild).toHaveClass('base-btn-with-icon');
  });

  it('should render label with icon', () => {
    // @ts-ignore
    const { container } = render(<IconButton {...IconButton.args} />);
    expect(container.firstChild).toHaveClass('base-icon-btn');
  });
});
