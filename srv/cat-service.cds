using {sales.analytics as db} from '../db/schema';
using { CV_SALES_ANALYTICS } from '../db/schema';


@odata
service CatalogService {

  entity Regions        as projection on db.Regions;

  entity Employees      as projection on db.Employees;

  entity Customers      as projection on db.Customers;

  entity Products       as projection on db.Products;

  entity Orders         as projection on db.Orders;

  entity OrderItems     as projection on db.OrderItems;

  action   updateCustomerTier() returns String;

  action   refreshAnalytics();

  function getTopCustomers()    returns array of Customers;

  function getTopProducts()     returns array of Products;

  @readonly
  entity SalesAnalytics as projection on CV_SALES_ANALYTICS;
  
}
