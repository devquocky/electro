package com.electro.dto.product;

import lombok.Data;

import java.time.Instant;

@Data
public class PropertyResponse {
    private Long id;
    private Instant createdAt;
    private Instant updatedAt;
    private String code;
    private String type;
    private String name;
    private String description;
    private Integer status;
}