import { ControlProcedure } from '@elemental-clouds/hydrogen/Common';

/**
 * @module RDS Compliance
 * @example 
```typescript
export const keyRotationEnabled: ControlProcedure = [
  {
    $includes: [
      {
        attributes: {
          cluster: {
            StorageEncrypted: true,
          },
        },
      },
    ],
  },
];
```
 */

/**
 * @example 
```typescript
export const keyRotationEnabled: ControlProcedure = [
  {
    $includes: [
      {
        attributes: {
          cluster: {
            StorageEncrypted: true,
          },
        },
      },
    ],
  },
];
```
 */
export const keyRotationEnabled: ControlProcedure = [
  {
    $includes: [
      {
        attributes: {
          cluster: {
            StorageEncrypted: true,
          },
        },
      },
    ],
  },
];
