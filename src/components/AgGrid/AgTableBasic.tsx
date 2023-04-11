import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
import { Button, Typography } from "@mui/material";

const AgTableBasic = () => {
  // GridのAPIにアクセスするためのRef
  const gridRef = useRef<AgGridReact>(null);

  // 表示するテーブルの行データ
  const [rowData, setRowData] = useState<any[]>([]);

  // 各カラムの定義
  const [columnDefs, setColumnDefs] = useState([
    { field: "make", filter: true }, // メーカー
    { field: "model", filter: true }, // 車種
    { field: "price" }, // 価格
  ]);

  // カラムの共通のプロパティを設定するオブジェクト
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );

  // セルクリック時の処理
  const handleCellClicked = useCallback((e: any) => {
    console.log("cellClicked", e);
  }, []);

  // データの読み込み処理
  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  // Clear Selectの処理
  const handleButtonClicked = useCallback((_e: any) => {
    gridRef.current?.api.deselectAll();
  }, []);

  return (
    <div>
      <main className="main">
        <Typography variant="h2" color="initial">
          Basic Table
        </Typography>

        <div className="ag-theme-alpine" style={{ width: 500, height: 500 }}>
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            animateRows={true}
            rowSelection="multiple"
            onCellClicked={handleCellClicked}
          />
        </div>
        <Button variant="outlined" sx={{ mt: 1 }} onClick={handleButtonClicked}>
          Clear Select
        </Button>
      </main>
    </div>
  );
};

export default AgTableBasic;
