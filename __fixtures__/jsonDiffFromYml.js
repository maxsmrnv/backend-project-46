const DIFF = {
  apiVersion: { prevValue: 'v1', value: 'v2', type: 'updated' }, metadataName: { value: 'my-service', type: 'removed' }, specSelector: { prevValue: 'MyApp', value: 'SuperApp', type: 'updated' }, targetPort: { value: 9376, type: 'added' },
};

export default JSON.stringify(DIFF);
