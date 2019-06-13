var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO: import JSON data
// const data = require("data.json");
// const customers = data.customers;
var data = JSON.parse('{ "customers": [ { "ID": 87329415, "name": "小林弘治", "transactions": [ { "transactionNumber": "8945-23-0923-123", "date": "2019-03-09 14:11:29", "total": 179.29 }, { "transactionNumber": "8493-11-0009-443", "date": "2019-03-19 06:39:22", "total": 78.89 }, { "transactionNumber": "9032-13-9430-444", "date": "2019-03-25 00:15:11", "total": 23.90 }, { "transactionNumber": "1059-43-5583-090", "date": "2019-04-04 22:34:13", "total": 282.04 }, { "transactionNumber": "0923-44-8598-004", "date": "2019-05-05 08:34:31", "total": 49.63 }, { "transactionNumber": "8934-89-6093-900", "date": "2019-05-17 13:19:15", "total": 149.14 } ] } ]}');

var customers = data.customers;

var CustomerRow = function (_React$Component) {
  _inherits(CustomerRow, _React$Component);

  function CustomerRow() {
    _classCallCheck(this, CustomerRow);

    return _possibleConstructorReturn(this, (CustomerRow.__proto__ || Object.getPrototypeOf(CustomerRow)).apply(this, arguments));
  }

  _createClass(CustomerRow, [{
    key: "render",
    value: function render() {
      var customer = this.props.customer;

      // TODO: separate month picker functionality
      var month1 = 3;
      var month2 = 4;
      var month3 = 5;

      var month1Points = 0;
      var month2Points = 0;
      var month3Points = 0;

      var transactions = customer.transactions;

      transactions.forEach(function (transaction) {
        // TODO: extract parseMonth function
        // TODO: check if full date is within correct range
        var dateAsString = transaction.date;
        var date = new Date(dateAsString);
        var month = date.getMonth() + 1; // getMonth() returns 0–11 … 0 = Jan

        var purchaseTotal = Math.floor(transaction.total);
        var points = 0;

        if (purchaseTotal < 51) {
          // total was not enough to earn points
          return;
        } else if (false) {
          // TODO: Check if date is in range
          // date was not in range
          return;
        } else {
          // TODO: extract point calculation function
          // TODO: abstract point values
          if (purchaseTotal > 100) {
            points = 2 * (purchaseTotal - 100) + 50;
          } else {
            points = purchaseTotal - 50;
          }
          // TODO: set this in a month object instead of switch?
          switch (month) {
            case month1:
              month1Points += points;
              break;
            case month2:
              month2Points += points;
              break;
            case month3:
              month3Points += points;
              break;
          }
        }
      });

      var totalPoints = month1Points + month2Points + month3Points;

      return React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          customer.ID
        ),
        React.createElement(
          "td",
          null,
          customer.name
        ),
        React.createElement(
          "td",
          null,
          month1Points
        ),
        React.createElement(
          "td",
          null,
          month2Points
        ),
        React.createElement(
          "td",
          null,
          month3Points
        ),
        React.createElement(
          "td",
          null,
          totalPoints
        )
      );
    }
  }]);

  return CustomerRow;
}(React.Component);

var CustomerTable = function (_React$Component2) {
  _inherits(CustomerTable, _React$Component2);

  function CustomerTable() {
    _classCallCheck(this, CustomerTable);

    return _possibleConstructorReturn(this, (CustomerTable.__proto__ || Object.getPrototypeOf(CustomerTable)).apply(this, arguments));
  }

  _createClass(CustomerTable, [{
    key: "render",
    value: function render() {
      var rows = [];

      this.props.customers.forEach(function (customer) {
        rows.push(React.createElement(CustomerRow, {
          customer: customer,
          key: customer.ID }));
      });

      return React.createElement(
        "table",
        null,
        React.createElement("colgroup", { span: "2" }),
        React.createElement("colgroup", { span: "4" }),
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement(
              "th",
              { colSpan: "2", scope: "colgroup" },
              "Customer"
            ),
            React.createElement(
              "th",
              { colSpan: "4", scope: "colgroup" },
              "Points Earned"
            )
          ),
          React.createElement(
            "tr",
            null,
            React.createElement(
              "th",
              { scope: "col" },
              "ID"
            ),
            React.createElement(
              "th",
              { scope: "col" },
              "Name"
            ),
            React.createElement(
              "th",
              { scope: "col" },
              "March"
            ),
            React.createElement(
              "th",
              { scope: "col" },
              "April"
            ),
            React.createElement(
              "th",
              { scope: "col" },
              "May"
            ),
            React.createElement(
              "th",
              { scope: "col" },
              "Total"
            )
          )
        ),
        React.createElement(
          "tbody",
          null,
          rows
        )
      );
    }
  }]);

  return CustomerTable;
}(React.Component);

var Search = function (_React$Component3) {
  _inherits(Search, _React$Component3);

  function Search() {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  _createClass(Search, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        null,
        React.createElement(
          "label",
          { htmlFor: "customer-search" },
          "Search for customer"
        ),
        React.createElement("input", { id: "customer-search", type: "search", placeholder: "Customer name or ID\u2026" })
      );
    }
  }]);

  return Search;
}(React.Component);

var SearchableCustomerTable = function (_React$Component4) {
  _inherits(SearchableCustomerTable, _React$Component4);

  function SearchableCustomerTable() {
    _classCallCheck(this, SearchableCustomerTable);

    return _possibleConstructorReturn(this, (SearchableCustomerTable.__proto__ || Object.getPrototypeOf(SearchableCustomerTable)).apply(this, arguments));
  }

  _createClass(SearchableCustomerTable, [{
    key: "render",
    value: function render() {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(Search, null),
        React.createElement(CustomerTable, { customers: this.props.customers })
      );
    }
  }]);

  return SearchableCustomerTable;
}(React.Component);

ReactDOM.render(React.createElement(SearchableCustomerTable, { customers: customers }), document.getElementById('customer-points-display'));