package com.ming.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.converter.Converter;

import java.util.Date;


@Configuration
public class HttpMessageConverter {

    @Bean
    public Converter dateConverter(){
            Converter<String, Date> converter = new Converter<String, Date>() {
            @Override
            public Date convert(String source) {
                try {
                    return new Date(Long.parseLong(source));
                } catch (Exception e) {
                    e.printStackTrace();
                }
                return null;
            }
        };

        return converter;
    }


}