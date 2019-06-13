// TODO: import JSON data
// const data = require("data.json");
// const customers = data.customers;
const data = JSON.parse('{ "customers": [ { "ID": 87329415, "name": "小林弘治", "transactions": [ { "transactionNumber": "8945-23-0923-123", "date": "2019-03-09T14:11:29.443Z", "total": 179.29 }, { "transactionNumber": "8493-11-0009-443", "date": "2019-03-19T06:39:22.893Z", "total": 78.89 }, { "transactionNumber": "9032-13-9430-444", "date": "2019-03-25T00:15:11.032Z", "total": 23.90 }, { "transactionNumber": "1059-43-5583-090", "date": "2019-04-04T22:34:13.556Z", "total": 282.04 }, { "transactionNumber": "0923-44-8598-004", "date": "2019-05-05T08:34:31.196Z", "total": 49.63 }, { "transactionNumber": "8934-89-6093-900", "date": "2019-05-17T13:19:15.492Z", "total": 149.14 } ] } ]}');

const customers = data.customers;

const parseDate = (dateAsString) => {
  const date = new Date(dateAsString);
  return {
    unixTime: date.getTime(),
    month: date.getMonth()
  }
};

// TODO: abstract point values
const calculatePoints = (purchaseTotal) => {
  if (purchaseTotal > 100) {
    return (2 * (purchaseTotal - 100)) + 50;
  } else {
    return purchaseTotal - 50;
  }
};

class CustomerRow extends React.Component {
  render() {
    const customer = this.props.customer;
    const dateRange = this.props.dateRange;

    /* This creates a dynamic object of monthPoints with an arbitrary
       range of months, so that the functionality of the app
       could be expanded to include any user-defined range of months.

       format:
       monthPoints = {
        monthAsNumber: pointTotal,
        ...
      }
    */
    const monthPoints = {};
    for (let month of dateRange.months) {
      monthPoints[month] = 0;
    }

    customer.transactions.forEach((transaction) => {
      const transactionDate = parseDate(transaction.date);
      const purchaseTotal = Math.floor(transaction.total);

      if (purchaseTotal > 50 && transactionDate.unixTime >= dateRange.startTime
        && transactionDate.unixTime <= dateRange.endTime) {
        // transaction is in correct date range, and qualifies for points
        let points = calculatePoints(purchaseTotal);
        monthPoints[transactionDate.month] += points;
      }
    });

    // calculate totalPoints from arbitrarily large monthPoints object
    let totalPoints = Object.values(monthPoints).reduce((a, b) => a + b);

    const monthCells = [];

    dateRange.months.forEach((month) => {
      monthCells.push(
        <td key={month}>{monthPoints[month]}</td>
      );
    });

    return (
      <tr>
        <td>{customer.ID}</td>
        <td>{customer.name}</td>
        {monthCells}
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
          dateRange={this.props.dateRange}
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
    const dateRange = {
      startDate: new Date(2019, 2),
      endDate: new Date(2019, 4 + 1, 0, 23, 59, 59, 999),
      months: [2, 3, 4], // months are 0 indexed (0 = Jan)
      // get UNIX times for date comparison
      get startTime() { return this.startDate.getTime() },
      get endTime() { return this.endDate.getTime() }
    }

    return (
        <React.Fragment>
          <Search />
          <CustomerTable
            customers={this.props.customers}
            dateRange={dateRange} />
        </React.Fragment>
    );
  }
}

ReactDOM.render(
  <SearchableCustomerTable customers={customers} />,
  document.getElementById('customer-points-display')
);
