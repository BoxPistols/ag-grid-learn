import React, { useState, useRef, useEffect, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Button, Container } from "@mui/material";

const AgTableBasic = () => {
  const [rowData, setRowData] = useState();

  const [columnDefs, setColumnDefs] = useState([
    { field: "make", filter: true },
    { field: "model", filter: true },
    { field: "price" },
  ]);

  const defaultColDef = {
    sortable: true,
  };

  const cellClickedListener = useCallback((event: any) => {
    console.log("cellClicked", event);
  }, []);

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  const gridRef: React.MutableRefObject<AgGridReact<any> | null> = useRef(null);

  const buttonListener = useCallback((_e: any) => {
    if (gridRef.current) {
      gridRef.current.api.deselectAll();
    }
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <div className="ag-theme-alpine" style={{ width: 500, height: 500 }}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows={true}
          rowSelection="multiple"
          onCellClicked={cellClickedListener}
        />
      </div>
      <Button variant="outlined" onClick={buttonListener} sx={{ mt: 1 }}>
        Push Me
      </Button>
    </Container>
  );
};

export default AgTableBasic;
