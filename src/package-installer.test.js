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
    it.skip('packages array is parsed into array of objects', () => {
      let actual = installer(["KittenService: CamelCaser", "CamelCaser: "])
      expect(actual).toEqual({ KittenService: [ 'CamelCaser' ], CamelCaser: [] })
    })

    it('contains circular dependency(ies)', () => {
      let actual = installer(["KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: ", "Ice: Leetmeme"])
      expect(actual).toEqual('contains a cycle')
    })

    it('returns comma separated string in order of install', () => {
      let actual = installer(["KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: Leetmeme", "Ice: "])
      expect(actual).toEqual('KittenService, Ice, Cyberportal, Leetmeme, CamelCaser, Fraudstream')
    })
  })
})
