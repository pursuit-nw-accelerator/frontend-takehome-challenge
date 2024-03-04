const API_URL = process.env.REACT_APP_API_URL;

const fetchItems = async ({ dataCallabck, error, waiting } = {}) => {
  try {

    if (waiting) waiting(true);

    const res = await fetch(`${API_URL}/`);
    const { data, error } = await res.json();

    if (res.ok) {

      if (dataCallabck) dataCallabck(data);

    } else {

      throw new Error(error);

    }

  } catch (err) {

    if (error) error(err);

  } finally {

    if (waiting) waiting(false);
  }
};


export { fetchItems }