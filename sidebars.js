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
        'data-sources/1000Genomes',
		'data-sources/clinvar',
        'data-sources/dbsnp',
        'data-sources/gnomad',
        'data-sources/mito-heteroplasmy',
        'data-sources/mitomap',
		'data-sources/primate-ai',
        'data-sources/phylop',
		'data-sources/revel',
        'data-sources/splice-ai'
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
