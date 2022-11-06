import { ControlProcedure } from '@elemental-clouds/hydrogen/Common';

/**
 * @module S3 Compliance
 * @example 
```typescript
// Ensure all blocks are enabled
export const PublicAccessBlockConfiguration: ControlProcedure = {
  description: 'ensures all public access blocks are enabled',
  name: 'PublicAccessBlockConfiguration',
  procedure: [
    {
      $includes: [
        {
          attributes: {
            PublicAccessBlockConfiguration: {
              BlockPublicAcls: true,
              IgnorePublicAcls: true,
              BlockPublicPolicy: true,
              RestrictPublicBuckets: true,
            },
          },
        },
      ],
    },
  ],
```
 */

/**
 * ensures all public access blocks are enabled
 * @example
```typescript
export const PublicAccessBlockConfiguration: ControlProcedure = {
  description: 'ensures all public access blocks are enabled',
  name: 'PublicAccessBlockConfiguration',
  procedure: [
    {
      $includes: [
        {
          attributes: {
            PublicAccessBlockConfiguration: {
              BlockPublicAcls: true,
              IgnorePublicAcls: true,
              BlockPublicPolicy: true,
              RestrictPublicBuckets: true,
            },
          },
        },
      ],
    },
  ],
```
 */
export const PublicAccessBlockConfiguration: ControlProcedure = {
  description: 'ensures all public access blocks are enabled',
  name: 'PublicAccessBlockConfiguration',
  procedure: [
    {
      $includes: [
        {
          attributes: {
            PublicAccessBlockConfiguration: {
              BlockPublicAcls: true,
              IgnorePublicAcls: true,
              BlockPublicPolicy: true,
              RestrictPublicBuckets: true,
            },
          },
        },
      ],
    },
  ],
};

/**
 * ensures only BlockPublicAcls is enabled
 * @example
 ```typescript
export const blockPublicAcls: ControlProcedure = {
  description: 'ensures only BlockPublicAcls is enabled',
  name: 'blockPublicAcls',
  procedure: [
    {
      $includes: [
        {
          attributes: {
            PublicAccessBlockConfiguration: {
              BlockPublicAcls: true,
            },
          },
        },
      ],
    },
  ],
};
 ```
 */
export const blockPublicAcls: ControlProcedure = {
  description: 'ensures only BlockPublicAcls is enabled',
  name: 'blockPublicAcls',
  procedure: [
    {
      $includes: [
        {
          attributes: {
            PublicAccessBlockConfiguration: {
              BlockPublicAcls: true,
            },
          },
        },
      ],
    },
  ],
};
/**
 * ensures only IgnorePublicAcls is enabled
 * @example
```typescript
export const ignorePublicAcls: ControlProcedure = {
  description: 'ensures only IgnorePublicAcls is enabled',
  name: 'ignorePublicAcls',
  procedure: [
    {
      $includes: [
        {
          attributes: {
            PublicAccessBlockConfiguration: {
              IgnorePublicAcls: true,
            },
          },
        },
      ],
    },
  ],
};
```
 */
export const ignorePublicAcls: ControlProcedure = {
  description: 'ensures only IgnorePublicAcls is enabled',
  name: 'ignorePublicAcls',
  procedure: [
    {
      $includes: [
        {
          attributes: {
            PublicAccessBlockConfiguration: {
              IgnorePublicAcls: true,
            },
          },
        },
      ],
    },
  ],
};

/**
 * ensures only BlockPublicPolicy is enabled
 * @example
```typescript
export const blockPublicPolicy: ControlProcedure = {
  description: 'ensures only BlockPublicPolicy is enabled',
  name: 'blockPublicPolicy',
  procedure: [
    {
      $includes: [
        {
          attributes: {
            PublicAccessBlockConfiguration: {
              BlockPublicPolicy: true,
            },
          },
        },
      ],
    },
  ],
};
```
 */
export const blockPublicPolicy: ControlProcedure = {
  description: 'ensures only BlockPublicPolicy is enabled',
  name: 'blockPublicPolicy',
  procedure: [
    {
      $includes: [
        {
          attributes: {
            PublicAccessBlockConfiguration: {
              BlockPublicPolicy: true,
            },
          },
        },
      ],
    },
  ],
};

/**
 * ensures only restrictPublicBuckets is enabled
 * @example
```typescript
export const restrictPublicBuckets: ControlProcedure = {
  description: 'ensures only restrictPublicBuckets is enabled',
  name: 'restrictPublicBuckets',
  procedure: [
    {
      $includes: [
        {
          attributes: {
            PublicAccessBlockConfiguration: {
              RestrictPublicBuckets: true,
            },
          },
        },
      ],
    },
  ],
};

```
 */
export const restrictPublicBuckets: ControlProcedure = {
  description: 'ensures only restrictPublicBuckets is enabled',
  name: 'restrictPublicBuckets',
  procedure: [
    {
      $includes: [
        {
          attributes: {
            PublicAccessBlockConfiguration: {
              RestrictPublicBuckets: true,
            },
          },
        },
      ],
    },
  ],
};
