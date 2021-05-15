const express = require('express')
const app = express()
const cors = require('cors');
const port = 3000

const companyDetails = "Viacom18 Media Pvt. Ltd. is one of India’s fastest growing entertainment networks and a house of iconic brands that offers multi-platform, multi-generational and multicultural brand experiences. A joint venture of Network18, which owns 51%, and ViacomCBS, with a 49% stake, Viacom18 defines entertainment in India by touching the lives of people through its properties on air, online, on ground, in shop and through cinema.";

const cities = [
    {id: 1, name:'Mumbai'},
    {id: 2, name:'Pune'},
    {id: 3, name:'Hydrabad'},
    {id: 4, name:'Banglore'},
    {id: 5, name:'Delhi'},
    {id: 6, name:'Nagpur'},
    {id: 7, name:'Latur'}
];

app.use(cors({
    origin: 'http://localhost:4200' 
}));

app.get('/companydetails', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({companyDetails});
})

app.get('/cities', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json({cities});
})
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})