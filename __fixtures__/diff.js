const DIFF = [
  {
    children: [
      {
        key: 'follow',
        value: false,
        type: 'added',
      },
      {
        key: 'setting1',
        value: 'Value 1',
        type: 'unchanged',
      },
      {
        key: 'setting2',
        value: 200,
        type: 'removed',
      },
      {
        key: 'setting3',
        prevValue: true,
        value: {
          key: 'value',
        },
        type: 'updated',
      },
      {
        key: 'setting4',
        value: 'blah blah',
        type: 'added',
      },
      {
        key: 'setting5',
        value: {
          key5: 'value5',
        },
        type: 'added',
      },
      {
        children: [
          {
            children: [
              {
                key: 'wow',
                prevValue: 'too much',
                value: 'so much',
                type: 'updated',
              },
            ],
            key: 'doge',
            type: 'nested',
          },
          {
            key: 'key',
            value: 'value',
            type: 'unchanged',
          },
          {
            key: 'ops',
            value: 'ops',
            type: 'added',
          },
        ],
        key: 'setting6',
        type: 'nested',
      },
    ],
    key: 'common',
    type: 'nested',
  },
  {
    children: [
      {
        key: 'baz',
        prevValue: 'bas',
        value: 'bars',
        type: 'updated',
      },
      {
        key: 'foo',
        value: 'bar',
        type: 'unchanged',
      },
      {
        key: 'nest',
        prevValue: {
          key: 'value',
        },
        value: 'str',
        type: 'updated',
      },
    ],
    key: 'group1',
    type: 'nested',
  },
  {
    key: 'group2',
    value: {
      abc: 12345,
      deep: {
        id: 45,
      },
    },
    type: 'removed',
  },
  {
    key: 'group3',
    value: {
      deep: {
        id: {
          number: 45,
        },
      },
      fee: 100500,
    },
    type: 'added',
  },
  {
    key: 'group4',
    value: 'bye',
    type: 'removed',
  },
];

export default DIFF;
