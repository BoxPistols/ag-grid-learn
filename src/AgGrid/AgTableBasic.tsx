import React, { useState, useRef, useEffect, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Button } from "@mui/material";

const AgTableBasic = () => {
  // rowData ステートの初期値を設定
  const [rowData, setRowData] = useState();

  // columnDefs ステートの初期値を設定
  const [columnDefs, setColumnDefs] = useState([
    { field: "make", filter: true },
    { field: "model", filter: true },
    { field: "price" },
  ]);

  // セルクリックのイベントハンドラーを useCallback フックを使用して定義
  const cellClickedListener = useCallback((event: any) => {
    console.log("cellClicked", event);
  }, []);

  // API リクエストを行い、rowData ステートを更新する副作用を useEffect フックで定義
  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  // AgGridReact コンポーネントの参照を格納するための MutableRefObject を作成
  const gridRef: React.MutableRefObject<AgGridReact<any> | null> = useRef(null);

  // ボタンクリックのイベントハンドラーを useCallback フックを使用して定義
  const buttonListener = useCallback((_e: any) => {
    // gridRef.current が null でない場合に deselectAll メソッドを呼び出す
    if (gridRef.current) {
      gridRef.current.api.deselectAll();
    }
  }, []);

  return (
    <div>
      {/* AgGridReact コンポーネントを表示 */}
      <div className="ag-theme-alpine" style={{ width: 500, height: 500 }}>
        <AgGridReact
          // gridRef を AgGridReact コンポーネントに渡し、参照を確立
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={{ sortable: true }}
          animateRows={true}
          rowSelection="multiple"
          // セルクリックのイベントハンドラーを設定
          onCellClicked={cellClickedListener}
        />
      </div>
      {/* ボタンクリック時に buttonListener 関数を呼び出すボタンを表示 */}
      <Button onClick={buttonListener} variant="outlined" sx={{ my: 1 }}>
        Reset Select
      </Button>
    </div>
  );
};

export default AgTableBasic;
