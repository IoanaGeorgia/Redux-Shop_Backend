import { sequelize } from '../src/config/db.js';
import { Product, ProductVariant, Option, OptionValue } from '../src/models/index.js';

async function seedProducts() {
  try {
    await sequelize.sync({ force: true });

    // ==========================================
    // 1. Essential Cotton T-Shirt
    // ==========================================
    const tshirt = await Product.create({
      name: 'Essential Cotton T-Shirt',
      description: 'Crafted from 100% premium heavy cotton, this classic fit t-shirt offers exceptional comfort, breathability, and durability for everyday wear.'
    });
    const tsSizeOpt = await Option.create({ name: 'Size', productId: tshirt.id });
    const tsColorOpt = await Option.create({ name: 'Color', productId: tshirt.id });
    const tsSizeS = await OptionValue.create({ value: 'Small', optionId: tsSizeOpt.id });
    const tsSizeM = await OptionValue.create({ value: 'Medium', optionId: tsSizeOpt.id });
    const tsSizeL = await OptionValue.create({ value: 'Large', optionId: tsSizeOpt.id });
    const tsColorWhite = await OptionValue.create({ value: 'White', optionId: tsColorOpt.id });
    const tsColorBlue = await OptionValue.create({ value: 'Blue', optionId: tsColorOpt.id });

    const tsV1 = await ProductVariant.create({ sku: 'TSHIRT-WHITE-S', price: 19.99, stock: 15, productId: tshirt.id, image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png" });
    const tsV2 = await ProductVariant.create({ sku: 'TSHIRT-WHITE-M', price: 19.99, stock: 25, productId: tshirt.id, image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png" });
    const tsV3 = await ProductVariant.create({ sku: 'TSHIRT-BLUE-M', price: 21.99, stock: 10, productId: tshirt.id, image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png" });
    const tsV4 = await ProductVariant.create({ sku: 'TSHIRT-BLUE-L', price: 21.99, stock: 0, productId: tshirt.id, image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png" });

    await tsV1.addOptionValues([tsColorWhite, tsSizeS]);
    await tsV2.addOptionValues([tsColorWhite, tsSizeM]);
    await tsV3.addOptionValues([tsColorBlue, tsSizeM]);
    await tsV4.addOptionValues([tsColorBlue, tsSizeL]);

    // ==========================================
    // 2. Casual Blouse
    // ==========================================
    const blouse = await Product.create({
      name: 'Casual Blouse',
      description: 'An elegant and lightweight daily wear blouse tailored with soft, breathable fabric suitable for both casual outings and smart-casual environments.'
    });
    const blSizeOpt = await Option.create({ name: 'Size', productId: blouse.id });
    const blColorOpt = await Option.create({ name: 'Color', productId: blouse.id });
    const blSizeS = await OptionValue.create({ value: 'Small', optionId: blSizeOpt.id });
    const blSizeM = await OptionValue.create({ value: 'Medium', optionId: blSizeOpt.id });
    const blColorRed = await OptionValue.create({ value: 'Red', optionId: blColorOpt.id });
    const blColorBlue = await OptionValue.create({ value: 'Blue', optionId: blColorOpt.id });

    const blV1 = await ProductVariant.create({ sku: 'BLOUSE-RED-S', price: 29.99, stock: 20, productId: blouse.id, image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png" });
    const blV2 = await ProductVariant.create({ sku: 'BLOUSE-RED-M', price: 29.99, stock: 12, productId: blouse.id, image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png" });
    const blV3 = await ProductVariant.create({ sku: 'BLOUSE-BLUE-S', price: 39.99, stock: 2, productId: blouse.id, image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png" });
    const blV4 = await ProductVariant.create({ sku: 'BLOUSE-BLUE-M', price: 39.99, stock: 22, productId: blouse.id, image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png" });

    await blV1.addOptionValues([blColorRed, blSizeS]);
    await blV2.addOptionValues([blColorRed, blSizeM]);
    await blV3.addOptionValues([blColorBlue, blSizeS]);
    await blV4.addOptionValues([blColorBlue, blSizeM]);

    // ==========================================
    // 3. Winter Jacket
    // ==========================================
    const redJacket = await Product.create({
      name: 'Winter Jacket',
      description: 'Designed to tackle harsh cold weather, this vibrant winter jacket features advanced thermal insulation and a windproof outer shell.'
    });
    const rjSizeOpt = await Option.create({ name: 'Size', productId: redJacket.id });
    const rjColorOpt = await Option.create({ name: 'Color', productId: redJacket.id });
    const rjSizeM = await OptionValue.create({ value: 'Medium', optionId: rjSizeOpt.id });
    const rjSizeL = await OptionValue.create({ value: 'Large', optionId: rjSizeOpt.id });
    const rjColorBlue = await OptionValue.create({ value: 'Blue', optionId: rjColorOpt.id });

    const rjV1 = await ProductVariant.create({ sku: 'JACKET-BLUE-M', price: 59.99, stock: 8, productId: redJacket.id, image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png" });
    const rjV2 = await ProductVariant.create({ sku: 'JACKET-BLUE-L', price: 59.99, stock: 5, productId: redJacket.id, image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png" });

    await rjV1.addOptionValues([rjColorBlue, rjSizeM]);
    await rjV2.addOptionValues([rjColorBlue, rjSizeL]);

    // ==========================================
    // 4. Men's Classic Jacket
    // ==========================================
    const mensJacket = await Product.create({
      name: "Men's Classic Jacket",
      description: 'A rugged yet refined outer layer built for transition weather, featuring heavy-duty weather-resistant materials.'
    });
    const mjSizeOpt = await Option.create({ name: 'Size', productId: mensJacket.id });
    const mjColorOpt = await Option.create({ name: 'Color', productId: mensJacket.id });
    const mjSizeM = await OptionValue.create({ value: 'Medium', optionId: mjSizeOpt.id });
    const mjSizeL = await OptionValue.create({ value: 'Large', optionId: mjSizeOpt.id });
    const mjColorBrown = await OptionValue.create({ value: 'Brown', optionId: mjColorOpt.id });

    const mjV1 = await ProductVariant.create({ sku: 'M-JACKET-BRN-M', price: 64.99, stock: 14, productId: mensJacket.id, image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png" });
    const mjV2 = await ProductVariant.create({ sku: 'M-JACKET-BRN-L', price: 64.99, stock: 9, productId: mensJacket.id, image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png" });

    await mjV1.addOptionValues([mjColorBrown, mjSizeM]);
    await mjV2.addOptionValues([mjColorBrown, mjSizeL]);

    // ==========================================
    // 5. Slim Fit Casual Shirt
    // ==========================================
    const slimShirt = await Product.create({
      name: 'Slim Fit Casual Shirt',
      description: 'A stylish button-down shirt crafted from breathable cotton blend, ideal for smart-casual wear.'
    });
    const ssSizeOpt = await Option.create({ name: 'Size', productId: slimShirt.id });
    const ssColorOpt = await Option.create({ name: 'Color', productId: slimShirt.id });
    const ssSizeM = await OptionValue.create({ value: 'Medium', optionId: ssSizeOpt.id });
    const ssSizeL = await OptionValue.create({ value: 'Large', optionId: ssSizeOpt.id });
    const ssColorNavy = await OptionValue.create({ value: 'Navy', optionId: ssColorOpt.id });

    const ssV1 = await ProductVariant.create({ sku: 'SLIM-SHIRT-NVY-M', price: 34.99, stock: 18, productId: slimShirt.id, image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png" });
    const ssV2 = await ProductVariant.create({ sku: 'SLIM-SHIRT-NVY-L', price: 34.99, stock: 7, productId: slimShirt.id, image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png" });

    await ssV1.addOptionValues([ssColorNavy, ssSizeM]);
    await ssV2.addOptionValues([ssColorNavy, ssSizeL]);

    // ==========================================
    // 6. Urban Raincoat
    // ==========================================
    const raincoat = await Product.create({
      name: 'Urban Waterproof Raincoat',
      description: 'Lightweight water-resistant windbreaker featuring a hood and adjustable drawstring for rainy weather.'
    });
    const rcSizeOpt = await Option.create({ name: 'Size', productId: raincoat.id });
    const rcColorOpt = await Option.create({ name: 'Color', productId: raincoat.id });
    const rcSizeS = await OptionValue.create({ value: 'Small', optionId: rcSizeOpt.id });
    const rcSizeM = await OptionValue.create({ value: 'Medium', optionId: rcSizeOpt.id });
    const rcColorYellow = await OptionValue.create({ value: 'Yellow', optionId: rcColorOpt.id });

    const rcV1 = await ProductVariant.create({ sku: 'RAINCOAT-YEL-S', price: 49.99, stock: 10, productId: raincoat.id, image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png" });
    const rcV2 = await ProductVariant.create({ sku: 'RAINCOAT-YEL-M', price: 49.99, stock: 15, productId: raincoat.id, image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png" });

    await rcV1.addOptionValues([rcColorYellow, rcSizeS]);
    await rcV2.addOptionValues([rcColorYellow, rcSizeM]);

    // ==========================================
    // 7. Women's Solid Crewneck Tee
    // ==========================================
    const crewneck = await Product.create({
      name: "Women's Solid Short Sleeve Crewneck",
      description: 'Super soft modal cotton fabric with a touch of stretch for ultimate comfortable everyday wear.'
    });
    const cnSizeOpt = await Option.create({ name: 'Size', productId: crewneck.id });
    const cnColorOpt = await Option.create({ name: 'Color', productId: crewneck.id });
    const cnSizeS = await OptionValue.create({ value: 'Small', optionId: cnSizeOpt.id });
    const cnSizeM = await OptionValue.create({ value: 'Medium', optionId: cnSizeOpt.id });
    const cnColorPink = await OptionValue.create({ value: 'Pink', optionId: cnColorOpt.id });
    const cnColorBlack = await OptionValue.create({ value: 'Black', optionId: cnColorOpt.id });

    const cnV1 = await ProductVariant.create({ sku: 'CREW-PNK-S', price: 15.99, stock: 30, productId: crewneck.id, image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png" });
    const cnV2 = await ProductVariant.create({ sku: 'CREW-BLK-M', price: 15.99, stock: 20, productId: crewneck.id, image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png" });

    await cnV1.addOptionValues([cnColorPink, cnSizeS]);
    await cnV2.addOptionValues([cnColorBlack, cnSizeM]);

    // ==========================================
    // 8. Classic Leather Backpack
    // ==========================================
    const backpack = await Product.create({
      name: 'Fjallraven Classic Backpack',
      description: 'Durable daily backpack for school or outdoor adventures, featuring padded straps and laptop compartment.'
    });
    const bpColorOpt = await Option.create({ name: 'Color', productId: backpack.id });
    const bpColorGreen = await OptionValue.create({ value: 'Olive Green', optionId: bpColorOpt.id });
    const bpColorBlack = await OptionValue.create({ value: 'Black', optionId: bpColorOpt.id });

    const bpV1 = await ProductVariant.create({ sku: 'BACKPACK-GRN', price: 109.95, stock: 12, productId: backpack.id, image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" });
    const bpV2 = await ProductVariant.create({ sku: 'BACKPACK-BLK', price: 109.95, stock: 8, productId: backpack.id, image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" });

    await bpV1.addOptionValues([bpColorGreen]);
    await bpV2.addOptionValues([bpColorBlack]);

    // ==========================================
    // 9. Gold Plated Stainless Steel Bracelet
    // ==========================================
    const bracelet = await Product.create({
      name: 'Gold Plated Bracelet',
      description: 'Elegant stainless steel bracelet plated in 18k gold for long-lasting luster and luxury feel.'
    });
    const brMaterialOpt = await Option.create({ name: 'Finish', productId: bracelet.id });
    const brMatGold = await OptionValue.create({ value: 'Yellow Gold', optionId: brMaterialOpt.id });
    const brMatRose = await OptionValue.create({ value: 'Rose Gold', optionId: brMaterialOpt.id });

    const brV1 = await ProductVariant.create({ sku: 'BRACELET-YGOLD', price: 168.00, stock: 5, productId: bracelet.id, image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png" });
    const brV2 = await ProductVariant.create({ sku: 'BRACELET-RGOLD', price: 168.00, stock: 3, productId: bracelet.id, image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png" });

    await brV1.addOptionValues([brMatGold]);
    await brV2.addOptionValues([brMatRose]);

    // ==========================================
    // 10. Silver Petite Earring Set
    // ==========================================
    const earrings = await Product.create({
      name: 'Petite Silver Stud Earrings',
      description: 'Minimalist solid 925 sterling silver stud earrings suitable for everyday wear.'
    });
    const erStyleOpt = await Option.create({ name: 'Style', productId: earrings.id });
    const erStyleCircle = await OptionValue.create({ value: 'Circle', optionId: erStyleOpt.id });

    const erV1 = await ProductVariant.create({ sku: 'EARRINGS-SILVER', price: 45.00, stock: 15, productId: earrings.id, image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png" });

    await erV1.addOptionValues([erStyleCircle]);

    // ==========================================
    // 11. Diamond Accent Solitaire Ring
    // ==========================================
    const ring = await Product.create({
      name: 'Solitaire Engagement Ring',
      description: 'A timeless ring design featuring a brilliant center stone mounted on a smooth band.'
    });
    const ringSizeOpt = await Option.create({ name: 'Ring Size', productId: ring.id });
    const ringSize6 = await OptionValue.create({ value: '6', optionId: ringSizeOpt.id });
    const ringSize7 = await OptionValue.create({ value: '7', optionId: ringSizeOpt.id });

    const ringV1 = await ProductVariant.create({ sku: 'RING-SZ6', price: 299.99, stock: 4, productId: ring.id, image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png" });
    const ringV2 = await ProductVariant.create({ sku: 'RING-SZ7', price: 299.99, stock: 6, productId: ring.id, image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png" });

    await ringV1.addOptionValues([ringSize6]);
    await ringV2.addOptionValues([ringSize7]);

    // ==========================================
    // 12. Denim Vintage Trucker Jacket
    // ==========================================
    const denimJacket = await Product.create({
      name: 'Vintage Denim Trucker Jacket',
      description: 'Classic denim jacket with button closure, chest flap pockets, and durable cotton construction.'
    });
    const djSizeOpt = await Option.create({ name: 'Size', productId: denimJacket.id });
    const djWashOpt = await Option.create({ name: 'Wash', productId: denimJacket.id });
    const djSizeM = await OptionValue.create({ value: 'Medium', optionId: djSizeOpt.id });
    const djWashLight = await OptionValue.create({ value: 'Light Wash', optionId: djWashOpt.id });

    const djV1 = await ProductVariant.create({ sku: 'DENIM-LGT-M', price: 79.99, stock: 11, productId: denimJacket.id, image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png" });

    await djV1.addOptionValues([djWashLight, djSizeM]);

    // ==========================================
    // 13. Athletic Running Shorts
    // ==========================================
    const shorts = await Product.create({
      name: 'Performance Running Shorts',
      description: 'Quick-dry activewear shorts with built-in liner and elastic waistband for ultimate mobility.'
    });
    const shSizeOpt = await Option.create({ name: 'Size', productId: shorts.id });
    const shColorOpt = await Option.create({ name: 'Color', productId: shorts.id });
    const shSizeS = await OptionValue.create({ value: 'Small', optionId: shSizeOpt.id });
    const shSizeM = await OptionValue.create({ value: 'Medium', optionId: shSizeOpt.id });
    const shColorBlack = await OptionValue.create({ value: 'Black', optionId: shColorOpt.id });

    const shV1 = await ProductVariant.create({ sku: 'SHORTS-BLK-S', price: 24.99, stock: 16, productId: shorts.id, image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png" });
    const shV2 = await ProductVariant.create({ sku: 'SHORTS-BLK-M', price: 24.99, stock: 14, productId: shorts.id, image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png" });

    await shV1.addOptionValues([shColorBlack, shSizeS]);
    await shV2.addOptionValues([shColorBlack, shSizeM]);

    // ==========================================
    // 14. Knit Wool Sweater
    // ==========================================
    const sweater = await Product.create({
      name: 'Cozy Wool Blend Knit Sweater',
      description: 'Warm crewneck sweater made with premium soft merino wool blend, great for layering in cold months.'
    });
    const swSizeOpt = await Option.create({ name: 'Size', productId: sweater.id });
    const swColorOpt = await Option.create({ name: 'Color', productId: sweater.id });
    const swSizeM = await OptionValue.create({ value: 'Medium', optionId: swSizeOpt.id });
    const swColorGrey = await OptionValue.create({ value: 'Heather Grey', optionId: swColorOpt.id });

    const swV1 = await ProductVariant.create({ sku: 'SWEATER-GRY-M', price: 49.99, stock: 13, productId: sweater.id, image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png" });

    await swV1.addOptionValues([swColorGrey, swSizeM]);

    // ==========================================
    // 15. Canvas Everyday Tote Bag
    // ==========================================
    const toteBag = await Product.create({
      name: 'Heavy Duty Canvas Tote Bag',
      description: 'Spacious canvas tote bag with reinforced handles, suitable for grocery shopping or work.'
    });
    const tbColorOpt = await Option.create({ name: 'Color', productId: toteBag.id });
    const tbColorNatural = await OptionValue.create({ value: 'Natural White', optionId: tbColorOpt.id });

    const tbV1 = await ProductVariant.create({ sku: 'TOTE-NAT', price: 18.50, stock: 35, productId: toteBag.id, image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" });

    await tbV1.addOptionValues([tbColorNatural]);

    // ==========================================
    // 16. Slim Fit Chino Pants
    // ==========================================
    const chinos = await Product.create({
      name: 'Stretch Cotton Slim Chinos',
      description: 'Versatile stretch chinos designed with modern slim fit and extra comfort around the waist.'
    });
    const chSizeOpt = await Option.create({ name: 'Size', productId: chinos.id });
    const chColorOpt = await Option.create({ name: 'Color', productId: chinos.id });
    const chSize32 = await OptionValue.create({ value: '32x32', optionId: chSizeOpt.id });
    const chColorKhaki = await OptionValue.create({ value: 'Khaki', optionId: chColorOpt.id });

    const chV1 = await ProductVariant.create({ sku: 'CHINO-KHK-32', price: 44.99, stock: 19, productId: chinos.id, image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png" });

    await chV1.addOptionValues([chColorKhaki, chSize32]);

    // ==========================================
    // 17. Waterproof Hiking Boots
    // ==========================================
    const boots = await Product.create({
      name: 'All-Terrain Waterproof Hiking Boots',
      description: 'Rugged outdoor footwear providing high ankle support and deep rubber lug traction.'
    });
    const btSizeOpt = await Option.create({ name: 'Shoe Size', productId: boots.id });
    const btSize10 = await OptionValue.create({ value: '10', optionId: btSizeOpt.id });

    const btV1 = await ProductVariant.create({ sku: 'BOOTS-SZ10', price: 119.99, stock: 6, productId: boots.id, image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png" });

    await btV1.addOptionValues([btSize10]);

    // ==========================================
    // 18. Classic Polo Shirt
    // ==========================================
    const polo = await Product.create({
      name: 'Pique Cotton Polo Shirt',
      description: 'Traditional polo shirt with ribbed collar and 2-button placket for a clean preppy look.'
    });
    const poSizeOpt = await Option.create({ name: 'Size', productId: polo.id });
    const poColorOpt = await Option.create({ name: 'Color', productId: polo.id });
    const poSizeL = await OptionValue.create({ value: 'Large', optionId: poSizeOpt.id });
    const poColorGreen = await OptionValue.create({ value: 'Forest Green', optionId: poColorOpt.id });

    const poV1 = await ProductVariant.create({ sku: 'POLO-GRN-L', price: 27.99, stock: 21, productId: polo.id, image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png" });

    await poV1.addOptionValues([poColorGreen, poSizeL]);

    // ==========================================
    // 19. Lightweight Puffer Vest
    // ==========================================
    const vest = await Product.create({
      name: 'Packable Down Puffer Vest',
      description: 'Insulated sleeveless vest that easily compresses into an included storage pouch.'
    });
    const vstSizeOpt = await Option.create({ name: 'Size', productId: vest.id });
    const vstColorOpt = await Option.create({ name: 'Color', productId: vest.id });
    const vstSizeM = await OptionValue.create({ value: 'Medium', optionId: vstSizeOpt.id });
    const vstColorBlack = await OptionValue.create({ value: 'Black', optionId: vstColorOpt.id });

    const vstV1 = await ProductVariant.create({ sku: 'VEST-BLK-M', price: 54.99, stock: 10, productId: vest.id, image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png" });

    await vstV1.addOptionValues([vstColorBlack, vstSizeM]);

    // ==========================================
    // 20. Polarized Sunglasses
    // ==========================================
    const sunglasses = await Product.create({
      name: 'Retro Polarized Sunglasses',
      description: 'Classic frame design with UV400 protection glare-reducing polarized lenses.'
    });
    const sgFrameOpt = await Option.create({ name: 'Frame Color', productId: sunglasses.id });
    const sgFrameBlack = await OptionValue.create({ value: 'Matte Black', optionId: sgFrameOpt.id });

    const sgV1 = await ProductVariant.create({ sku: 'SUNGLASSES-BLK', price: 22.00, stock: 40, productId: sunglasses.id, image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png" });

    await sgV1.addOptionValues([sgFrameBlack]);

    console.log('Successfully seeded 20 products and all their option combinations!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await sequelize.close();
  }
}

seedProducts();