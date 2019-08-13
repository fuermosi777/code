## Design a table component

Required to design a table component such that you can pass data into it to render an HTML table.

Input data:

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

## Required features:

- Check box: check/uncheck all, check some of the rows.
  - handleAllCheckStatusChanged(checkedRows)
  - handleRowChecked(row)
- Scroll to load more data.
- Hide/Show certain columns.
- Sorting

## Improved/follow-up

- Add group header feature.
- Adjusting column width.
- Virtualized table.