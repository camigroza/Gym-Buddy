package com.gymbuddy.backend_project.controller;

import com.gymbuddy.backend_project.dto.LoginRequest;
import com.gymbuddy.backend_project.entity.User;
import com.gymbuddy.backend_project.entity.Video;
import com.gymbuddy.backend_project.security.CustomUserDetailsService;
import com.gymbuddy.backend_project.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.ui.Model;
import com.gymbuddy.backend_project.dto.UserDto;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@Controller
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AuthController {

    private UserService userService;
    private CustomUserDetailsService security;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    // Handler method to handle home page request
    @GetMapping("/home")
    public String home(){
        return "home";
    }

    // Handler method to handle user registration form request
    @GetMapping("/signup")
    public String showRegistrationForm(Model model){
        // Create model object to store form data
        UserDto user = new UserDto();
        model.addAttribute("user", user);
        return "signup";
    }

    // Handler method to handle saving user registration data
    @PostMapping("/signup")
    public String saveSignUpData(@RequestBody UserDto userDto) {
        userService.saveSignUpData(userDto);
        return "Datele au fost salvate cu succes";
    }

    // Handler method to show the first questionnaire
    @GetMapping("/questionnaire1")
    public String showQuestionnaire1(Model model) {
        UserDto user = new UserDto();
        model.addAttribute("user", user);
        return "questionnaire1";
    }

    // Handler method to handle saving data from the first questionnaire
    @PostMapping("/questionnaire1")
    public String saveQuestionnaire1Data(@RequestBody UserDto userDto) {
        userService.saveQuestionnaire1Data(userDto);
        return "Datele au fost salvate cu succes"; // This message needs translation or clarification
    }

    // Handler method to show the second questionnaire
    @GetMapping("/questionnaire2")
    public String showQuestionnaire2(Model model) {
        UserDto user = new UserDto();
        model.addAttribute("user", user);
        return "questionnaire2";
    }

    // Handler method to handle saving data from the second questionnaire
    @PostMapping("/questionnaire2")
    public String saveQuestionnaire2Data(@RequestBody UserDto userDto) {
        userService.saveQuestionnaire2Data(userDto);
        return "Datele au fost salvate cu succes"; // This message needs translation or clarification
    }

    // Handler method to show the home curiosity page
    @GetMapping("/home-curiosity")
    public String showHomeCuriosity(Model model) {
        return "home-curiosity";
    }

    // Handler method to handle user registration form submit request
    @PostMapping("/register/save")
    public String registration(@Valid @ModelAttribute("user") UserDto userDto,
                               BindingResult result,
                               Model model){
        User existingUser = userService.findUserByEmail(userDto.getEmail());

        if(existingUser != null && existingUser.getEmail() != null && !existingUser.getEmail().isEmpty()){
            result.rejectValue("email", null,
                    "There is already an account registered with the same email");
        }

        if(result.hasErrors()){
            model.addAttribute("user", userDto);
            return "/register";
        }

        userService.saveUser(userDto);
        return "redirect:/register?success";
    }

    // Handler method to handle list of users
    @GetMapping("/users")
    public String users(Model model){
        List<UserDto> users = userService.findAllUsers();
        model.addAttribute("users", users);
        return "users";
    }

    // Handler method to handle login request
    @GetMapping("/login")
    public String login(){
        return "login";
    }

    // Handler method to go to the user's account page
    @GetMapping("/my-account")
    public String goToMyAccount(){
        return "my-account";
    }

    @Autowired
    private PasswordEncoder passwordEncoder;
    @PostMapping("/login")
    public User loginUser(@RequestBody LoginRequest loginRequest) {
        User user = userService.findUserByEmail(loginRequest.getEmail());
        if (! passwordEncoder.matches(loginRequest.getPassword(), user.getPassword()) || user == null) {
        //if(user == null) {
            throw new NoSuchElementException("User not found");
        }
//        UserDto userDto = convertUserToDto(user);
        return user;
    }

    // Convert User entity to UserDto if needed
    private UserDto convertUserToDto(User user) {
        // Implement conversion logic as needed
        // Example: return new UserDto(user.getEmail(), user.getOtherField());
        return null;
    }}