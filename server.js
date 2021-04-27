const express = require ('express');
const pg = require ('pg');
const superagent = require('superagent');
const cors = require ('cors');
const methodOverride = require('method-override');

require ('dotenv').config();

const app=express();
const PORT = process.env.PORT||3030;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('./public'));
app.set('view engine', 'ejs');
const client = new pg.Client(process.env.DATABASE_URL);

//routes
app.get('/home',mainPage);
app.get('/productByPrice');
app.set('/myProduct',myProduct);
app.post('/myCard', myCard)

function mainPage(req,res){
    const url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&price_greater_than=0&price_less_than=100`;
    superagent.get(url).set('user-Agent','1.0').then(results=>{
        const data_list = results.body;
        let arr = [];
        arr = data_list.map(item=>{
            return new Data-Object(item);
        })
        res.render('/productByPrice',arr);
    }).catch(err=>{
        res.status(200).send(err);
    })
}

function Product(data){
this.name =data.name;
this.price= data.price;
this.image= data.image;
this.description = data.description;
}



function myProduct(){
    const sql='SELECT * FROM items';
    render ('/myProduct');

}
function myCard(){
    
}

client.connect().then(()=>app.listen(PORT,()=>console.log(`Listening at port: ${PORT}`)));