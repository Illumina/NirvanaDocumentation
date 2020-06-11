
# ClinVar

## RCV Files

### Example
```xml
<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<ReleaseSet Dated="2016-07-04" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" Type="full"
            xsi:noNamespaceSchemaLocation="http://ftp.ncbi.nlm.nih.gov/pub/clinvar/xsd_public/clinvar_public_1.35.xsd">
 
    <ClinVarSet ID="47064274">
        <RecordStatus>current</RecordStatus>
        <Title>NM_000235.4(LIPA):c.894+1G&gt;A AND Wolman disease</Title>
        <ReferenceClinVarAssertion DateCreated="2012-08-13" DateLastUpdated="2019-11-02" ID="57604">
            <ClinVarAccession Acc="RCV000000101" Version="3" Type="RCV" DateUpdated="2019-11-02"/>
            <RecordStatus>current</RecordStatus>
            <ClinicalSignificance DateLastEvaluated="1996-04-01">
                <ReviewStatus>no assertion criteria provided</ReviewStatus>
                <Description>Pathogenic</Description>
            </ClinicalSignificance>
            <Assertion Type="variation to disease"/>
            <ObservedIn>
                <Sample>
                    <Origin>germline</Origin>
                    <Species TaxonomyId="9606">human</Species>
                    <AffectedStatus>not provided</AffectedStatus>
                </Sample>
                <Method>
                    <MethodType>literature only</MethodType>
                </Method>
                <ObservedData ID="47897969">
                    <Attribute Type="Description">In 2 sibs with Wolman disease (278000) from a consanguineous family,
                        Aslanidis et al. (1996) detected homozygosity for a G-to-A mutation at position +1 of the splice
                        donor site following exon 8 of the LIPA gene. Both children died within the first year of life.
                        The parents, who were heterozygous for the mutation, had reduced enzymatic activity, while no
                        enzymatic activity was detectable in fibroblasts from the affected children. Although the same
                        donor splice site is involved as in the mutation reported in CESD (934G-A, 613497.0002), the
                        nucleotide at position +1 was changed in the Wolman disease mutation while the nucleotide at
                        position -1 was changed in the CESD mutation. Both mutations result in deletion of the same 24
                        amino acids (exon 8), but the effects are dramatically different: the -1 mutation allowed some
                        correct splicing (3% of total LIPA RNA), but the +1 splice site mutation, which affects one of
                        the invariable nucleotides of the splice consensus sequences, permits no correct splicing.
                        Aslanidis et al. (1996) suggested that the residual activity in CESD patients compared to Wolman
                        patients may result either from a partially active enzyme with the internal deletion of 24 amino
                        acids (skipping of exon 8) or from the production of low amounts of the full size of the protein
                        due to inefficient exon exclusion from the mutated allele.
                    </Attribute>
                    <Citation Type="general">
                        <ID Source="PubMed">8617513</ID>
                    </Citation>
                </ObservedData>
            </ObservedIn>
            <MeasureSet Type="Variant" ID="81" Acc="VCV000000081" Version="1">
                <Measure Type="single nucleotide variant" ID="15120">
                    <Name>
                        <ElementValue Type="Preferred">NM_000235.4(LIPA):c.894+1G&gt;A</ElementValue>
                    </Name>
                    <AttributeSet>
                        <Attribute Accession="NM_001288979" Version="1" Change="c.546+1G&gt;A"
                                   Type="HGVS, coding, RefSeq">NM_001288979.1:c.546+1G&gt;A
                        </Attribute>
                    </AttributeSet>
                    <AttributeSet>
                        <Attribute Accession="NM_000235" Version="4" Change="c.894+1G&gt;A" Type="HGVS, coding, RefSeq">
                            NM_000235.4:c.894+1G&gt;A
                        </Attribute>
                    </AttributeSet>
                    <AttributeSet>
                        <Attribute Accession="NM_001127605" Version="3" Change="c.894+1G&gt;A"
                                   Type="HGVS, coding, RefSeq">NM_001127605.3:c.894+1G&gt;A
                        </Attribute>
                    </AttributeSet>
                    <AttributeSet>
                        <Attribute Accession="NG_008194" Version="1" Change="g.34394G&gt;A"
                                   Type="HGVS, genomic, RefSeqGene">NG_008194.1:g.34394G&gt;A
                        </Attribute>
                    </AttributeSet>
                    <AttributeSet>
                        <Attribute Accession="NC_000010" Version="11" Change="g.89222510C&gt;T"
                                   Type="HGVS, genomic, top level" integerValue="38">NC_000010.11:g.89222510C&gt;T
                        </Attribute>
                    </AttributeSet>
                    <AttributeSet>
                        <Attribute Accession="NC_000010" Version="10" Change="g.90982267C&gt;T"
                                   Type="HGVS, genomic, top level, previous" integerValue="37">NC_000010.10:g.90982267C&gt;T
                        </Attribute>
                    </AttributeSet>
                    <AttributeSet>
                        <Attribute Accession="NM_000235" Version="3" Change="c.894+1G&gt;A" Type="HGVS, previous">
                            NM_000235.3:c.894+1G&gt;A
                        </Attribute>
                    </AttributeSet>
                    <AttributeSet>
                        <Attribute Type="MolecularConsequence">splice donor variant</Attribute>
                        <XRef ID="SO:0001575" DB="Sequence Ontology"/>
                        <XRef ID="NM_000235.4:c.894+1G&gt;A" DB="RefSeq"/>
                    </AttributeSet>
                    <AttributeSet>
                        <Attribute Type="MolecularConsequence">splice donor variant</Attribute>
                        <XRef ID="SO:0001575" DB="Sequence Ontology"/>
                        <XRef ID="NM_001127605.3:c.894+1G&gt;A" DB="RefSeq"/>
                    </AttributeSet>
                    <AttributeSet>
                        <Attribute Type="MolecularConsequence">splice donor variant</Attribute>
                        <XRef ID="SO:0001575" DB="Sequence Ontology"/>
                        <XRef ID="NM_001288979.1:c.546+1G&gt;A" DB="RefSeq"/>
                    </AttributeSet>
                    <AttributeSet>
                        <Attribute Type="nucleotide change">IVS8, G-A, +1</Attribute>
                    </AttributeSet>
                    <CytogeneticLocation>10q23.31</CytogeneticLocation>
                    <SequenceLocation Assembly="GRCh38" AssemblyAccessionVersion="GCF_000001405.38"
                                      AssemblyStatus="current" Chr="10" Accession="NC_000010.11" start="89222510"
                                      stop="89222510" display_start="89222510" display_stop="89222510" variantLength="1"
                                      positionVCF="89222510" referenceAlleleVCF="C" alternateAlleleVCF="T"/>
                    <SequenceLocation Assembly="GRCh37" AssemblyAccessionVersion="GCF_000001405.25"
                                      AssemblyStatus="previous" Chr="10" Accession="NC_000010.10" start="90982267"
                                      stop="90982267" display_start="90982267" display_stop="90982267" variantLength="1"
                                      positionVCF="90982267" referenceAlleleVCF="C" alternateAlleleVCF="T"/>
                    <MeasureRelationship Type="within single gene">
                        <Name>
                            <ElementValue Type="Preferred">lipase A, lysosomal acid type</ElementValue>
                        </Name>
                        <Symbol>
                            <ElementValue Type="Preferred">LIPA</ElementValue>
                        </Symbol>
                        <SequenceLocation Assembly="GRCh38" AssemblyAccessionVersion="GCF_000001405.38"
                                          AssemblyStatus="current" Chr="10" Accession="NC_000010.11" start="89213569"
                                          stop="89252039" display_start="89213569" display_stop="89252039" Strand="-"/>
                        <SequenceLocation Assembly="GRCh37" AssemblyAccessionVersion="GCF_000001405.25"
                                          AssemblyStatus="previous" Chr="10" Accession="NC_000010.10" start="90973325"
                                          stop="91011659" display_start="90973325" display_stop="91011659"
                                          variantLength="38335" Strand="-"/>
                        <XRef ID="3988" DB="Gene"/>
                        <XRef Type="MIM" ID="613497" DB="OMIM"/>
                        <XRef ID="HGNC:6617" DB="HGNC"/>
                    </MeasureRelationship>
                    <XRef Type="Allelic variant" ID="613497.0005" DB="OMIM"/>
                    <XRef Type="rs" ID="1564751995" DB="dbSNP"/>
                    <Comment DataSource="ClinGen" Type="public">ClinGen staff contributed the HGVS expression for this
                        variant.
                    </Comment>
                </Measure>
                <Name>
                    <ElementValue Type="Preferred">NM_000235.4(LIPA):c.894+1G&gt;A</ElementValue>
                </Name>
            </MeasureSet>
            <TraitSet Type="Disease" ID="40">
                <Trait ID="9048" Type="Disease">
                    <Name>
                        <ElementValue Type="Preferred">Wolman disease</ElementValue>
                        <XRef ID="7899" DB="Office of Rare Diseases"/>
                    </Name>
                    <XRef ID="CN438428" DB="MedGen"/>
                </Trait>
            </TraitSet>
        </ReferenceClinVarAssertion>
        <ClinVarAssertion ID="20244">
            <ClinVarSubmissionID localKey="613497.0005_WOLMAN DISEASE" submitter="OMIM" submitterDate="2017-12-22"
                                 title="LIPA, IVS8, G-A, +1_WOLMAN DISEASE"/>
            <ClinVarAccession Acc="SCV000020244" Version="2" Type="SCV" OrgID="3" OrganizationCategory="resource"
                              OrgType="primary" DateUpdated="2019-03-31"/>
            <RecordStatus>current</RecordStatus>
            <ClinicalSignificance DateLastEvaluated="1996-04-01">
                <ReviewStatus>no assertion criteria provided</ReviewStatus>
                <Description>Pathogenic</Description>
            </ClinicalSignificance>
            <Assertion Type="variation to disease"/>
            <ExternalID DB="OMIM" ID="613497.0005" Type="Allelic variant"/>
            <ObservedIn>
                <Sample>
                    <Origin>germline</Origin>
                    <Species>human</Species>
                    <AffectedStatus>not provided</AffectedStatus>
                </Sample>
                <Method>
                    <MethodType>literature only</MethodType>
                </Method>
                <ObservedData>
                    <Attribute Type="Description">In 2 sibs with Wolman disease (278000) from a consanguineous family,
                        Aslanidis et al. (1996) detected homozygosity for a G-to-A mutation at position +1 of the splice
                        donor site following exon 8 of the LIPA gene. Both children died within the first year of life.
                        The parents, who were heterozygous for the mutation, had reduced enzymatic activity, while no
                        enzymatic activity was detectable in fibroblasts from the affected children. Although the same
                        donor splice site is involved as in the mutation reported in CESD (934G-A, 613497.0002), the
                        nucleotide at position +1 was changed in the Wolman disease mutation while the nucleotide at
                        position -1 was changed in the CESD mutation. Both mutations result in deletion of the same 24
                        amino acids (exon 8), but the effects are dramatically different: the -1 mutation allowed some
                        correct splicing (3% of total LIPA RNA), but the +1 splice site mutation, which affects one of
                        the invariable nucleotides of the splice consensus sequences, permits no correct splicing.
                        Aslanidis et al. (1996) suggested that the residual activity in CESD patients compared to Wolman
                        patients may result either from a partially active enzyme with the internal deletion of 24 amino
                        acids (skipping of exon 8) or from the production of low amounts of the full size of the protein
                        due to inefficient exon exclusion from the mutated allele.
                    </Attribute>
                    <Citation>
                        <ID Source="PubMed">8617513</ID>
                    </Citation>
                    <XRef DB="OMIM" ID="278000" Type="MIM"/>
                </ObservedData>
            </ObservedIn>
            <MeasureSet Type="Variant">
                <Measure Type="Variation">
                    <Name>
                        <ElementValue Type="Preferred">LIPA, IVS8, G-A, +1</ElementValue>
                    </Name>
                    <AttributeSet>
                        <Attribute Type="NonHGVS">IVS8, G-A, +1</Attribute>
                    </AttributeSet>
                    <MeasureRelationship Type="variant in gene">
                        <Symbol>
                            <ElementValue Type="Preferred">LIPA</ElementValue>
                        </Symbol>
                    </MeasureRelationship>
                    <XRef DB="OMIM" ID="613497.0005" Type="Allelic variant"/>
                </Measure>
            </MeasureSet>
            <TraitSet Type="Disease">
                <Trait Type="Disease">
                    <Name>
                        <ElementValue Type="Preferred">WOLMAN DISEASE</ElementValue>
                    </Name>
                </Trait>
            </TraitSet>
        </ClinVarAssertion>
    </ClinVarSet>
 
</ReleaseSet>
```
### Parsing

