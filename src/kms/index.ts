import { ControlProcedure } from '@elemental-clouds/hydrogen/Common';

/**
 * @module KMS Compliance
 * @example 
```typescript
// If the KMS key is CUSTOMER managed ensure
// that rotation is enabled otherwise skip it.
export const keyRotationEnabled: ControlProcedure = [
  {
    $if_includes: [
      {
        attributes: {
          keyMetaData: {
            KeyManager: 'CUSTOMER',
          },
        },
      },
    ],
    $includes: [
      {
        attributes: {
          keyRotationEnabled: true,
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
// If the KMS key is CUSTOMER managed ensure
// that rotation is enabled otherwise skip it.
export const keyRotationEnabled: ControlProcedure = [
  {
    $if_includes: [
      {
        attributes: {
          keyMetaData: {
            KeyManager: 'CUSTOMER',
          },
        },
      },
    ],
    $includes: [
      {
        attributes: {
          keyRotationEnabled: true,
        },
      },
    ],
  },
];
```
 */
export const keyRotationEnabled: ControlProcedure = [
  {
    $if_includes: [
      {
        attributes: {
          keyMetaData: {
            KeyManager: 'CUSTOMER',
          },
        },
      },
    ],
    $includes: [
      {
        attributes: {
          keyRotationEnabled: true,
        },
      },
    ],
  },
];
