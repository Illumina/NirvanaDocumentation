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
        'data-sources/mito-heteroplasmy',
        'data-sources/primate-ai'
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
    {
      type: 'category',
      label: 'Core Functionality',
      items: [
        'core-functionality/variant-ids'
      ],
    },
  ],
};
