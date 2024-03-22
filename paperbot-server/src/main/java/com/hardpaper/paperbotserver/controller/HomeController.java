package com.hardpaper.paperbotserver.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
	@GetMapping("/")
    public String index() {
        return "index";
    }
	
	@GetMapping("/healthCheck")
    public String healthCheck() {
        return "healthCheck";
    }
}