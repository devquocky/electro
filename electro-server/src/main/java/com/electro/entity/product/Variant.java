package com.electro.entity.product;

import com.electro.entity.BaseEntity;
import com.electro.utils.JsonNodeConverter;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.databind.JsonNode;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Accessors(chain = true)
@Entity
@Table(name = "variant")
public class Variant extends BaseEntity {
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", nullable = false)
    @JsonBackReference
    private Product product;

    @Column(name = "sku", nullable = false)
    private String sku;

    @Column(name = "cost", nullable = false)
    private Double cost;

    @Column(name = "price", nullable = false)
    private Double price;

    @Column(name = "properties", columnDefinition = "JSON")
    @Convert(converter = JsonNodeConverter.class)
    private JsonNode properties;

    @Column(name = "images", columnDefinition = "JSON")
    @Convert(converter = JsonNodeConverter.class)
    private JsonNode images;

    @Column(name = "status", nullable = false, columnDefinition = "TINYINT")
    private Integer status;
}