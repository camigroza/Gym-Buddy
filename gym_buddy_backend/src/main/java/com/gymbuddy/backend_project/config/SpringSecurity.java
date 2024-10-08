package com.gymbuddy.backend_project.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import static org.springframework.http.HttpMethod.POST;

@Configuration
@EnableWebSecurity
public class SpringSecurity {

    // Injecting the custom UserDetailsService
    @Autowired
    private UserDetailsService userDetailsService;

    // Bean to provide a BCryptPasswordEncoder for password hashing
    @Bean
    public static PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    // Security configuration using SecurityFilterChain
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf(AbstractHttpConfigurer::disable)
                // Configuring authorization rules for different paths
                .authorizeHttpRequests((authorize) ->
                        authorize.requestMatchers("/register/**").permitAll()
                                .requestMatchers("/index").permitAll()
                                .requestMatchers("/users").hasRole("ADMIN")
                                .requestMatchers("/nutritionists").permitAll()
                                .requestMatchers("/gyms").permitAll()
                                .requestMatchers("/gyms/add_sali_fitness").permitAll()
                                .requestMatchers("/gyms/{id}").permitAll()
                                .requestMatchers("/workouts").permitAll()
                                .requestMatchers("/display").permitAll()
                                .requestMatchers("/add_workout").permitAll()
                                .requestMatchers("/workout/{id}").permitAll()
                                .requestMatchers("/trainers").permitAll()
                                .requestMatchers("/trainers/add_trainer").permitAll()
                                .requestMatchers("/trainers/{id}").permitAll()
                                .requestMatchers("/home").permitAll()
                                .requestMatchers("/signup").permitAll()
                                .requestMatchers("/home-curiosity").permitAll()
                                .requestMatchers("/my-account").permitAll()
                                .requestMatchers("/questionnaire1").permitAll()
                                .requestMatchers("/questionnaire2").permitAll()
                                .requestMatchers("/login").permitAll()
                );
////                 Configuring form-based login
//                .formLogin(
//                        form -> form
//                                .loginPage("/login")
//                                .loginProcessingUrl("/login")
//                                .defaultSuccessUrl("/users")
//                                .permitAll()
//                )
//                // Configuring logout
//                .logout(
//                        logout -> logout
//                                .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
//                                .permitAll()
//                );
        return http.build();
    }

    // Configuring global authentication using the custom UserDetailsService and password encoder
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .userDetailsService(userDetailsService)
                .passwordEncoder(passwordEncoder());
    }
}
