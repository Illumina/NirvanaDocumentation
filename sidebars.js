module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction/introduction',
        'introduction/dependencies',
        'introduction/getting-started',
        'introduction/covid19'
      ],
    },
    {
      type: 'category',
      label: 'Data Sources',
      items: [
        'data-sources/clinvar',
        'data-sources/dbsnp',
        'data-sources/mito-heteroplasmy',
        'data-sources/mitomap',
        'data-sources/revel',
        'data-sources/splice-ai',
        'data-sources/primate-ai',
        'data-sources/1000Genomes'
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
