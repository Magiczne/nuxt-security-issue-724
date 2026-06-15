import { describe, expect, it } from 'vitest'

import { isEven } from '~/util/is-even'

describe('isValidationError', (): void => {
  it('returns false for 3', (): void => {
    expect(isEven(3)).toBe(false)
  })
})
