import axios from "axios";

const getAllCategory = async () => {
  let res;
  try {
    const response = await axios.get("/category/all");
    res = response.data.data;
  } catch (error) {
    console.log(error);
    res = "False";
  }
  return res;
};

const categoryService = {
  getAllCategory,
};

export default categoryService;
