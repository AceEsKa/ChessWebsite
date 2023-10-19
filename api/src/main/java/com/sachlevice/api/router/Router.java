package com.sachlevice.api.router;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class Router implements WebMvcConfigurer {
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("home");
        registry.addViewController("/novinky").setViewName("news");
        registry.addViewController("/clenovia").setViewName("members");
        registry.addViewController("/sutaze").setViewName("contact");

        registry.addViewController("/o-nas").setViewName("about");
        registry.addViewController("/Oznamy").setViewName("contact");
        registry.addViewController("/rebircek").setViewName("about");
        registry.addViewController("/foruma").setViewName("contact");
        registry.addViewController("/prihlasit").setViewName("contact");
    }
}
