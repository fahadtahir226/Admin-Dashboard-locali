import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDataGrid from 'react-data-grid';
import InformationOutlineIcon from 'mdi-react/InformationOutlineIcon';

export default class DataPaginationTable extends PureComponent {
  static propTypes = {
    heads: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
      editable: PropTypes.bool,
      sortable: PropTypes.bool,
    })).isRequired,
    rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    onSorting: PropTypes.func.isRequired,
  };



  rowGetter = (i) => {
    const { rows } = this.props;
    return rows[i];
  };
  getCellActions = (column, row) => {
    const cellActions = {
      itemNo: [{
        icon: <div style={{paddingTop: 10}} ><InformationOutlineIcon /></div>,
        callback: () => {
          console.log(row, row.buisnessID);
        }
      }]
    };
    return cellActions[column.key] ? cellActions[column.key] : null;
  }

  render() {
    const { heads, rows, onSorting } = this.props;
    // let rowLength = rows.length;
    return (
      <div className="table">
        <ReactDataGrid
          columns={heads}
          rowGetter={this.rowGetter}
          rowsCount={rows.length}
          rowHeight={44}
          minColumnWidth={100}
          onGridSort={onSorting}
          getCellActions={this.getCellActions}
        />
      </div>
    );
  }
}
