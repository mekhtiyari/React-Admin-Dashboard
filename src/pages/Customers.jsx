import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Inject,
  Toolbar,
  Sort,
  Search,
  Edit,
} from "@syncfusion/ej2-react-grids/src";

import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowSorting
        allowPaging={true}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        toolbar={["Search", "Delete", "Edit"]}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Sort, Search, Toolbar, Edit]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
