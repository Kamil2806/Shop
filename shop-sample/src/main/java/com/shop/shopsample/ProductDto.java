package com.shop.shopsample;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
class ProductDto {

    private String name;

    static ProductDto to(Product product) {
        return ProductDto.builder()
                .name(product.getName())
                .build();
    }
}
