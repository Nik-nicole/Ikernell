package com.ikell.solutions.Service;

import com.ikell.solutions.Business.UserBusiness;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final UserBusiness userBusiness;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return userBusiness.findByEmail(email)
            .map(user -> User.builder()
                .username(user.getWorker().getEmail())
                .password(user.getPassword())
                .authorities("ROLE_" + user.getRole().name())
                .build()
            )
            .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));
    }
}
