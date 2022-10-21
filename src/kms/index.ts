/**
 * @module KMS Compliance
 * @example 
```typescript
// If the KMS key is CUSTOMER managed ensure
// that rotation is enabled otherwise skip it.
export const keyRotationEnabled = [
  {
    $if_includes: {
      attributes: {
        keyMetaData: {
          KeyManager: 'CUSTOMER',
        },
      },
    },
    $includes: {
      attributes: {
        keyRotationEnabled: true,
      },
    },
  },
];

```
 */

/**
 * @example 
```typescript
// If the KMS key is CUSTOMER managed ensure
// that rotation is enabled otherwise skip it.
export const keyRotationEnabled = [
  {
    $if_includes: {
      attributes: {
        keyMetaData: {
          KeyManager: 'CUSTOMER',
        },
      },
    },
    $includes: {
      attributes: {
        keyRotationEnabled: true,
      },
    },
  },
];

```
 */
export const keyRotationEnabled = [
  {
    $if_includes: {
      attributes: {
        keyMetaData: {
          KeyManager: 'CUSTOMER',
        },
      },
    },
    $includes: {
      attributes: {
        keyRotationEnabled: true,
      },
    },
  },
];
