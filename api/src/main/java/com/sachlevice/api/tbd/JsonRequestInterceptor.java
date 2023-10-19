//package com.sachlevice.api.tbd;
//
//import jakarta.servlet.http.HttpServlet;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import org.springframework.web.servlet.HandlerInterceptor;
//
//public class JsonRequestInterceptor implements HandlerInterceptor {
//    @Override
//    public boolean preHandler(HttpServletRequest request, HttpServletResponse response, Object handler){
//        if(request.getContentType().equals("application/json")){
//
//            return true;
//        }
//        else{
//            return false;
//        }
//    }
//}
