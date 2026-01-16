package com.ikell.solutions.config;

import com.ikell.solutions.Service.CustomUserDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.authorization.AuthorizationDecision;
import org.springframework.security.authorization.AuthorizationManager;
import org.springframework.security.web.access.intercept.RequestAuthorizationContext;
import org.springframework.security.core.Authentication;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.ServletException;
import java.io.IOException;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtFilter jwtFilter;
    private final CustomUserDetailsService userDetailsService;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .sessionManagement(session -> 
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            .authorizeHttpRequests(auth -> {
                // Public endpoints
                auth.requestMatchers("/api/auth/**").permitAll();
                
                // Worker endpoints
                auth.requestMatchers("/api/workers/add").hasRole("SUPER_ADMIN");
                
                // Admin endpoints - only accessible by SUPER_ADMIN
                auth.requestMatchers("/admin/**").hasRole("SUPER_ADMIN");
                
                // Project endpoints - accessible by multiple roles
                auth.requestMatchers("/projects/**")
                    .hasAnyRole("SUPER_ADMIN", "PROJECT_MANAGER", "COMPANY_ADMIN");
                
                // Other worker endpoints require authentication
                auth.requestMatchers("/api/workers/**").authenticated();
                // All other requests require authentication
                auth.anyRequest().authenticated();
            })
            // Add logging for authorization events
            .exceptionHandling(exception -> {
                exception.accessDeniedHandler((request, response, accessDeniedException) -> {
                    System.out.println("\n--- Access Denied ---");
                    System.out.println("Request: " + request.getMethod() + " " + request.getRequestURI());
                    System.out.println("Reason: " + accessDeniedException.getMessage());
                    response.sendError(HttpServletResponse.SC_FORBIDDEN, "Access Denied: " + accessDeniedException.getMessage());
                });
            })
            .authenticationProvider(authenticationProvider())
            .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
            
        // Log all requests for debugging
        http.addFilterBefore((request, response, chain) -> {
            HttpServletRequest httpRequest = (HttpServletRequest) request;
            System.out.println("\n--- Incoming Request ---");
            System.out.println("Method: " + httpRequest.getMethod());
            System.out.println("URI: " + httpRequest.getRequestURI());
            System.out.println("Authorization: " + httpRequest.getHeader("Authorization"));
            chain.doFilter(request, response);
        }, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    @Bean
    public static PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

