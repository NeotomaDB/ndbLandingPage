# DOI management:

## Steps

1.  Steward creates a new dataset.
2.  There is some waiting period (??)
3.  The Freeze function is run to obtain a record `as is` so that it can be inserted into the `frozen` table.
    1.  Uses `doi.ndbdata`, `datasetinfo` and `doi.chronmeta` to produce a data object.
    2.  With those three objects it then takes a DOI and puts the text into the table with an INSERT statement.
