import { ControlProcedure } from '@elemental-clouds/hydrogen/Common';

/**
 * @module RDS Compliance
 * @example 
```typescript
export const storageEncrypted: ControlProcedure = {
  description: 'RDS instances should have encrypted storage',
  name: 'storageEncrypted',
  procedure: [
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
  ],
};

```
 */

/**
 * @example 
```typescript
export const storageEncrypted: ControlProcedure = {
  description: 'RDS instances should have encrypted storage',
  name: 'storageEncrypted',
  procedure: [
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
  ],
};
```
 */
export const storageEncrypted: ControlProcedure = {
  description: 'RDS instances should have encrypted storage',
  name: 'storageEncrypted',
  procedure: [
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
  ],
};
