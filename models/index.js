// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// Categories have many Products
Category.hasMany(Product,{
  foreignKey: "category_id"
});
// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey: "category_id"
});

// Products belongToMany Tags (through ProductTag)

Product.hasMany(Tag, {through: ProductTag});
Tag.hasMany(Product,{through: ProductTag});

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
