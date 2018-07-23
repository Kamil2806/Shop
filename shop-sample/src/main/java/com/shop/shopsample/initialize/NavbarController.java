package com.shop.shopsample.initialize;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/api/initialize/")
@RestController
public class NavbarController {

    private final NavbarRepository navbarRepository;

    @Autowired
    public NavbarController(NavbarRepository navbarRepository) {
        this.navbarRepository = navbarRepository;
    }

    @GetMapping(value = "navbar", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Navbar> getNavbarOptions() {
        return navbarRepository.findAll();
    }
}
