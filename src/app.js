// TODO: import JSON data
// const data = require("data.json");
// const customers = data.customers;
const data = JSON.parse('{"customers": [{"ID": 87329415,"name": "小林弘治","transactions": [{"transactionNumber": "8945-23-0923-123","date": "2019-03-09 14:11:29.045","total": 179.29}]}]}');

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
