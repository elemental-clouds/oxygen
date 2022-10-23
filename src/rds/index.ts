/**
 * @module RDS Compliance
 * @example 
```typescript
export const keyRotationEnabled = [
  {
    $includes: {
      attributes: {
        cluster: {
          StorageEncrypted: true,
        },
      },
    },
  },
];
```
 */

/**
 * @example 
```typescript
export const keyRotationEnabled = [
  {
    $includes: {
      attributes: {
        cluster: {
          StorageEncrypted: true,
        },
      },
    },
  },
];
```
 */
export const keyRotationEnabled = [
  {
    $includes: {
      attributes: {
        cluster: {
          StorageEncrypted: true,
        },
      },
    },
  },
];
