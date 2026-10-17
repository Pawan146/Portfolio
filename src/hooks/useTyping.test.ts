import { act, renderHook } from '@testing-library/react';
import { useTyping } from './useTyping';

const tick = (ms: number, times = 1) => {
  for (let i = 0; i < times; i++) act(() => void vi.advanceTimersByTime(ms));
};

describe('useTyping', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('types a word, deletes it and moves to the next word', () => {
    const words = ['Dev', 'QA'];
    const { result } = renderHook(() => useTyping(words, { typeSpeed: 10, deleteSpeed: 10, pause: 100 }));

    tick(10, 3);
    expect(result.current).toBe('Dev');

    tick(100);
    tick(10, 3);
    expect(result.current).toBe('');

    tick(10, 3);
    expect(result.current).toBe('QA');
  });
});
