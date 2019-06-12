// TODO: import JSON data
// const data = require("data.json");
// const customers = data.customers;
const data = JSON.parse('{ "customers": [ { "ID": 87329415, "name": "小林弘治", "transactions": [ { "transactionNumber": "8945-23-0923-123", "date": "2019-03-09 14:11:29", "total": 179.29 }, { "transactionNumber": "8493-11-0009-443", "date": "2019-03-19 06:39:22", "total": 78.89 }, { "transactionNumber": "9032-13-9430-444", "date": "2019-03-25 00:15:11", "total": 23.90 }, { "transactionNumber": "1059-43-5583-090", "date": "2019-04-04 22:34:13", "total": 282.04 }, { "transactionNumber": "0923-44-8598-004", "date": "2019-05-05 08:34:31", "total": 49.63 }, { "transactionNumber": "8934-89-6093-900", "date": "2019-05-17 13:19:15", "total": 149.14 } ] } ]}');

const customers = data.customers;

class CustomerRow extends React.Component {
  render() {
    const customer = this.props.customer;
    // TODO: calculate point totals
    let month1Points = 0;
    let month2Points = 0;
    let month3Points = 0;
    let totalPoints = month1Points + month2Points + month3Points;

    return (
      <tr>
        <td>{customer.ID}</td>
        <td>{customer.name}</td>
        <td>{month1Points}</td>
        <td>{month2Points}</td>
        <td>{month3Points}</td>
        <td>{totalPoints}</td>
      </tr>
    );
  }
}

class CustomerTable extends React.Component {
  render() {
    const rows = [];

    this.props.customers.forEach((customer) => {
      rows.push(
        <CustomerRow
          customer={customer}
          key={customer.ID} />
      );
    });

    return (
      <table>
        <colgroup span="2"></colgroup>
        <colgroup span="4"></colgroup>

        <thead>
          <tr>
            <th colSpan="2" scope="colgroup">Customer</th>
            <th colSpan="4" scope="colgroup">Points Earned</th>
          </tr>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">March</th>
            <th scope="col">April</th>
            <th scope="col">May</th>
            <th scope="col">Total</th>
          </tr>
        </thead>

        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

class Search extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="customer-search">Search for customer</label>
        <input id="customer-search" type="search" placeholder="Customer name or ID…" />
      </form>
    );
  }
}

class SearchableCustomerTable extends React.Component {
  render() {
    return (
        <React.Fragment>
          <Search />
          <CustomerTable customers={this.props.customers} />
        </React.Fragment>
    );
  }
}

ReactDOM.render(
  <SearchableCustomerTable customers={customers} />,
  document.getElementById('customer-points-display')
);
