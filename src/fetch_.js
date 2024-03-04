const API_URL = process.env.REACT_APP_API_URL;

const fetchItems = async ({ dataCallabck, error, waiting } = {}) => {
  try {
    // setLoading(true);
    // setErrorMsg("");
    if (waiting) waiting(true);
    const res = await fetch(`${API_URL}/items`);
    const { data, error } = await res.json();

    if (res.ok) {
      if (dataCallabck) dataCallabck(data);
      // setItems(data);
      console.log(data);
    } else {
      throw new Error(error);
    }
  } catch (err) {
    if (error) error(err);
    // setErrorMsg(err.message);
  } finally {

    // setLoading(false);
    if (waiting) waiting(false);
  }
};


export { fetchItems }