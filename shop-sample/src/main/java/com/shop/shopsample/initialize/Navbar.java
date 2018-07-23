package com.shop.shopsample.initialize;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor

@Entity
public class Navbar {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    Long id;

    String key;

    String name;
}
