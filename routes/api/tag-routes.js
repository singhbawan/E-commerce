const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data

  try {
    const allTags = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(allTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  console.log("hello");
  try {
    const Tag1 = await Tag.findOne({
      include: [{ model: Product }],
      where: { id: req.params.id },
    });
    res.status(200).json(Tag1);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const tagsData = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(tagsData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value

  try {
    const updateTag = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.status(200).json(updateTag);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value

  try {
    const deleteTag = await Tag.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(deleteTag);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
