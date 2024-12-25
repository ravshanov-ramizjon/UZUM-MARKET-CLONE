import './style.css'
import './media.css'
import axios from "axios";
import { reload } from '../libs/utils.js'
import { Headers } from '../components/Header.js'
import { Baners } from '../components/Baners.js';
import { Beauty } from '../components/Beauty.js';
import { Fragrances } from '../components/Fragrances.js';
import { Furniture } from '../components/Furniture.js';
import { Groceries } from '../components/Groceries.js';



axios.get("http://localhost:3001/products/")
    .then(res => reload(res.data, document.querySelector(".beauty"), Beauty))

axios.get("http://localhost:3001/products/")
    .then(res => reload(res.data, document.querySelector(".fragrances"), Fragrances))

axios.get("http://localhost:3001/products/")
    .then(res => reload(res.data, document.querySelector(".furniture"), Furniture))

axios.get("http://localhost:3001/products/")
    .then(res => reload(res.data, document.querySelector(".groceries"), Groceries))



const home = document.querySelector(".logo")
home.addEventListener('click', () => {
    window.location.href = "./index.html"
})

