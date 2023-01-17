import {
    provideFluentDesignSystem,
    fluentDataGridCell,
    fluentDataGridRow,
    fluentDataGrid,
    DataGrid
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentDataGridCell(),
        fluentDataGridRow(),
        fluentDataGrid()
    );

let table = document.getElementById("samplegrid") as DataGrid;

table.rowsData = [
    { item1: "value 1-1", item2: "value 2-1" },
    { item1: "value 1-2", item2: "value 2-2" },
    { item1: "value 1-3", item2: "value 2-3" },
];
