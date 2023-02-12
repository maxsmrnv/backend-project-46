const DIFF = {
  common: {
    value: {
      follow: {
        value: false,
        type: 'added',
      },
      setting2: {
        value: 200,
        type: 'removed',
      },
      setting3: {
        prevValue: true,
        value: null,
        type: 'updated',
      },
      setting4: {
        value: 'blah blah',
        type: 'added',
      },
      setting5: {
        value: {
          key5: 'value5',
        },
        type: 'added',
      },
      setting6: {
        value: {
          doge: {
            value: {
              wow: {
                prevValue: '',
                value: 'so much',
                type: 'updated',
              },
            },
            type: 'nested',
          },
          ops: {
            value: 'ops',
            type: 'added',
          },
        },
        type: 'nested',
      },
    },
    type: 'nested',
  },
  group1: {
    value: {
      baz: {
        prevValue: 'bas',
        value: 'bars',
        type: 'updated',
      },
      nest: {
        prevValue: {
          key: 'value',
        },
        value: 'str',
        type: 'updated',
      },
    },
    type: 'nested',
  },
  group2: {
    value: {
      abc: 12345,
      deep: {
        id: 45,
      },
    },
    type: 'removed',
  },
  group3: {
    prevValue: 'simple',
    value: {
      deep: {
        id: {
          number: 45,
        },
      },
      fee: 100500,
    },
    type: 'updated',
  },
};

export default JSON.stringify(DIFF);
