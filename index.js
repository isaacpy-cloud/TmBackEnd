const express = require('express');
const mongoose = require('mongoose')
const app = express();
const port = 3000; // Port numarasını istediğiniz bir numara olarak değiştirebilirsiniz
const { MongoClient, ServerApiVersion } = require('mongodb');
const TransferIntegration = require('./Schemas/TransferIntegration')



const uri = "mongodb+srv://ahmet:ahmet123123@cluster0.2xbvw.mongodb.net/TMIntegration?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useNewUrlParser:true});

mongoose.connection
.once("open", ()=>console.log("we are connected to the db"))
.on("error", (err)=>{console.warn(err)})



// Temel bir "Merhaba, Dünya!" rotası
app.get('/', (req, res) => {
  res.send('Merhaba, Dünya!');
});

app.get('/transfer-ekle', async (req,res) => {

    const data = {
    transfer_detay: "Bağcılara gidecek transfer listesi",
    tedarikci: "Transfer Market",
    alt_tedarikci: "Transfer Market",
    durum: "Beklemede",
    kalkis: "İstanbul Havalimanı",
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
    rezervasyon_numarasi:"TM-00001"
  };
  



// })

// Belirtilen portta sunucuyu başlat
app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı portta çalışıyor.`);
});