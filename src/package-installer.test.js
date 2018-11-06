import installer from './package-installer'

describe('packageInstaller', () => {
  describe('given an empty array of packages', () => {
    it('returns an empty string', () => {
      let actual = installer([])
      expect(actual).toEqual("")
    })
  })

  describe('given a list with a single package', () => {
    it('returns a string with the single package', () => {
      let actual = installer(["KittenService: "])
      expect(actual).toEqual("KittenService")
    })
  })

  describe('given list with multiple packages', () => {
    it('packages array is parsed into array of objects', () => {
      let actual = installer(["KittenService: CamelCaser", "CamelCaser: "])
      expect(actual).toEqual({ KittenService: [ 'CamelCaser' ], CamelCaser: [] })
    })

    it('contains circular dependency(ies)', () => {
      let actual = installer(["KittenService: CamelCaser", "CamelCaser: KittenService"])
      expect(actual).toEqual('contains a cycle')
    })

    it('', () => {
      let actual = installer(["KittenService: CamelCaser", "CamelCaser: "])
      expect(actual).toEqual('CamelCaser, KittenService')
    })
  })
})
