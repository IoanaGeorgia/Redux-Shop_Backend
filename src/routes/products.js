
import express from 'express';
import { Product } from '../models/Product.js';
import { ProductVariant } from '../models/ProductVariant.js';
import { OptionValue } from '../models/OptionValue.js';
import { Option } from '../models/Option.js';

const router = express.Router();

router.get("/gallery", async (req, res) => {
  try {
    const products = await Product.findAll({
      attributes: ['id', 'name', 'topProduct'],
      include: [
        {
          model: ProductVariant,
          attributes: ['id', 'price', 'image', 'stock'],

        },
      ],
      order: [
        ['createdAt', 'DESC'],
        ['id', 'ASC']
      ],
    });

    if (!products || products.length === 0) {
      return res.status(404).json({ message: "No products found in database", data: [] });
    }

    const formattedProducts = products.map((productInstance) => {
      const product = productInstance.get({ plain: true });

      const variants = product.ProductVariants || [];


      return {
        id: product.id,
        name: product.name,
        topProduct: product.topProduct,
        price:variants[0].price,
        image:variants[0].image || "",
        hasCombinations: variants.length > 1 ? 1 : 0,
        isAvailable: variants.some((v) => v.stock > 0),
      };
    });

    return res.status(200).json({
      data: formattedProducts,
      message: "Products successfully fetched",
    });
  } catch (error) {

    console.error("GET /api/products/gallery Error:", error);
    return res.status(500).json({ error: error.message || "Internal Server Error" });
  }
});


router.get("/topProducts", async (req, res) => {
  try {
    const products = await Product.findAll({
        where: {
        topProduct: true, 
      },
      attributes: ['id', 'name', 'topProduct'],
      include: [
        {
          model: ProductVariant,
          attributes: ['id', 'price', 'image', 'stock'],

        },
      ],
    });

    if (!products || products.length === 0) {
      return res.status(404).json({ message: "No products found in database", data: [] });
    }

    const formattedProducts = products.map((productInstance) => {
      const product = productInstance.get({ plain: true });

      const variants = product.ProductVariants || [];


      return {
        id: product.id,
        name: product.name,
        topProduct: product.topProduct,
        price:variants[0].price,
        image:variants[0].image || "",
        hasCombinations: variants.length > 1 ? 1 : 0,
        isAvailable: variants.some((v) => v.stock > 0),
      };
    });

    return res.status(200).json({
      data: formattedProducts,
      message: "Products successfully fetched",
    });
  } catch (error) {

    console.error("GET /api/products/gallery Error:", error);
    return res.status(500).json({ error: error.message || "Internal Server Error" });
  }
});



router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "No product ID provided" });
    }

    const product = await Product.findByPk(id, {
      include: [
        {
          model: ProductVariant,
          include: [
            {
              model: OptionValue,
              attributes: ['id', 'value', 'optionId'],
              through: { attributes: [] },
            },
          ],
        },
        {
          model: Option,
          include: [
            {
              model: OptionValue,
              attributes: ['id', 'value'],
            },
          ],
        },
      ],
    });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const plainProduct = product.get({ plain: true });

    const rawOptions = plainProduct.Options || plainProduct.options || [];
    const rawVariants = plainProduct.ProductVariants || plainProduct.variants || [];

    const formattedOptions = rawOptions.map((opt) => ({
      id: opt.id,
      name: opt.name,
      values: (opt.OptionValues || opt.optionValues || []).map((val) => ({
        id: val.id,
        value: val.value,
      })),
    }));

    const formattedVariants = rawVariants.map((variant) => {
      const optionValues = variant.OptionValues || variant.optionValues || [];

      const combinations = {};
      optionValues.forEach((ov) => {
        const parentOption = rawOptions.find((o) => o.id === ov.optionId);
        if (parentOption) {
          combinations[parentOption.name] = ov.value;
        }
      });

      return {
        id: variant.id,
        sku: variant.sku,
        price: variant.price,
        stock: variant.stock,
        combinations,
      };
    });

    return res.status(200).json({
      data: {
        id: plainProduct.id,
        name: plainProduct.name,
        price: plainProduct.price,
        image:rawVariants[0].image,
        description: plainProduct.description,
        options: formattedOptions,
        variants: formattedVariants,
      },
    });
  } catch (error) {
    console.error("GET /api/products/:id Error:", error);
    return res.status(500).json({ error: error.message || "Internal Server Error" });
  }
});


export default router;