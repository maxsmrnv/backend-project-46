const DIFF = [
  {
    key: 'common',
    value: [
      { key: 'follow', value: false, right: true },
      { key: 'setting1', value: 'Value 1' },
      { key: 'setting2', value: 200, left: true },
      { key: 'setting3', value: true, left: true },
      { key: 'setting3', value: [{ key: 'key', value: 'value' }], right: true },
      { key: 'setting4', value: 'blah blah', right: true },
      {
        key: 'setting5',
        value: [{ key: 'key5', value: 'value5' }],
        right: true,
      },
      {
        key: 'setting6',
        value: [
          {
            key: 'doge',
            value: [
              { key: 'wow', value: 'too much', left: true },
              { key: 'wow', value: 'so much', right: true },
            ],
          },
          { key: 'key', value: 'value' },
          { key: 'ops', value: 'ops', right: true },
        ],
      },
    ],
  },
  {
    key: 'group1',
    value: [
      { key: 'baz', value: 'bas', left: true },
      { key: 'baz', value: 'bars', right: true },
      { key: 'foo', value: 'bar' },
      {
        key: 'nest',
        value: [
          { key: 'key', value: 'value' },
        ],
        left: true,
      },
      {
        key: 'nest',
        value: 'str',
        right: true,
      },
    ],
  },
  {
    key: 'group2',
    value: [
      { key: 'abc', value: 12345 },
      {
        key: 'deep',
        value: [
          { key: 'id', value: 45 },
        ],
      },
    ],
    left: true,
  },
  {
    key: 'group3',
    value: [
      {
        key: 'deep',
        value: [
          {
            key: 'id',
            value: [
              { key: 'number', value: 45 },
            ],
          },
        ],
      },
      { key: 'fee', value: 100500 },

    ],
    right: true,
  },
  { key: 'group4', value: 'bye', left: true },
];

export default DIFF;
