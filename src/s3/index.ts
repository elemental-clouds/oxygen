/**
 * @module S3 Compliance
 * @example 
```typescript
// Ensure all blocks are enabled
export const publicAccessBlocks = [
  {
    $includes: {
      attributes: {
        publicAccessBlocks: {
          BlockPublicAcls: true,
          IgnorePublicAcls: true,
          BlockPublicPolicy: true,
          RestrictPublicBuckets: true,
        },
      },
    },
  },
];
```
 */

/**
 * ensures all public access blocks are enabled
 * @example
```typescript
export const publicAccessBlocks = [
  {
    $includes: {
      attributes: {
        publicAccessBlocks: {
          BlockPublicAcls: true,
          IgnorePublicAcls: true,
          BlockPublicPolicy: true,
          RestrictPublicBuckets: true,
        },
      },
    },
  },
];
```
 */
export const publicAccessBlocks = [
  {
    $includes: {
      attributes: {
        publicAccessBlocks: {
          BlockPublicAcls: true,
          IgnorePublicAcls: true,
          BlockPublicPolicy: true,
          RestrictPublicBuckets: true,
        },
      },
    },
  },
];

/**
 * ensures only BlockPublicAcls is enabled
 * @example
 ```typescript
export const blockPublicAcls = [
  {
    $includes: {
      attributes: {
        publicAccessBlocks: {
          BlockPublicAcls: true,
        },
      },
    },
  },
];
 ```
 */
export const blockPublicAcls = [
  {
    $includes: {
      attributes: {
        publicAccessBlocks: {
          BlockPublicAcls: true,
        },
      },
    },
  },
];

/**
 * ensures only IgnorePublicAcls is enabled
 * @example
```typescript
export const ignorePublicAcls = [
  {
    $includes: {
      attributes: {
        publicAccessBlocks: {
          IgnorePublicAcls: true,
        },
      },
    },
  },
];
```
 */
export const ignorePublicAcls = [
  {
    $includes: {
      attributes: {
        publicAccessBlocks: {
          IgnorePublicAcls: true,
        },
      },
    },
  },
];

/**
 * ensures only BlockPublicPolicy is enabled
 * @example
```typescript
export const blockPublicPolicy = [
  {
    $includes: {
      attributes: {
        publicAccessBlocks: {
          BlockPublicPolicy: true,
        },
      },
    },
  },
];
```
 */
export const blockPublicPolicy = [
  {
    $includes: {
      attributes: {
        publicAccessBlocks: {
          BlockPublicPolicy: true,
        },
      },
    },
  },
];

/**
 * ensures only restrictPublicBuckets is enabled
 * @example
```typescript
export const restrictPublicBuckets = [
  {
    $includes: {
      attributes: {
        publicAccessBlocks: {
          RestrictPublicBuckets: true,
        },
      },
    },
  },
];
```
 */
export const restrictPublicBuckets = [
  {
    $includes: {
      attributes: {
        publicAccessBlocks: {
          RestrictPublicBuckets: true,
        },
      },
    },
  },
];
