const create = async (req, res) => {
  try {
    return res.json({
      message: "Checkout successful",
      cart: req.body,
      user: req.user,
    });
  } catch (error) {
    // console.log(error);
    return res.status(500).json({ error: "Server error" });
  }
};

export const checkoutController = {
  create,
};
