var express=require('express');
const mongoose = require('mongoose');
var app = express();
var TransferAdding = require('./Schemas/TransferIntegration');
var Dog = require('./DataControl/Dogs');
const connectToDatabase = require('./DBConnect/DBSettings');
const PORT = process.env.BASE_PORT
connectToDatabase();
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());
app.listen(PORT, () => {
    console.log(`Sunucu başlatıldı. Şu anda ${PORT} portu üzerinden işlem yapıyorsunuz.`)
})


app.get("/dogs", async (req, res) => {
    const newDog = new Dog({ ...req.body });
    const insertedDog = await newDog.save();
    return res.status(201).json(insertedDog);
  });


app.get("/transfer-adding", async (req,res) => {
    const istanbulTime = new Date().toLocaleString('tr-TR', {
        timeZone: 'Europe/Istanbul'
      });
    const data = new TransferAdding({
        transfer_detay: "Bağcılara gidecek transfer listesi",
        transfer_giris_tarihi: istanbulTime,
        tarih:"29.09.2023 Çarşamba",
        tedarikci: "Transfer Market",
        alt_tedarikci: "Transfer Market",
        durum: "Beklemede",
        kalkis: "Sabiha Gökçen",
        varis: "İstanbul / Bekiştak Akaretler",
        musteri_adi: "Mustafa Gündoğdu",
        musteri_tel: "0538 972 3406",
        kisi: "Ahmet Admin",
        sofor: "İrem Gür",
        acente_fiyat: "400$",
        alt_tedarikci_fiyat: "270$",
        ek_hizmet: "Yok",
        yolcu_tahsilat: "Alınmadı",
        musteri_notu: "Lütfen büyük bir araç yollayın",
        rezervasyon_numarasi:"TM-00001",
        ucus_bilgisi: "Bilgi yok"
      });
      const insertedData = await data.save();
      return res.status(201).json(insertedData)
})

app.get('/transfer-listing', async (req,res) => {
    try{
        const transfers = await TransferAdding.find();
        res.json(transfers)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

app.post('/transfer-update', async (req,res) => {
    try{
        const recordId = req.body.rid;
        const recordChanged = req.body.rched;
        console.log(recordId)
        const findRecord = await TransferAdding.findOne({rezervasyon_numarasi: recordId});
        const updateRecord = await findRecord.updateOne({durum: recordChanged})
        console.log(`Kayıt güncellenmiştir. Güncel kayıt numaranız ${recordId}`)
    }catch(error){
        console.log(error);
    }
})


