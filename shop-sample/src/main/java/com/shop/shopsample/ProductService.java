package com.shop.shopsample;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    Product addProduct(ProductDto productDto) {
        Product product = Product.from(productDto);
        productRepository.save(product);
        return product;
    }

    List<ProductDto> getProducts() {
        return productRepository.findAll().stream()
                .map(ProductDto::to)
                .collect(Collectors.toList());
    }
}
