package com.electro.constant;

import java.util.List;

public interface SearchFields {
    List<String> PROVINCE = List.of(
            "name",
            "code"
    );

    List<String> DISTRICT = List.of(
            "name",
            "code",
            "province.name",
            "province.code"
    );

    List<String> ADDRESS = List.of(
            "line",
            "province.name",
            "province.code",
            "district.name",
            "district.code"
    );

    List<String> USER = List.of(
            "username",
            "fullname",
            "email",
            "phone",
            "address.line",
            "address.province.name",
            "address.province.code",
            "address.district.name",
            "address.district.code"
    );

    List<String> ROLE = List.of(
            "code",
            "name"
    );

    List<String> OFFICE = List.of(
            "name",
            "address.line",
            "address.province.name",
            "address.province.code",
            "address.district.name",
            "address.district.code"
    );

    List<String> DEPARTMENT = List.of(
            "name"
    );

    List<String> JOB_TITLE = List.of(
            "name"
    );

    List<String> JOB_LEVEL = List.of(
            "name"
    );

    List<String> JOB_TYPE = List.of(
            "name"
    );

    List<String> EMPLOYEE = List.of(
            "user.username",
            "user.fullname",
            "user.email",
            "user.phone",
            "user.address.line",
            "user.address.province.name",
            "user.address.province.code",
            "user.address.district.name",
            "user.address.district.code",
            "office.name",
            "office.address.line",
            "office.address.province.name",
            "office.address.province.code",
            "office.address.district.name",
            "office.address.district.code",
            "department.name",
            "jobType.name",
            "jobLevel.name",
            "jobTitle.name"
    );

    List<String> CUSTOMER_GROUP = List.of(
            "code",
            "name",
            "description"
    );

    List<String> CUSTOMER_RESOURCE = List.of(
            "code",
            "name",
            "description"
    );

    List<String> CUSTOMER_STATUS = List.of(
            "code",
            "name",
            "description"
    );

    List<String> CUSTOMER = List.of(
            "user.username",
            "user.fullname",
            "user.email",
            "user.phone",
            "user.address.line",
            "user.address.province.name",
            "user.address.province.code",
            "user.address.district.name",
            "user.address.district.code",
            "customerGroup.code",
            "customerGroup.name",
            "customerGroup.description",
            "customerResource.code",
            "customerResource.name",
            "customerResource.description",
            "customerStatus.code",
            "customerStatus.name",
            "customerStatus.description"
    );

    List<String> PROPERTY = List.of(
            "name",
            "code",
            "description"
    );

    List<String> CATEGORY = List.of(
            "name",
            "slug",
            "description"
    );

    List<String> TAG = List.of(
            "name",
            "slug"
    );

    List<String> GUARANTEE = List.of(
            "name",
            "description"
    );

    List<String> UNIT = List.of(
            "name"
    );

    List<String> SUPPLIER = List.of(
            "displayName",
            "code",
            "contactFullname",
            "contactEmail",
            "contactPhone",
            "companyName",
            "taxCode",
            "email",
            "phone",
            "fax",
            "website",
            "address.line",
            "address.province.name",
            "address.province.code",
            "address.district.name",
            "address.district.code",
            "description"
    );

    List<String> BRAND = List.of(
            "name",
            "code",
            "description"
    );

    List<String> SPECIFICATION = List.of(
            "name",
            "code",
            "description"
    );

    List<String> PRODUCT = List.of(
            "name",
            "code",
            "slug",
            "shortDescription",
            "description",
            "category.name",
            "brand.name",
            "brand.code",
            "supplier.displayName",
            "supplier.code",
            "supplier.contactFullname",
            "supplier.contactEmail",
            "supplier.contactPhone",
            "supplier.companyName",
            "supplier.taxCode",
            "supplier.email",
            "supplier.phone",
            "supplier.fax",
            "supplier.website",
            "supplier.address.line",
            "unit.name",
            "weight",
            "guarantee.name"
    );

    List<String> VARIANT = List.of(
            "product.name",
            "product.code",
            "sku",
            "cost",
            "price"
    );

    List<String> VARIANT_INVENTORY_LIMIT = List.of(
            "minimumLimit",
            "maximumLimit",
            "variant.product.name",
            "variant.product.code",
            "variant.sku",
            "variant.cost",
            "variant.price"
    );

    List<String> COUNT_VARIANT = List.of(
            "actualInventory",
            "inventory",
            "variant.product.name",
            "variant.product.code",
            "variant.sku",
            "variant.cost",
            "variant.price"
    );

    List<String> WAREHOUSE = List.of(
            "code",
            "name",
            "address.line",
            "address.province.name",
            "address.province.code",
            "address.district.name",
            "address.district.code"
    );

    List<String> COUNT = List.of(
            "code",
            "warehouse.code",
            "warehouse.name"
    );

    List<String> DESTINATION = List.of(
            "name",
            "address.line",
            "address.province.name",
            "address.province.code",
            "address.district.name",
            "address.district.code"
    );

    List<String> DOCKET_REASON = List.of(
            "name"
    );
}
