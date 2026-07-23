using {CV_SALES_ANALYTICS, CV_EMPLOYEE_ANALYTICS} from '../db/schema';

@odata
service AnalyticsService {
    
    @readonly
    entity SalesAnalytics as projection on CV_SALES_ANALYTICS;

    @readonly
     entity EmployeeAnalytics as projection on CV_EMPLOYEE_ANALYTICS;

}
