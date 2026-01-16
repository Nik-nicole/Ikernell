package com.ikell.solutions.config;

import io.jsonwebtoken.Claims;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.*;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Collections;
import java.util.List;

@Component
public class JwtFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;

    public JwtFilter(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    ) throws ServletException, IOException {
        try {
            System.out.println("\n--- JwtFilter ---");
            System.out.println("Request URI: " + request.getRequestURI());
            System.out.println("Method: " + request.getMethod());
            
            String token = getTokenFromRequest(request);
            if (token != null) {
                System.out.println("JWT Token found in request");
                if (jwtUtil.validateToken(token)) {
                    String email = jwtUtil.getEmailFromToken(token);
                    String role = jwtUtil.getRoleFromToken(token);
                    
                    System.out.println("Token validated for user: " + email);
                    System.out.println("User role from token: " + role);
                    
                    // Ensure role has ROLE_ prefix if needed
                    String authority = role.startsWith("ROLE_") ? role : "ROLE_" + role;
                    System.out.println("Authority being set: " + authority);
                    
                    UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                        email, null, Collections.singletonList(new SimpleGrantedAuthority(authority))
                    );
                    
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                    System.out.println("Authentication set in SecurityContext");
                    System.out.println("Authorities: " + authentication.getAuthorities());
                    
                    // Log the current authentication for debugging
                    Authentication currentAuth = SecurityContextHolder.getContext().getAuthentication();
                    if (currentAuth != null) {
                        System.out.println("Current Authentication: " + currentAuth);
                        System.out.println("Authorities: " + currentAuth.getAuthorities());
                    }
                } else {
                    System.out.println("Invalid JWT Token");
                }
            } else {
                System.out.println("No JWT Token found in request");
            }
        } catch (Exception e) {
            System.err.println("Error in JWT Filter: " + e.getMessage());
            e.printStackTrace();
        }
        filterChain.doFilter(request, response);
    }

    private String getTokenFromRequest(HttpServletRequest request) {
        String header = request.getHeader("Authorization");
        if (header != null && header.startsWith("Bearer ")) {
            return header.substring(7);
        }
        return null;
    }
}
