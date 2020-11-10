module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction/introduction',
        'introduction/dependencies',
        'introduction/getting-started',
      ],
    },
    {
      type: 'category',
      label: 'Data Sources',
      items: [
        'data-sources/clinvar',
		'data-sources/dbsnp',
      ],
    },
    {
      type: 'category',
      label: 'File Formats',
      items: [
        'file-formats/nirvana-json-file-format',
        'file-formats/custom-annotations'
      ],
    },
  ],
};
