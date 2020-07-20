## Design a universal table component

Required to design a table component such that you can pass an data source URL into it to render an HTML table.

Input data (load from URL):

Array<object>

[{
  "Name": "James",
  "ID": 12345,
  "Age": 40
}, {
  "Name": "Tom",
  "ID": 12346,
  "Age": 28
},  {
  "Name": "Susan",
  "ID": 12347,
  "Age": 32
}]

onSelectAll(selected: boolean): void
onSelect(object): void


## Required features:

- Check box: check/uncheck all, check some of the rows.
  - handleAllCheckStatusChanged(checkedRows)
  - handleRowChecked(row)
- Scroll to load more data (throttle)
- Hide/Show certain columns.
- Sorting

## Improved/follow-up

- Make the columns universal.
- Adjusting column width.

- How to do inline-editing? (talk is fine)

- Add click-to-sort feature. How to do that? (talk is fine)
  - Could be in FE
  - OR BE

- How to improve this table? (talking)
  - Virtualized table.