# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.1.1] - 2020-06-07
### Added
- integration test with '[immer](https://www.npmjs.com/package/immer)'
- integration tests work flow

## [2.1.0] - 2020-04-30
### Changed
- ItemIds does no longer allow duplicate values.
```javascript
// NOW
ItemIds([1,2,2,3]) // [1,2,3]
.add([3,4]) // [1,2,3,4]
.set([4,4,5,6]); // [4,5,6]

// BEFORE
ItemIds([1,2,2,3]) // [1,2,2,3]
.add([3,4]) // [1,2,2,3,3,4]
.set([4,4,5,6]); // [4,4,5,6]
```

## [2.0.0] - 2020-04-28
### Changed
- all custom properties on the object are now hidden. Now you can write tests much easier.
```javascript
// jest
// NOW
test("some initial state test", () => {
    expect(ItemIds()).toEqual([]) 
});

// BEFORE v2.0.0
test("some initial state test", () => {
    const state = ItemIds();
    
    expect(Array.isArray(state)).toBeTruthy()
    expect(state.length).toBe(0)
});
```

## [1.1.0] - 2020-04-28
### Changed
- until now the package was broken and not installable


[Unreleased]: https://github.com/aricma/itemids/issues
[2.1.1]: https://github.com/aricma/itemids/compare/v2.1.0...v2.1.1
[2.1.0]: https://github.com/aricma/itemids/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/aricma/itemids/compare/v1.1.0...v2.0.0
[1.1.0]: https://github.com/aricma/itemids/compare/v1.0.3...v1.1.0