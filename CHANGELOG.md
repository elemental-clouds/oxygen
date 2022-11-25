# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.4] - 2022-11-25

### Changed

- The `PublicAccessBlockConfiguration` should represent itself as be `publicAccessBlockConfiguration`
- `v0.1.3` build did not include control names

## [0.1.3] - 2022-11-06

### Changed

- Attributes should follow AWS naming conventions, moved `publicAccessBlocks` to `PublicAccessBlockConfiguration`

## [0.1.2] - 2022-10-30

### Changed

- Update Hydrogen types
- Added names and descriptions to procedures
- Attributes should follow AWS naming conventions, moved `publicAccessBlocks` to `PublicAccessBlockConfiguration`

## [0.1.1] - 2022-10-23

### Changed

- Update Hydrogen types
- Cast controls under the `ControlProcedure` type

### Fixed

- Controls did not conform to `ControlProcedure` updated them to follow the interface definition

## [0.1.0] - 2022-10-22

### Added

- added RDS instance storage encryption check

## [0.0.0] - 2022-10-20

### Added

- added a main export to the package.json
- added s3 controls
- added kms control
- created typedoc documentation
- project init!
