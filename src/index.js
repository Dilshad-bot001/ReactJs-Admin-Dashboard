import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { registerLicense } from '@syncfusion/ej2-base';
import { ContextProvider } from './contexts/ContextProvider';

registerLicense('Mgo+DSMBaFt/QHRqVVhjVFpFaV1AQmFJfFBmRGlad1RxdEUmHVdTRHRdQ19hSn9QckRnUH9dcHM=;Mgo+DSMBPh8sVXJ0S0J+XE9HflRDQmFLYVF2R2BJflRzfF9HYEwxOX1dQl9hSHxRdURgXX5aeXRRQ2c=;ORg4AjUWIQA/Gnt2VVhkQlFadVdJXHxLfEx0RWFab196d11MYVxBJAtUQF1hS39RdEZiWntfdH1VQGJb;ODA5OTcxQDMyMzAyZTM0MmUzME9SblArY2hOU0Z4U21ZaWFRMVBDd25xelhoYS9WWWthdzZJUXFyN21BeWM9;ODA5OTcyQDMyMzAyZTM0MmUzMElQUzlPaHVBYVlxWjZXVFZqL1ljbjl6NzljMzJVNXlIV09WbmZKUXJhNVE9;NRAiBiAaIQQuGjN/V0Z+WE9EaFxKVmJWfFFpR2NbfE5xflZOal1RVBYiSV9jS3xSdEdgWHxacXBcR2JbVg==;ODA5OTc0QDMyMzAyZTM0MmUzMFJrd1ZnUTRkdkd0dmhSSDBWaE1VWWlZQ0lZKzY5RGFqRkZQSSswWnhtZnM9;ODA5OTc1QDMyMzAyZTM0MmUzMEpPL01TMzd2eGtxVlp0MGJpVENnWTVWV0pKR0lWUWNTcTJOV1JMUXhjajg9;Mgo+DSMBMAY9C3t2VVhkQlFadVdJXHxLfEx0RWFab196d11MYVxBJAtUQF1hS39RdEZiWntfdH1XRmhb;ODA5OTc3QDMyMzAyZTM0MmUzMEtPQTYrc2pwWjlDTmRjdVBKU09vWXFhb1VXMDhiZmc0Sk5HNGRvdktJY1E9;ODA5OTc4QDMyMzAyZTM0MmUzMFVwdUlBOUNjbTVpM1AvZDJKdnJRUFlNSjgzQTdMTGNmWGM5R0dpWEM5cDg9;ODA5OTc5QDMyMzAyZTM0MmUzMFJrd1ZnUTRkdkd0dmhSSDBWaE1VWWlZQ0lZKzY5RGFqRkZQSSswWnhtZnM9');


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);