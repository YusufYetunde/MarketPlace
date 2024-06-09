"use client";

import React from "react";

import { Separator } from "@/components/ui/separator";
import ProductDetailTopSection from "@/app/components/sections/shop/product-detail/ProductDetailTopSection";
import ProductDetailShowcaseSection from "@/app/components/sections/shop/product-detail/ProductDetailShowcaseSection";
import ProductDetailExtraInfoSection from "@/app/components/sections/shop/product-detail/ProductDetailExtraInfoSection";
import ProductDetailRelatedSection from "@/app/components/sections/shop/product-detail/ProductDetailRelatedSection";

export default function ProductDetailPage({
  params,
}: {
  params: {
    product_id: string;
  };
}) {
  return (
    <div className="mt-24 lg:mt-8">
      <ProductDetailTopSection product_id={params.product_id} />
      <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
        <ProductDetailShowcaseSection productId={params.product_id} />
      </div>
      <div className="my-[40px]">
        <Separator />
      </div>
       <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
        <ProductDetailExtraInfoSection />
      </div>

      <div className="my-[40px]">
        <Separator />
      </div>
      <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
        <ProductDetailRelatedSection />
      </div>
    </div>
  );
}
