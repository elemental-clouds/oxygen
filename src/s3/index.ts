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
