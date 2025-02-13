import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs';

export const responseModifierInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    map((event:any) => {
      if (event instanceof HttpResponse) {
        // Modify the response body before it reaches the component
        const modifiedBody = { 
          ...event.body, 
          customMessage: 'Modified by Functional Interceptor 🚀' 
        };
        return event.clone({ body: modifiedBody });
      }
      return event;
    }))
};
