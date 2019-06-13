var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO: import JSON data
// const data = require("data.json");
// const customers = data.customers;
var data = JSON.parse('{ "customers": [ { "ID": 87329415, "name": "小林弘治", "transactions": [ { "transactionNumber": "8945-23-0923-123", "date": "2019-03-09T14:11:29.443Z", "total": 179.29 }, { "transactionNumber": "8493-11-0009-443", "date": "2019-03-19T06:39:22.893Z", "total": 78.89 }, { "transactionNumber": "9032-13-9430-444", "date": "2019-03-25T00:15:11.032Z", "total": 23.90 }, { "transactionNumber": "1059-43-5583-090", "date": "2019-04-04T22:34:13.556Z", "total": 282.04 }, { "transactionNumber": "0923-44-8598-004", "date": "2019-05-05T08:34:31.196Z", "total": 49.63 }, { "transactionNumber": "8934-89-6093-900", "date": "2019-05-17T13:19:15.492Z", "total": 149.14 } ] } ]}');

var customers = data.customers;

var parseDate = function parseDate(dateAsString) {
  var date = new Date(dateAsString);
  return {
    unixTime: date.getTime(),
    month: date.getMonth()
  };
};

// TODO: abstract point values
var calculatePoints = function calculatePoints(purchaseTotal) {
  if (purchaseTotal > 100) {
    return 2 * (purchaseTotal - 100) + 50;
  } else {
    return purchaseTotal - 50;
  }
};

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
      var dateRange = this.props.dateRange;

      /* This creates a dynamic object of monthPoints with an arbitrary
         range of months, so that the functionality of the app
         could be expanded to include any user-defined range of months.
          format:
         monthPoints = {
          monthAsNumber: pointTotal,
          ...
        }
      */
      var monthPoints = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = dateRange.months[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var month = _step.value;

          monthPoints[month] = 0;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      customer.transactions.forEach(function (transaction) {
        var transactionDate = parseDate(transaction.date);
        var purchaseTotal = Math.floor(transaction.total);

        if (purchaseTotal > 50 && transactionDate.unixTime >= dateRange.startTime && transactionDate.unixTime <= dateRange.endTime) {
          // transaction is in correct date range, and qualifies for points
          var points = calculatePoints(purchaseTotal);
          monthPoints[transactionDate.month] += points;
        }
      });

      // calculate totalPoints from arbitrarily large monthPoints object
      var totalPoints = Object.values(monthPoints).reduce(function (a, b) {
        return a + b;
      });

      var monthCells = [];

      dateRange.months.forEach(function (month) {
        monthCells.push(React.createElement(
          "td",
          { key: month },
          monthPoints[month]
        ));
      });

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
        monthCells,
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
      var _this3 = this;

      var rows = [];

      this.props.customers.forEach(function (customer) {
        rows.push(React.createElement(CustomerRow, {
          customer: customer,
          dateRange: _this3.props.dateRange,
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
      var dateRange = {
        startDate: new Date(2019, 2),
        endDate: new Date(2019, 4 + 1, 0, 23, 59, 59, 999),
        months: [2, 3, 4], // months are 0 indexed (0 = Jan)
        // get UNIX times for date comparison
        get startTime() {
          return this.startDate.getTime();
        },
        get endTime() {
          return this.endDate.getTime();
        }
      };

      return React.createElement(
        React.Fragment,
        null,
        React.createElement(Search, null),
        React.createElement(CustomerTable, {
          customers: this.props.customers,
          dateRange: dateRange })
      );
    }
  }]);

  return SearchableCustomerTable;
}(React.Component);

ReactDOM.render(React.createElement(SearchableCustomerTable, { customers: customers }), document.getElementById('customer-points-display'));