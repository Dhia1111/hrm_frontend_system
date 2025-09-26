import React, { useMemo, useRef, useEffect, memo } from "react";
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject} from "@syncfusion/ej2-react-grids";
import { useTranslation } from "react-i18next";
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-calendars/styles/material.css";
import "@syncfusion/ej2-dropdowns/styles/material.css";
import "@syncfusion/ej2-inputs/styles/material.css";
import "@syncfusion/ej2-navigations/styles/material.css";
import "@syncfusion/ej2-popups/styles/material.css";
import "@syncfusion/ej2-splitbuttons/styles/material.css";
import "@syncfusion/ej2-notifications/styles/material.css";
import "@syncfusion/ej2-react-grids/styles/material.css";

import Styles from "./Grid.module.css"

export default memo(function Grid({
  data = [
    { ID: 1, Name: "John Doe", Age: 28 },
    { ID: 2, Name: "Jane Smith", Age: 32 },
    { ID: 3, Name: "Michael Brown", Age: 41 },
  ],
  HandleDelete,
  HandleUpdate,
  HandleViewDetails,
})
{
    const { t } = useTranslation();
  const gridRef = useRef(null);
const headers = useMemo(() => {
    const sample = data[0] || {};
    return Object.keys(sample).map((key) => ({
      field: key,
      // since your JSON keys are capitalized, t(key) should work; then capitalize the result
      headerText: t(capitalize(key)),
      width: getFieldWidth(data, key),
    })); }, [data, t,]);

    function handleUpdate(e){
if(handleUpdate!=null) HandleUpdate(e)
    }
    function handleDelete(e){
HandleDelete(e)

}
    function handleViewDetails(e){
      HandleViewDetails(e)
    }
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    // ensure internal columns exist
    if (!grid.columns || grid.columns.length === 0) {
      // if ColumnDirective hasn't been processed yet, force rebuild
      grid.refreshColumns();
      return;
    }

    // update each internal column (by field)
    headers.forEach((h) => {
      const col = grid.columns.find((c) => c.field === h.field);
      if (col) {
        col.headerText = h.headerText;
        col.width = h.width;
      }
    });

    // IMPORTANT: tell grid to redraw columns
    grid.refreshColumns();
  }, [headers,gridRef]);


  return (
  <div style={{ background: "white" }}>
    <GridComponent
      ref={gridRef}
      dataSource={data}
      allowPaging={true}
      pageSettings={{ pageSize: 2 }}
    >
      <ColumnsDirective>
        {headers.map((h) => (
          <ColumnDirective
            key={h.field}
            field={h.field}
            headerText={h.headerText}
            width={h.width}
            textAlign="Left"
          />
        ))}

        {/* ✅ One column for all action buttons */}
      {/* View Details Column */}
<ColumnDirective
  headerText={t("ViewDetails")}
  width="120"
  textAlign="Center"
  template={(props) => (
    <button
      className={Styles.Bt}
      onClick={() => handleViewDetails(props)}
    >
      {t("ViewDetails")}
    </button>
  )}
/>

{/* Edit Column */}
<ColumnDirective
  headerText={t("Edit")}
  width="120"
  textAlign="Center"
  template={(props) => (
    <button
      className={Styles.Bt}
      onClick={() => handleUpdate(props)}
    >
      {t("Edit")}
    </button>
  )}
/>

{/* Delete Column */}
<ColumnDirective
  headerText={t("Delete")}
  width="120"
  textAlign="Center"
  template={(props) => (
    <button
      className={Styles.BtDelete}
      onClick={() => handleDelete(props)}
    >
      {t("Delete")}
    </button>
  )}
/>

      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent>
  </div>
);

}

)





 function capitalize(str) {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
  }
  function getFieldWidth(dataArray, key) {
    if (!Array.isArray(dataArray) || dataArray.length === 0) return 120;
    const maxLen = dataArray.reduce((max, row) => {
      const val = String(row[key] ?? "");
      return Math.max(max, val.length);
    }, 0);
    // scale and set a reasonable minimum
    return Math.max(80, maxLen * 12);
  }