import axios from "axios";
import "./App.css";

function App() {
  // https://fakestoreapi.com/products/category/jewelery
  // axios -> fetch()
  axios
    .get("https://fakestoreapi.com/products/category/jewelery")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

  // try {
  //
  // } catch (error) {
  //
  // }

  return (
    <div>
      <p>Skilvul Store</p>
      <br />
    </div>
  );
}

export default App;
