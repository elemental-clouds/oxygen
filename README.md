# Oxygen

Cloud secure configuration control library

## Usage

Use the controls in this library with the [Titanium](https://github.com/elemental-clouds/titanium) control engine to validate your cloud infrastructure configuration.

```typescript
import engine from '@elemental-clouds/titanium';

(() => {
  let item = {
    urn: 'urn:os-76:os-184:0.4.5:12345678101:S3::osmium',
    attributes: {
      bucket: {
        Name: 'osmium',
        CreationDate: '1970-01-01T00:00:00.000Z',
      },
      publicAccessBlocks: {
        BlockPublicAcls: true,
        IgnorePublicAcls: true,
        BlockPublicPolicy: true,
        RestrictPublicBuckets: true,
      },
    },
  };

  const procedure = [
    {
      $includes: [
        {
          attributes: {
            publicAccessBlocks: { BlockPublicAcls: true },
          },
        },
      ],
    },
  ];

  const status = engine(item, procedure);

  console.log(status.result); // COMPLIANT
})();
```
