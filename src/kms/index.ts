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
