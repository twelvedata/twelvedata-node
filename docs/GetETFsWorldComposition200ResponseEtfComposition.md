
# GetETFsWorldComposition200ResponseEtfComposition

Composition of a etf

## Properties

Name | Type
------------ | -------------
`majorMarketSectors` | [Array&lt;GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInner&gt;](GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInner.md)
`countryAllocation` | [Array&lt;GetETFsWorld200ResponseEtfCompositionCountryAllocationInner&gt;](GetETFsWorld200ResponseEtfCompositionCountryAllocationInner.md)
`assetAllocation` | [GetETFsWorld200ResponseEtfCompositionAssetAllocation](GetETFsWorld200ResponseEtfCompositionAssetAllocation.md)
`topHoldings` | [Array&lt;GetETFsWorld200ResponseEtfCompositionTopHoldingsInner&gt;](GetETFsWorld200ResponseEtfCompositionTopHoldingsInner.md)
`bondBreakdown` | [GetETFsWorld200ResponseEtfCompositionBondBreakdown](GetETFsWorld200ResponseEtfCompositionBondBreakdown.md)

## Example

```typescript
import type { GetETFsWorldComposition200ResponseEtfComposition } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "majorMarketSectors": null,
  "countryAllocation": null,
  "assetAllocation": null,
  "topHoldings": null,
  "bondBreakdown": null,
} satisfies GetETFsWorldComposition200ResponseEtfComposition

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetETFsWorldComposition200ResponseEtfComposition
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


