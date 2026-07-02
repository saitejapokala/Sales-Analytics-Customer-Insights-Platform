using {CV_SALES_ANALYTICS} from '../db/schema';

@odata
service AnalyticsService {
    
    @readonly
    entity SalesAnalytics as projection on CV_SALES_ANALYTICS;

}
