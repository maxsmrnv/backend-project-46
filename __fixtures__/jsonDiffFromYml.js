const DIFF = {
  apiVersion: { prevValue: 'v1', value: 'v2', type: 'updated' },
  kind: { value: 'Service', type: 'unchanged' },
  metadataName: { value: 'my-service', type: 'removed' },
  port: { value: 80, type: 'unchanged' },
  protocol: { value: 'TCP', type: 'unchanged' },
  specSelector: { prevValue: 'MyApp', value: 'SuperApp', type: 'updated' },
  targetPort: { value: 9376, type: 'added' },
};
export default JSON.stringify(DIFF);
