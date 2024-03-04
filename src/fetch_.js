

const fetchData = async () => {
  try {
    setLoading(true);
    setErrorMsg("");

    const res = await fetch(`${API_URL}/items`);
    const { data, error } = await res.json();

    if (res.ok) {
      setItems(data);
    } else {
      throw new Error(error);
    }
  } catch (err) {
    setErrorMsg(err.message);
  } finally {
    setLoading(false);
  }
};
