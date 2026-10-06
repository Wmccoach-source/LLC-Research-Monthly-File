# Planted errors answer key

Do not show this file to the reviewers. Nine errors were planted in evals/content_planted.js.

| id | type | location | what was changed | why it is wrong |
|---|---|---|---|---|
| 1 | Rating wrong | page2.callR | `S&P cut Oracle to BBB- on July 9` to `S&P cut Oracle to BBB on July 9` | Oracle rating given as BBB instead of BBB-, which also contradicts page 5. |
| 2 | Yield wrong | page2.p1 | `priced in July at a 7.534% yield` to `priced in July at a 7.034% yield` | El Paso yield changed from 7.534% to 7.034%, which no longer matches the 287.5bps spread or the callout. |
| 3 | Percent change wrong | page1.p2 | `up 79% from all of 2025` to `up 59% from all of 2025` | $194bn versus $108bn is up about 79%, so 59% is an arithmetic error. |
| 4 | Dash planted | page1.p1 | `campus in Louisiana set the template` to `campus in Louisiana - set the template` | A spaced hyphen used as a dash breaks the house style. |
| 5 | Colon planted | page2.p2 | `The key divergence is between abundant capital and its rising price.` to `The key divergence is: between abundant capital and its rising price.` | A colon breaks the house style. |
| 6 | Price wrong | page2.callR | `quoted at 89 to 91 cents on the dollar` to `quoted at 98 to 100 cents on the dollar` | Project Jupiter loans were quoted at 89 to 91 cents, which is the whole signal of stress. |
| 7 | Equity split wrong | page1.p1 | `with Blue Owl holding 80%, Meta holding 20%` to `with Blue Owl holding 60%, Meta holding 40%` | Hyperion split is 80% Blue Owl and 20% Meta. |
| 8 | Maturity wrong | page2.callL | `A+ rated bonds due 2048 priced at 7.534%` to `A+ rated bonds due 2058 priced at 7.534%` | El Paso bonds are due 2048, and page 5 says 2048 and 2049. |
| 9 | Fabricated claim | page2.p2 | `Disclosure is limited, since` to `Default rates on data center bonds have reached 12% this year. Disclosure is limited, since` | No such statistic exists. A good fact checker should mark it unverifiable or false. |

Seats expected to catch each error

- Fact checker. Errors 1, 2, 3, 6, 7, 8, 9.
- Style editor. Errors 4 and 5.
- Credit skeptic. Error 9 and any internal inconsistency such as 1 versus page 5.

Scoring. Caught means the report names the exact error and a correct fix. Partly caught means it flags the area but gives a wrong or vague fix. Missed means no flag.
