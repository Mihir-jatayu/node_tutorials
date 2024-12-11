var DataTypes = require("sequelize").DataTypes;
var _account_book = require("./account_book");
var _account_type = require("./account_type");
var _bills = require("./bills");
var _cache = require("./cache");
var _cache_locks = require("./cache_locks");
var _company_settings = require("./company_settings");
var _do_no = require("./do_no");
var _driver_allocated_vehicles = require("./driver_allocated_vehicles");
var _driver_banks = require("./driver_banks");
var _driver_dues = require("./driver_dues");
var _driver_files = require("./driver_files");
var _driver_guarantors = require("./driver_guarantors");
var _driver_relatives = require("./driver_relatives");
var _drivers = require("./drivers");
var _due_types = require("./due_types");
var _failed_jobs = require("./failed_jobs");
var _job_batches = require("./job_batches");
var _jobs = require("./jobs");
var _ledger_types = require("./ledger_types");
var _migrations = require("./migrations");
var _party = require("./party");
var _party_additional_detail = require("./party_additional_detail");
var _party_document = require("./party_document");
var _password_resets = require("./password_resets");
var _personal_access_tokens = require("./personal_access_tokens");
var _places = require("./places");
var _po_no = require("./po_no");
var _position_vehicle = require("./position_vehicle");
var _project_modules = require("./project_modules");
var _roles = require("./roles");
var _routes = require("./routes");
var _salary_voucher = require("./salary_voucher");
var _sessions = require("./sessions");
var _transaction_head = require("./transaction_head");
var _transport_trips = require("./transport_trips");
var _transport_trips_expense = require("./transport_trips_expense");
var _trip_payment_types = require("./trip_payment_types");
var _trip_voucher = require("./trip_voucher");
var _tyre_assigns = require("./tyre_assigns");
var _tyre_brands = require("./tyre_brands");
var _tyre_service_log = require("./tyre_service_log");
var _tyre_service_type = require("./tyre_service_type");
var _tyres = require("./tyres");
var _units = require("./units");
var _user_project_modules = require("./user_project_modules");
var _users = require("./users");
var _vehicle_documents = require("./vehicle_documents");
var _vehicle_dues = require("./vehicle_dues");
var _vehicle_model_codes = require("./vehicle_model_codes");
var _vehicle_repairs = require("./vehicle_repairs");
var _vehicle_types = require("./vehicle_types");
var _vehicles = require("./vehicles");

function initModels(sequelize) {
  var account_book = _account_book(sequelize, DataTypes);
  var account_type = _account_type(sequelize, DataTypes);
  var bills = _bills(sequelize, DataTypes);
  var cache = _cache(sequelize, DataTypes);
  var cache_locks = _cache_locks(sequelize, DataTypes);
  var company_settings = _company_settings(sequelize, DataTypes);
  var do_no = _do_no(sequelize, DataTypes);
  var driver_allocated_vehicles = _driver_allocated_vehicles(sequelize, DataTypes);
  var driver_banks = _driver_banks(sequelize, DataTypes);
  var driver_dues = _driver_dues(sequelize, DataTypes);
  var driver_files = _driver_files(sequelize, DataTypes);
  var driver_guarantors = _driver_guarantors(sequelize, DataTypes);
  var driver_relatives = _driver_relatives(sequelize, DataTypes);
  var drivers = _drivers(sequelize, DataTypes);
  var due_types = _due_types(sequelize, DataTypes);
  var failed_jobs = _failed_jobs(sequelize, DataTypes);
  var job_batches = _job_batches(sequelize, DataTypes);
  var jobs = _jobs(sequelize, DataTypes);
  var ledger_types = _ledger_types(sequelize, DataTypes);
  var migrations = _migrations(sequelize, DataTypes);
  var party = _party(sequelize, DataTypes);
  var party_additional_detail = _party_additional_detail(sequelize, DataTypes);
  var party_document = _party_document(sequelize, DataTypes);
  var password_resets = _password_resets(sequelize, DataTypes);
  var personal_access_tokens = _personal_access_tokens(sequelize, DataTypes);
  var places = _places(sequelize, DataTypes);
  var po_no = _po_no(sequelize, DataTypes);
  var position_vehicle = _position_vehicle(sequelize, DataTypes);
  var project_modules = _project_modules(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var routes = _routes(sequelize, DataTypes);
  var salary_voucher = _salary_voucher(sequelize, DataTypes);
  var sessions = _sessions(sequelize, DataTypes);
  var transaction_head = _transaction_head(sequelize, DataTypes);
  var transport_trips = _transport_trips(sequelize, DataTypes);
  var transport_trips_expense = _transport_trips_expense(sequelize, DataTypes);
  var trip_payment_types = _trip_payment_types(sequelize, DataTypes);
  var trip_voucher = _trip_voucher(sequelize, DataTypes);
  var tyre_assigns = _tyre_assigns(sequelize, DataTypes);
  var tyre_brands = _tyre_brands(sequelize, DataTypes);
  var tyre_service_log = _tyre_service_log(sequelize, DataTypes);
  var tyre_service_type = _tyre_service_type(sequelize, DataTypes);
  var tyres = _tyres(sequelize, DataTypes);
  var units = _units(sequelize, DataTypes);
  var user_project_modules = _user_project_modules(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var vehicle_documents = _vehicle_documents(sequelize, DataTypes);
  var vehicle_dues = _vehicle_dues(sequelize, DataTypes);
  var vehicle_model_codes = _vehicle_model_codes(sequelize, DataTypes);
  var vehicle_repairs = _vehicle_repairs(sequelize, DataTypes);
  var vehicle_types = _vehicle_types(sequelize, DataTypes);
  var vehicles = _vehicles(sequelize, DataTypes);


  return {
    account_book,
    account_type,
    bills,
    cache,
    cache_locks,
    company_settings,
    do_no,
    driver_allocated_vehicles,
    driver_banks,
    driver_dues,
    driver_files,
    driver_guarantors,
    driver_relatives,
    drivers,
    due_types,
    failed_jobs,
    job_batches,
    jobs,
    ledger_types,
    migrations,
    party,
    party_additional_detail,
    party_document,
    password_resets,
    personal_access_tokens,
    places,
    po_no,
    position_vehicle,
    project_modules,
    roles,
    routes,
    salary_voucher,
    sessions,
    transaction_head,
    transport_trips,
    transport_trips_expense,
    trip_payment_types,
    trip_voucher,
    tyre_assigns,
    tyre_brands,
    tyre_service_log,
    tyre_service_type,
    tyres,
    units,
    user_project_modules,
    users,
    vehicle_documents,
    vehicle_dues,
    vehicle_model_codes,
    vehicle_repairs,
    vehicle_types,
    vehicles,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
