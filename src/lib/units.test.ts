import { describe, expect, it } from 'vitest'
import { kgToLb, lbToKg } from './units'

describe('unit conversion', () => {
  it('converts kg to lb', () => {
    expect(kgToLb(100)).toBeCloseTo(220.462, 3)
  })

  it('converts lb to kg', () => {
    expect(lbToKg(45)).toBeCloseTo(20.412, 3)
  })

  it('round-trips without drift', () => {
    expect(lbToKg(kgToLb(62.5))).toBeCloseTo(62.5)
  })
})
