const router = require("express").Router();
const { Category, Product, Tag } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      attributes: ["id", "category_name"],
      include: [{ model: Product }],
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  try {
    const category = await Category.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Product,
        },
      ],
    });
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category

  try {
    const categoriesData = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(categoriesData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value

  try {
    const category = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value

  try {
    const category = await Category.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
