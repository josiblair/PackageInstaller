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
})
