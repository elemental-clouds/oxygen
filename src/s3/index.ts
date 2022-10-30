import { ControlProcedure } from '@elemental-clouds/hydrogen/Common';

/**
 * @module S3 Compliance
 * @example 
```typescript
// Ensure all blocks are enabled
export const publicAccessBlocks: ControlProcedure = {
  description: 'ensures all public access blocks are enabled',
  name: 'publicAccessBlocks',
  procedure: [
    {
      $includes: [
        {
          attributes: {
            publicAccessBlocks: {
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
export const publicAccessBlocks: ControlProcedure = {
  description: 'ensures all public access blocks are enabled',
  name: 'publicAccessBlocks',
  procedure: [
    {
      $includes: [
        {
          attributes: {
            publicAccessBlocks: {
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
export const publicAccessBlocks: ControlProcedure = {
  description: 'ensures all public access blocks are enabled',
  name: 'publicAccessBlocks',
  procedure: [
    {
      $includes: [
        {
          attributes: {
            publicAccessBlocks: {
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
            publicAccessBlocks: {
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
            publicAccessBlocks: {
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
            publicAccessBlocks: {
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
            publicAccessBlocks: {
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
            publicAccessBlocks: {
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
            publicAccessBlocks: {
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
            publicAccessBlocks: {
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
            publicAccessBlocks: {
              RestrictPublicBuckets: true,
            },
          },
        },
      ],
    },
  ],
};