| RCV field | XML field | Comment |
|--|--|--|
| ID |  |  |
| LastUpdatedDate|  |  |
| Significance|  |  |
| ReviewStatus|  |  |
| Phenotypes |  |  |
| Location and VariantId |  |  |
| MedGen, OMIM, Orphanet IDs |  |  |
| AlleleOrigins |  |  We only extract all Allele Origins from Submissions (SCV) entries.|
| PubMedIds |  |  We only extract all Pubmed Ids from Submissions (SCV) entries.|



## VCV Files
### Example
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ClinVarVariationRelease xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://ftp.ncbi.nlm.nih.gov/pub/clinvar/xsd_public/clinvar_variation/variation_archive_1.4.xsd" ReleaseDate="2019-12-31">
<VariationArchive VariationID="431749" VariationName="GRCh37/hg19 1p36.31(chr1:6051187-6158763)" VariationType="copy number gain" DateCreated="2017-08-12" DateLastUpdated="2019-09-10" Accession="VCV000431749" Version="1" RecordType="included" NumberOfSubmissions="0" NumberOfSubmitters="0">
  <RecordStatus>current</RecordStatus>
  <Species>Homo sapiens</Species>
  <IncludedRecord>
    <SimpleAllele AlleleID="425239" VariationID="431749">
      <GeneList>
        <Gene Symbol="KCNAB2" FullName="potassium voltage-gated channel subfamily A regulatory beta subunit 2" GeneID="8514" HGNC_ID="HGNC:6229" Source="calculated" RelationshipType="genes overlapped by variant">
          <Location>
            <CytogeneticLocation>1p36.31</CytogeneticLocation>
            <SequenceLocation Assembly="GRCh38" AssemblyAccessionVersion="GCF_000001405.38" AssemblyStatus="current" Chr="1" Accession="NC_000001.11" start="5992639" stop="6101186" display_start="5992639" display_stop="6101186" Strand="+"/>
            <SequenceLocation Assembly="GRCh37" AssemblyAccessionVersion="GCF_000001405.25" AssemblyStatus="previous" Chr="1" Accession="NC_000001.10" start="6052357" stop="6161252" display_start="6052357" display_stop="6161252" Strand="+"/>
          </Location>
          <OMIM>601142</OMIM>
        </Gene>
        <Gene Symbol="NPHP4" FullName="nephrocystin 4" GeneID="261734" HGNC_ID="HGNC:19104" Source="calculated" RelationshipType="genes overlapped by variant">
          <Location>
            <CytogeneticLocation>1p36.31</CytogeneticLocation>
            <SequenceLocation Assembly="GRCh38" AssemblyAccessionVersion="GCF_000001405.38" AssemblyStatus="current" Chr="1" Accession="NC_000001.11" start="5862810" stop="5992425" display_start="5862810" display_stop="5992425" Strand="-"/>
            <SequenceLocation Assembly="GRCh37" AssemblyAccessionVersion="GCF_000001405.25" AssemblyStatus="previous" Chr="1" Accession="NC_000001.10" start="5922869" stop="6052532" display_start="5922869" display_stop="6052532" Strand="-"/>
          </Location>
          <OMIM>607215</OMIM>
        </Gene>
      </GeneList>
      <Name>GRCh37/hg19 1p36.31(chr1:6051187-6158763)</Name>
      <VariantType>copy number gain</VariantType>
      <Location>
        <CytogeneticLocation>1p36.31</CytogeneticLocation>
        <SequenceLocation Assembly="GRCh37" AssemblyAccessionVersion="GCF_000001405.25" forDisplay="true" AssemblyStatus="previous" Chr="1" Accession="NC_000001.10" start="6051187" stop="6158763" display_start="6051187" display_stop="6158763"/>
      </Location>
      <Interpretations>
        <Interpretation NumberOfSubmissions="0" NumberOfSubmitters="0" Type="Clinical significance">
          <Description>no interpretation for the single variant</Description>
        </Interpretation>
      </Interpretations>
      <XRefList>
        <XRef Type="Interpreted" ID="431733" DB="ClinVar"/>
      </XRefList>
    </SimpleAllele>
    <ReviewStatus>no interpretation for the single variant</ReviewStatus>
    <Interpretations>
      <Interpretation NumberOfSubmissions="0" NumberOfSubmitters="0" Type="Clinical significance">
        <Description>no interpretation for the single variant</Description>
      </Interpretation>
    </Interpretations>
    <SubmittedInterpretationList>
      <SCV Title="SUB1895145" Accession="SCV000296057" Version="1"/>
    </SubmittedInterpretationList>
    <InterpretedVariationList>
      <InterpretedVariation VariationID="431733" Accession="VCV000431733" Version="1"/>
    </InterpretedVariationList>
  </IncludedRecord>
