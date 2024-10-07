var path = require("path")
var express = require("express")
var app = express()
var mongoose = require("mongoose")
var Product = require("./models/Product")
const ProductModel = require("./models/Product")

// mongoose.set('useFindAndModify', false); // bu kod olusabilecek duplicate hatalarini duzeltir.

var url = 'mongodb+srv://sonmez1sinan:jC26YyetFhObB17N@cluster0.xbek3au.mongodb.net';

app.use(express.json());
// collection.insertMany(data);

mongoose.connect(url).then(() => console.log("mongodb was connected")).catch(err => console.log(err));

const workersSchema = mongoose.Schema({
    name: String,
    surname: String,
    age: Number,
    active: Boolean
});

app.post('/post',  async (req, res) => {
    //console.log(JSON.stringify(req.body));
     const {title, summary, tag, content} = req.body;
     const productDoc =  await  Product.create({
         title,
         summary,
         tag,
         content
        });
        res.json(productDoc);
    });
    
        app.get('/test', async (req, res) => 
        {
            await Product.find({title: 'Amadeus '}).then(data => console.log(data));
            res.send('ofefwseggse');
        });
        
        app.get('/toyStory', (req, res) => {
            Product.findById('66a22d95ddb8898e6430c66bn').then(m => res.send(m));
        })
        
        app.get('/update', (req,res) => {
            // Product.updateOne({title: 'Toy story'}, {tag: 'not bad'}).then(u => res.send(u));
            Product.findByIdAndUpdate('66a22d95ddb8898e6430c66b', {tag: 'very good'}, {new: true}).then(data => res.send(data));
        });
        // jwt token
        app.get('/delete', (req, res) => {
            Product.deleteOne({title: 'Toy story'}).then(msg => res.send(msg));
        })
        
        
        workersSchema.methods.NameToId = function(){
            console.log('selam');
            console.log(`from ${this.name}`);
        };
        
        workersSchema.statics.UpgradeTruth = async function(id, name, surname, status){
                await this.findIdAndUpdate('id', {name: `${this.name}`, surname: `${this.surname}`, active: status});
        };

        const truthUpgrade = async function(name,surname, status){
            Models.UpgradeTruth(name, surname, status);
        }

        const Worker = new mongoose.model('Worker', workersSchema); //modeli (burayi) methodslari ekledikten sonra olusturmak gerkiyor yoksa methodlari gormuyor 
        const Models = new mongoose.model('Models', workersSchema);
        
        const Inserting = async function(req, res){
            const {name, surname, age, active} = req.body;
            console.log(req.body);
            try{
                const NewModel = await Models.create({
                    name,
                    surname,
                    age,
                    active
                });
                res.status(201).json(NewModel);
            } catch(error){
                res.status(500).json({error:"veri eklenirken hata olustu"});
            }
        };
        
        app.post('/add', async (req, res) =>{
            await Inserting(req, res);
            truthUpgrade('Adriana', 'Lima', false);
        })

        app.put('/updatee', async (req, res) => {
            truthUpgrade('Adrian')
        })

        const ConsoleWriter = async() =>{
            const find = await Worker.findById('66a0f8cf3b481127d974eece');
            find.NameToId();
        };
        
        app.get('/deneme', async(req, res) => {
            res.send('denemee');
            ConsoleWriter();
        });
        
        
        
        app.listen(3000);
        

























        // update yaparken option kismina `runValidation: true`  ifadesini eklersek schema da tanimladigimiz max, min , maxlenght gibi ifadeleri dikkate alir 
        // this.catagories.push(newCatagorie)
        
        
        //  console.log(db.product.find()); 
        // db.collections.updateOne(find , {$set:{option});
        
        
        // proje login yolu
        
        
        // app.use("/public", express.static(path.join(__dirname, "/login")));
        // app.use("/public", express.static(path.join(__dirname, 'blog/pictures')));
        
        // app.use('/public', express.static(path.join(__dirname, '../homepage/entrPg.html')));
        // app.use('/public', express.static(path.join(__dirname, '../login')));
        // app.use("/public", express.static(path.join(__dirname, "blog/pictures")));
        // app.use("/public", express.static(path.join(__dirname, "blog/images")));
        // app.use("/public", express.static(path.join(__dirname, "blog/applck")));
        
        // app.get("/login", module.login);
        // app.get("/homepage", module.homepage);
        // app.get('/cookies', module.cookies);
    // app.get('/bananacookies', module.bnnck);
    // app.get('/applecookies', module.applck);
    


    
// deneme post save
    
    
    // const workersSchema = new mongoose.Schema({            
    //     name: String,
    //     surname: String,
    //     age: Number,
    //     active: Boolean 
    // });
    
    // app.get('/post', (req, res) =>{
    //     const Worker = mongoose.model('Workers', workersSchema);
    //     new Worker({name: 'ahmet', surname: 'uzun', age: 45, active: true}).save();
    //     new Worker({name: 'murat', surname: 'yilma', age:28, active: false}).save();  
    // });
    
    // app.get('/post', (req, res) => {
    //     res.send('deneme23');
    // });

