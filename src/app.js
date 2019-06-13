// TODO: import JSON data

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
    const locale = this.props.locale || "en-US";
    const filterText = this.props.filterText.toLocaleLowerCase(locale);
    const rows = [];

    this.props.customers.forEach((customer) => {
      if (customer.name.toLocaleLowerCase(locale).indexOf(filterText) === -1 &&
          customer.ID.toLocaleLowerCase(locale).indexOf(filterText) === -1) {
        return;
      }
      rows.push(
        <CustomerRow
          customer={customer}
          dateRange={this.props.dateRange}
          key={customer.ID} />
      );
    });

    // TODO: Make month names dynamic
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
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    const filterText = this.props.filterText;
    return (
      <form>
        <label htmlFor="customer-search">Search for customer</label>
        <input
          id="customer-search"
          type="search"
          placeholder="Customer name or ID…"
          value={filterText}
          onChange={this.handleFilterTextChange} />
      </form>
    );
  }
}

class SearchableCustomerTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    // TODO: Make date range user defined and set default values
    const dateRange = {
      startDate: new Date(2019, 2),
      endDate: new Date(2019, 4 + 1, 0, 23, 59, 59, 999),
      // TODO: Create months array based on date range
      months: [2, 3, 4], // months are 0 indexed (0 = Jan)
      // get UNIX times for date comparison
      get startTime() { return this.startDate.getTime() },
      get endTime() { return this.endDate.getTime() }
    }

    return (
        <React.Fragment>
          <Search
            filterText={this.state.filterText}
            onFilterTextChange={this.handleFilterTextChange} />
          <CustomerTable
            filterText={this.state.filterText}
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