</VariationArchive>
</ClinVarVariationRelease>
```
### Parsing

## Parsing Significance
Extracting significance(s) may involve parsing multiple fields. Take the following snippets into consideration.

```xml
<ClinicalSignificance DateLastEvaluated="1996-04-01">
    <ReviewStatus>no assertion criteria provided</ReviewStatus>
    <Description>Pathogenic</Description>
</ClinicalSignificance>

<ClinicalSignificance DateLastEvaluated="2016-10-13">  
   <ReviewStatus>criteria provided, multiple submitters, no conflicts</ReviewStatus>  
   <Description>Pathogenic/Likely pathogenic</Description>  
</ClinicalSignificance>

<ClinicalSignificance DateLastEvaluated="2012-06-07">  
     <ReviewStatus>no assertion criteria provided</ReviewStatus>  
     <Description>Conflicting interpretations of pathogenicity</Description>  
     <Explanation DataSource="ClinVar" Type="public">Pathogenic(1);Uncertain significance(1)</Explanation>  
 </ClinicalSignificance>
```

Given the evidence, we converted significance field into an array of string which may be parsed out of the Descriptions or Explanation fields. Note that the delimiters in each field may vary. Currently, the delimiters for Description are ',' and '/'. For, Explanation we use ';' and '/'.
## Known Issues

 - XML contains ~1k entries more (out of 162K) compared to the VCF file
 - Web verification shows a 2.45% discrepancies in field values.
 - XML had no field indicating a record to be associated with reference, something that was present in VCF.
 - XML contains entries (e.g. RCV000016645 version=1) which have irregular bases ("R", "Y", "H", etc.) as their alternate alleles. These entries are not present in VCF.

### Star rating
ClinVar provides star ratings in the webpage for each RCV entry and for also the variant record and they can be different. For example, for [https://www.ncbi.nlm.nih.gov/clinvar/RCV000144626/](https://www.ncbi.nlm.nih.gov/clinvar/RCV000144626/), the star rating is 1. But if we go to the variant record page ([https://www.ncbi.nlm.nih.gov/clinvar/variation/36581/](https://www.ncbi.nlm.nih.gov/clinvar/variation/36581/)) we see 3 stars. Since Olympia linkout takes the user to the variant record page, the star ratings may differ.

## Download URL
[ftp://ftp.ncbi.nlm.nih.gov/pub/clinvar/xml/ClinVarFullRelease_00-latest.xml.gz](ftp://ftp.ncbi.nlm.nih.gov/pub/clinvar/xml/ClinVarFullRelease_00-latest.xml.gz)
## JSON Output
```json
"clinvar":[
   {
      "id":"VCV000036581.3",
      "reviewStatus":"reviewed by expert panel",
      "significance":[
         "benign"
      ],
      "refAllele":"G",
      "altAllele":"A",
      "lastUpdatedDate":"2020-03-01",
      "isAlleleSpecific":true
   },
   {
      "id":"RCV000030258.4",
      "variationId":"VCV000036581.3",
      "reviewStatus":"reviewed by expert panel",
      "alleleOrigins":[
         "germline"
      ],
      "refAllele":"G",
      "altAllele":"A",
      "phenotypes":[
         "Lynch syndrome"
      ],
      "medGenIds":[
         "C1333990"
      ],
      "omimIds":[
         "120435"
      ],
      "significance":[
         "benign"
      ],
      "lastUpdatedDate":"2017-05-01",
      "isAlleleSpecific":true
   },
   {
      "id":"RCV000144626.1",
      "variationId":"VCV000036581.3",
      "reviewStatus":"no assertion criteria provided",
      "alleleOrigins":[
         "germline"
      ],
      "refAllele":"G",
      "altAllele":"A",
      "phenotypes":[
         "Lynch syndrome I"
      ],
      "medGenIds":[
         "C2936783"
      ],
      "omimIds":[
         "120435"
      ],
      "orphanetIds":[
         "144"
      ],
      "significance":[
         "benign"
      ],
      "lastUpdatedDate":"2017-04-05",
      "pubMedIds":[
         "18523027",
         "22703879",
         "22949387"
      ],
      "isAlleleSpecific":true
   }
]
```

The ClinVar array contains VCV and RCV records. Each has its own set of fields.

| Field | Type | Required | Notes |
|:--|:--:|:--:|:--|
| id | string | Yes | ClinVar VCV ID |
| reviewStatus| string | Yes  | Can be one of the following values:<br />- no assertion provided<br />- no assertion criteria provided |
| significance| string array | Yes  |
| refAllele| string | Yes  |
| altAllele| string | Yes  |
| lastUpdatedDate | string | No | yyyy-MM-dd |
| isAlleleSpecific | bool | No | set to true if the current variant alternate allele matches the ClinVar alternate allele |

